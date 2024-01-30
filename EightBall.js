// EightBall.js

import React, { useState } from 'react';
import './EightBall.css';

function EightBall(props) {
  const { answers } = props;
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <div className="message">{message}</div>
    </div>
  );
}

export default EightBall;
