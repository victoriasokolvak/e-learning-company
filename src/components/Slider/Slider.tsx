import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import email from '../../../public/img/Icons/email-icon.svg';

type Slide = {
  title: string;
  image: string;
};

interface SliderProps {
  slides: Slide[];
}

export const Slider = ({ slides }: SliderProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
            bulletClass: styles.pagination__bullet,
            bulletActiveClass: styles.pagination__bullet_active,
          }}
          loop={true}
          speed={800}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              {index === 5 ? (
                <div className={styles.email_slide}>
                  <img src={email} alt="Email" className={styles.email_slide__icon} />
                  <h3 className={styles.email_slide__title}>Contact us</h3>
                </div>
              ) : (
                <div className={styles.slide}>
                  <img src={slide.image} alt={slide.title} className={styles.slide__image} />
                  <h3 className={styles.slide__title}>{slide.title}</h3>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.pagination}></div>
    </div>
  );
};