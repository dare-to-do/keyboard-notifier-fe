import { MouseEventHandler } from 'react';

import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/useModalStore';

import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

type NotificationProps = {
  productId: string;
};

const Notification = ({ productId }: NotificationProps) => {
  const { openModal } = useModalStore();

  const subscribeNotification: MouseEventHandler = (e) => {
    e.stopPropagation();
    openModal('group-buy-notification-subscribe-modal', productId);
  };

  return (
    <div className={cx('container')} onClick={subscribeNotification}>
      <div className={cx('box')}>
        <span className={cx('text')}>오픈 알림 신청</span>
        <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
      </div>
    </div>
  );
};

export default Notification;
