/** 
 * Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.
 * 
 * Requirements:
 * Clicking on the "Add" button adds a progress bar to the page.
 * Each progress bar start filling up smoothly as soon as they're added.
 * Each bar takes approximately 2000ms to completely fill up.
 * 
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./ProgressBars.scss"

interface Bar {
  id: number;
  progress: number;
}

function ProgressBars() {
  const [bars, setBars] = useState<Bar[]>([]);
  const [nextId, setNextId] = useState(0);

  const addProgressBar = () => {
    const id = nextId;
    setNextId(id + 1);
    setBars((prev) => [...prev, { id, progress: 0 }]);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setBars((prev) =>
        prev.map(bar =>
          bar.id === id
            ? { ...bar, progress: Math.min(progress, 100) }
            : bar
        )
      );
      if (progress >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <>
      <Button data-testid="add-button" onClick={addProgressBar}>Add</Button>
      <div style={{justifyItems: "center"}}>
        {bars.map((bar) => (
          <div data-testid="bar" key={bar.id} className="bar">
            <div
              data-testid="progress"
              className='progress'
              style={{width: `${bar.progress}%`, transition: "width 0.1s linear"}}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProgressBars;
