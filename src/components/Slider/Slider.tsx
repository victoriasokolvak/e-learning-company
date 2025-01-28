import { useRef, useState } from 'react';
import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Controller } from 'swiper/modules';
import { firstSwiperSlides, secondSwiperSlides } from '../../constants/slidesData';
import type { Swiper as SwiperClass } from 'swiper';

export const Slider = () => {
  const firstSwiperRef = useRef<SwiperClass | null>(null);
  const secondSwiperRef = useRef<SwiperClass | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    firstSwiperRef.current?.slideTo(index);
    secondSwiperRef.current?.slideTo(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__slider}>
          <Swiper
            modules={[Autoplay, Controller]}
            slidesPerView={1}
            spaceBetween={10}
            direction={'vertical'}
            onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            controller={{ control: secondSwiperRef.current }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            reverseDirection: true,
            }}
            speed={2500}
            initialSlide={2}
            className={styles.swiper}
          >
            {firstSwiperSlides.map((slide, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <img className={styles.slide__image} src={slide.img} alt={slide.alt} />
                  <h3 className={styles.slide__title}>{slide.title}</h3>
                </SwiperSlide>
              ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Pagination, Controller]}
            slidesPerView={1}
            spaceBetween={10}
            direction={'vertical'}
            onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
            controller={{ control: firstSwiperRef.current }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={2500}
            initialSlide={2}
            className={styles.swiper}
          >
            {secondSwiperSlides.map((slide, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  {slide.isEmail ? (
                    <div className={styles.email_slide}>
                      <img src={slide.img} alt={slide.alt} className={styles.email_slide__icon} />
                      <h3 className={styles.email_slide__title}>{slide.title}</h3>
                    </div>
                  ) : (
                    <>
                      <img className={styles.slide__image} src={slide.img} alt={slide.alt} />
                      <h3 className={styles.slide__title}>{slide.title}</h3>
                    </>
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className={styles.pagination}>
          {firstSwiperSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.pagination__button} ${index === activeIndex ? styles.pagination__active : ''}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
