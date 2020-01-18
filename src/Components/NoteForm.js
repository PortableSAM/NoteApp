import React from "react";
import firebase from "./Fire/Fire_Config";
import { Link } from "react-router-dom";
import "./NoteForm.css";

function NoteForm() {
  //인풋 데이터 값을 useState를 사용해서 상태값을 관리
  const [newNoteTitle, setNewNoteTitle] = React.useState();
  const [newNoteTask, setNewNoteTask] = React.useState();
  const [newNotePlace, setNewNotePlace] = React.useState();

  //FireStore 데이터 생성 시간을 Timestamp로 생성
  const newND = firebase.firestore.Timestamp.fromDate(new Date());

  // FireStore 문서 필드 값에 State 값 설정
  const newNote = {
    title: newNoteTitle,
    task: newNoteTask,
    place: newNotePlace,
    createAt: newND
  };

  //onClick 이벤트 발생하면 newNote 값을 FireStore에 전송
  const handleAddNote = () => {
    const db = firebase.firestore();
    const dbRef = db.collection("noteapp");
    //FireStore collection 문서에 데이터 추가
    //Try,Catch로 정상 실행과 에러 실행을 구분
    try {
      dbRef.add(newNote);
      console.log("노트 추가 성공");
      alert("노트 추가");
    } catch (error) {
      console.error("노트 추가 실패", error);
      alert("노트 추가 실패");
    }
  };

  return (
    <div className="form">
      <div className="form-title">
        <h3>Note Add</h3>
      </div>
      <div className="form-container">
        <div className="form-item">
          <label>Title</label>
          <input
            type="text"
            placeholder="Note Title"
            defaultValue={setNewNoteTitle}
            onChange={e => setNewNoteTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>To Do</label>
          <input
            type="text"
            placeholder="Note Todo"
            defaultValue={setNewNoteTask}
            onChange={e => setNewNoteTask(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Place</label>
          <input
            type="text"
            placeholder="Todo Place"
            defaultValue={setNewNotePlace}
            onChange={e => setNewNotePlace(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <Link to="/">
            <button
              type="submit"
              onClick={handleAddNote}
              className="btn btn-outline-primary"
            >
              Add Note
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-secondary">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoteForm;
