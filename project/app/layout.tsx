import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SIkka Engineering Company Pvt Limited | Engineering Excellence',
  description: 'Leading engineering, infrastructure and project execution partner serving government and private sectors across India. 20+ years of engineering excellence.',
  keywords: 'engineering, infrastructure, EPC contractor, government projects, construction, India',
  icons: {
    // Next.js automatic 'public' folder ko base path maanta hai
    icon: '/images/favicon.ico', 
    
    // Agar aapne png/apple-touch-icon bhi rakhi hai wahan:
    // apple: '/images/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Sikka Engineering Company Pvt Limited',
    description: 'Leading engineering, infrastructure and project execution partner serving government and private sectors across India.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
