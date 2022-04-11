import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function Answers({ answerIndex, answer, allQuestions, setQuestions, helpfulAndReport, question, index, questions }) {
  function addHelpful(aId) {
    axios.put(`qa/answers/${aId}/helpful`, {})
      .then(() => {
        helpfulAndReport[question.question_id] ? helpfulAndReport[question.question_id].answers[answer.id] = true : helpfulAndReport[question.question_id] = { helpful: false, answers: {[answer.id]: true}, reported: {}};
        question.helpfulAnswers ? question.helpfulAnswers[answer.id] = true : question.helpfulAnswers = { [answer.id]: true };
        question.answers[answerIndex][1].helpfulness += 1;
        allQuestions[index] = question;
        setQuestions(allQuestions.slice(0, questions.length));
      })
      .catch((err) => console.error(err));
  }

  function addReport(aId) {
    axios.put(`qa/answers/${aId}/report`, {})
      .then(() => {
        helpfulAndReport[question.question_id] ? helpfulAndReport[question.question_id].reported[answer.id] = true : helpfulAndReport[question.question_id] = { helpful: false, answers: {[answer.id]: true}, reported: {[answer.id]: true}};
        question.reportedAnswers ? question.reportedAnswers[answer.id] = true : question.reportedAnswers = { [answer.id]: true };
        question.helpfulAnswers ? question.helpfulAnswers[answer.id] = true : question.helpfulAnswers = { [answer.id]: true };
        allQuestions[index] = question;
        setQuestions(allQuestions.slice(0, questions.length));
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="answer">
      <div>{answer.body}</div>
      <div>
      {answer.answerer_name.toLowerCase() === "seller" ? (<span>by <strong>{answer.answerer_name}</strong>, {moment(answer.date).format('MMMM Do YYYY')}|</span>) : (<span>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}|</span>)}
        <span> Helpful? </span>
        {question.helpfulAnswers && question.helpfulAnswers[answer.id]
        ? <span> Yes but clicked ({answer.helpfulness}) |</span> :
        <span onClick={() => addHelpful(answer.id)} onKeyUp={() => addHelpful(answer.id)}> Yes ({answer.helpfulness}) |</span>}
        {question.reportedAnswers && question.reportedAnswers[answer.id] ? <span> Reported</span>
        : <span onClick={() => addReport(answer.id)} onKeyUp={() => addReport(answer.id)}> Report</span> }
      </div>
    </div>
  );
}
export default Answers;
