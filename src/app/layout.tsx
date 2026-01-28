import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
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
    <html lang="en">
      <body className={cn("font-sans tracking-tight", poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
