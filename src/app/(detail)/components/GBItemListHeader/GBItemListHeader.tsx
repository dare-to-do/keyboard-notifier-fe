'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import classNames from 'classnames/bind';

import styles from './GBItemListHeader.module.scss';

const cx = classNames.bind(styles);

const GBItemListHeader = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const status = searchParams.get('status');
  const categoryType = searchParams.get('categoryType');

  const onClickMoreButton = () => {
    router.push(`/?status=${status}&categoryType=${categoryType}`);
  };

  return (
    <section className={cx('container')}>
      <div className={cx('title')}>관련상품</div>
      <button className={cx('more-button')} onClick={onClickMoreButton}>
        <span>더보기</span>
        <span>{`>`}</span>
      </button>
    </section>
  );
};

export default GBItemListHeader;
