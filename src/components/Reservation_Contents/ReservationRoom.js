import React from "react";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import roomData from "../../api/Reservation.json";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../redux/carSlice";

const ReservationRoom = React.forwardRef((props, ref) => {
  const [age, setAge] = React.useState("");
  const [rooms, setRooms] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState(null);
  const [actionType, setActionType] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) => state.reservation);

  const reloadRooms = () => {
    setLoading(true);
    setTimeout(() => {
      setRooms(roomData);
      setLoading(false);
    }, 2000);
  };

  React.useImperativeHandle(ref, () => ({
    reloadRooms,
  }));

  React.useEffect(() => {
    reloadRooms();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setAge(value);

    const sortedRooms = [...roomData]
      .sort((a, b) => {
        if (value === "name-asc") {
          return a.name.localeCompare(b.name, "ko");
        } else if (value === "price-asc") {
          return a.pricePerNight - b.pricePerNight;
        } else if (value === "price-desc") {
          return b.pricePerNight - a.pricePerNight;
        }
        return 0;
      })
      .sort((a, b) => {
        // Move disabled rooms to the bottom
        return a.status === b.status ? 0 : a.status ? -1 : 1;
      });

    setRooms(sortedRooms);
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "350px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "20px" }}>객실 정보를 불러오는중...</span>
      </div>
    );
  }

  return (
    <div>
      <RoomAll>
        <Menu>
          <span>이용 가능한 객실 ({roomData.length})</span>
          <FormControl fullWidth sx={{ width: "180px" }}>
            <InputLabel id="demo-simple-select-label">필터</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="name-asc">이름순</MenuItem>
              <MenuItem value="price-asc">가격 낮은 순</MenuItem>
              <MenuItem value="price-desc">가격 높은 순</MenuItem>
            </Select>
          </FormControl>
        </Menu>
        <RoomContainor>
          {rooms.map((room) => (
            <RoomItem key={room.id} $disabled={!room.status}>
              <RoomItemImg src={room.imageUrl} alt={room.name} />
              <RoomItemDetail>
                <DetailTitle>
                  <h4>{room.name}</h4>
                </DetailTitle>
                <DetialItems>
                  <DetailText>
                    <p className="size">{room.roomSize}</p>
                    <ul>
                      {room.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </DetailText>
                  <DetailButton>
                    <p>W{room.pricePerNight.toLocaleString()} /박</p>
                    <button
                      className="cartbutton"
                      disabled={!room.status}
                      onClick={() => {
                        setSelectedRoom(room);
                        setActionType("cart");
                        setIsModalOpen(true);
                      }}
                    >
                      장바구니
                    </button>
                    <button
                      className="bookbutton"
                      disabled={!room.status}
                      onClick={() => {
                        setSelectedRoom(room);
                        setActionType("book");
                        setIsModalOpen(true);
                      }}
                    >
                      예약
                    </button>
                  </DetailButton>
                </DetialItems>
              </RoomItemDetail>
            </RoomItem>
          ))}
        </RoomContainor>
      </RoomAll>
      {isModalOpen && selectedRoom && (
        <>
          <ModalOverlay />
          <ReservationConfirmModal
            reservation={reservation}
            actionType={actionType}
            onConfirm={() => {
              dispatch(
                addItem({
                  ...selectedRoom,
                  image: selectedRoom.imageUrl,
                  checkIn: reservation.checkIn,
                  checkOut: reservation.checkOut,
                  guestCount: reservation.guestCount,
                })
              );
              setIsModalOpen(false);
              if (actionType === "book") {
                navigate("/reservation/cart");
              }
            }}
            onCancel={() => setIsModalOpen(false)}
          >
            <div className="modaltitle">
              <span>예약 정보를 확인해주세요.</span>
            </div>
            <img src={selectedRoom.imageUrl}></img>
            <div className="modalitem">
              <p className="modalroom">{selectedRoom.name}</p>
              <div className="modaldetail">
                <span>
                  <z className="title">날짜: </z>
                  {reservation.checkIn} ~ {reservation.checkOut}
                </span>
              </div>
              <div className="modaldetail">
                {" "}
                <span>
                  <z className="title">인원: </z>
                  {reservation.guestCount.adults}성인{" "}
                  {reservation.guestCount.children}어린이
                </span>
              </div>
              <div className="modaldetail">
                <span className="modalprice">
                  <z className="title">요금: </z> {selectedRoom.pricePerNight}원
                </span>
              </div>
            </div>
            <div className="modalconfirm">
              <p>선택 완료됬습니다. 예약 진행을 원하십니까?</p>
              <button
                onClick={() => {
                  dispatch(
                    addItem({
                      ...selectedRoom,
                      image: selectedRoom.imageUrl,
                      checkIn: reservation.checkIn,
                      checkOut: reservation.checkOut,
                      guestCount: reservation.guestCount,
                    })
                  );
                  setIsModalOpen(false);
                  if (actionType === "book") {
                    navigate("/reservation/cart");
                  }
                }}
              >
                확인
              </button>
              <button onClick={() => setIsModalOpen(false)}>취소</button>{" "}
            </div>
          </ReservationConfirmModal>
        </>
      )}
    </div>
  );
});

export default ReservationRoom;
const RoomAll = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  margin: 300px auto 0;
  padding-top: 80px;
`;
const Menu = styled.div`
  max-width: 1300px;
  margin: 0 auto 40px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;
const RoomContainor = styled.div`
  max-width: 1300px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 40px;
`;
const RoomItem = styled.div`
  width: 400px;
  height: 550px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;

  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 8px;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
`;

const RoomItemImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
`;
const RoomItemDetail = styled.div`
  width: 100%;
  height: 330px;
  padding: 20px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const DetialItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const DetailText = styled.div`
  width: 210px;
  padding-right: 10px;
  border-right: 0.1px solid #dddddd;
  height: auto;
  .size {
    margin-bottom: 40px;
    font-size: 14px;
  }
  ,
  ul {
    padding: 0;
    padding-left: 16px;
    font-size: 14px;
  }
`;
const DetailButton = styled.div`
  width: 130px;
  height: auto;
  p {
    font-weight: bold;
    font-size: 18px;
  }
  button {
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .cartbutton {
    color: #6f5c80;
    background-color: white;
    border: rgb(182, 182, 182) 0.3px solid;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .bookbutton {
    color: white;
    font-weight: 500;
    border: none;
    background-color: #6f5c80;
    border-radius: 8px;
  }
`;
const ReservationConfirmModal = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  text-align: left;
  display: flex;
  flex-direction: column;
  .modalitem {
    padding: 10px 20px;
    span {
      font-size: 18px;
    }
  }
  .modaltitle {
    width: 100%;
    border-radius: 12px 12px 0 0;
    height: 60px;
    padding: 15px 20px;
    text-align: left;
    background-color: #6f5c80;
    span {
      color: white;
      font-size: 18px;
    }
  }

  p {
    margin: 16px 0;
    font-size: 16px;
    color: #333;
  }

  button {
    margin: 0 8px;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    height: 40px;
  }

  button:first-of-type {
    background-color: #6f5c80;
    color: white;
    border: none;
  }

  button:last-of-type {
    background-color: #eee;
    border: none;
  }
  img {
    width: 100%;
  }
  .modalroom {
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
  .modalconfirm {
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    border-top: 0.3px grey solid;
    margin-top: 20px;
    p {
      margin-right: 10px;
    }
  }
  .title {
    font-size: 17px;
    color: grey;
    margin-right: 10px;
  }
  .modaldetail {
    margin-bottom: 10px;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
`;
