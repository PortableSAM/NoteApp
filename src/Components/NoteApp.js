import React from "react";
import { Container, Row, Col } from "reactstrap";
import Note from "./Note";
import NoteForm from "./NoteForm";
import "./NoteApp.css";

function NoteApp() {
  return (
    <Container>
      <Row>
        <Col lg={8} md={"auto"} sm={"auato"}>
          <h2>Note App</h2>
        </Col>
      </Row>
      <div className="warpper-container">
        <Note />
      </div>
      <div className="App-footer">
        <NoteForm />
      </div>
    </Container>
  );
}

export default NoteApp;
