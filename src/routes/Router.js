import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Offers from "../pages/Offers";
import OffersDetail from "../pages/OffersDetail";
import Stay from "../pages/Stay";
import Reservation from "../pages/Reservation";
import Cart from "../pages/Cart";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Board from "../pages/Board";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/detail/:id" element={<OffersDetail />} />
        <Route path="/stay" element={<Stay />}></Route>
        <Route
          path="/reservation"
          element={<Reservation></Reservation>}
        ></Route>
        <Route path="/reservation/cart" element={<Cart></Cart>}></Route>
        <Route path="/board" element={<Board></Board>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
