import classNames from 'classnames/bind';

import Chip from '@/app/components/Chip';

import styles from './GBItem.module.scss';

const cx = classNames.bind(styles);

const GBItem = () => {
  return (
    <li className={cx('list')} role="button">
      <div className={cx('chip-wrap')}>
        <Chip />
      </div>
      <div>
        <h3 className={cx('title')}>[GB] GMK Rubrehose Artisanchoke Idkw...</h3>
        <p className={cx('price')}>68,000 원</p>
        <p className={cx('date')}>2021.01 - 2024.07</p>
      </div>
    </li>
  );
};

export default GBItem;
