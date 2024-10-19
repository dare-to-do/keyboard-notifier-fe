import classNames from 'classnames/bind';

import GBitem from '@/app/components/GBitem';

import styles from './GBItemList.module.scss';

const cx = classNames.bind(styles);

const GBItemList = () => {
  return (
    <ul className={cx('list-container')}>
      {Array.from({ length: 20 }).map((_, index) => (
        <GBitem key={index} />
      ))}
    </ul>
  );
};

export default GBItemList;
