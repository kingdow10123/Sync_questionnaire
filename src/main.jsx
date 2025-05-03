import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Start from './Start.jsx';
import Question1 from './Question1.jsx';
import Question2 from './Question2.jsx';
import Question3 from './Question3.jsx';
import Question4 from './Question4.jsx';
import Question5 from './Question5.jsx';
import Question6 from './Question6.jsx';
import Result from './Result.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Start />} />
          <Route path="/q1" element={<Question1 />} />
          <Route path="/q2" element={<Question2 />} />
          <Route path="/q3" element={<Question3 />} />
          <Route path="/q4" element={<Question4 />} />
          <Route path="/q5" element={<Question5 />} />
          <Route path="/q6" element={<Question6 />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
