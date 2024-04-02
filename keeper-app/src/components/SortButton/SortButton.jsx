import React from 'react';

const SortButton = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

export default SortButton;
