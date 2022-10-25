import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JobService from './service/job';

const jobService = new JobService(process.env.REACT_APP_BASE_URL);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App jobService={jobService} />
  </React.StrictMode>
);
