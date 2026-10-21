import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient, isSupabaseConfigured } from '@/lib/supabase-server';
import { guestbookSchema, sanitizeHtml, checkRateLimit } from '@/lib/validations';
import { INITIAL_GUESTBOOK_ENTRIES } from '@/data/portfolio-data';

export async function GET() {
  try {
    const supabase = getSupabaseServerClient();

    if (!supabase || !isSupabaseConfigured()) {
      // Graceful fallback when Supabase is not configured yet
      return NextResponse.json({
        data: INITIAL_GUESTBOOK_ENTRIES,
        count: INITIAL_GUESTBOOK_ENTRIES.length,
        isFallback: true,
      });
    }

    const { data, error, count } = await supabase
      .from('guestbook_entries')
      .select('*', { count: 'exact' })
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.warn('Supabase query error, using fallback seed entries:', error.message);
      return NextResponse.json({
        data: INITIAL_GUESTBOOK_ENTRIES,
        count: INITIAL_GUESTBOOK_ENTRIES.length,
        isFallback: true,
      });
    }

    return NextResponse.json({
      data: data && data.length > 0 ? data : INITIAL_GUESTBOOK_ENTRIES,
      count: count ?? (data?.length || INITIAL_GUESTBOOK_ENTRIES.length),
      isFallback: false,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Guestbook GET exception:', errorMessage);
    return NextResponse.json({
      data: INITIAL_GUESTBOOK_ENTRIES,
      count: INITIAL_GUESTBOOK_ENTRIES.length,
      isFallback: true,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const rateCheck = checkRateLimit(`guestbook-${ip}`, 3, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a minute before posting again.' },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json();
    const parseResult = guestbookSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid submission data', issues: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, role_or_company, message, website_url } = parseResult.data;

    // 3. Honeypot check (Silent rejection for spam bots)
    if (website_url && website_url.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    // 4. Input Sanitization against XSS
    const sanitizedName = sanitizeHtml(name);
    const sanitizedRole = role_or_company ? sanitizeHtml(role_or_company) : null;
    const sanitizedMessage = sanitizeHtml(message);

    if (!sanitizedName || !sanitizedMessage) {
      return NextResponse.json(
        { error: 'Name and message cannot be empty after sanitization' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    if (!supabase || !isSupabaseConfigured()) {
      // Simulated response in fallback mode for seamless local preview
      const simulatedEntry = {
        id: `simulated-${Date.now()}`,
        name: sanitizedName,
        role_or_company: sanitizedRole || undefined,
        message: sanitizedMessage,
        is_approved: true,
        created_at: new Date().toISOString(),
      };
      return NextResponse.json({
        success: true,
        data: simulatedEntry,
        message: 'Guestbook entry recorded (Preview Mode)',
      });
    }

    const { data, error } = await supabase
      .from('guestbook_entries')
      .insert([
        {
          name: sanitizedName,
          role_or_company: sanitizedRole,
          message: sanitizedMessage,
          is_approved: true,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase guestbook insert error:', error.message);
      return NextResponse.json(
        { error: 'Database error saving signature: ' + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Signature submitted successfully',
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('Guestbook POST error:', errorMessage);
    return NextResponse.json({ error: 'Server error processing signature' }, { status: 500 });
  }
}
