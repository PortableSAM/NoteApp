import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import firebase from "./Fire/Fire_Config";
import Note from "./Note";
import "./NoteApp.css";

function NoteApp() {
  const [note, setNote] = React.useState([]);

  React.useEffect(() => {
    const fetchData = () => {
      const db = firebase.firestore();
      //Firestore Collection and orderBy Set
      const dbRef = db.collection("noteapp").orderBy("createAt", "desc");
      //FireStore RealTime listener
      dbRef.onSnapshot(snapshot => {
        const newNote = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNote(newNote);
      });
    };
    return fetchData();
  }, []);

  console.log(note);
  return (
    <Container>
      <Row>
        <Col lg={12} md={"auto"} sm={"auato"}>
          <h2>Note App</h2>
        </Col>
      </Row>
      <div className="warpper-container">
        {note.map((note, index) => (
          <Note
            id={note.id}
            key={index}
            title={note.title}
            task={note.task}
            place={note.place}
            date={new Date(note.createAt.seconds * 1000).toDateString("ko")}
          />
        ))}
      </div>
      <div className="App-footer">
        <Link to="/create">
          <button className="btn btn-outline-success">Add Note</button>
        </Link>
      </div>
    </Container>
  );
}

export default NoteApp;
