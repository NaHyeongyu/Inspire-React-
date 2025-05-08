import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationslice";
import cartReducer from "./carSlice";

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    cart: cartReducer,
  },
});

export default store;
