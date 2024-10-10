import DropdownSelect from '@/app/(main)/components/DropdownSelect/DropdownSelect';

const items = ['전체', '공제 예정', '공제 진행중', '공제 종료'];
const items2 = ['최신순', '오래된순', '낮은 가격순', '높은 가격순'];

export default function Home() {
  return (
    <main>
      <DropdownSelect items={items} />
      <DropdownSelect items={items2} />
    </main>
  );
}
