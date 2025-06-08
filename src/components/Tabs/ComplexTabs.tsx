/** 
 * Build a tabs component that displays one panel of content at a time depending on the active tab element. 
 * 
 * Requirements:
 * Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
 * At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
 * 
 */
import React, { ReactElement, useState } from 'react';
import './ComplexTabs.scss';

type TabItem = {
  label: string;
  value: string;
  content: ReactElement | string;
};

type ComplexTabsProps = {
  items: TabItem[];
};

function ComplexTabs({ items }: ComplexTabsProps) {
  const [value, setValue] = useState(items[0].value);

  return (
    <>
      <div className="tabs">
        <div className="tabs-list">
          {items.map(({ label, value: itemValue }) => {
            const isActiveValue = itemValue === value;

            return (
              <button
                key={itemValue}
                type="button"
                className={[
                  'tabs-list-item',
                  isActiveValue && 'tabs-list-item--active',
                ]
                  .join(' ')}
                onClick={() => {
                  setValue(itemValue);
                }}>
                {label}
              </button>
            );
          })}
        </div>
        {items.map(({ label, content, value: itemValue }) => (
          <div key={itemValue} hidden={itemValue !== value} style={{ width: "100%" }}>
            <h3>{label}</h3>
            {content}
          </div>
        ))}
      </div>
    </>
  );
}

export default ComplexTabs;
