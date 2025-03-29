'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import { useInView } from 'react-intersection-observer';

import ScrollToTop from '@/app/(detail)/components/ScrollToTop';
import { getProductsQueryObject } from '@/app/(queries)/productsQueries';
import {
  FILTER_OPTIONS,
  FilterOptionsType,
  PRODUCT_CATEGORY_OPTIONS,
  PRODUCT_STATUS_OPTIONS,
  ProductCategoryOptionsType,
  ProductStatusOptionsType,
} from '@/app/(shared)/constants';
import CategoryTabs from '@/app/components/CategoryTabs';
import DropdownSelect from '@/app/components/DropdownSelect';
import GBItemCount from '@/app/components/GBItemCount/GBItemCount';
import GBItemList from '@/app/components/GBItemList';
import ProductsBanner from '@/app/components/ProductBanner';
import { Product, ProductCategoryTypeEnum, ProductStatusEnum, SortByEnum } from '@/app/types/api/product';

import styles from './ProductMain.module.scss';

const cx = classNames.bind(styles);

const ProductMain = () => {
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState<Product[]>([]);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const [ref, inView] = useInView();

  const searchParams = useSearchParams();

  const categoryType = searchParams.get('categoryType');
  const status = searchParams.get('status');

  const initialCategoryOption =
    PRODUCT_CATEGORY_OPTIONS.find((option) => option.type === categoryType) || PRODUCT_CATEGORY_OPTIONS[0];

  const initialStatusOption =
    PRODUCT_STATUS_OPTIONS.find((option) => option.type === status) || PRODUCT_STATUS_OPTIONS[0];

  const [productCategoryOption, setProductCategoryOption] = useState(initialCategoryOption);
  const [productStatusOption, setProductStatusOption] = useState(initialStatusOption);
  const [filterOption, setFilterOption] = useState<FilterOptionsType>(FILTER_OPTIONS[0]);

  const { data: defaultData } = useQuery(
    getProductsQueryObject({
      productStatus: productStatusOption?.type,
      productType: productCategoryOption?.type,
      sortBy: filterOption?.type,
      page,
    }),
  );

  const { data: notYetData } = useSuspenseQuery(
    getProductsQueryObject({
      productStatus: ProductStatusEnum.IN_PROGRESS,
      productType: ProductCategoryTypeEnum.ALL,
      sortBy: SortByEnum.NEWEST,
    }),
  );

  const handleProductCategoryOptions = (option: ProductCategoryOptionsType) => {
    setProductCategoryOption(option);
  };

  const handleProductStatusOptions = (option: ProductStatusOptionsType) => {
    setProductStatusOption(option);
  };

  const handleFilterOptions = (option: FilterOptionsType) => {
    setFilterOption(option);
  };

  const handleStatusDropdownOpen = (isOpen: boolean) => {
    setStatusDropdownOpen(isOpen);
    if (isOpen) setFilterDropdownOpen(false);
  };

  const handleFilterDropdownOpen = (isOpen: boolean) => {
    setFilterDropdownOpen(isOpen);
    if (isOpen) setStatusDropdownOpen(false);
  };

  useEffect(() => {
    if (inView && defaultData?.data.content.length) {
      setPage((prev) => prev + 1);
    }
  }, [inView, defaultData?.data.content.length]);

  useEffect(() => {
    if (defaultData?.data.content) {
      setProductList((prev) => [...prev, ...defaultData.data.content]);
    }
  }, [defaultData?.data.content]);

  useEffect(() => {
    setPage(1);
    setProductList(defaultData?.data.content || []);
  }, [productCategoryOption, productStatusOption, filterOption]);

  return (
    <>
      <ProductsBanner products={notYetData} />
      <div className={cx('container')}>
        <CategoryTabs
          selectedOption={productCategoryOption}
          options={PRODUCT_CATEGORY_OPTIONS}
          onClick={handleProductCategoryOptions}
        />
        <div className={cx('product-wrap')}>
          <div className={cx('product-header')}>
            <GBItemCount count={productList?.length} />
            <DropdownSelect
              selectedOption={productStatusOption}
              options={PRODUCT_STATUS_OPTIONS}
              onClick={handleProductStatusOptions}
              isOpen={statusDropdownOpen}
              onDropdownChange={handleStatusDropdownOpen}
            />
            <DropdownSelect
              selectedOption={filterOption}
              options={FILTER_OPTIONS}
              onClick={handleFilterOptions}
              isOpen={filterDropdownOpen}
              onDropdownChange={handleFilterDropdownOpen}
            />
          </div>
          <GBItemList productList={productList} onHandleProductCategoryOptions={handleProductCategoryOptions} />
        </div>
        <div ref={ref} />
        <ScrollToTop />
      </div>
    </>
  );
};

export default ProductMain;
