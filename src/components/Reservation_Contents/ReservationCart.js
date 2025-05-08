import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/carSlice";

function ReservationCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate total price of all items in cart
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + (item.pricePerNight || 0);
  }, 0);
  return (
    <div>
      <CartAll>
        <CartList>
          <CartTitle>
            <h5>예약내역</h5>
          </CartTitle>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CartItem key={index}>
                <CartItemLeft>
                  <img
                    src={item.image || "/img/reservation/reservation1.jpg"}
                  />
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    삭제
                  </button>
                </CartItemLeft>
                <CartItemRight>
                  <h4>{item.name}</h4>
                  <hr />
                  <p>
                    날짜: {item.checkIn || "체크인 없음"} ~{" "}
                    {item.checkOut || "체크아웃 없음"}
                  </p>
                  <p>
                    인원: {item.guestCount?.adults || 0}성인{" "}
                    {item.guestCount?.children || 0}어린이
                  </p>
                  <div className="price">
                    <span>총 요금</span>
                    <span>₩{item.pricePerNight?.toLocaleString() || "0"}</span>
                  </div>
                </CartItemRight>
              </CartItem>
            ))
          ) : (
            <CartItemNone>
              <p>장바구니에 상품이 없습니다.</p>
              <button onClick={() => navigate("/reservation")}>
                상품 담으러 가기
              </button>
            </CartItemNone>
          )}
          <StickyTotalWrapper>
            <TotalAll>
              <TotalPrice>
                <span>총 요금 ₩{totalPrice.toLocaleString()}</span>
              </TotalPrice>
              <Reservation>
                <button onClick={() => navigate("/reservation")}>
                  뒤로 가기
                </button>
                <button>예약진행 </button>
              </Reservation>
            </TotalAll>
          </StickyTotalWrapper>
        </CartList>
      </CartAll>
    </div>
  );
}

export default ReservationCart;

const CartAll = styled.div`
  width: 100%;
  max-width: 1488px;
  height: auto;
  margin: 300px auto 0;
  padding-bottom: 100px; // prevents content overlap
`;

const CartTitle = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 52px;
  background-color: #6f5c80;
  margin: 20px auto 0;
  border-radius: 8px 8px 0 0;
  padding: 14px 0 0 20px;
  h5 {
    color: white;
  }
`;
const CartList = styled.div`
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

const CartItem = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 20px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  border-bottom: 1px solid grey;
`;
const CartItemNone = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-bottom: 1px solid grey;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
  }
  button {
    width: 20%;
    border: none;
    color: white;
    padding: 10px 20px;
    background-color: #6f5c80;
    border-radius: 8px;
  }
`;
const CartItemLeft = styled.div`
  width: 400px;
  height: 100%;
  img {
    width: 380px;
    height: 185px;
    border-radius: 8px;
  }
  button {
    margin-top: 12px;
    font-size: 14px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    color: red;
    background-color: white;
  }
`;
const CartItemRight = styled.div`
  width: 750px;
  height: 100%;

  h4 {
    font-size: 20px;
    color: #6f5c80;
  }
  p {
    margin-top: 4px;
  }
  .price {
    width: 100%;
    height: 60px;
    padding: 10px 15px;
    border: 0.3px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 20px;
      color: #6f5c80;
    }
  }
`;
const TotalAll = styled.div`
  width: 100%;
`;
const TotalPrice = styled.div`
  max-width: 1100px;
  padding: 33px;
  text-align: right;
  background-color: white;
  border-radius: 16px 16px 0 0;
  margin: 0 auto;
  span {
    font-size: 20px;
  }
`;
const Reservation = styled.div`
  width: 100%;
  height: 56px;
  background-color: #6f5c80;
  border-radius: 4px;
  text-align: right;
  padding: 8px 20px;
  button {
    border-radius: 8px;
    border: white 0.5px solid;
    padding: 8px 16px;
    background-color: #6f5c80;
    color: white;
    margin-left: 10px;
  }
`;
const StickyTotalWrapper = styled.div`
  position: sticky;
  bottom: 0;

  z-index: 100;
`;
