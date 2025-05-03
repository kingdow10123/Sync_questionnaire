import React, { useState } from 'react';
import './App.css';

function Question1({ onNext }) {
  const [answer, setAnswer] = useState(null);

  const handleNext = () => {
    if (!answer) {
      alert('請選擇一個選項！');
    } else {
      onNext({ q1: answer });
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">01</div>
      <div className="question-text">
        <h2>過去一週<br />我在行動能力上</h2>
      </div>
      <form>
        {[1, 2, 3].map((val) => (
          <label className="option" key={val}>
            <input type="radio" name="answer" value={val} onChange={() => setAnswer(val)} />
            <span className="circle-indicator"></span>
            {val === 1 && '我四處走動沒有困難'}
            {val === 2 && '我四處走動有一點困難'}
            {val === 3 && '我無法四處走動'}
          </label>
        ))}
      </form>
      <button className="next-btn" onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question1;
