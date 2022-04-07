import React from 'react';

function Questions({ question }) {
  return (
    <div className="question">
      <span>Q: {question.question_body}</span>
      <span>Helpful?</span>
      <span>Yes ({question.question_helpfulness}) |</span>
      <span> Add Answer</span>
    </div>
  );
}

export default Questions;
