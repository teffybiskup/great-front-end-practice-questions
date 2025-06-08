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
      <ComplexTabs
        items={[
          {
            value: 'counter',
            label: 'Counter',
            content: <Counter/>,
          },
          {
            value: 'accordion',
            label: 'Accordion',
            content: <Accordion/>,
          },
          {
            value: 'contact-form',
            label: 'Contact Form',
            content: <ContactForm/>,
          },
          {
            value: 'holy-grail',
            label: 'Holy Grail',
            content: <HolyGrail/>,
          },
          {
            value: 'progress-bars',
            label: 'Progress Bars',
            content: <ProgressBars/>,
          },
          {
            value: 'tabs',
            label: 'Tabs',
            content: <Tabs/>,
          }
        ]}
      />
    </div>
  );
}

export default App;
