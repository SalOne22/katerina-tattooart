import type { Metadata } from 'next';

import Header from './components/header';

import './globals.css';

export const metadata: Metadata = {
  title: 'Katerina TattooArt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Header />

        {children}
      </body>
    </html>
  );
}
