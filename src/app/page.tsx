import { Suspense } from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import { getQueryClient } from '@/app/(configs)/query/config';
import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import ProductMain from '@/app/components/ProductMain/ProductMain';
import { ProductCategoryTypeEnum, ProductStatusEnum, SortByEnum } from '@/app/types/api/product';

import styles from './page.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

export default async function Home() {
  const queryClient = getQueryClient();

  let dehydratedState = {};

  try {
    await queryClient.prefetchQuery(
      getProductsQueryObject({
        productStatus: ProductStatusEnum.ALL,
        productType: ProductCategoryTypeEnum.ALL,
        sortBy: SortByEnum.NEWEST,
      }),
    );

    await queryClient.prefetchQuery(
      getProductsQueryObject({
        productStatus: ProductStatusEnum.IN_PROGRESS,
        productType: ProductCategoryTypeEnum.ALL,
        sortBy: SortByEnum.NEWEST,
      }),
    );

    dehydratedState = dehydrate(queryClient);
    queryClient.clear();
  } catch (error) {
    console.error(error);
  }

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={null}>
        <main className={cx('main')}>
          <ProductMain />
        </main>
      </Suspense>
    </HydrationBoundary>
  );
}
