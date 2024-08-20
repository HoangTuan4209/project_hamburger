import { memo } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Homepage.module.scss'
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.image}>
          <img src='/images/slider1.jpg' alt='Slide 1' />
        </div>
        <div className={styles.image}>
          <img src='/images/slider2.jpg' alt='Slide 2' />
        </div>
        <div className={styles.image}>
          <img src='/images/slider3.jpg' alt='Slide 3' />
        </div>
        <div className={styles.image}>
          <img src='/images/slider4.jpg' alt='Slide 4' />
        </div>
        <div className={styles.image}>
          <img src='/images/slider5.jpg' alt='Slide 5' />
        </div>
        <div className={styles.image}>
          <img src='/images/slider6.jpg' alt='Slide 6' />
        </div>
      </Slider>
      <div className={styles.button}>
        <button>khuyến mãi</button>
        <button>đặt hàng</button>
      </div>
    </div>
  )
}

export default memo(Homepage);