import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Momentum from "../components/Momentum";
import styled, { createGlobalStyle } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import roomData from "../api/RoomMainAPI.json";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  .swiper-slide {
    width: 778px !important;
    height: 520px;
  }
`;

function Stay() {
  const [selectedTowerIndex, setSelectedTowerIndex] = useState(0);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const selectedTower = roomData[selectedTowerIndex];
  const selectedRoom = selectedTower.rooms[selectedRoomIndex];
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <StayBanner>
        <img src="/img/stay/staybanner.png" alt="Banner"></img>
        <OverlayContent>
          <span>STAY</span>
        </OverlayContent>
      </StayBanner>
      <StayDetail>
        <p>
          당신에게 쉼표의 시간은 언제인가요? ​악보에서 쉼표는 ‘쉬어간다’는
          의미로, 빽빽한 음표 사이에 위치하며 ​빨라진 호흡을 가다듬고 이전과는
          다른 리듬을 만들어 내는 역할을 합니다. ​비교할 수 없는 평온함과
          여유로움을 통해 새로운 활력을 충전하는 쉼표의 공간. 인스파이어 호텔로
          여러분을 초대합니다.<br></br> <br></br> ​총 1,275개의 객실을 갖춘 3개
          동의 5성급 호텔 타워는 영종도의 빼어난 자연에 영감을 받아
          탄생했습니다.​세계적인 인테리어 디자인 스튜디오가 각기 다른 디자인
          컨셉으로 구현한 포레스트 타워, 선 타워, 오션 타워는 다양한 타입의
          디럭스 룸과 스위트, ​그리고 빌라로 구성되어 있습니다. 국내 최초로
          제공되는 산타마리아 노벨라, 라리끄 등의 최고급 욕실 어메니티와
          세심하게 비치된 가구 및 용품들은 ​휴식에 편안함을 더해줍니다. 모두의
          취향과 목적을 만족시키는 인스파이어 호텔에서 온전한 쉼을 누리세요.
        </p>
      </StayDetail>
      <Title>Towers</Title>
      <StayNav>
        {roomData.map((tower, idx) => (
          <li
            key={tower.id}
            className={idx === selectedTowerIndex ? "active" : ""}
            onClick={() => {
              setSelectedTowerIndex(idx);
              setSelectedRoomIndex(0);
            }}
          >
            {tower.name}
          </li>
        ))}
      </StayNav>
      <div style={{ position: "relative" }}>
        <Towers>
          <p>{selectedTower.summary}</p>
          <TowersItem>
            <button
              className="custom-prev"
              onClick={() =>
                setSelectedRoomIndex((prev) =>
                  prev === 0 ? selectedTower.rooms.length - 1 : prev - 1
                )
              }
            >
              {"<"}
            </button>
            <TowersDetail key={selectedRoom.slug || selectedRoom.type}>
              <div className="forflex">
                <h1>{selectedRoom.type}</h1>
                <h5>{selectedRoom.titleDetail}</h5>
              </div>
              <div className="forbutton">
                <DetailBtn
                  className="bookbutton"
                  onClick={() =>
                    window.open("/reservation", "_blank", "noopener,noreferrer")
                  }
                >
                  <span>예약하기</span>
                  <img src="/img/buttonarrow.png" />
                </DetailBtn>
                <DetailBtn>
                  <span>더 알아보기</span>
                  <img src="/img/buttonarrow.png" />
                </DetailBtn>
              </div>
            </TowersDetail>
            <TowersImg>
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) =>
                  setSelectedRoomIndex(swiper.realIndex)
                }
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
                {selectedTower.rooms.map((room, idx) => (
                  <SwiperSlide
                    key={room.slug || idx}
                    style={{
                      width: "778px",
                      height: "520px",
                      borderRadius: "0 32px 32px 0",
                      overflow: "hidden",
                    }}
                  >
                    <StyledSlideImage src={room.thumbnail} alt={room.type} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </TowersImg>
            <button
              className="custom-next"
              onClick={() =>
                setSelectedRoomIndex((prev) =>
                  prev === selectedTower.rooms.length - 1 ? 0 : prev + 1
                )
              }
            >
              {">"}
            </button>
          </TowersItem>
        </Towers>
      </div>

      <Momentum></Momentum>
      <Footer></Footer>
    </>
  );
}
const StayBanner = styled.div`
  width: 100%;
  height: 444px;
  margin-top: 160px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom; /* ← 이게 핵심! */
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;
const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px;
`;
const StayDetail = styled.div`
  width: 100%;
  max-width: 1488px;
  margin: 0 auto;
  margin-top: 70px;
  p {
    width: 1005px;
    margin: 0 auto;
    font-size: 18px;
  }
  button {
    margin-top: 40px;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: bold;
    background-color: #6f5c80;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #5a4869;
  }
`;
const StayNav = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  gap: 40px;
  margin-top: 60px;
  li {
    padding-right: 50px;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    &:hover {
      cursor: pointer;
      color: rgb(168, 68, 255);
    }
  }
  li:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: 0;
    color: rgb(203, 203, 203);
    font-weight: 1000;
    font-size: 16px;
  }
  li.active {
    color: rgb(168, 68, 255);
    font-weight: bold;
  }
`;
const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 120px;
  max-width: 1488px;
`;

const Towers = styled.div`
  height: auto;
  width: 100%;
  max-width: 1488px;
  margin: 0 auto;
  p {
    width: 1000px;
    margin: 80px auto 50px;
    text-align: center;
    font-size: 18px;
  }
`;
const TowersItem = styled.div`
  max-width: 100%;
  height: 650px;
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
const TowersDetail = styled.div`
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
const TowersImg = styled.div`
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
  width: 220px;
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

export default Stay;
