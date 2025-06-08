/** 
 * Build a tabs component that displays one panel of content at a time depending on the active tab element. 
 * 
 * Requirements:
 * Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
 * At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
 * 
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("html");
  const customButtonStyle = (tab: string) => activeTab === tab ? "blue" : "black";
  const isHidden = (tab: string) => activeTab !== tab;

  return (
    <>
      <div>
        <Button
          key="html"
          style={{ color: customButtonStyle("html") }}
          onClick={() => setActiveTab("html")}
        >
          HTML
        </Button>
        <Button
          key="css"
          style={{ color: customButtonStyle("css") }}
          onClick={() => setActiveTab("css")}
        >
          CSS
        </Button>
        <Button
          key="js"
          style={{ color: customButtonStyle("js") }}
          onClick={() => setActiveTab("js")}
        >
          JavaScript
        </Button>
      </div>
      <div>
        <p key="html" hidden={isHidden("html")}>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        <p key="css" hidden={isHidden("css")}>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        <p key="js" hidden={isHidden("js")}>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
    </>
  );
}

export default Tabs;
