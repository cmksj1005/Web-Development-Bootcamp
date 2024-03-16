import React, { useState } from 'react';

export default function Modal(props) {
  const [modal, setModal] = useState(false);
  const [note, setNote] = useState({
    id: props.id,
    title: props.content,
    content: props.content,
    category: props.category,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        id: props.id,
        [name]: value,
      };
    });
  }

  function editNote(event) {
    setModal(!modal);
    event.preventDefault();
    props.onAdd(note);
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        EDIT
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form>
              <input
                name="title"
                value={note.title}
                placeholder="Title"
                onChange={handleChange}
                maxLength="30"
                required
              />
              <textarea
                name="content"
                value={note.content}
                onChange={handleChange}
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
              <button onClick={toggleModal}>CLOSE</button>
              <button onClick={editNote}>EDIT</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
