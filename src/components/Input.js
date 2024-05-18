// Input.js
import React from 'react';

const Input = ({ value }) => {
  // If the value is numeric, convert it to dots
  const hiddenValue = /^\d+$/.test(value) ? '*'.repeat(value.length) : value;

  return <input className="passcode-input" type="text" value={hiddenValue} readOnly />;
};

export default Input;
