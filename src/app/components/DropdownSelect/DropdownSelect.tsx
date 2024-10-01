'use client';

import { useState } from 'react';

import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';

import DropdownSelectPopover from '@/app/components/DropdownSelectPopover/DropdownSelectPopover';

import styles from './DropdownSelect.module.scss';

export default function DropdownSelect({ text }: Readonly<{ text: string }>) {
  const [isClicked, setIsClicked] = useState(false);

  // 버튼 클릭 시 드롭다운 메뉴 표시
  const handleOnClickDropdown = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`${styles.container} ${isClicked ? styles.clicked : ''}`} onClick={handleOnClickDropdown}>
      <div className={styles.button}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{isClicked ? <FaCaretUp /> : <FaCaretDown />}</span>
      </div>
      <div className={styles.popover}>
        <DropdownSelectPopover />
      </div>
    </div>
  );
}
