import Link from 'next/link';

import classNames from 'classnames/bind';

import ProductStatusChip from '@/app/(detail)/components/GBItemStatusChip/ProductStatusChip';
import NavigateToProductPageButton from '@/app/(detail)/components/NavigateToProductPageButton';
import NotificationSubscribeButton from '@/app/(detail)/components/NotificationSubscribeButton';
import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import { formatDate } from '@/app/(shared)/utils/date';
import { formatPrice } from '@/app/(shared)/utils/price';
import { ProductCategoryEnumType, ProductStatusEnumType } from '@/app/types/api/product';

import styles from './GBItemInformation.module.scss';

const cx = classNames.bind(styles);

type GBItemInformationProps = {
  status: ProductStatusEnumType;
  categoryType: ProductCategoryEnumType;
  name: string;
  price: number;
  unit: string;
  startDate: string;
  endDate: string;
  productUrl: string;
};

const GBItemInformation = ({
  status,
  categoryType,
  name,
  price,
  unit,
  startDate,
  endDate,
  productUrl,
}: GBItemInformationProps) => {
  return (
    <section className={cx('container')}>
      <div className={cx('badges')}>
        <ProductStatusChip status={status} />
        <ProductCategoryTypeChip categoryType={categoryType} />
      </div>
      <div className={cx('texts')}>
        <p className={cx('title')}>{name}</p>
        <p className={cx('price')}>
          <span className={cx('value')}>{formatPrice(price)}</span>
          <span className={cx('currency')}>{unit}</span>
        </p>
        <p className={cx('period')}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</p>
      </div>
      <div className={cx('buttons')}>
        <NotificationSubscribeButton />
        <Link href={productUrl} target="_blank">
          <NavigateToProductPageButton />
        </Link>
      </div>
    </section>
  );
};

export default GBItemInformation;
