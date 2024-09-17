import localFont from 'next/font/local';

export const gmarketSans = localFont({
  src: [
    {
      path: './GmarketSansTTFLight.ttf',
      style: 'normal',
    },
    {
      path: './GmarketSansTTFMedium.ttf',
      style: 'normal',
    },

    {
      path: './GmarketSansTTFBold.ttf',
      style: 'normal',
    },
  ],
});
