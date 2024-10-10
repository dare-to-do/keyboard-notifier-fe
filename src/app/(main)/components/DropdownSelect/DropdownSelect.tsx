'use client';

import { useState } from 'react';

import styles from './DropdownSelect.module.scss';

type Items = {
  text: string;
  key: string;
};

type ItemsProps = {
  items: Items[];
};

const DropdownSelect = ({ items }: ItemsProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [clickedItemText, setClickedItemText] = useState(items[0].text);

  // 버튼 클릭 시 드롭다운으로 팝오버 표시
  const handleOnClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  // 드롭다운 메뉴 아이템 클릭 시 텍스트 색상 변경
  const handleOnClickItem = (text: string) => {
    setClickedItemText(text);
    setIsOpenDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.button} ${isOpenDropdown ? styles.is_open_dropdown : ''}`}
        onClick={handleOnClickDropdown}
      >
        <span className={styles.text}>{clickedItemText}</span>
        <span className={styles.icon}>
          <img
            src={isOpenDropdown ? '/assets/icons/accordian_fo.png' : '/assets/icons/accordian_en.png'}
            alt={isOpenDropdown ? 'accordian_fo' : 'accordian_en'}
            width="24px"
            height="24px"
          />
        </span>
      </div>
      <ul className={`${styles.dropdown} ${isOpenDropdown ? styles.show : styles.hide}`}>
        {items.map((item) => (
          <li
            className={`${styles.item} ${item.text === clickedItemText ? styles.is_clicked_item : ''}`}
            onClick={() => handleOnClickItem(item.text)}
            key={item.key}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
