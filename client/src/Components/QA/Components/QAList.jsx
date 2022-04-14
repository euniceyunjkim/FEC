import React, { useState } from 'react';
import Questions from './Questions.jsx';
import { QAListStyle } from './Styles/QA.js';

function QAList({ questions, allQuestions, setQuestions, helpfulAndReport }) {
  return (
    <QAListStyle>
      {questions.map((question, index) => <Questions question={question} questions={questions} index={index} allQuestions={allQuestions} setQuestions={setQuestions} helpfulAndReport={helpfulAndReport} />)}
    </QAListStyle>
  );
}

export default QAList;
