import React from 'react';
import Questions from "./Questions.jsx";
import Answers from "./Answers.jsx";

function QAList({ question }) {
  return (
    <div>
      <Questions question={question}/>
      { Object.entries(question.answers).map(([key, value]) => <Answers answer={value} />)}
      {/* {localStorage.length > questions.length ? <span onClick="something">LOAD MORE ANSWERS</span> : <></> } */}
    </div>
  );
}

export default QAList;
