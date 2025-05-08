import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterAll>
        <FooterItems>
          <FooterLogo>
            <Logo>INSPIRE</Logo>
          </FooterLogo>
          <FooterDetail1>
            <h5>회사 소개</h5>
            <p>인스파이어 엔터테인먼트 리조트</p>
            <p>채용안내</p>
            <p>미디어 센터</p>
            <p>갤러리</p>
            <p>사이트맵</p>
          </FooterDetail1>
          <FooterDetail2>
            <p className="cs">고객센터</p>
            <p>오시는 길</p>
            <p>호텔 이용 약관</p>
            <p>개인정보 처리방침</p>
            <p>이용 약관</p>
          </FooterDetail2>
          <FooterDetail3>
            <h5>호텔 예약</h5>
            <p>
              <strong>
                인천광역시 중구 공항문화로 127<br></br>
                (우)22382 인스파이어 엔터테인먼트 리조트
              </strong>
            </p>
            <p>대표 번호: 032-580-9000</p>
            <p>팩스: 032-580-9009</p>
            <p className="email">contact@Inspirekorea.components</p>
            <p className="company">
              (주)인스파이어인티그레이티드리조트<br></br>
              사업자등록번호: 496-86-00049<br></br>통신판매신고번호:
              2023-인천중구-0804<br></br>대표이사: 첸시
            </p>
          </FooterDetail3>
        </FooterItems>
      </FooterAll>
      <Copy>
        <span>COPYRIGHT ⓒ 2024 인스파이어 엔터테인먼트 리조트. 판권 소유.</span>
        <span>
          <span className="connect"></span>
          CONNECT WITH US <img src="/img/footer/facebookicon.png"></img>
          <img src="/img/footer/instagramicon.png"></img>
          <img src="/img/footer/youtubeicon.png"></img>
        </span>
      </Copy>
    </>
  );
}
const FooterAll = styled.div`
  width: 100%;
  height: 444px;
  background-color: #e4e2de;
  margin-top: 160px;
`;
const FooterItems = styled.div`
  width: 100%;
  max-width: 1488px;
  height: 100%;
  padding: 40px 20px 0 40px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  h5 {
    margin: 10px 0 24px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    color: #111111;
    font-size: 14px;
  }
  .cs {
    margin-top: 60px;
  }
  .company {
    margin-top: 40px;
  }
  .email {
    margin-top: 30px;
  }
`;

const FooterLogo = styled.div`
  width: 20%;
`;
const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: rgb(90, 36, 141);
  font-family: "Vitro-Inspire";
  letter-spacing: 2px;
  cursor: pointer;
`;
const FooterDetail1 = styled.div`
  width: 25%;
`;
const FooterDetail2 = styled.div`
  width: 28%;
`;
const FooterDetail3 = styled.div`
  width: auto;
`;
const Copy = styled.div`
  width: 100%;
  max-width: 1488px;
  height: 67px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 12px;
    color: #111111;
  }
  margin: 0 auto;
  img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  .connect {
    font-weight: bold;
    margin-right: 20px;
  }
`;
export default Footer;
