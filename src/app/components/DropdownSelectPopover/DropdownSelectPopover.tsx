import styles from './DropdownSelect.module.scss';

export default function DropdownSelectPopover() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>최신 순</div>
      <div className={styles.item}>오래된 순</div>
      <div className={styles.item}>낮은가격 순</div>
      <div className={styles.item}>높은가격 순</div>
    </div>
  );
}
