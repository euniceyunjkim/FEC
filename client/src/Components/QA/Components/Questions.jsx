import React, { useState } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

function Questions({ question, questions, index, allQuestions, setQuestions, helpfulAndReport }) {
  const [answers, setAnswers] = useState(question.answers.slice(0, 2));

  function addAnswers() {
    setAnswers(question.answers);
  }

  function collapse() {
    setAnswers(question.answers.slice(0, 2));
  }

  function addHelpful(qId) {
    axios.put(`qa/questions/${qId}/helpful`, {})
      .then(() => {
        helpfulAndReport[question.question_id] ? helpfulAndReport[question.question_id].helpful = true : helpfulAndReport[question.question_id] = { helpful: true, answers: {}, reported: {} };
        question.helpfulQ = true;
        question.question_helpfulness += 1;
        allQuestions[index] = question;
        setQuestions(allQuestions.slice(0, questions.length));
      });
  }

  // helpfulAndReport[question.question_id].helpful

  return (
    <div className="question_answers">
      <div className="question">
        <span>Q: </span>
        <span>{question.question_body}</span>
        <span>Helpful?</span>
        { !question.helpfulQ
          ? <span onClick={() => addHelpful(question.question_id)} onKeyUp={() => addHelpful(question.question_id)}>Yes ({question.question_helpfulness}) |</span> :
          <span> Yes but clicked ({question.question_helpfulness}) |</span>}
        <span> Add Answer</span>
      </div>
      {question.answers.length > 0
        ? (<div>
          <span>A: </span>
          <div>
            { answers.map((answer, answerIndex) => <Answers answerIndex={answerIndex} answer={answer[1]} allQuestions={allQuestions} setQuestions={setQuestions} helpfulAndReport={helpfulAndReport} question={question} index={index} questions={questions} />)}
            { answers.length < question.answers.length ? <div onClick={addAnswers}>See more answers</div> : answers.length > 2 ? <div onClick={collapse}>Collapse answers</div> : null}
          </div>
        </div>) : null}
    </div>
  );
}

export default Questions;
