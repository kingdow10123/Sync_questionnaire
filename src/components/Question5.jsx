import React, { useState } from 'react';
import './App.css';

function Question5({ onNext, responses }) {
  const [answer, setAnswer] = useState(null);

  const handleNext = () => {
    if (!answer) {
      alert('請選擇一個選項！');
    } else {
      onNext({ ...responses, q5: answer });
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">05</div>
      <div className="question-text">
        <h2>過去一週<br />是否感到焦慮或沮喪</h2>
      </div>
      <form>
        {[1, 2, 3].map((val) => (
          <label className="option" key={val}>
            <input type="radio" name="answer" value={val} onChange={() => setAnswer(val)} />
            <span className="circle-indicator"></span>
            {val === 1 && '我沒有焦慮或沮喪'}
            {val === 2 && '我有中度的焦慮或沮喪'}
            {val === 3 && '我有非常嚴重的焦慮或沮喪'}
          </label>
        ))}
      </form>
      <button className="next-btn" onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question5;
