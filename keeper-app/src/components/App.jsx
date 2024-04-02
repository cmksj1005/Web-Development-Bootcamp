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
    //sorting notes array according to components
    notes.sort((item1, item2) => {
      if (item1[name] < item2[name]) {
        return -1;
      }
      if (item1[name] > item2[name]) {
        return 1;
      }
      return 0;
    });
    //re-arranage the note array
    setNotes([...notes]);
  }

  return (
    <div>
      <Header />
      <div>
        <SortButton
          name="Category"
          onClick={() => handleButtonClick('category')}
        />
        <SortButton name="Date" onClick={() => handleButtonClick('time')} />
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
            time={noteItem.time}
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
