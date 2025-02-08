import { useRef } from 'react';

import { useParams } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import ky, { HTTPError } from 'ky';

import CheckBox from '@/app/(detail)/components/CheckBox';
import useGroupByNotificationSubscribeModal from '@/app/(detail)/hooks/useGroupByNotificationSubscribeModal';
import { SOKEY_DOMAIN } from '@/app/(shared)/apiUrl';
import { isValidEmail } from '@/app/(shared)/utils/isValidEmail';
import { useModalStore } from '@/app/store/useModalStore';

import styles from './GroupBuyNotificationSubscribeModal.module.scss';

const cx = classNames.bind(styles);

const GroupBuyNotificationSubscribeModal = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const { checkedEmail, setCheckedEmail, onClickEnabledEmailCheckbox, onClickDisabledEmailCheckbox } =
    useGroupByNotificationSubscribeModal(emailInputRef);

  const { openModal, closeModal } = useModalStore();

  const { id: productId } = useParams();

  // 공제 알림 신청 뮤테이션
  const { mutate: notificationRequestMutate } = useMutation<void, Error, { email?: string }>({
    mutationFn: ({ email }) => {
      return ky
        .post(`${SOKEY_DOMAIN}/products/${productId}/alarm`, {
          json: {
            email: email,
          },
        })
        .json();
    },
    onSuccess: () => {
      openModal('success-notification-alert-modal');
    },
    onError: async (error) => {
      if (error instanceof HTTPError) {
        const errorData = await error.response.json();
        alert(errorData.message);
      }
    },
  });

  // 오픈 알림 신청 모달 닫기
  const onClickCloseNotificationSubscribeModal = () => {
    closeModal();
  };

  // 알림 신청 버튼 클릭
  const onClickNotificationRequest = () => {
    const email = emailInputRef.current?.value || undefined;

    // 입력된 값이 있을 경우 각각의 형식이 올바른지 검증
    const isEmailValid = email ? isValidEmail(email) : false;

    // 검증된 전화번호와 이메일 중 하나만 입력되었다면 뮤테이션 실행
    if (email && isEmailValid) {
      notificationRequestMutate({ email });
    } else {
      if (email && !isEmailValid) {
        alert('이메일을 형식에 맞게 입력해주세요.');
      }
    }
  };

  return (
    <dialog className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
      <div className={cx('modal-header')}>
        <div className={cx('title-box')}>
          <div className={cx('title')}>공제알림 신청</div>
          <div className={cx('close')} onClick={onClickCloseNotificationSubscribeModal}>
            <img src="/assets/icons/close.png" alt="close" width="24px" height="24px" />
          </div>
        </div>
        <div className={cx('description')}>알림을 받으실 수단을 선택하고, 작성해주세요</div>
      </div>
      <div className={cx('modal-content')}>
        <div className={cx('content-box')}>
          <div className={cx('label-box')}>
            <CheckBox
              checked={checkedEmail}
              onClick={checkedEmail ? onClickEnabledEmailCheckbox : onClickDisabledEmailCheckbox}
              alt="checkbox-email"
            />
            <label className={cx('label')}>이메일</label>
          </div>
          <input
            className={cx('input')}
            ref={emailInputRef}
            onFocus={() => setCheckedEmail(true)}
            placeholder="sokey@gmail.com"
            type="email"
          />
        </div>
      </div>
      <div className={cx('modal-footer')}>
        <button
          className={cx(checkedEmail ? 'button-enabled' : 'button-disabled')}
          disabled={!checkedEmail}
          onClick={onClickNotificationRequest}
        >
          알림 신청 완료
        </button>
      </div>
    </dialog>
  );
};

export default GroupBuyNotificationSubscribeModal;
