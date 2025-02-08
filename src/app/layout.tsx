import type { Metadata } from 'next';

import {
  gmarketSansBold,
  gmarketSansMedium,
  pretendardBold,
  pretendardMedium,
  pretendardRegular,
  pretendardSemiBold,
} from '@/app/(configs)/font/config';
import AppInitializer from '@/app/(initializer)/AppInitializer';
import Footer from '@/app/components/Footer';
import NavBar from '@/app/components/NavBar';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'Sokey',
  description:
    '다양한 키보드 공제 정보와 일정 구독까지! Sokey는 여러 벤더사에 흩어져있는 공제 정보를 한눈에 볼 수 있도록 정리해드리고, 원하시는 제품의 공제 일정을 놓치지 않도록 공제 일정 알림을 제공해 드립니다.',
  openGraph: {
    title: '세상의 모든 키보드 공제',
    description:
      '다양한 키보드 공제 정보와 일정 구독까지! Sokey는 여러 벤더사에 흩어져있는 공제 정보를 한눈에 볼 수 있도록 정리해드리고, 원하시는 제품의 공제 일정을 놓치지 않도록 공제 일정 알림을 제공해 드립니다.',
    images: [
      {
        url: '/assets/images/thumbnail.png',
        width: 1600,
        height: 800,
        alt: 'Sokey',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gmarketSansMedium.className} ${gmarketSansBold.variable} ${pretendardRegular.variable} ${pretendardMedium.variable} ${pretendardBold.variable} ${pretendardSemiBold.variable}`}
    >
      <body>
        <AppInitializer>
          <NavBar />
          {children}
          <Footer />
        </AppInitializer>
      </body>
    </html>
  );
}
