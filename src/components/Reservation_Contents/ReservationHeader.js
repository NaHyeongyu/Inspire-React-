import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Paper,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckIn,
  setCheckOut,
  setGuestCount,
} from "../../redux/reservationslice";
import ReservationRoom from "./ReservationRoom";
// import GlobalStyle from "../styles/GlobalStyle.js";
function ReservationHeader({ roomRef }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservation);

  const safeDayjs = (val) => {
    const d = dayjs(val);
    return d.isValid() ? d : dayjs();
  };

  const [checkInDate, setCheckInDate] = React.useState(
    safeDayjs(reservation.checkIn)
  );
  const [checkOutDate, setCheckOutDate] = React.useState(
    safeDayjs(reservation.checkOut)
  );
  const [adults, setAdults] = React.useState(
    reservation.guestCount?.adults || 2
  );
  const [children, setChildren] = React.useState(
    reservation.guestCount?.children || 0
  );

  return (
    <div>
      <HeaderWrapper>
        <HeaderItems>
          <Logo onClick={() => navigate("/")}>INSPIRE</Logo>
          <Nav>
            <img src="/img/bedicon.png"></img>객실 & 날짜 선택
          </Nav>
          <Cart onClick={() => navigate("/reservation/cart")}>
            <img src="/img/carticon.png"></img>장바구니
          </Cart>
        </HeaderItems>
        <ReservationBanner>
          <img src="/img/inspire1.png"></img>
        </ReservationBanner>
        <OverlappingWhiteBox>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="체크인 날짜"
                value={checkInDate}
                onChange={(newValue) => setCheckInDate(newValue)}
                sx={{ width: 200 }}
              />
              <DatePicker
                label="체크아웃 날짜"
                value={checkOutDate}
                onChange={(newValue) => setCheckOutDate(newValue)}
                minDate={checkInDate}
                sx={{ width: 200 }}
                slotProps={{
                  day: {
                    sx: {
                      "&:hover": {
                        backgroundColor: "#f0e6ff",
                        color: "#333",
                      },
                    },
                  },
                }}
              />
              <Paper
                variant="outlined"
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" mr={2}>
                  게스트 인원
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography>성인</Typography>
                  <IconButton
                    onClick={() => setAdults((prev) => Math.max(prev - 1, 1))}
                    size="small"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{adults}</Typography>
                  <IconButton
                    onClick={() => setAdults((prev) => prev + 1)}
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography>어린이</Typography>
                  <IconButton
                    onClick={() => setChildren((prev) => Math.max(prev - 1, 0))}
                    size="small"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{children}</Typography>
                  <IconButton
                    onClick={() => setChildren((prev) => prev + 1)}
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Paper>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f2b411",
                  "&:hover": {
                    backgroundColor: "#f2b411",
                  },
                  height: 56,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
                onClick={() => {
                  dispatch(setCheckIn(checkInDate.format("YYYY-MM-DD")));
                  dispatch(setCheckOut(checkOutDate.format("YYYY-MM-DD")));
                  dispatch(setGuestCount({ adults, children }));
                  navigate("/reservation");
                  roomRef.current?.reloadRooms();
                }}
              >
                예약 조회
              </Button>
            </DemoContainer>
          </LocalizationProvider>
        </OverlappingWhiteBox>
      </HeaderWrapper>
    </div>
  );
}

export default ReservationHeader;
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: black;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const HeaderItems = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1488px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  div {
    display: inline;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: "Vitro-Inspire";
  letter-spacing: 2px;
  cursor: pointer;
`;
const Nav = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  img {
    width: 24px;
    margin-right: 10px;
  }
`;

const Cart = styled.button`
  background-color: black;
  border: 0;
  border-radius: 8px;
  padding: 14px 24px;
  display: flex;
  gap: 10px;
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
const ReservationBanner = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin-top: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;
const OverlappingWhiteBox = styled.div`
  width: 1150px;
  height: auto;
  padding: 24px;
  background-color: white;
  position: absolute;
  bottom: -255px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  z-index: 3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
