import React from 'react';
import Modal from './Modal';

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit(newNote) {
    props.onEdit(newNote);
  }

  let date = new Date().toLocaleDateString('en-CA');

  return (
    <div className="note">
      <p id="category">{props.category}</p>
      <h1>{props.title.trim()}</h1>
      <p>{props.content.trim()}</p>
      <div id="bottom">
        <p id="date">{date}</p>
        <Modal
          id={props.id}
          title={props.title.trim()}
          content={props.content.trim()}
          onAdd={handleEdit}
        />
        <button id="delButton" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Note;
