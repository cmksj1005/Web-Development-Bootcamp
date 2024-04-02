import React from 'react';
import Modal from './Modal';

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit(newNote) {
    props.onEdit(newNote);
  }

  function displayDate(time) {
    // Get year, month, and day
    let year = time.getFullYear();
    let month = time.getMonth() + 1; // getMonth() is zero-based
    let day = time.getDate();

    // Format month and day to ensure they are in 'MM' or 'DD' format
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    // Combine into a YYYY-MM-DD string
    let formattedDate = year + '-' + month + '-' + day;

    return formattedDate;
  }

  return (
    <div className="note">
      <p id="category">{props.category}</p>
      <h1>{props.title.trim()}</h1>
      <p>{props.content.trim()}</p>
      <div id="bottom">
        <p id="date">{displayDate(props.time)}</p>
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
