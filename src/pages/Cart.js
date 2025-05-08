import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReservationFooter from "../components/Reservation_Contents/ReservationFooter";
import ReservationCart from "../components/Reservation_Contents/ReservationCart";

// import GlobalStyle from "../styles/GlobalStyle.js";
function ReservationHeader({ roomRef }) {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderWrapper>
        <HeaderItems>
          <Logo onClick={() => navigate("/")}>INSPIRE</Logo>
          <Nav onClick={() => navigate("/reservation")}>
            <img src="/img/bedicon.png"></img>객실 & 날짜 선택
          </Nav>
          <Cart>
            <img src="/img/carticon.png"></img>장바구니
          </Cart>
        </HeaderItems>
        <ReservationBanner>
          <img src="/img/inspire1.png"></img>
        </ReservationBanner>
      </HeaderWrapper>
      <ReservationCart></ReservationCart>
      <ReservationFooter />
    </div>
  );
}

export default ReservationHeader;
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: black;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderItems = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1488px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  div {
    display: inline;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: "Vitro-Inspire";
  letter-spacing: 2px;
  cursor: pointer;
`;
const Nav = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  img {
    width: 24px;
    margin-right: 10px;
  }
`;

const Cart = styled.button`
  background-color: black;
  border: 0;
  border-radius: 8px;
  padding: 14px 24px;
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 14px;
  transition: background-color 0.5s ease;

  img {
    width: 15px;
  }

  &:hover {
    background-color: #6f5c80;
  }
`;
const ReservationBanner = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-top: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
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
