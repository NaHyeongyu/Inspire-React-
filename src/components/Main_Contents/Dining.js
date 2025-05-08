import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/Dining.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Dining() {
  const navigate = useNavigate();

  return (
    <>
      <Title>DINING</Title>
      <SubTitle>
        미식 여행의 출발선. 세계 각국의 다양하고 독창적인 요리가 여러분을
        기다리고 있습니다.
      </SubTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="diningSwiper"
      >
        <SwiperSlide className="dining-card">
          <img src="/img/dining/dining1.jpg"></img>
          <h2 className="sub-title">캐주얼 다이닝</h2>
          <h2 className="main-title">가든 팜 카페</h2>
        </SwiperSlide>
        <SwiperSlide className="dining-card">
          <img src="/img/dining/dining2.jpg"></img>
          <h2 className="sub-title">시그니처 다이닝</h2>
          <h2 className="main-title">셰프스 키친</h2>
        </SwiperSlide>
        <SwiperSlide className="dining-card">
          <img src="/img/dining/dining3.jpg"></img>
          <h2 className="sub-title">시그니처 다이닝</h2>
          <h2 className="main-title">마이클 조던 스테이크 하우스</h2>
        </SwiperSlide>
        <SwiperSlide className="dining-card">
          <img src="/img/dining/dining4.jpg"></img>
          <h2 className="sub-title">시그니처 다이닝</h2>
          <h2 className="main-title">영사헌</h2>
        </SwiperSlide>
      </Swiper>
      <AllBtn onClick={() => navigate("/offers")}>
        <span>전체 보기</span>
        <img src="/img/buttonarrow.png" />
      </AllBtn>
    </>
  );
}
const Title = styled.h1`
  margin: 0 auto;
  text-align: left;
  font-size: 48px;
  font-weight: bold;
  margin-top: 120px;
  max-width: 1488px;
`;
const SubTitle = styled.p`
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  max-width: 1488px;
`;
const AllBtn = styled.button`
  height: 72px;
  width: 400px;
  border: none;
  border-radius: 16px;
  background-color: #6f5c80;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  gap: 8px;
  transition: gap 0.3s ease;
  margin: 0 auto;
  &:hover {
    gap: 16px;
  }

  span {
    transition: transform 0.3s ease;
  }

  img {
    width: 25px;
    height: 25px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: translateX(5px);
  }
`;
