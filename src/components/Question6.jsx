import React, { useState } from 'react';
import './App.css';

function Question6({ onSubmit, responses }) {
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    onSubmit({ ...responses, q6: score });
  };

  return (
    <div className="container">
      <div className="quarter-circle">06</div>
      <div className="question-text">
        <h2>過去一週<br />健康狀況自評</h2>
        <p className="description">
          回顧過去一週的健康狀況，請自評並拖動下方的滑桿（0為最不好，100為最好）。
        </p>
      </div>
      <div className="score-display">{score}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={score}
        className="slider"
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleSubmit}>完成</button>
    </div>
  );
}

export default Question6;
