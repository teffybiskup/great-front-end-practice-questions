/**
 * Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.
 * 
 * Requirements:
 * By default, all sections are collapsed and are hidden from view.
 * Clicking on a section title toggles the contents.
 * If the section is collapsed, the section will be expanded and the contents will be displayed.
 * If the section is expanded, the section will be collapsed and the contents will be hidden.
 * The sections are independent of each other.
 * 
 */
import React, { useState } from 'react';
import './Accordion.scss';

function Accordion() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev: number[]) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <>
      <div>
        <div 
          data-testid="first-item-title"
          onClick={() => toggleItem(1)}
          >
          HTML{' '}
          <span
            data-testid="first-item-icon"
            aria-hidden={true}
            className={`accordion-icon ${expandedItems.includes(1) && "accordion-icon--rotated"}`}
          />
        </div>
        <div
          id="1"
          data-testid="first-item-content"
          style={{ display: expandedItems.includes(1) ? 'inline' : 'none' }}
        >
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </div>
      </div>
      <div>
        <div
          data-testid="second-item-title" 
          onClick={() => toggleItem(2)}
        >
          CSS{' '}
          <span
            data-testid="second-item-icon"
            aria-hidden={true}
            className={`accordion-icon ${expandedItems.includes(2) && "accordion-icon--rotated"}`}
          />
        </div>
        <div
          id="2"
          data-testid="second-item-content"
          style={{ display: expandedItems.includes(2) ? 'inline' : 'none' }}
        >
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </div>
      </div>
      <div>
        <div 
          data-testid="third-item-title" 
          onClick={() => toggleItem(3)}
        >
          JavaScript{' '}
          <span
            data-testid="third-item-icon"
            aria-hidden={true}
            className={`accordion-icon ${expandedItems.includes(3) && "accordion-icon--rotated"}`}
          />
        </div>
        <div
          id="3"
          data-testid="third-item-content"
          style={{ display: expandedItems.includes(3) ? 'inline' : 'none' }}
        >
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </div>
      </div>
    </>
  );
}

export default Accordion;
