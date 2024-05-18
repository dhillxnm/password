import React, { useState, useEffect } from 'react';
import './css/index.css';
import Input from './components/Input';
import Keyboard from './components/Keyboard';

const App = () => {
  const [passcode, setPasscode] = useState('Passcode');
  const [message, setMessage] = useState('');

  const correctPasscode = '1234'; 

  useEffect(() => {
    if (passcode.length === correctPasscode.length) {
      handleSubmit();
    }
  }, [passcode]);

  const handleButtonClick = (number) => {
    if (message) {
      setPasscode('');
      setMessage('');
    }

    if (passcode === 'Passcode') {
      setPasscode(number.toString());
    } else if (passcode.length < correctPasscode.length) {
      setPasscode(passcode + number);
    }
  };

  const handleSubmit = () => {
    if (passcode === correctPasscode) {
      setMessage('Welcome!');
    } else {
      setMessage('Try again!');
      setPasscode('');
    }
  };

  return (
          <div className='mobile'>
              <div className='center'>
                 <Input value={message || passcode} />
                 <Keyboard onButtonClick={handleButtonClick} />
              </div>
              <div className='bottom-line'></div>
          </div>
  );
};


export default App;



