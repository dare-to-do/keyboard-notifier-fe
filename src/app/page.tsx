import DropdownSelect from '@/app/(main)/components/DropdownSelect/DropdownSelect';

const items = [
  { text: '전체', key: '1' },
  { text: '공제 예정', key: '2' },
  { text: '공제 진행중', key: '3' },
  { text: '공제 종료', key: '4' },
];

const items2 = [
  { text: '최신순', key: '1' },
  { text: '오래된순', key: '2' },
  { text: '낮은 가격순', key: '3' },
  { text: '높은 가격순', key: '4' },
];

export default function Home() {
  return (
    <main>
      <DropdownSelect items={items} />
      <DropdownSelect items={items2} />
    </main>
  );
}
