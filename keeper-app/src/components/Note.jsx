import React from 'react';
import Modal from './Modal';

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  console.log(props);

  function handleEdit(newNote) {
    props.onEdit(newNote);
  }

  let date = new Date().toLocaleDateString('en-CA');

  return (
    <div className="note">
      <h1>{props.title.trim()}</h1>
      <p>{props.category}</p>
      <p>{props.content.trim()}</p>
      <div id="bottom">
        <p id="date">{date}</p>
        <Modal
          id={props.id}
          title={props.title.trim()}
          content={props.content.trim()}
          onAdd={handleEdit}
        />
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
