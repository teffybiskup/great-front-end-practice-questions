import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Accordion from './components/Accordion/Accordion';
import ContactForm from './components/ContactForm/ContactForm';
import HolyGrail from './components/HolyGrail/HolyGrail';
import ProgressBars from './components/ProgressBars/ProgressBars';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Accordion/>
      <ContactForm/>
      <HolyGrail/>
      <ProgressBars/>
    </div>
  );
}

export default App;
