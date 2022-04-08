import React, { useState } from 'react';
import Questions from "./Questions.jsx";
import Answers from "./Answers.jsx";

function QAList({ question }) {
  const [answers, setAnswers] = useState([question.answers[0], question.answers[1]]);
  const [upTo, setUpTo] = useState(4)
  // setAnswers(question.answers.slice(0, 2));

  function addAnswers() {
    setAnswers(question.answers.slice(0, upTo));
    setUpTo(upTo + 2);
  }

  function collapse() {
    setAnswers(question.answers.slice(0, 2));
  }

  return (
    <div>
      <span>Q: </span>
      <div>
        <Questions question={question} />
      </div>
      <span>A: </span>
      <div>
        { answers.map((answer) => <Answers answer={answer[1]} />)}
        { answers.length < question.answers.length ? <div onClick={addAnswers}>See more answers</div> : answers.length > 2 ? <div onClick={collapse}>Collapse answers</div> : null}
      </div>
    </div>
  );
}

export default QAList;
