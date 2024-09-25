import type { Metadata } from 'next';

import { gmarketSans } from '@/app/(configs)/font/config';
import AppInitializer from '@/app/(initializer)/AppInitializer';

import '@/app/(styles)/_reset.scss';
import '@/app/(styles)/_global.scss';

export const metadata: Metadata = {
  title: 'GiBi',
  description: 'Group Buy Custom Keyboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gmarketSans.className}>
      <body>
        <AppInitializer>{children}</AppInitializer>{' '}
      </body>
    </html>
  );
}
