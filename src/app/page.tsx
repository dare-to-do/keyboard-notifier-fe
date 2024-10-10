import DropdownSelect from '@/app/(main)/components/DropdownSelect/DropdownSelect';

const items = [
  { text: '메뉴1', value: 'menu1' },
  { text: '가나다라', value: 'menu2' },
  { text: '마바사아자차', value: 'menu3' },
];

export default function Home() {
  return (
    <main>
      <DropdownSelect items={items} />
    </main>
  );
}
