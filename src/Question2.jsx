import React from 'react';
import { useNavigate } from 'react-router-dom';

function Question2() {
  const navigate = useNavigate();

  const handleNext = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("請選擇一個選項！");
    } else {
      navigate('/q3');
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">02</div>
      <div className="question-text">
        <h2>過去一週<br />我在自我照顧上</h2>
      </div>
      <form>
        <label className="option"><input type="radio" name="answer" value="1" /><span className="circle-indicator"></span>我自己洗澡或穿衣沒有困難</label>
        <label className="option"><input type="radio" name="answer" value="2" /><span className="circle-indicator"></span>我自己洗澡或穿衣有一點困難</label>
        <label className="option"><input type="radio" name="answer" value="3" /><span className="circle-indicator"></span>我無法自己洗澡或穿衣</label>
      </form>
      <button onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question2;
