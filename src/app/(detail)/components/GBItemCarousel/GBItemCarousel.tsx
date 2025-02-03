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
    <section className={cx('container')}>
      <Slider slidesToShow={1} centerMode centerPadding="0px" arrows={false}>
        {imageUrlList.map((url, index) => (
          <img className={cx('image')} src={url} key={index} alt="image" width="584px" height="520px" />
        ))}
      </Slider>
    </section>
  );
};

export default GBItemCarousel;
