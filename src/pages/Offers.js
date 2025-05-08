import React from "react";
import Header from "../components/Header";
import { useLayoutEffect } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import OfferType from "../components/Offers_Contents/OfferType";
import Momentum from "../components/Momentum";
import Footer from "../components/Footer";
function Offers() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <GlobalStyle />
      <Header />
      <OfferType></OfferType>
      <Momentum></Momentum>
      <Footer></Footer>
    </>
  );
}

export default Offers;
