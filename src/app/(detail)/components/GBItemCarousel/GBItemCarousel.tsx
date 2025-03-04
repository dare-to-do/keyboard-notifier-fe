'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './GBItemCarousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

type GBItemCarouselProps = {
  imageUrlList: string[];
};

const GBItemCarousel = ({ imageUrlList }: GBItemCarouselProps) => {
  const [showArrows, setShowArrows] = useState(false);

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className={cx('arrow', 'prev')} onClick={onClick} style={{ display: showArrows ? 'block' : 'none' }}>
        <img src="/assets/icons/left-arrow.png" alt="left-arrow" width="32px" height="32px" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className={cx('arrow', 'next')} onClick={onClick} style={{ display: showArrows ? 'block' : 'none' }}>
        <img src="/assets/icons/right-arrow.png" alt="right-arrow" width="32px" height="32px" />
      </button>
    );
  };

  return (
    <div
      className={cx('slider-container')}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {imageUrlList.length === 1 ? (
        <div className={cx('single-image-wrapper')}>
          <img className={cx('image')} src={imageUrlList[0]} alt="image" />
        </div>
      ) : (
        <Slider
          className={cx('slider')}
          slidesToShow={1}
          centerMode
          centerPadding="0px"
          arrows={showArrows}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          dots={true}
          appendDots={(dots) => (
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ul> {dots} </ul>
            </div>
          )}
          speed={500}
          autoplay
          autoplaySpeed={3000}
        >
          {imageUrlList.map((url, index) => (
            <div className={cx('image-wrapper')} key={index}>
              <img className={cx('image')} src={url} alt="image" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GBItemCarousel;
