import React, { useState } from 'react';
import './App.css';

function Question4({ onNext, responses }) {
  const [answer, setAnswer] = useState(null);

  const handleNext = () => {
    if (!answer) {
      alert('請選擇一個選項！');
    } else {
      onNext({ ...responses, q4: answer });
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">04</div>
      <div className="question-text">
        <h2>過去一週<br />是否感到疼痛或不舒服</h2>
      </div>
      <form>
        {[1, 2, 3].map((val) => (
          <label className="option" key={val}>
            <input type="radio" name="answer" value={val} onChange={() => setAnswer(val)} />
            <span className="circle-indicator"></span>
            {val === 1 && '我沒有疼痛或不舒服'}
            {val === 2 && '有中度的疼痛或不舒服'}
            {val === 3 && '我有非常嚴重的疼痛或不舒服'}
          </label>
        ))}
      </form>
      <button className="next-btn" onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question4;
