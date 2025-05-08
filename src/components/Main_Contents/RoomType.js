import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import roomData from "../../api/MainRoomTypeAPI.json";

function RoomType() {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedRoom = roomData[selectedIndex];

  return (
    <>
      <Title>Room Type</Title>
      <div style={{ position: "relative" }}>
        <RoomTypeAll>
          <p>
            편안한 디럭스 룸부터 럭셔리한 스위트, 프라이빗한 빌라까지. 다양한
            객실 옵션을 살펴보세요.
          </p>
          <RoomTypeItem>
            <button
              className="custom-prev"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0 ? roomData.length - 1 : prev - 1
                )
              }
            >
              {"<"}
            </button>
            <RoomTypeDetail key={selectedRoom.slug || selectedRoom.title}>
              <div className="forflex">
                <h1>{selectedRoom.title}</h1>
                <h5>{selectedRoom.summary}</h5>
              </div>
              <div className="forbutton">
                <DetailBtn
                  onClick={() =>
                    window.open("/reservation", "_blank", "noopener,noreferrer")
                  }
                  className="bookbutton"
                >
                  <span>예약하기</span>
                  <img src="/img/buttonarrow.png" />
                </DetailBtn>
                <DetailBtn onClick={() => navigate("/stay")}>
                  <span>더 알아보기</span>
                  <img src="/img/buttonarrow.png" />
                </DetailBtn>
              </div>
            </RoomTypeDetail>
            <RoomTypeImg>
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "0 32px 32px 0",
                }}
              >
                {roomData.map((room, idx) => (
                  <SwiperSlide
                    key={room.slug || idx}
                    style={{
                      width: "778px",
                      height: "520px",
                      borderRadius: "0 32px 32px 0",
                      overflow: "hidden",
                    }}
                  >
                    <StyledSlideImage src={room.thumbnail} alt={room.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </RoomTypeImg>

            <button
              className="custom-next"
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === roomData.length - 1 ? 0 : prev + 1
                )
              }
            >
              {">"}
            </button>
          </RoomTypeItem>
        </RoomTypeAll>
        <AllBtn onClick={() => navigate("/stay")}>
          <span>전체 보기</span>
          <img src="/img/buttonarrow.png" />
        </AllBtn>
      </div>
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

const RoomTypeAll = styled.div`
  height: auto;
  width: 100%;
  max-width: 1488px;
  margin: 0 auto;
  p {
    width: 100%;
    margin: 12px auto 60px;
    text-align: left;
    font-size: 18px;
  }
`;
const RoomTypeItem = styled.div`
  max-width: 100%;
  height: 560px;
  margin: 0 auto;
  position: relative;
  .custom-prev,
  .custom-next {
    position: absolute;
    top: 35%;
    background-color: rgb(212, 212, 212);
    border: none;
    color: white;
    font-size: 24px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .custom-prev {
    left: -30px;
  }

  .custom-next {
    right: -30px;
  }
`;
const RoomTypeDetail = styled.div`
  width: 710px;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  height: 520px;
  padding: 56px;
  background-color: #7c8fac;
  border-radius: 32px 0 0 32px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateX(40px);
  animation: fadeSlideRight 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;

  @keyframes fadeSlideRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h1 {
    color: white;
    font-size: 48px;
    font-weight: 1000;
    letter-spacing: 2px;
  }

  h5 {
    width: 460px;
    color: white;
    font-size: 18px;
    font-weight: 300;
    margin-top: 20px;
    line-height: 1.7;
  }
  .forbutton {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .bookbutton {
    background-color: #6f5c80;
    border: none;
  }
`;
const RoomTypeImg = styled.div`
  width: 778px;
  float: right;
  display: inline;

  height: auto;
  overflow: visible;
  bottom: 0;
  right: 56px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 32px 32px 0;
  }
`;
const DetailBtn = styled.button`
  width: 400px;
  height: 72px;
  border: 0.5px solid white;
  background-color: #7c8fac;
  border-radius: 16px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  gap: 8px;
  transition: gap 0.3s ease;
  &:hover {
    gap: 16px;
    background-color: #6f5c80;
    border: none;
  }

  span {
    transition: transform 0.5s ease;
  }

  img {
    width: 25px;
    height: 25px;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: translateX(5px);
  }
`;

const StyledSlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 32px 32px 0;
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

export default RoomType;
