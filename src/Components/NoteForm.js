import React from "react";
import firebase from "./Fire/Fire_Config";
import { Link } from "react-router-dom";
import "./NoteForm.css";

function NoteForm() {
  const [newNoteTitle, setNewNoteTitle] = React.useState();
  const [newNoteTask, setNewNoteTask] = React.useState();
  const [newNotePlace, setNewNotePlace] = React.useState();

  const newND = firebase.firestore.Timestamp.fromDate(new Date());

  const newNote = {
    title: newNoteTitle,
    task: newNoteTask,
    place: newNotePlace,
    createAt: newND
  };

  const handleAddNote = () => {
    const db = firebase.firestore();
    const dbRef = db.collection("noteapp");
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
