import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Anmolix — Stop managing dates. Start shipping code.',
  description: 'Anmolix is the autonomous coordination agent that predicts delays and auto-fixes your engineering schedule — before deadlines slip.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("font-sans tracking-tight", inter.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
