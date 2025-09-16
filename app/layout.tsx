import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Backhauls | Logistics Marketplace',
  description:
    'Backhauls connects carriers with empty capacity to shippers needing urgent and affordable transport.',
  metadataBase: new URL('https://backhauls.example.com'),
  openGraph: {
    title: 'Backhauls Logistics Marketplace',
    description:
      'Eliminate deadhead miles by booking empty capacity from trusted carriers in real time.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen text-slate-900')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
