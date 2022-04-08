import React from 'react';
import axios from 'axios';
import moment from 'moment';

function Answers({ answer }) {
  function addHelpful(aId) {
    axios.put(`qa/answers/${aId}/helpful`, {});
  }
  function addReport(aId) {
    axios.put(`qa/answers/${aId}/report`, {});
  }

  return (
    <div className="answer">
      <div>{answer.body}</div>
      <div>
      {answer.answerer_name.toLowerCase() === "seller" ? (<span>by <strong>{answer.answerer_name}</strong>, {moment(answer.date).format('MMMM Do YYYY')}|</span>) : (<span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}|</span>)}
        <span> Helpful? </span>
        <a onClick={() => addHelpful(answer.id)} onKeyUp={() => addHelpful(answer.id)}> Yes ({answer.helpfulness}) |</a>
        <span onClick={() => addReport(answer.id)} onKeyUp={() => addReport(answer.id)}> Report</span>
      </div>
    </div>
  );
}
export default Answers;
