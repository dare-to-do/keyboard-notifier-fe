import DropdownSelect from '@/app/components/DropdownSelect/DropdownSelect';

// 드롭다운 메뉴 아이템_1
const popoverItems = [
  {
    text: '최신 순',
    value: 'latest',
    isClicked: true,
  },
  {
    text: '오래된 순',
    value: 'oldest',
    isClicked: false,
  },
  {
    text: '낮은가격 순',
    value: 'lowPrice',
    isClicked: false,
  },
  {
    text: '높은가격 순',
    value: 'highPrice',
    isClicked: false,
  },
];

// 드롭다운 메뉴 아이템_2
const popoverItems2 = [
  {
    text: '전체',
    value: 'all',
  },
  {
    text: '공제 예정',
    value: 'plan',
  },
  {
    text: '공제 진행중',
    value: 'progress',
  },
  {
    text: '공제 종료',
    value: 'end',
  },
];

export default function Home() {
  return (
    <main>
      <DropdownSelect items={popoverItems} />
      <DropdownSelect items={popoverItems2} />
    </main>
  );
}
