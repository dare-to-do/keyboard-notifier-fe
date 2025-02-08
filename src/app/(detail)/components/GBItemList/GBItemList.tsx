'use client';

import { Suspense } from 'react';

import { useParams } from 'next/navigation';

import { useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import GBItem from '@/app/(detail)/components/GBItem';
import { getProductSimilarListQueryObject } from '@/app/(queries)/productsQueries';

import HydrationBoundary from '../HydrationBoundary';

import styles from './GBItemList.module.scss';

const cx = classNames.bind(styles);

const GBItemList = () => {
  const { id: productId } = useParams();

  const { data } = useSuspenseQuery(getProductSimilarListQueryObject(productId as string));

  if (!data) {
    return null;
  }

  return (
    <HydrationBoundary>
      <Suspense fallback={null}>
        <ul className={cx('list-container')}>
          {data.data.map((product, index) => (
            <GBItem
              key={index}
              name={product.name}
              price={product.price}
              unit={product.unit}
              startDate={product.startDate}
              endDate={product.endDate}
              imageUrl={product.imageUrl}
              status={product.productStatus}
              categoryType={product.productType}
              id={product.id}
            />
          ))}
        </ul>
      </Suspense>
    </HydrationBoundary>
  );
};

export default GBItemList;
