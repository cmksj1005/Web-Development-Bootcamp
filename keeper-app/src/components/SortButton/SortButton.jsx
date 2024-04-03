import React from 'react';
import './SortButton.css';

const SortButton = ({ name, onClick }) => {
  return (
    <button id="SortButton" onClick={onClick}>
      {name}
    </button>
  );
};

export default SortButton;
