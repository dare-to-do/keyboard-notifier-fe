'use client';
import classNames from 'classnames/bind';

import { ProductCategoryOptionsType } from '@/app/(shared)/constants';
import EmptyProduct from '@/app/components/EmptyProduct';
import GBItem from '@/app/components/GBItem';
import { Product } from '@/app/types/api/product';

import styles from './GBItemList.module.scss';

const cx = classNames.bind(styles);

type GBItemListProps = {
  productList?: Product[];
  onHandleProductCategoryOptions: (option: ProductCategoryOptionsType) => void;
};

const GBItemList = ({ productList, onHandleProductCategoryOptions }: GBItemListProps) => {
  if (!productList || productList.length === 0) {
    return <EmptyProduct onHandleProductCategoryOptions={onHandleProductCategoryOptions} />;
  }

  return (
    <ul className={cx('list-container')}>
      {productList.map((product, index) => (
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
  );
};

export default GBItemList;
