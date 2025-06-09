import React from 'react';
import './App.css';
import { 
  Accordion, 
  Tabs, 
  ComplexTabs, 
  Counter, 
  ContactForm, 
  HolyGrail, 
  ProgressBars, 
  DataTable
} from './components';

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
          },
          {
            value: 'data-table',
            label: 'Data Table',
            content: <DataTable/>,
          }
        ]}
      />
    </div>
  );
}

export default App;
