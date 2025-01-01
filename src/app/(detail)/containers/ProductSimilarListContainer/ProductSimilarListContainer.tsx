import { Suspense } from 'react';

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/app/(configs)/query/config';
import GBItemGallery from '@/app/(detail)/components/GBItemGallery';
import { getProductSimilarListQueryObject } from '@/app/(queries)/productQueries';

type ProductSimilarListContainerProps = {
  productId: string;
};

const ProductSimilarListContainer = async ({ productId }: ProductSimilarListContainerProps) => {
  const queryClient = getQueryClient();

  try {
    await queryClient.prefetchQuery(getProductSimilarListQueryObject(productId));
  } catch (error) {
    console.log(error);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={null}>
        <GBItemGallery />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ProductSimilarListContainer;
