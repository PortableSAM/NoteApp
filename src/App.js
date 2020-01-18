import React from "react";
import NoteApp from "./Components/NoteApp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoteForm from "./Components/NoteForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={NoteApp} />
        <Route path="/create" component={NoteForm} />
      </Router>
    </div>
  );
}

export default App;
