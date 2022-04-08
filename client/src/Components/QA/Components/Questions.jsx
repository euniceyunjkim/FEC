import React from 'react';
import axios from 'axios';

function Questions({ question }) {
  function addHelpful(qId) {
    axios.put(`qa/questions/${qId}/helpful`, {});
  }

  return (
    <div className="question">
      <span>{question.question_body}</span>
      <span>Helpful?</span>
      <span onClick={() => addHelpful(question.question_id)} onKeyUp={() => addHelpful(question.question_id)}>Yes ({question.question_helpfulness}) |</span>
      <span> Add Answer</span>
    </div>
  );
}

export default Questions;
