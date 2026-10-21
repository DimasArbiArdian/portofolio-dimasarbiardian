import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient, isSupabaseConfigured } from '@/lib/supabase-server';

export async function GET(req: NextRequest) {
  const provider = (req.nextUrl.searchParams.get('provider') || 'github').toLowerCase();
  const callbackUrl = req.nextUrl.searchParams.get('callbackUrl') || '/';

  // 1. If Supabase is configured with real credentials, trigger genuine Supabase OAuth
  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseServerClient();
      if (supabase) {
        const origin = req.nextUrl.origin;
        const redirectTarget = new URL(callbackUrl, origin).toString();

        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: provider === 'google' ? 'google' : 'github',
          options: {
            redirectTo: redirectTarget,
          },
        });

        if (!error && data?.url) {
          return NextResponse.redirect(data.url);
        }
      }
    } catch (err) {
      console.warn('OAuth redirect fallback:', err);
    }
  }

  // 2. Direct Fallback Redirection to Official Provider Gateways
  if (provider === 'google') {
    return NextResponse.redirect('https://accounts.google.com/');
  }

  // Default GitHub Gateway
  return NextResponse.redirect('https://github.com/login');
}
