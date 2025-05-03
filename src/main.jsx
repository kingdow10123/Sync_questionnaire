import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SurveyStart from './components/SurveyStart';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import './components/App.css';

function App() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});

  const nextStep = (newResponses) => {
    setResponses(newResponses);
    setStep(step + 1);
  };

  const handleSubmit = (finalResponses) => {
    console.log('完成的問卷結果:', finalResponses);
    alert('問卷已完成，感謝您的填寫！');
    // 可加上關閉頁面或跳回首頁
  };

  return (
    <>
      {step === 0 && <SurveyStart onNext={() => setStep(1)} />}
      {step === 1 && <Question1 onNext={nextStep} />}
      {step === 2 && <Question2 onNext={nextStep} responses={responses} />}
      {step === 3 && <Question3 onNext={nextStep} responses={responses} />}
      {step === 4 && <Question4 onNext={nextStep} responses={responses} />}
      {step === 5 && <Question5 onNext={nextStep} responses={responses} />}
      {step === 6 && <Question6 onSubmit={handleSubmit} responses={responses} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
