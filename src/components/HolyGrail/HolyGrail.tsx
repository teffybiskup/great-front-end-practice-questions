/** 
 * Build the famous holy grail layout consisting of a header, 3 columns, and a footer. The Holy Grail layout is a famous CSS page layout that has traditionally been hard to implement. It consists of a header, footer, and three columns.
 * Implement the Holy Grail layout using just CSS. You shouldn't need to change the HTML too much.
 * 
 * Requirements:
 * Header
 *   Stretches horizontally across the whole page.
 *   60px tall.
 * Columns
 *   Both the left and right columns have a fixed width of 100px.
 *   The center column is fluid-width.
 *   All the columns should have the same height, regardless of which column is the tallest.
 * Footer
 *   Stretches horizontally across the whole page.
 *   100px tall.
 * The footer should be at the bottom of the page even if there is not enough content to fill up the viewport height.

 * 
 */
import React from 'react';
import './HolyGrail.scss';

function HolyGrail() {
  return (
    <div className="layout">
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default HolyGrail;
