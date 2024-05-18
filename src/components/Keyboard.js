
import React from 'react';

const  Keyboard = ({ onButtonClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="keyboard">
      {numbers.map((number) => (
        <button key={number} onClick={() => onButtonClick(number)}>
         <p className='number'>{number}</p>
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
