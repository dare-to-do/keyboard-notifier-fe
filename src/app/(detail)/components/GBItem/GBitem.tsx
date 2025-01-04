import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import ProductStatusChip from '@/app/(detail)/components/GBItemStatusChip/ProductStatusChip';
import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import { formatDate } from '@/app/(shared)/utils/date';
import { formatPrice } from '@/app/(shared)/utils/price';
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
  const router = useRouter();

  const moveToDetailPage = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <li
      className={cx('list')}
      role="button"
      style={{
        backgroundImage: `url(${imageUrl[0]})`,
      }}
      onClick={() => moveToDetailPage(id)}
    >
      <div className={cx('badge-wrap')}>
        <ProductStatusChip status={status} />
        <ProductCategoryTypeChip categoryType={categoryType} />
      </div>
      <div className={cx('content-wrap')}>
        <div className={cx('title')}>{name}</div>
        <div className={cx('price')}>
          <span className={cx('value')}>{formatPrice(price)}</span>
          <span className={cx('currency')}>{unit}</span>
        </div>
        <div className={cx('date')}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
      </div>
    </li>
  );
};

export default GBItem;
