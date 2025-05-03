import React, { useState } from 'react';
import SurveyStart from './pages/SurveyStart.jsx';
import Question1 from './pages/Question1.jsx';
import Question2 from './pages/Question2.jsx';
import Question3 from './pages/Question3.jsx';
import Question4 from './pages/Question4.jsx';
import Question5 from './pages/Question5.jsx';
import Question6 from './pages/Question6.jsx';

function App() {
  const [page, setPage] = useState('start');

  return (
    <>
      {page === 'start' && <SurveyStart goPage={setPage} />}
      {page === 'q1' && <Question1 goPage={setPage} />}
      {page === 'q2' && <Question2 goPage={setPage} />}
      {page === 'q3' && <Question3 goPage={setPage} />}
      {page === 'q4' && <Question4 goPage={setPage} />}
      {page === 'q5' && <Question5 goPage={setPage} />}
      {page === 'q6' && <Question6 />}
    </>
  );
}

export default App;
