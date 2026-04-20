import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cartilha Digital',
  description:
    'Projeto de cartilhas digitais para materia de extenção do curdo de Ciencias de computação',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
