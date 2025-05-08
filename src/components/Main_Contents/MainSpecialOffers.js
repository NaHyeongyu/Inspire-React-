import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/GlobalStyle";
import offersData from "../../api/OffersAPI";
import { useNavigate } from "react-router-dom";

function MainSpecialOffers() {
  const navigate = useNavigate();

  return (
    <>
      <Title>SPECIAL OFFERS</Title>
      <Detail>
        끝없는 영감이 당신을 일꺠우고, 반복되는 일상으로부터 자유로워지는 곳.
        <br></br>인스파이어만의 특별한 프로모션과 함께 즐거운 여행을 계획해
        보세요.
      </Detail>
      <MainSpecialOffersAll>
        {offersData.slice(0, 3).map((offer) => (
          <MainSpecialOffersItem key={offer.id}>
            <img src={offer.thumnail} alt={offer.title} />
            <div className="forPadding">
              <div className="offer_item_detial">
                <h1 className="offer_title">{offer.title}</h1>
                <span className="offer_category">{offer.category}</span>
                <span className="offer_summary">{offer.summary}</span>
              </div>
              <DetailBtn onClick={() => navigate(`/offers/detail/${offer.id}`)}>
                더 알아보기
              </DetailBtn>
            </div>
          </MainSpecialOffersItem>
        ))}
      </MainSpecialOffersAll>
      <OfferAllBtn>
        <AllBtn onClick={() => navigate("/offers")}>
          <span>전체 보기</span>
          <img src="/img/buttonarrow.png" />
        </AllBtn>
      </OfferAllBtn>
    </>
  );
}

export default MainSpecialOffers;

const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 80px;
  max-width: 1488px;
`;

const Detail = styled.p`
  font-size: 18px;
  color: #111111;
  margin: 0 auto;
  text-align: center;
  margin-top: 8px;
`;

const MainSpecialOffersAll = styled.div`
  width: 100%;
  max-width: 1488px;
  margin: 70px auto 40px ;
  height: 650px;
  display: flex;
  flex-direction: row
  justify-content: space-between;
  gap: 30px
`;

const MainSpecialOffersItem = styled.div`
  width: 476px;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  img {
    width: 100%;
    height: 320px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const OfferAllBtn = styled.div`
  margin: 0 auto;
  max-width: 1488px;
  height: 72px;
  display: flex;
  justify-content: center;
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
const DetailBtn = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 16px;
  border: none;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  display: flex;
  background-color: #6f5c80;
  color: white;
  letter-spacing: 4px;
`;
