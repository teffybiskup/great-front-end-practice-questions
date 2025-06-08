/** 
 * Build a simple counter that increments whenever a button is clicked. Make the text within the button display the number of times the button has been clicked.
 * 
 * Requirements:
 * Make the text within the button display the number of times the button has been clicked.
 * 
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button data-testid="button" onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
  );
}

export default Counter;
