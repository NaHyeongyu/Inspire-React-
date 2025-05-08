import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
function Board() {
  const [qnaList, setQnaList] = useState([
    {
      id: "1",
      title: "대관 문의드립니다.",
      content: "5월중에 대관하고 싶은데 가능한 시간과 비용을 알고싶습니다.",
    },
    {
      id: "2",
      title: "반려동물 동반 가능한가용?",
      content: "반려동물 두마리랑 같이 갈려고 하는데 가능한가요?",
    },
    {
      id: "3",
      title: "예약은 어떻게 하나요?",
      content: "예약방법을 알고싶습니다.",
    },
  ]);

  const boardApi = [...qnaList];

  const Delete = (id) => {
    const updatedList = qnaList.filter((item) => item.id !== id);
    setQnaList(updatedList);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // or "edit" or "view"
  const [selectedItem, setSelectedItem] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");

  const openCreateModal = () => {
    setModalMode("create");
    setSelectedItem(null);
    setFormTitle("");
    setFormContent("");
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setSelectedItem(item);
    setFormTitle(item.title);
    setFormContent(item.content);
    setIsModalOpen(true);
  };

  const openViewModal = (item) => {
    setModalMode("view");
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === "create") {
      const newItem = {
        id: String(qnaList.length + 1),
        title: formTitle,
        content: formContent,
      };
      setQnaList([...qnaList, newItem]);
    } else if (modalMode === "edit" && selectedItem) {
      const updated = qnaList.map((item) =>
        item.id === selectedItem.id
          ? { ...item, title: formTitle, content: formContent }
          : item
      );
      setQnaList(updated);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header></Header>
      <BoardAll>
        <Write>
          <button onClick={openCreateModal}>글 쓰기</button>
        </Write>
        <StyledTable>
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>글 내용</th>
              <th>바로가기</th>
            </tr>
          </thead>
          <tbody>
            {boardApi.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => openViewModal(item)}
                  className="title"
                >
                  {item.title}
                </td>

                <td>{item.content}</td>

                <td>
                  <button onClick={() => openEditModal(item)}>수정</button>
                  <button
                    variant="outline-danger"
                    onClick={() => Delete(item.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        {isModalOpen && (
          <>
            <ModalOverlay />
            <ModalWrapper>
              {modalMode === "view" ? (
                <>
                  <h3>글 보기</h3>
                  <div style={{ marginBottom: "12px" }}>
                    <strong>제목</strong>
                    <div style={{ marginTop: "4px" }}>{selectedItem.title}</div>
                  </div>
                  <div style={{ marginBottom: "12px" }}>
                    <strong>내용</strong>
                    <div style={{ marginTop: "4px", whiteSpace: "pre-line" }}>
                      {selectedItem.content}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", marginTop: "20px" }}>
                    <button onClick={() => setIsModalOpen(false)}>닫기</button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{modalMode === "create" ? "글쓰기" : "글수정"}</h3>
                  <div>
                    <label>제목</label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>내용</label>
                    <textarea
                      rows="5"
                      value={formContent}
                      onChange={(e) => setFormContent(e.target.value)}
                    />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <button onClick={handleSubmit}>저장</button>
                    <button onClick={() => setIsModalOpen(false)}>닫기</button>
                  </div>
                </>
              )}
            </ModalWrapper>
          </>
        )}
      </BoardAll>
      <Footer></Footer>
    </div>
  );
}

export default Board;

const BoardAll = styled.div`
  width: 100%;
  max-width: 1488px;
  height: autopx;
  margin: 0 auto;
  margin-top: 200px;
`;
const Write = styled.div`
  width: 100%;
  max-width: 1488px;
  height: 60px;
  text-align: right;

  button {
    background-color: #6f5c80;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #59436a;
    }
  }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  thead {
    background-color: #6f5c80;
    color: white;
  }

  th,
  td {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  tbody tr:hover {
    background-color: #f9f9f9;
  }

  button {
    margin: 0 4px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:nth-child(1) {
    background-color: #fff;
    color: #6f5c80;
    border: 1px solid #6f5c80;
  }

  button:nth-child(2) {
    background-color: #e57373;
    color: white;
  }
  .title {
    color: blue;
    font-decoration: line;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  width: 500px;
  text-align: left;

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
    color: #555;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    margin-left: 8px;
  }

  button:first-of-type {
    background-color: #6f5c80;
    color: white;
  }

  button:last-of-type {
    background-color: #eee;
    color: #333;
  }
`;
