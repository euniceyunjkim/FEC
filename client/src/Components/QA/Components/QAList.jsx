import React, { useState } from 'react';
import Questions from "./Questions.jsx";

function QAList({ questions, allQuestions, setQuestions, helpfulAndReport }) {
  return (
    <div>
      {questions.map((question, index) => <Questions question={question} questions={questions} index={index} allQuestions={allQuestions} setQuestions={setQuestions} helpfulAndReport={helpfulAndReport} />)}
    </div>
  );
}

export default QAList;
