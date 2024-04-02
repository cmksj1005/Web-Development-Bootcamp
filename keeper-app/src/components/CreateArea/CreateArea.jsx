import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

// Put this Array outside of the CreateArea function to use in Modal module as well
export const categories = ['Study', 'Work', 'Daily', 'Play'];

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: '',
    time: '',
  });
  let date = new Date();

  //insert time value into note
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        time: date,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
      category: '',
      time: '',
    });
    event.preventDefault();
  }

  // useEffect(() => {
  //   console.log('note:', note);
  // }, [note]);

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
        <select
          id="myForm"
          name="category"
          value={note.category}
          onChange={handleChange}
          required
        >
          <option value="">Category</option>
          <option value={categories[0]}>{categories[0]}</option>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
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
