import localFont from 'next/font/local';

export const gmarketSans = localFont({
  src: [
    {
      path: './GmarketSansTTFBold.ttf',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFLight.ttf',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFMedium.ttf',
      style: 'normal',
    },
  ],
});
