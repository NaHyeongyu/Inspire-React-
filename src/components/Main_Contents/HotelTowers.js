import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const towers = [
  {
    id: "forest",
    name: "Forest Tower",
    image: "/img/forestMain.jpg",
    description:
      "자연의 생기와 다양한 색채를 품은 포근한 안식처, 포레스트 타워에서 평온하면서도 활기 가득한 쉼을 누리세요.",
    slug: "/",
  },
  {
    id: "ocean",
    name: "Ocean Tower",
    image: "/img/oceanMain.jpeg",
    description:
      "푸른 바다가 연상되는 오션 타워의 모던한 인테리어 속에서 일과 휴식의 경계를 넘나들며 편안한 시간을 보내세요.",
    slug: "/",
  },
  {
    id: "sun",
    name: "Sun Tower",
    image: "/img/sunMain.jpg",
    description:
      "빛나는 태양의 따뜻함에 편안히 안길 수 있는 곳. 행운을 가득 머금은 선 타워에 오신 것을 환영합니다.",
    slug: "/",
  },
];

function HotelTowers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Title>HOTEL TOWERS</Title>
      <Detail>나의 취향과 여행 목적에 맞는 호텔 타워를 선택해 보세요.</Detail>
      <Container>
        {towers.map((tower, idx) => {
          const position =
            idx === activeIndex
              ? "center"
              : idx < activeIndex
              ? "left"
              : "right";
          return (
            <TowerCard
              key={tower.id}
              className={position}
              onClick={() => setActiveIndex(idx)}
            >
              <TowerImage src={tower.image} alt={tower.name} />
              {position === "center" && (
                <ImageOverlay>{tower.name}</ImageOverlay>
              )}
              {position !== "center" && (
                <TowerLabel className={position}>{tower.name}</TowerLabel>
              )}
              {position === "center" && (
                <TowerInfo>
                  <h2>{tower.name}</h2>
                  <p>{tower.description}</p>
                  <AllBtn onClick={() => navigate("/stay")}>
                    <span>전체 보기</span>
                    <img src="/img/buttonarrow.png" />
                  </AllBtn>
                </TowerInfo>
              )}
            </TowerCard>
          );
        })}
      </Container>
    </>
  );
}

export default HotelTowers;
const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 100px;
  max-width: 1488px;
`;

const Detail = styled.p`
  font-size: 18px;
  color: #111111;
  margin: 0 auto;
  text-align: center;
  margin-top: 8px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1488px;
  margin: 0 auto;
  height: 560px;
  gap: 12px;
  overflow: hidden;
  margin-top: 50px;
`;

const TowerCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &.center {
    flex: 4;
    flex-direction: row;

    img {
      width: 40%;
    }

    div {
      width: 60%;
    }
  }

  &.left,
  &.right {
    flex: 0.3;
  }
`;

const TowerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TowerLabel = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: white;

  &.left,
  &.right {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }
`;

const TowerInfo = styled.div`
  background-color: #f8f5e9;
  padding: 90px 60px;
  width: 100%;
  h2 {
    font-size: 48px;
    margin-bottom: 32px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
`;
const AllBtn = styled.button`
  width: 400px;
  height: 72px;
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
  position: relative;
  overflow: hidden;
  margin-top: 150px;

  &:hover {
    gap: 16px;
  }

  span {
    transition: transform 0.3s ease;
  }

  img {
    display: inline-block;
    width: 24px !important;
    height: 24px !important;
    object-fit: contain;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover img {
    transform: translateX(5px);
  }
  &:hover span {
    transform: translateX(-5px);
  }
`;
const ImageOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
