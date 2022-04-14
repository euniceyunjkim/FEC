import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { AFeatures, AFeat, AFeat1, AFeat2, AFeat21, AFeat3, ABody, Div } from './Styles/QA.js';

function Answers({ answerIndex, answer, allQuestions, setQuestions, helpfulAndReport, question, index, questions }) {
  function addHelpful(aId) {
    axios.put(`qa/answers/${aId}/helpful`, {})
      .then(() => {
        helpfulAndReport[question.question_id]
          ? helpfulAndReport[question.question_id].answers[answer.id] = true
          : helpfulAndReport[question.question_id] = {
            helpful: false,
            answers: {[answer.id]: true},
            reported: {}
          };
        question.helpfulAnswers
          ? question.helpfulAnswers[answer.id] = true
          : question.helpfulAnswers = { [answer.id]: true };
        question.answers[answerIndex][1].helpfulness += 1;
        allQuestions[index] = question;
        setQuestions(allQuestions.slice(0, questions.length));
      })
      .catch((err) => new Error(err));
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
    <Div>
      <ABody>{answer.body}</ABody>
      <AFeatures>
        {answer.answerer_name.toLowerCase() === "seller" ? (<AFeat>by <strong>{answer.answerer_name}</strong>, {moment(answer.date).format('MMMM Do YYYY')}&nbsp; &nbsp;</AFeat>) : (<AFeat>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}&nbsp; &nbsp;</AFeat>)}
          <AFeat1> Helpful? &nbsp;</AFeat1>
          {question.helpfulAnswers && question.helpfulAnswers[answer.id]
          ? <AFeat21> Yes ({answer.helpfulness})</AFeat21> :
          <AFeat2 onClick={() => addHelpful(answer.id)} onKeyUp={() => addHelpful(answer.id)}> Yes ({answer.helpfulness})</AFeat2>}
          {question.reportedAnswers && question.reportedAnswers[answer.id] ? <AFeat3>&nbsp; | &nbsp; Reported</AFeat3>
          : <AFeat3 onClick={() => addReport(answer.id)} onKeyUp={() => addReport(answer.id)}>&nbsp; | &nbsp; Report</AFeat3> }
      </AFeatures>
    </Div>
  );
}
export default Answers;
