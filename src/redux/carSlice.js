import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const dummyItems = [
  {
    id: "101",
    name: "오션 디럭스",
    checkIn: "2025-06-01",
    checkOut: "2025-06-03",
    guestCount: {
      adults: 2,
      children: 1,
    },
    pricePerNight: 180000,
    image: "/img/reservation/reservation1.jpg",
  },
  {
    id: "102",
    name: "포레스트 스위트",
    checkIn: "2025-06-05",
    checkOut: "2025-06-07",
    guestCount: {
      adults: 1,
      children: 0,
    },
    pricePerNight: 250000,
    image: "/img/reservation/reservation2.jpg",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage().length ? loadCartFromStorage() : dummyItems,
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.some(
        (item) =>
          item.id === action.payload.id &&
          item.checkIn === action.payload.checkIn &&
          item.checkOut === action.payload.checkOut
      );
      if (exists) {
        alert("이미 같은 상품이 해당 날짜로 장바구니에 담겨 있습니다.");
        return;
      }
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
