import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductDetailRes, ProductSimilarListRes } from '@/app/types/api/product';

export const getProductDetailQueryObject = (productId: string) => {
  return {
    queryKey: ['product-detail', productId],
    queryFn: async (): Promise<ProductDetailRes> => await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}`).json(),
  };
};

export const getProductSimilarListQueryObject = (productId: string) => {
  return {
    queryKey: ['product-similar'],
    queryFn: async (): Promise<ProductSimilarListRes> =>
      await ky.get(`${SOKEY_API_URL.PRODUCTS}/${productId}/similar`).json(),
  };
};
