'use client';

import { useState } from 'react';

import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';

import styles from './DropdownSelect.module.scss';

type Items = {
  text: string;
  value: string;
};

type ItemsProps = {
  items: Items[];
};

export default function DropdownSelect({ items }: ItemsProps) {
  const [isPopover, setIsPopover] = useState(false);
  const [clickedItemText, setClickedItemText] = useState(items[0].text);

  // 버튼 클릭 시 드롭다운으로 팝오버 표시
  const handleOnClickDropdown = () => {
    setIsPopover(!isPopover);
  };

  // 드롭다운 메뉴 아이템 클릭 시 텍스트 색상 변경
  const handleOnClickItem = (text: string) => {
    setClickedItemText(text);
    setIsPopover(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.button} ${isPopover ? styles.is_popover : ''}`} onClick={handleOnClickDropdown}>
        <span className={styles.text}>{clickedItemText}</span>
        <span className={styles.icon}>{isPopover ? <FaCaretUp /> : <FaCaretDown />}</span>
      </div>
      {isPopover && (
        <div className={styles.popover}>
          {items.map((item) => (
            <div
              className={`${styles.item} ${item.text === clickedItemText ? styles.is_clicked : ''}`}
              onClick={() => handleOnClickItem(item.text)}
              key={item.value}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
