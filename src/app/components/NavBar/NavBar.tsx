'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

const NavBar = () => {
  const router = useRouter();

  const moveToMainPage = () => {
    router.push('/');
  };

  return (
    <nav className={cx('navbar')}>
      <div className={cx('container')}>
        <img
          className={cx('logo')}
          src="/assets/images/sokey-logo.svg"
          alt="logo"
          width="98px"
          height="24px"
          onClick={moveToMainPage}
        />
      </div>
    </nav>
  );
};

export default NavBar;
