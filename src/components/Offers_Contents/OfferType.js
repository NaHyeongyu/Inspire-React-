import React, { useState } from "react";
import styled from "styled-components";
import offersData from "../../api/OffersAPI";
import { useNavigate } from "react-router-dom";

function OfferType() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("전체");
  const itemsPerPage = 9;

  const categoryMap = {
    전체: null,
    객실: "객실 offers",
    다이닝: "다이닝 offers",
    "모멘텀 라이프스타일 이벤트": "모멘텀 라이프스타일 이벤트 프로모션 offers",
    이벤트: "special events offers",
  };

  const filteredOffers =
    categoryMap[filterCategory] === null
      ? offersData
      : offersData.filter(
          (offer) =>
            offer.category?.trim().toLowerCase() ===
            categoryMap[filterCategory]?.trim().toLowerCase()
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOffers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);

  return (
    <>
      <OffersBanner>
        <img src="/img/inspire.jpg" alt="Banner" />
        <OverlayContent>
          <span>OFFERS</span>
        </OverlayContent>
      </OffersBanner>
      <Title>OFFERS TYPES</Title>
      <OffersNavAll>
        <OffersNav>
          {[
            "전체",
            "객실",
            "다이닝",
            "모멘텀 라이프스타일 이벤트",
            "이벤트",
          ].map((category) => (
            <li
              key={category}
              className={filterCategory === category ? "active" : ""}
              onClick={() => {
                setFilterCategory(category);
                setCurrentPage(1);
              }}
            >
              <span>{category}</span>
            </li>
          ))}
        </OffersNav>
      </OffersNavAll>
      <OffersList>
        {currentItems.map((offer) => (
          <OffersItem key={offer.id}>
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
          </OffersItem>
        ))}
      </OffersList>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 600, behavior: "smooth" });
            }}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </Pagination>
    </>
  );
}
const OffersBanner = styled.div`
  width: 100%;
  height: 444px;
  margin-top: 160px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin-top: 80px;
  max-width: 1488px;
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

const OffersNavAll = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1488px;
`;

const OffersNav = styled.ul`
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
const OffersList = styled.div`
  width: 100%;
  max-width: 1488px;
  margin: 70px auto 40px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  gap: clamp(0px, 2vw, 30px);
`;
const OffersItem = styled.div`
  width: 476px;
  height: 650px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  margin-top: 20px;
  img {
    width: 100%;
    height: 320px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;

  button {
    padding: 8px 16px;
    border: none;
    background-color: #eee;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
    &.active {
      background-color: #6f5c80;
      color: white;
      font-weight: bold;
    }
  }
`;

export default OfferType;
