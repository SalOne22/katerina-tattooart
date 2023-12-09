import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import Header from './components/header';

import './globals.css';

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--raleway',
});

export const metadata: Metadata = {
  title: 'Katerina TattooArt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body className="bg-background text-foreground">
        <Header />

        {children}
      </body>
    </html>
  );
}
