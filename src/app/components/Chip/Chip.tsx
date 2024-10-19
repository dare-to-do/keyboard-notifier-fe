import classNames from 'classnames/bind';

import styles from './Chip.module.scss';

const cx = classNames.bind(styles);

const Chip = () => {
  return <span className={cx('chip')}>진행예정</span>;
};

export default Chip;
