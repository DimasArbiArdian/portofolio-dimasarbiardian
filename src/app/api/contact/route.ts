import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient, isSupabaseConfigured } from '@/lib/supabase-server';
import { contactSchema, sanitizeHtml, checkRateLimit } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const rateCheck = checkRateLimit(`contact-${ip}`, 3, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a minute before sending another message.' },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json();
    const parseResult = contactSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website_url } = parseResult.data;

    // 3. Honeypot check (Silent rejection for bots)
    if (website_url && website_url.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: 'Message received successfully' },
        { status: 200 }
      );
    }

    // 4. Input Sanitization
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedSubject = sanitizeHtml(subject);
    const sanitizedMessage = sanitizeHtml(message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json(
        { error: 'Required fields cannot be empty after sanitization' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    if (!supabase || !isSupabaseConfigured()) {
      // Graceful fallback for local development without DB
      return NextResponse.json({
        success: true,
        message: 'Message dispatched successfully (Local Preview Mode)',
      });
    }

    const { error } = await supabase.from('contact_messages').insert([
      {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        is_read: false,
      },
    ]);

    if (error) {
      console.error('Supabase contact insert error:', error.message);
      return NextResponse.json(
        { error: 'Database error saving your inquiry: ' + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been securely dispatched to Dimas!',
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Contact POST error:', errorMessage);
    return NextResponse.json({ error: 'Server error processing your inquiry' }, { status: 500 });
  }
}
