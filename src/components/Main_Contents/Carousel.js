import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import carouselData from "../../api/CarouselAPI";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-container">
              <div className="slide-image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="slide-overlay">
                <span className="slide-category">{item.category}</span>
                <h2 className="slide-title">{item.title}</h2>
                <p className="slide-summary">{item.description}</p>
                <button
                  className="slide-button"
                  onClick={() => (window.location.href = item.buttonLink)}
                >
                  더 알아보기
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
