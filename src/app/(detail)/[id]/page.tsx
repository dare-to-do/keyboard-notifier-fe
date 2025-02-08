import classNames from 'classnames/bind';

import Divider from '@/app/(detail)/components/Divider';
import ProductDetailContainer from '@/app/(detail)/containers/ProductDetailContainer';
import ProductSimilarListContainer from '@/app/(detail)/containers/ProductSimilarListContainer';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className={cx('main')}>
      <ProductDetailContainer productId={params.id} />
      <Divider />
      <ProductSimilarListContainer productId={params.id} />
    </main>
  );
}
