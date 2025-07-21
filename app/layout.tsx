import Layout from '@/components/Layout/Layout';
import StoreProvider from './StoreProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SiteOne interview app',
  description: 'Simple interview app for SiteOne',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
