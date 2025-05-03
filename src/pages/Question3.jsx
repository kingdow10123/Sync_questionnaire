import React, { useState } from 'react';
import './App.css';

function Question3({ onNext, responses }) {
  const [answer, setAnswer] = useState(null);

  const handleNext = () => {
    if (!answer) {
      alert('請選擇一個選項！');
    } else {
      onNext({ ...responses, q3: answer });
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">03</div>
      <div className="question-text">
        <h2>過去一週<br />我在日常活動上</h2>
      </div>
      <form>
        {[1, 2, 3].map((val) => (
          <label className="option" key={val}>
            <input type="radio" name="answer" value={val} onChange={() => setAnswer(val)} />
            <span className="circle-indicator"></span>
            {val === 1 && '我進行日常活動沒有困難'}
            {val === 2 && '我進行日常活動有一點困難'}
            {val === 3 && '我無法進行日常活動'}
          </label>
        ))}
      </form>
      <button className="next-btn" onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question3;
