import React from 'react';
import Choice from './choice'
function handleChooseAnswer(){
  console.log('object');
}
function Answer() {
  return (
    <div className="answer card">
      <Choice click={handleChooseAnswer}></Choice>
      <Choice click={handleChooseAnswer}></Choice>
    </div>
  );
}

export default Answer;