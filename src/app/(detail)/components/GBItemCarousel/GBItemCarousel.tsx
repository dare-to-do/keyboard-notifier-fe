'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './GBItemCarousel.module.scss';
import 'slick-carousel/slick/slick.css';

const cx = classNames.bind(styles);

type GBItemCarouselProps = {
  imageUrlList: string[];
};

const GBItemCarousel = ({ imageUrlList }: GBItemCarouselProps) => {
  return (
    <div className={cx('slider-container')}>
      <Slider
        className={cx('container')}
        slidesToShow={1}
        centerMode
        centerPadding="0px"
        arrows={false}
        dots={false}
        speed={500}
        autoplay
        autoplaySpeed={3000}
      >
        {imageUrlList.map((url, index) => (
          <img className={cx('image')} src={url} key={index} alt="image" />
        ))}
      </Slider>
    </div>
  );
};

export default GBItemCarousel;
