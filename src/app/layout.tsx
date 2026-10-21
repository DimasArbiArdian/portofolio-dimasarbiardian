import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Dimas Arbi Ardian | Full-Stack Software Engineer & AI Researcher',
  description:
    'Production portfolio of Dimas Arbi Ardian: Full-Stack Engineer (Next.js 15, NestJS, MERN, Laravel), AI Researcher (SINTA 2 Published, YOLOv8, VGG16), and Technical Instructor (1,000+ Mentees).',
  keywords: [
    'Dimas Arbi Ardian',
    'Full-Stack Developer',
    'Software Engineer Indonesia',
    'Next.js 15',
    'React 19',
    'AI Researcher',
    'YOLOv8',
    'NestJS',
    'MERN Stack',
    'Sukabumi Developer',
    'Nusa Putra University Cum Laude'
  ],
  authors: [{ name: 'Dimas Arbi Ardian', url: 'https://github.com/DimasArbiArdian' }],
  creator: 'Dimas Arbi Ardian',
  openGraph: {
    title: 'Dimas Arbi Ardian | Full-Stack Engineer & AI Researcher',
    description:
      'Explore production web applications, peer-reviewed scientific publications, and interactive technical archives by Dimas Arbi Ardian.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dimas Arbi Ardian Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimas Arbi Ardian | Full-Stack Engineer & AI Researcher',
    description:
      'Full-Stack Software Engineer, Published AI Researcher, and Technical Instructor.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth max-w-full overflow-x-hidden">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen max-w-full overflow-x-hidden bg-white text-black dark:bg-[#070b14] dark:text-white transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
