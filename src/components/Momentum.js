import React from "react";
import styled from "styled-components";

function Momentum() {
  return (
    <>
      <MomentumAll>
        <MomentumWrap>
          <img src="/img/momentum.jpg"></img>
          <MomentumItmes>
            <h1>Momentum</h1>
            <p>모멘텀 멤버십에 가입하고, 차별화된 혜택을 누려보세요.</p>
            <AllBtn>
              <span>지금 가입하기</span>
              <img src="/img/buttonarrow.png" />
            </AllBtn>
          </MomentumItmes>
        </MomentumWrap>
      </MomentumAll>
    </>
  );
}
export default Momentum;

const MomentumAll = styled.div`
  width: 100%;
  height: 340px;
  margin-top: 160px;
`;

const MomentumWrap = styled.div`
  max-width: 1488px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 714px;
    height: 100%;
    border-radius: 16px;
  }
`;

const MomentumItmes = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 40px;
  h1 {
    margin-top: 60px;
    font-size: 48px;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    color: #111111;
    font-weight: 200;
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
  transition: gap 0.3s ease;
  margin-top: 40px;

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
