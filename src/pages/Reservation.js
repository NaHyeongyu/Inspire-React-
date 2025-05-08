import React, { useRef } from "react";
import ReservationHeader from "../components/Reservation_Contents/ReservationHeader";
import ReservationFooter from "../components/Reservation_Contents/ReservationFooter";
import ReservationRoom from "../components/Reservation_Contents/ReservationRoom";

function Reservation() {
  const roomRef = useRef();

  return (
    <div>
      <ReservationHeader roomRef={roomRef} />
      <ReservationRoom ref={roomRef} />
      <ReservationFooter />
    </div>
  );
}

export default Reservation;
