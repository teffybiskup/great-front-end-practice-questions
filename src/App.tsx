import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Accordion from './components/Accordion/Accordion';
import ContactForm from './components/ContactForm/ContactForm';
import HolyGrail from './components/HolyGrail/HolyGrail';
import ProgressBars from './components/ProgressBars/ProgressBars';
import Tabs from './components/Tabs/Tabs';
import ComplexTabs from './components/Tabs/ComplexTabs';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Accordion/>
      <ContactForm/>
      <HolyGrail/>
      <ProgressBars/>
      <Tabs/>
      <ComplexTabs
        items={[
          {
            value: 'html',
            label: 'HTML',
            content:
              'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
          },
          {
            value: 'css',
            label: 'CSS',
            content:
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
          },
          {
            value: 'javascript',
            label: 'JavaScript',
            content:
              'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
          },
        ]}
      />
    </div>
  );
}

export default App;
