import classNames from 'classnames/bind';

import { useModalStore } from '@/app/store/useModalStore';

import styles from './SuccessNotificationAlertModal.module.scss';

const cx = classNames.bind(styles);

const SuccessNotificationAlertModal = () => {
  const { closeModal } = useModalStore();

  // 마감 알림 신청 모달 닫기
  const onClickCloseSuccessNotificationAlertModal = () => {
    closeModal();
  };

  return (
    <dialog className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
      <div className={cx('modal-header')}>
        <div className={cx('title-box')}>
          <div className={cx('title')}>알림신청 완료</div>
          <div className={cx('close')} onClick={onClickCloseSuccessNotificationAlertModal}>
            <img src="/assets/icons/close.png" alt="close" width="24px" height="24px" />
          </div>
        </div>
      </div>
      <div className={cx('modal-content')}>
        <div className={cx('image')}>
          <img src="/assets/images/keyboard.png" alt="close" width="106px" height="79px" />
        </div>
        <div className={cx('text')}>
          <span>알림 신청이 완료되었습니다.</span>
          <span>업데이트 시 신청하신 (번호/이메일)로 알림을 드릴게요!</span>
        </div>
      </div>
      <div className={cx('modal-footer')}>
        <button className={cx('button')} onClick={onClickCloseSuccessNotificationAlertModal}>
          확인
        </button>
      </div>
    </dialog>
  );
};

export default SuccessNotificationAlertModal;
