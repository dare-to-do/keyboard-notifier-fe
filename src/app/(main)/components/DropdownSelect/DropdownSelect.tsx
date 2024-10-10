'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './DropdownSelect.module.scss';

const cx = classNames.bind(styles);

type ItemsProps = {
  items: string[];
};

const DropdownSelect = ({ items }: ItemsProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [clickedItemText, setClickedItemText] = useState(items[0]);

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
    <div className={cx('container')}>
      <div className={cx('button', { is_open_dropdown: isOpenDropdown })} onClick={handleOnClickDropdown}>
        <span className={cx('button_text')}>{clickedItemText}</span>
        <img
          src={isOpenDropdown ? '/assets/icons/accordian_fo.png' : '/assets/icons/accordian_en.png'}
          alt={isOpenDropdown ? 'accordian_fo' : 'accordian_en'}
          width="24px"
          height="24px"
        />
      </div>
      <ul className={cx('dropdown', { show: isOpenDropdown, hide: !isOpenDropdown })}>
        {items.map((item, index) => (
          <li
            className={cx('dropdown_item', { dropdown_item_is_clicked: item === clickedItemText })}
            onClick={() => handleOnClickItem(item)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
