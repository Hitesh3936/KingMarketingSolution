import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { generatePageMetadata } from '@/config/seo.config';
import { Header } from '@/components/layout/Header/Header';
import { MobileHeader } from '@/components/layout/MobileHeader/MobileHeader';
import { Footer } from '@/components/layout/Footer/Footer';
import { ChatWidget } from '@/components/ui/ChatWidget/ChatWidget';
import { BackToTop } from '@/components/ui/BackToTop/BackToTop';
import {
  JsonLdScript,
  generateOrganizationJsonLd,
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
} from '@/utils/seo';

import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

export const metadata: Metadata = generatePageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();
  const localBusinessJsonLd = generateLocalBusinessJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <JsonLdScript data={orgJsonLd} />
        <JsonLdScript data={localBusinessJsonLd} />
        <JsonLdScript data={webSiteJsonLd} />
      </head>
      <body>
        <div id="page" className="site-wrapper">
          <Header />
          <MobileHeader />
          
          <main className="site-main">
            {children}
          </main>

          <Footer />
          <ChatWidget />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
export { poppins };
