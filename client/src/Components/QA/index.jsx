import React, { useState, useEffect } from 'react';
import Search from './Components/Search.jsx';
import QAList from './Components/QAList.jsx';
import MoreQuestions from './Components/MoreQuestions.jsx';
import AddQuestion from './Components/AddQuestion.jsx';

const GetData = require('./Helpers');

let localStorage = [];

function QA({}) {
  // function test() {
  //   GetData.getQuestions(40344)
  //     .then((data) => { localStorage = data.data.results; })
  //     .then(() => { displayedQ = localStorage.slice(0, 2); })
  //     .catch((err) => console.error(err));
  // }
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    GetData.getQuestions(40344)
      .then((data) => { localStorage = data.data.results; })
      .then(() => { setQuestions(localStorage.slice(0, 2)); })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      QUESTIONS & ANSWERS
      <Search />
      {questions.map((question) => <QAList question={question} />)}
      <MoreQuestions />
      <AddQuestion />
    </div>
  );
}

export default QA;
