import {
  ProductCategoryEnumType,
  ProductCategoryTypeEnum,
  ProductStatusEnum,
  ProductStatusEnumType,
  SortByEnum,
  SortByEnumType,
} from '@/app/types/api/product';

export const PRODUCT_STATUS_NAME = {
  [ProductStatusEnum.ALL]: '전체',
  [ProductStatusEnum.NOT_YET]: '진행예정',
  [ProductStatusEnum.IN_PROGRESS]: '진행중',
  [ProductStatusEnum.DONE]: '공제완료',
};

export const PRODUCT_STATUS_OPTIONS: ProductStatusOptionsType[] = [
  {
    type: ProductStatusEnum.ALL,
    label: '전체',
  },
  {
    type: ProductStatusEnum.NOT_YET,
    label: '진행예정',
  },
  {
    type: ProductStatusEnum.IN_PROGRESS,
    label: '진행중',
  },
  {
    type: ProductStatusEnum.DONE,
    label: '공제완료',
  },
];

export type ProductStatusOptionsType = {
  type: ProductStatusEnumType;
  label: string;
};

export const PRODUCT_CATEGORY_NAME = {
  [ProductCategoryTypeEnum.ALL]: '전체',
  [ProductCategoryTypeEnum.KEYBOARD]: '키보드',
  [ProductCategoryTypeEnum.KEYCAP]: '키캡',
  [ProductCategoryTypeEnum.KIT]: '키트',
  [ProductCategoryTypeEnum.STABILIZER]: '스테빌라이저',
  [ProductCategoryTypeEnum.SWITCH]: '스위치',
  [ProductCategoryTypeEnum.PARTS]: '파츠',
  [ProductCategoryTypeEnum.ETC]: '기타',
};

export const PRODUCT_CATEGORY_OPTIONS: ProductCategoryOptionsType[] = [
  {
    type: ProductCategoryTypeEnum.ALL,
    label: '전체',
  },
  {
    type: ProductCategoryTypeEnum.KIT,
    label: '키트',
    icon: '/assets/icons/kit.svg',
  },
  {
    type: ProductCategoryTypeEnum.KEYBOARD,
    label: '키보드',
    icon: '/assets/icons/keyboard.svg',
  },
  {
    type: ProductCategoryTypeEnum.SWITCH,
    label: '스위치',
    icon: '/assets/icons/switch.svg',
  },
  {
    type: ProductCategoryTypeEnum.KEYCAP,
    label: '키캡',
    icon: '/assets/icons/keycap.svg',
  },
  {
    type: ProductCategoryTypeEnum.STABILIZER,
    label: '스테빌라이저',
    icon: '/assets/icons/stabilizer.svg',
  },
  {
    type: ProductCategoryTypeEnum.PARTS,
    label: '파츠',
    icon: '/assets/icons/parts.svg',
  },
  {
    type: ProductCategoryTypeEnum.ETC,
    label: '기타',
  },
];

export type ProductCategoryOptionsType = {
  type: ProductCategoryEnumType;
  label: string;
  icon?: string;
};

export const FILTER_OPTIONS = [
  {
    type: SortByEnum.NEWEST,
    label: '최신순',
  },
  {
    type: SortByEnum.HIGH_PRICE,
    label: '높은 가격순',
  },
  {
    type: SortByEnum.LOW_PRICE,
    label: '낮은 가격순',
  },
  {
    type: SortByEnum.OLDEST,
    label: '오래된 순',
  },
];

export type FilterOptionsType = {
  type: SortByEnumType;
  label: string;
};
