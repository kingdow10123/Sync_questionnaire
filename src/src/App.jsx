import React, { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import FoodRecord from './components/FoodRecord.jsx';
import ActivityRecord from './components/ActivityRecord.jsx';
import SurveyStart from './components/SurveyStart.jsx';
import Question1 from './components/Question1.jsx';
import Question2 from './components/Question2.jsx';
import Question3 from './components/Question3.jsx';
import Question4 from './components/Question4.jsx';
import Question5 from './components/Question5.jsx';
import Question6 from './components/Question6.jsx';

function App() {
  const [page, setPage] = useState('home');
  const [answers, setAnswers] = useState({});

  let content;

  // 依照 page 顯示不同內容
  if (page === 'food') content = <FoodRecord goHome={() => setPage('home')} />;
  else if (page === 'activity') content = <ActivityRecord goHome={() => setPage('home')} />;
  else if (page === 'survey') content = <SurveyStart startSurvey={() => setPage('q1')} />;
  else if (page === 'q1') content = <Question1 next={() => setPage('q2')} />;
  else if (page === 'q2') content = <Question2 next={() => setPage('q3')} />;
  else if (page === 'q3') content = <Question3 next={() => setPage('q4')} />;
  else if (page === 'q4') content = <Question4 next={() => setPage('q5')} />;
  else if (page === 'q5') content = <Question5 next={() => setPage('q6')} />;
  else if (page === 'q6') content = <Question6 finish={() => setPage('home')} />;
  else content = <Navigation goPage={setPage} />;

  return <div>{content}</div>;
}

export default App;
