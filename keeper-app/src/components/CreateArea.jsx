import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
      category: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          maxLength="30"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <select name="category" onChange={handleChange} required>
          <option value="">Category</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Daily">Daily</option>
          <option value="Play">Play</option>
        </select>
        <button id="addButton" type="submit">
          Add
        </button>
        {/* onSubmit makes an error here / required doesn't work when I use onClick here */}
      </form>
    </div>
  );
}

export default CreateArea;
