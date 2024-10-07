import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

const NavBar = () => {
  return (
    <nav className={cx('navbar')}>
      <div className={cx('container')}>
        <span className={cx('logo')}>LOGO</span>
        <span>
          <img src="/assets/icons/hamburger.png" alt="hamburger" width="24px" height="24px" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
