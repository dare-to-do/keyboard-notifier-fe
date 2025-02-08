import classNames from 'classnames/bind';

import { ProductCategoryOptionsType } from '@/app/(shared)/constants';
import { ProductCategoryTypeEnum } from '@/app/types/api/product';

import styles from './EmptyProduct.module.scss';

const cx = classNames.bind(styles);

type EmptyProductProps = {
  onHandleProductCategoryOptions: (option: ProductCategoryOptionsType) => void;
};

const EmptyProduct = ({ onHandleProductCategoryOptions }: EmptyProductProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('logo-wrap')}>
        <img src="/assets/images/empty-logo.svg" alt="empty-logo" />
      </div>
      <div className={cx('content-wrap')}>
        <p className={cx('empty-text')}>
          해당되는 상품이 없습니다. <br /> 다른 상품들을 탐색해보세요.
        </p>
      </div>
      <button
        className={cx('button')}
        onClick={() => onHandleProductCategoryOptions({ type: ProductCategoryTypeEnum.ALL, label: '전체' })}
      >
        상품 보러가기
      </button>
    </div>
  );
};

export default EmptyProduct;
