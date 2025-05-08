import React from "react";
import GlobalStyle from "../styles/GlobalStyle.js";
import CarouselBootstraps from "../components/Main_Contents/Carousel.js";
import QuickBook from "../components/Main_Contents/QuickBook.js";
import Header from "../components/Header";
import MainSpecialOffers from "../components/Main_Contents/MainSpecialOffers";
import Momentum from "../components/Momentum.js";
import Footer from "../components/Footer.js";
import RoomType from "../components/Main_Contents/RoomType.js";
import HotelTowers from "../components/Main_Contents/HotelTowers.js";
import Dining from "../components/Main_Contents/Dining.js";
import Meeting from "../components/Main_Contents/Meeting.js";

function Main() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <CarouselBootstraps></CarouselBootstraps>
      <QuickBook></QuickBook>
      <MainSpecialOffers></MainSpecialOffers>
      <HotelTowers></HotelTowers>
      <RoomType></RoomType>
      <Dining></Dining>
      <Meeting></Meeting>
      <Momentum></Momentum>
      <Footer></Footer>
    </>
  );
}
export default Main;
