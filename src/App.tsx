import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Accordion from './components/Accordion/Accordion';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Accordion/>
      <ContactForm/>
    </div>
  );
}

export default App;
