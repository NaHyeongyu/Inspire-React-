import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle.js";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <HeaderWrapper>
        <HeaderItems>
          <TopBar>
            <Logo onClick={() => navigate("/")}>INSPIRE</Logo>
            <CsMenu>
              <li>고객센터</li>
              <li>대관문의</li>
              <li>오시는 길</li>
              <li>회원가입</li>
              <li>로그인</li>
            </CsMenu>
          </TopBar>
          <BottompBar>
            <MainNav>
              <li onClick={() => navigate("/offers")}>OFFERS</li>
              <li onClick={() => navigate("/stay")}>STAY</li>
              <li onClick={() => alert("Not yet created")}>EAT & DRINK</li>
              <li onClick={() => alert("Not yet created")}>MALL</li>
              <li onClick={() => alert("Not yet created")}>SPLASH BAY</li>
              <li onClick={() => alert("Not yet created")}>ENTERTAINMENT</li>
              <li onClick={() => alert("Not yet created")}>MEET</li>
              <li onClick={() => alert("Not yet created")}>MOMENTUM</li>
              <li onClick={() => navigate("/board")}>Q&A</li>
              <QuickBook
                onClick={() =>
                  window.open("/reservation", "_blank", "noopener,noreferrer")
                }
              >
                <img src="/img/header/calendaricon.png"></img>예약하기
              </QuickBook>
            </MainNav>
          </BottompBar>
        </HeaderItems>
      </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: white;
  padding: 20px 0;
  position: fixed; // 화면 상단 고정
  top: 0; // 꼭대기에 붙이기
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
`;

const HeaderItems = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1488px;
`;
const TopBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: rgb(90, 36, 141);
  font-family: "Vitro-Inspire";
  letter-spacing: 2px;
  cursor: pointer;
`;

const CsMenu = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;

  li {
    font-size: 14px;
    color: #111111;
    cursor: pointer;
    position: relative;

    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -16px;
      top: 50%;
      transform: translateY(-50%);
      color: #111111;
      font-weight: 300;
      font-size: 10px;
    }
  }
`;
const BottompBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 0 auto;
`;

const MainNav = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  li {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    transition: color 0.3s ease;
    cursor: pointer;
    list-style: none;

    &:hover {
      color: rgb(168, 68, 255);
    }
  }
`;

const QuickBook = styled.button`
  background-color: #e7af1b;
  border: 0;
  border-radius: 8px;
  padding: 14px 24px;
  display: flex;
  gap: 14px;
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
