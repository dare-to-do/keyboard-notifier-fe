'use client';

import { useParams } from 'next/navigation';

import { useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import GBItemCarousel from '@/app/(detail)/components/GBItemCarousel';
import GBItemInformation from '@/app/(detail)/components/GBItemInformation';
import { getProductsDetailQueryObject } from '@/app/(queries)/productsQueries';

import styles from './GBItemDetail.module.scss';

const cx = classNames.bind(styles);

const GBItemDetail = () => {
  const { id: productId } = useParams();

  const { data } = useSuspenseQuery(getProductsDetailQueryObject(productId as string));

  if (!data) {
    return null;
  }

  return (
    <div className={cx('container')}>
      <GBItemCarousel imageUrlList={data.data.imageUrl} />
      <GBItemInformation
        status={data.data.productStatus}
        categoryType={data.data.productType}
        name={data.data.name}
        price={data.data.price}
        unit={data.data.unit}
        startDate={data.data.startDate}
        endDate={data.data.endDate}
        productUrl={data.data.productUrl}
      />
    </div>
  );
};

export default GBItemDetail;
