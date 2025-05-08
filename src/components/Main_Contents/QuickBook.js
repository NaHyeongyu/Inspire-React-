import React from "react";
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
// import GlobalStyle from "../styles/GlobalStyle.js";
function QuickBook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservationState = useSelector((state) => state.reservation);
  const reservation =
    reservationState && typeof reservationState === "object"
      ? reservationState
      : {};

  const safeDayjs = (val) => {
    const d = dayjs(val);
    return d.isValid() ? d : dayjs();
  };

  const [checkInDate, setCheckInDate] = React.useState(
    safeDayjs(reservationState?.checkIn)
  );
  const [checkOutDate, setCheckOutDate] = React.useState(
    safeDayjs(reservationState?.checkOut)
  );
  const guestCount = reservation.guestCount || {};
  const [adults, setAdults] = React.useState(guestCount.adults || 1);
  const [children, setChildren] = React.useState(guestCount.children || 0);

  return (
    <div>
      <OverlappingWhiteBox>
        {" "}
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
                window.open("/reservation", "_blank", "noopener,noreferrer");
              }}
            >
              예약 조회
            </Button>
          </DemoContainer>
        </LocalizationProvider>
      </OverlappingWhiteBox>
    </div>
  );
}

export default QuickBook;
const OverlappingWhiteBox = styled.div`
  width: 1150px;
  height: auto;
  padding: 24px;
  background-color: white;
  margin: 0 auto;
  z-index: 3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
