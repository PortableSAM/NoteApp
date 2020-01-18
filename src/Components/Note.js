import React from "react";
import firebase from "./Fire/Fire_Config";

function Note({ id, title, task, place, date }) {
  const onDelete = () => {
    const db = firebase.firestore();
    //FireStore collection에서 문서 ID 참조 후 삭제
    const dbRef = db.collection("noteapp").doc(id);
    dbRef.delete();
  };

  return (
    <div className="note-container">
      <div className="note-item">
        <h3>Title: {title}</h3>
        <h3>To-do: {task}</h3>
        <h3>Place: {place}</h3>
        <h3>Date: {date}</h3>
      </div>
      <div className="del-btn">
        <button className="btn btn-outline-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
