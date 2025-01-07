import ky from 'ky';

import { SOKEY_API_URL } from '@/app/(shared)/apiUrl';
import { ProductReq, ProductsRes, ProductStatusEnum } from '@/app/types/api/product';

const getProductsQueryKey = (params?: ProductReq) => [
  'products',
  params?.sortBy,
  params?.productStatus,
  params?.productType,
];

export const getProductsQueryObject = (params?: ProductReq) => {
  return {
    queryKey: getProductsQueryKey(params),
    queryFn: async (): Promise<ProductsRes> =>
      await ky
        .get(SOKEY_API_URL.PRODUCTS, {
          searchParams: new URLSearchParams({
            ...(params?.productStatus === ProductStatusEnum.ALL
              ? {}
              : {
                  productStatus: params?.productStatus,
                }),
            ...(params?.productType === ProductStatusEnum.ALL
              ? {}
              : {
                  productType: params?.productType,
                }),
            sortBy: params?.sortBy || '',
          }),
        })
        .json(),
  };
};
