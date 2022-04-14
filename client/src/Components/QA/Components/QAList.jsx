import React from 'react';
import Questions from './Questions';
import { QAListStyle } from './Styles/QA';

function QAList({
  questions,
  allQuestions,
  setQuestions,
  helpfulAndReport
}) {
  return (
    <QAListStyle>
      {questions.map(
        (question, index) => (
          <Questions
            question={question}
            questions={questions}
            index={index}
            allQuestions={allQuestions}
            setQuestions={setQuestions}
            helpfulAndReport={helpfulAndReport}
          />
        ),
      )}
    </QAListStyle>
  );
}

export default QAList;
