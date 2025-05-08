import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import offersData from "../../api/OffersAPI";

function OffersDetailContent() {
  const { id } = useParams();

  const offer = offersData.find((item) => item.id === parseInt(id));

  if (!offer) {
    return <p style={{ margintop: "160px" }}>해당 오퍼를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <OffersDetailBox>
        <DetailBoxContents>
          <h1>{offer.title}</h1>
          <img src={offer.mainimg} alt={offer.title} />
          <div dangerouslySetInnerHTML={{ __html: offer.detail }} />
        </DetailBoxContents>
      </OffersDetailBox>
    </>
  );
}

const OffersDetailBox = styled.div`
  max-width: 1460px;
  width: 100%;
  height: 100%;
  margin-top: ;
  padding: 64px 70px;

  margin: 220px auto 100px;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.25);
`;

const DetailBoxContents = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
    padding-top: 20px;
    font-size: 48px;
    color: #6f5c80;
    font-weight: bold;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    padding-top: 60px;
  }
  div {
    width: 100%;
    height: 100%;
    margin-top: 60px;
  }
  p {
    font-size: 18px;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
    line-height: 1.6;
    list-style: disc;
  }
`;
export default OffersDetailContent;
