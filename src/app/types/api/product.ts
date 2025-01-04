import { ValueOf } from 'type-fest';

export const ProductStatusEnum = {
  ALL: 'ALL',
  NOT_YET: 'NOT_YET',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type ProductStatusEnumType = ValueOf<typeof ProductStatusEnum>;

export const ProductCategoryTypeEnum = {
  ALL: 'ALL',
  KIT: 'KIT',
  KEYBOARD: 'KEYBOARD',
  SWITCH: 'SWITCH',
  KEYCAP: 'KEYCAP',
  STABILIZER: 'STABILIZER',
  PARTS: 'PARTS',
  ETC: 'ETC',
} as const;

export type ProductCategoryEnumType = ValueOf<typeof ProductCategoryTypeEnum>;

export const SortByEnum = {
  NEWEST: 'NEWEST',
  OLDEST: 'OLDEST',
  LOW_PRICE: 'LOW_PRICE',
  HIGH_PRICE: 'HIGH_PRICE',
} as const;

export type SortByEnumType = ValueOf<typeof SortByEnum>;

export type Product = {
  description: string;
  endDate: string;
  imageUrl: string[];
  name: string;
  price: number;
  productStatus: ProductStatusEnumType;
  productType: ProductCategoryEnumType;
  productUrl: string;
  startDate: string;
  unit: string;
  id: number;
};

export type ProductsRes = {
  data: {
    content: Product[];
    page: number;
    size: number;
    totalCount: number;
  };
};

export type ProductReq = {
  sortBy?: SortByEnumType;
  productStatus?: ProductStatusEnumType;
  productType?: ProductCategoryEnumType;
};

export type ProductDetailRes = {
  data: Product;
};

export type ProductSimilarListRes = {
  data: Product[];
};
