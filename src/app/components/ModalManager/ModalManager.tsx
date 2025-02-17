import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames/bind';

import GroupBuyNotificationSubscribeModal from '@/app/(detail)/modals/GroupBuyNotificationSubscribeModal';
import SuccessNotificationAlertModal from '@/app/(detail)/modals/SuccessNotificationAlertModal';
import { useModalStore } from '@/app/store/useModalStore';

import styles from './ModalManager.module.scss';

const cx = classNames.bind(styles);

const ModalManager = () => {
  const { isOpen, modalType, closeModal, productId } = useModalStore();

  const renderModal = () => {
    switch (modalType) {
      case 'group-buy-notification-subscribe-modal':
        return <GroupBuyNotificationSubscribeModal productId={productId} />;
      case 'success-notification-alert-modal':
        return <SuccessNotificationAlertModal />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={cx('modal-backdrop')} onClick={closeModal} aria-hidden="true">
            {renderModal()}
          </div>,
          document.body,
        )}
    </React.Fragment>
  );
};

export default ModalManager;
