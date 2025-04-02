'use client';

import { useParams } from 'next/navigation';

import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/useModalStore';
import { ProductStatusEnumType } from '@/app/types/api/product';

import styles from './NotificationSubscribeButton.module.scss';

const cx = classNames.bind(styles);

interface NotificationSubscribeButtonProps {
  status: ProductStatusEnumType;
}

const NotificationSubscribeButton = ({ status }: NotificationSubscribeButtonProps) => {
  const { id: productId } = useParams();
  const { openModal } = useModalStore();

  // 마감 알림 신청 모달 열기
  const onClickOpenNotificationSubscribeModal = () => {
    openModal('group-buy-notification-subscribe-modal', productId as string);
  };

  return (
    <button className={cx('button')} onClick={onClickOpenNotificationSubscribeModal}>
      <span className={cx('text')}>{status === 'NOT_YET' ? '오픈 알림 신청' : '마감 알림 신청'}</span>
      <img src="/assets/icons/bell.png" alt="bell" width="24px" height="24px" />
    </button>
  );
};

export default NotificationSubscribeButton;
