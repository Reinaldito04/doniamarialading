import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles/SwiperPackage.css';
import { FreeMode, Thumbs,Autoplay } from 'swiper/modules';


function GallerySinNavegator(){
 

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
        borderRadius:"25px",
       }}
        slidesPerView={3}
        loop={true}
        modules={[FreeMode, Thumbs,Autoplay]}
        className="swiperGallery"

        autoplay={{
            delay:800,
            disableOnInteraction:false,
          }}

      >
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}
        >
          <img src="/paquetebanner0.png"  />
        </SwiperSlide>
        <SwiperSlide 
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner1.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner2.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner3.png"   />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner4.png"  />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner5.png"   />
        </SwiperSlide>
        <SwiperSlide
        className='slide-galeria' onClick={(e) => handleClick(e.target.src)}>
          <img src="/paquetebanner6.png"   />
        </SwiperSlide>
       
      </Swiper>


      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen Image" />
        </div>
      )}

    </>
  )
}

export default GallerySinNavegator