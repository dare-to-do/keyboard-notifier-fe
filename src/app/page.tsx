import DropdownSelect from '@/app/components/DropdownSelect/DropdownSelect';

export default function Home() {
  return (
    <main>
      <div>Custom Keyboard GB Notifier 메인 페이지(DEVELOP_SERVER)</div>
      <DropdownSelect text="전체" />
      <DropdownSelect text="최신순" />
    </main>
  );
}
