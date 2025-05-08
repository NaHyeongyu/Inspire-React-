import dayjs from "dayjs";
import { createSlice } from "@reduxjs/toolkit";

const today = dayjs().format("YYYY-MM-DD");
const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

const initialState = {
  rooms: [],
  checkIn: today,
  checkOut: tomorrow,
  guestCount: {
    adults: 1,
    children: 0,
  },
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuestCount: (state, action) => {
      state.guestCount = action.payload;
    },
  },
});

export const { setCheckIn, setCheckOut, setGuestCount } =
  reservationSlice.actions;

export default reservationSlice.reducer;
