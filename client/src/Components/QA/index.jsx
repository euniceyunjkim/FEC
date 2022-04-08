import React, { useState, useEffect, useContext } from 'react';
import Search from './Components/Search.jsx';
import QAList from './Components/QAList.jsx';
import MoreQuestions from './Components/MoreQuestions.jsx';
import AddQuestion from './Components/AddQuestion.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';

const GetData = require('./Helpers');

let localStorage = [];

function QA({ }) {
  const { currentProd } = useContext(currentProducts);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (currentProd.id) {
      GetData.getQuestions(currentProd.id)
        .then((data) => { localStorage = data.data.results; })
        .then(() => localStorage.sort((a, b) => b.helpfulness - a.helpfulness))
        .then(() => console.log(localStorage))
        .then(() => localStorage.forEach((question) => {
          let test = Object.entries(question.answers).sort((a, b) => b[1].helpfulness - a[1].helpfulness);
          question['answers'] = test;
        }))
        .then(() => { setQuestions(localStorage.slice(0, 4)); })
        .catch((err) => console.error(err));
    }
  }, [currentProd]);

  return (
    <div>
      QUESTIONS & ANSWERS
      <Search questions={questions} setQuestions={setQuestions} allQuestions={localStorage} />
      {questions.map((question) => <QAList question={question} />)}
      <MoreQuestions />
      <AddQuestion />
    </div>
  );
}

export default QA;
