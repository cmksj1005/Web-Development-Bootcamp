import React from 'react';
import Header from './Header';
import Footer from './Footer';
import notes from '../note';
import Note from './Note';

function App() {
  return (
    <div>
      <Header />
      {notes.map((props) => (
        <Note key={props.key} title={props.title} content={props.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
