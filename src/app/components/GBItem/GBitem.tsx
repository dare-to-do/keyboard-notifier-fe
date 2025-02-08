import { useState } from 'react';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import { formatDate } from '@/app/(shared)/utils/date';
import { formatPrice } from '@/app/(shared)/utils/price';
import Notification from '@/app/components/Notification';
import ProductStatusChip from '@/app/components/ProductStatusChip';
import { ProductCategoryEnumType, ProductStatusEnumType } from '@/app/types/api/product';

import styles from './GBitem.module.scss';

const cx = classNames.bind(styles);

type GBItemProps = {
  name: string;
  price: number;
  unit: string;
  startDate: string;
  endDate: string;
  imageUrl: string[];
  status: ProductStatusEnumType;
  categoryType: ProductCategoryEnumType;
  id: number;
};

const GBItem = ({ name, price, unit, startDate, endDate, imageUrl, status, categoryType, id }: GBItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const moveToDetailPage = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <li
      className={cx('list', {
        hover: isHover,
      })}
      role="button"
      style={{
        backgroundImage: `url(${imageUrl[0]})`,
      }}
      onClick={() => moveToDetailPage(id)}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={cx('chip-wrap')}>
        <ProductStatusChip status={status} />
        <ProductCategoryTypeChip categoryType={categoryType} />
      </div>
      <div className={cx('info-wrap')}>
        <h3 className={cx('name')}>{name}</h3>
        <div className={cx('price-wrap')}>
          <span className={cx('price')}>{formatPrice(price)}</span>
          <span className={cx('unit')}>{unit}</span>
        </div>
        <p className={cx('date')}>{`${formatDate(startDate)} ~ ${formatDate(endDate)}`}</p>
      </div>
      {isHover && <Notification />}
    </li>
  );
};

export default GBItem;
