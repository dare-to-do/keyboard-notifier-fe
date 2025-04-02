import { MouseEventHandler } from 'react';

import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/useModalStore';
import { ProductStatusEnumType } from '@/app/types/api/product';

import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

type NotificationProps = {
  productId: string;
  status: ProductStatusEnumType;
};

const Notification = ({ productId, status }: NotificationProps) => {
  const { openModal } = useModalStore();

  const subscribeNotification: MouseEventHandler = (e) => {
    e.stopPropagation();
    openModal('group-buy-notification-subscribe-modal', productId);
  };

  return (
    <div className={cx('container')} onClick={subscribeNotification}>
      <div className={cx('box')}>
        <span className={cx('text')}>{status === 'NOT_YET' ? '오픈 알림 신청' : '마감 알림 신청'}</span>
        <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
      </div>
    </div>
  );
};

export default Notification;
