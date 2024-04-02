import React, { useState } from 'react';
import { categories } from '../CreateArea/CreateArea';
import './Modal.css';

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
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
              <div id="buttonLocation">
                <select
                  id="modalForm"
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
                <div>
                  <button className="modalButton" onClick={editNote}>
                    EDIT
                  </button>
                  <button className="modalButton" onClick={toggleModal}>
                    CLOSE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
