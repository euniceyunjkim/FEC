import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import AddAnswer from './AddAnswer.jsx';
import { QStyle, ParentQ, QFeatures, QFeat } from './Styles/QA.js';

function Questions({ question, questions, index, allQuestions, setQuestions, helpfulAndReport }) {
  const [answers, setAnswers] = useState(question.answers.slice(0, 2));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAnswers(question.answers.slice(0, 2));
  }, [question]);

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

  return (
    <div>
      <ParentQ>
        <QStyle>Q: </QStyle>
        <QStyle>{question.question_body}</QStyle>
        <QFeatures>
          <QFeat>Helpful?</QFeat>
          { !question.helpfulQ
            ? (
              <QFeat
                onClick={() => addHelpful(question.question_id)}
                onKeyUp={() => addHelpful(question.question_id)}
                role="button"
                tabIndex={0}
              >
                Yes (
                {question.question_helpfulness}
                ) |
              </QFeat>
            )
            : (
              <QFeat>
                Yes but clicked (
                {question.question_helpfulness}
                ) |
              </QFeat>
            )}
          <AddAnswer
            showModal={showModal}
            setShowModal={setShowModal}
            question={question}
          />
        </QFeatures>
      </ParentQ>
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
