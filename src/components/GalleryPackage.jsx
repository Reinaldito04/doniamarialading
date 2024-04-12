import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles/SwiperPackage.css';
import { FreeMode, Navigation, Thumbs,Autoplay } from 'swiper/modules';



function GalleryPackage() {

    const [fullscreenImage, setFullscreenImage] = useState(null);

    const handleClick = (imageSrc) => {
      setFullscreenImage(imageSrc);
    };
  
    const handleCloseFullscreen = () => {
      setFullscreenImage(null);
    };
    
  return (
    <>
    <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
      
        navigation={true}
        slidesPerView={3}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="swiperGallery"

        autoplay={{
            delay:800,
            disableOnInteraction:false,
          }}

      >
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}
        >
          <img src="./paquetebanner7.png"  />
        </SwiperSlide>
        <SwiperSlide 
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="./paquetebanner8.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="./paquetebanner9.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
           <img src="./paquetebanner10.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
         <img src="./paquetebanner11.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
         <img src="./paquetebanner12.jpg"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
         <img src="./paquetebanner13.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
         <img src="./paquetebanner14.png"  />
        </SwiperSlide>
      </Swiper>
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen Image" />
        </div>
      )}
    </>
  );
}

export default GalleryPackage;
