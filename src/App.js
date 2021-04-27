import React, { useState } from "react";
import Header from "../src/components/Header";
import CreateArea from "../src/components/CreateArea";
import Note from "../src/components/Note";
import Footer from "../src/components/Footer"

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {

    if (newNote.name === "" || newNote.number === "") {
      alert("Please enter valid information!")
    } else {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            name={noteItem.name}
            number={noteItem.number}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
  </div>
  );
}

export default App;
