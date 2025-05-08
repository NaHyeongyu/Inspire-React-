import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Meeting() {
  const navigate = useNavigate();

  return (
    <div>
      <MeetingAll>
        <div className="image-wrapper">
          <img src="/img/crowded.png" />
          <div className="overlay" />
          <Title>MEETING & EVENT</Title>
          <SubTitle>
            모두의 비즈니스를 빛나는 성공으로 이끄는 최첨단 연회 시설을
            소개합니다.
          </SubTitle>
          <AllBtn onClick={() => navigate("/offers")}>
            <span>전체 보기</span>
            <img src="/img/buttonarrow.png" />
          </AllBtn>
        </div>
      </MeetingAll>
    </div>
  );
}

export default Meeting;
const MeetingAll = styled.div`
  width: 100%;
  max-width: 1488px;
  height: 744px;
  margin: 0 auto;
  position: relative;
  margin-top: 160px;
  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 24px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 24px;
    z-index: 1;
  }

  button {
    z-index: 2;
  }
`;
const AllBtn = styled.button`
  height: 72px;
  width: 400px;
  border: none;
  border-radius: 16px;
  background-color: #e7af1b;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  gap: 8px;
  transition: gap 0.3s ease;
  position: absolute;
  right: 60px;
  bottom: 110px;
  z-index: 2;

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
const Title = styled.h1`
  position: absolute;
  max-width: 600px;
  bottom: 160px;
  left: 60px;
  z-index: 2;
  color: white;
  font-size: 48px;
  font-weight: bold;
`;
const SubTitle = styled.p`
  position: absolute;
  bottom: 100px;
  left: 60px;
  z-index: 2;
  color: white;
  font-size: 18px;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.5;
`;
