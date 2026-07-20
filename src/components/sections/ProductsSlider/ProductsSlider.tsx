'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './ProductsSlider.module.css';

const sliderProducts = [
  {
    id: 1,
    name: 'Premium Elaichi Rusk',
    image: '/assets/products/slider/rusk.png',
    tagline: 'Crispy & Crunchy - Good to taste... Good to eat!!'
  },
  {
    id: 2,
    name: 'Macaroni',
    image: '/assets/products/slider/macaroni.png',
    tagline: 'Deliciously Cheesy & Quick - Taste of tradition'
  },
  {
    id: 3,
    name: 'Pasta',
    image: '/assets/products/slider/pasta.png',
    tagline: 'Premium Durum Wheat Spiral Pasta'
  },
  {
    id: 4,
    name: 'Instant Noodles - Tangy Masala',
    image: '/assets/products/slider/noodles-tangy-vertical.png',
    tagline: 'Tangy Masala Feast - Ready in 2 Minutes'
  },
  {
    id: 5,
    name: 'Instant Noodles - Tangy Masala (Horizontal Pack)',
    image: '/assets/products/slider/noodles-tangy-horizontal.png',
    tagline: 'Your favorite Tangy Masala in classic pack'
  },
  {
    id: 6,
    name: 'Instant Noodles - Teekha Tadka',
    image: '/assets/products/slider/noodles-teekha-tadka.png',
    tagline: 'Spicy Tadka Flavor - Extra Kick of Spice'
  }
];

export function ProductsSlider() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle
          subtitle="EXPLORE RANGE"
          title="Our Premium Range of Staples & Snacks"
          description="Nourishing generations with premium flours, crispy rusks, gourmet pastas, and instant noodles crafted from the finest ingredients."
          align="center"
          className={styles.title}
        />

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: styles.activeBullet,
              bulletClass: styles.bullet
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className={styles.swiper}
          >
            {sliderProducts.map((product) => (
              <SwiperSlide key={product.id} className={styles.slide}>
                <div className={styles.productCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.tagline}>{product.tagline}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className={`${styles.swiperButtonPrev} ${styles.navBtn}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className={`${styles.swiperButtonNext} ${styles.navBtn}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
