import React from 'react';
import ReactDOM from 'react-dom/client';
import Clicky from './examplesClasses/CIicky';
import ClickyTwo from './examplesFunctional/ClickyTwo';
import CountDown from './examplesFunctional/CountDown';
import LoginForm from './examplesFunctional/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Clicky /> */}
    {/* <ClickyTwo /> */}
    {/* <CountDown startTime={5} /> */}
    <LoginForm />
  </React.StrictMode>
);


