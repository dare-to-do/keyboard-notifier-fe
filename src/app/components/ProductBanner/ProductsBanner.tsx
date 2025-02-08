import { useRef, useState } from 'react';

import classNames from 'classnames/bind';
import Slider from 'react-slick';

import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import ProductStatusChip from '@/app/components/ProductStatusChip';
import { ProductsRes } from '@/app/types/api/product';

import styles from './ProductsBanner.module.scss';

const cx = classNames.bind(styles);

type ProductsBannerProps = {
  products?: ProductsRes;
};

const ProductsBanner = ({ products }: ProductsBannerProps) => {
  const [autoplay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const productList = products?.data.content;

  const handlePlay = () => {
    setAutoPlay(!autoplay);

    if (!autoplay) {
      sliderRef.current?.slickPlay();
    }
  };

  const handlerCurrentSlide = (index: number) => {
    setCurrentSlide(index + 1);
  };

  if (!productList || productList.length === 0) {
    return null;
  }

  return (
    <div className={cx('slider-container')}>
      <Slider
        className={cx('container')}
        slidesToShow={1}
        centerMode
        centerPadding="0px"
        speed={500}
        autoplay={autoplay}
        autoplaySpeed={3000}
        arrows={false}
        afterChange={handlerCurrentSlide}
        ref={sliderRef}
      >
        {productList.map((product) => (
          <div key={product.id} className={cx('banner')}>
            <div
              style={{
                backgroundImage: `url(${product.imageUrl[0]})`,
              }}
              className={cx('banner-img')}
            >
              <div className={cx('banner-content')}>
                <div className={cx('badge-wrap')}>
                  <ProductStatusChip status={product.productStatus} />
                  <ProductCategoryTypeChip categoryType={product.productType} />
                </div>
                <div className={cx('title')}>{product.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className={cx('contoller')}>
        <button onClick={handlePlay}>
          <img src={`/assets/icons/${autoplay ? 'pause' : 'play'}.png`} alt="play" className={cx('play')} />
        </button>
        <button onClick={previous}>
          <img src="/assets/icons/arrow-left.png" alt="arrow-left" className={cx('arrow-left')} />
        </button>
        <span>{`${currentSlide.toString().padStart(2, '0')}/${productList.length.toString().padStart(2, '0')}`}</span>{' '}
        <button onClick={next}>
          <img src="/assets/icons/arrow-right.png" alt="arrow-right" className={cx('arrow-right')} />
        </button>
      </div>
    </div>
  );
};

export default ProductsBanner;
