import React from 'react';
import './paper.css'
import Question from './question'
import Answer from './answer'

function Paper() {
  return (
    <div className="paper first-color">
      <div className="welcome primary-text">欢迎paper</div>
      <Question></Question>
      <Answer />
      <button className="backward secondary-text">回到上一题</button>
    </div>
  );
}

export default Paper;