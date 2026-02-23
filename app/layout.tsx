import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { Montserrat, Anton, Bonheur_Royale } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const bonheur = Bonheur_Royale({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur',
});
export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={clsx(montserrat.variable, anton.variable, bonheur.variable)}
    >
      <body className='font-sans'>{children}</body>
    </html>
  );
}
