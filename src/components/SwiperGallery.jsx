import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles/Swiper.css';
import 'swiper/css/free-mode';
import { Autoplay, Pagination,FreeMode } from 'swiper/modules';

function SwiperGallery() {
  return (
    <>
    <Swiper
      
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}

        coverflowEffect={{

          rotate: 50,
          stretch: 0,
          depth: 20,
          modifier:2,
          slideShadows: true,
        }}
        lazyPreloadPrevNext={true}
        lazyPreloaderClass='lazy-preloader'
        autoplay={{
          delay:500,
          disableOnInteraction:false,
        }}
       
        loop={true}
        freeMode={false}
       
        modules={[ Pagination,FreeMode,Autoplay]}
        className="swiperTe"
      >
        <SwiperSlide
          
        >
          <img src="/te1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/te8.png" />
        </SwiperSlide>
        
      </Swiper>


    </>
  )
}

export default SwiperGallery