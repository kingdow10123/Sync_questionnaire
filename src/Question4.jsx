import React from 'react';
import { useNavigate } from 'react-router-dom';

function Question4() {
  const navigate = useNavigate();

  const handleNext = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("請選擇一個選項！");
    } else {
      navigate('/q5');
    }
  };

  return (
    <div className="container">
      <div className="quarter-circle">04</div>
      <div className="question-text">
        <h2>過去一週<br />是否感到疼痛或不舒服</h2>
      </div>
      <form>
        <label className="option"><input type="radio" name="answer" value="1" /><span className="circle-indicator"></span>我沒有疼痛或不舒服</label>
        <label className="option"><input type="radio" name="answer" value="2" /><span className="circle-indicator"></span>有中度的疼痛或不舒服</label>
        <label className="option"><input type="radio" name="answer" value="3" /><span className="circle-indicator"></span>我有非常嚴重的疼痛或不舒服</label>
      </form>
      <button onClick={handleNext}>下一題 ➔</button>
    </div>
  );
}

export default Question4;
