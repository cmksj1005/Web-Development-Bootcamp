import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import SortButton from './SortButton';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function editNote(newNote) {
    setNotes(
      notes.map((note, id) => {
        if (id === newNote.id) {
          return {
            ...note,
            title: newNote.title,
            content: newNote.content,
            category: newNote.category,
          };
        }
        return note;
      })
    );
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleButtonClick(name) {
    notes.sort(function (a, b) {
      return a.category - b.category;
    });

    console.log(notes);
  }

  return (
    <div>
      <Header />
      <div>
        <SortButton
          name="Category"
          onClick={() => handleButtonClick('category')}
        />
        <SortButton name="Date" onClick={() => handleButtonClick('date')} />
      </div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            category={noteItem.category}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
