export const SOKEY_DOMAIN = 'https://api.sokey.kr/api';

export const SOKEY_API_URL = {
  // query string
  // - sortBy: newest, oldest, low_price, high_price
  // - productStatus: not_yet, in_progress, done
  // - productType: keyboard, kit, switch, keycap, stabilizer, parts
  PRODUCTS: `${SOKEY_DOMAIN}/products`,
  ALARM: `${SOKEY_DOMAIN}/alarm`,
};
