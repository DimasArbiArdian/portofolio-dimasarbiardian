import { z } from 'zod';

// HTML Sanitization: strip tags and scripts to prevent Stored XSS
export function sanitizeHtml(input: string): string {
  if (!input) return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

// In-Memory Rate Limiter (Max 3 submissions per minute per IP)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

export function checkRateLimit(ip: string, maxRequests = 3, windowMs = 60 * 1000): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  // Clean up expired records periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!existing || existing.resetAt < now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (existing.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  return { allowed: true, remaining: maxRequests - existing.count };
}

// Zod validation schema for Guestbook
export const guestbookSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(60, 'Name must be 60 characters or fewer'),
  role_or_company: z
    .string()
    .max(80, 'Role/Company must be 80 characters or fewer')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(280, 'Message must be 280 characters or fewer'),
  website_url: z.string().optional().or(z.literal('')), // Honeypot field
});

export type GuestbookInput = z.infer<typeof guestbookSchema>;

// Zod validation schema for Contact Form
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or fewer'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(150, 'Email must be 150 characters or fewer'),
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(100, 'Subject must be 100 characters or fewer'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(2000, 'Message must be 2000 characters or fewer'),
  website_url: z.string().optional().or(z.literal('')), // Honeypot field
});

export type ContactInput = z.infer<typeof contactSchema>;
