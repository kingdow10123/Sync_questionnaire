import React from 'react';
import './App.css';

function SurveyStart({ onNext }) {
  return (
    <div className="start-container">
      <div className="top-section">
        <img src="https://i.imgur.com/6CWTj3U.png" alt="問卷插畫" />
      </div>
      <div className="content-section">
        <h1>回顧你的一週</h1>
        <p className="subtitle">
          填寫 EQ-5D 生活品質問卷表<br />快速回顧你過去一週的生活健康
        </p>
        <button className="primary" onClick={onNext}>
          開始填寫
        </button>
      </div>
    </div>
  );
}

export default SurveyStart;
