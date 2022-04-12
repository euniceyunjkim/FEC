import React, { useState } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import AddAnswer from './AddAnswer.jsx';

function Questions({ question, questions, index, allQuestions, setQuestions, helpfulAndReport }) {
  const [answers, setAnswers] = useState(question.answers.slice(0, 2));
  const [showModal, setShowModal] = useState(false);

  function addAnswers() {
    setAnswers(question.answers);
  }

  function collapse() {
    setAnswers(question.answers.slice(0, 2));
  }

  function addHelpful(qId) {
    axios.put(`qa/questions/${qId}/helpful`, {})
      .then(() => {
        helpfulAndReport[question.question_id]
          ? helpfulAndReport[question.question_id].helpful = true
          : helpfulAndReport[question.question_id] = { helpful: true, answers: {}, reported: {} };
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
          ? (
            <span
              onClick={() => addHelpful(question.question_id)}
              onKeyUp={() => addHelpful(question.question_id)}
              role="button"
              tabIndex={0}
            >
              Yes (
              {question.question_helpfulness}
              ) |
            </span>
          )
          : (
            <span>
              Yes but clicked (
              {question.question_helpfulness}
              ) |
            </span>
          )}
        <AddAnswer showModal={showModal} setShowModal={setShowModal} />
      </div>
      {question.answers.length > 0
        ? (
          <div>
            <span>A: </span>
            <div>
              { answers.map((answer, answerIndex) => (
                <Answers
                  answerIndex={answerIndex}
                  answer={answer[1]}
                  allQuestions={allQuestions}
                  setQuestions={setQuestions}
                  helpfulAndReport={helpfulAndReport}
                  question={question}
                  index={index}
                  questions={questions}
                />
              ))}
              { answers.length < question.answers.length
                ? <div onClick={addAnswers} onKeyUp={addAnswers} role="button" tabIndex={0}>See more answers</div>
                : null}
              {answers.length > 2
                ? <div onClick={collapse} onKeyUp={collapse} role="button" tabIndex={0}>Collapse answers</div>
                : null}
            </div>
          </div>
        ) : null}
    </div>
  );
}

export default Questions;
