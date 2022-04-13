import React, { useState, useEffect, useContext } from 'react';
import Search from './Components/Search.jsx';
import QAList from './Components/QAList.jsx';
import MoreQuestions from './Components/MoreQuestions.jsx';
import AddQuestion from './Components/AddQuestion.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';
import { QAStyle } from './Components/Styles/QA.js';

const GetData = require('./Helpers');

let localQuestions = [];
const helpfulAndReport = {};

function QA() {
  const { currentProd } = useContext(currentProducts);
  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [matchingQ, setMatchingQ] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (currentProd.id) {
      GetData.getQuestions(currentProd.id, 1, 9999)
        .then((data) => { localQuestions = data.data.results; })
        .then(() => localQuestions.forEach((question) => {
          if (helpfulAndReport[question.question_id]) {
            question.helpfulQ = helpfulAndReport[question.question_id].helpful;
            question.helpfulAnswers = helpfulAndReport[question.question_id].answers;
            question.reportedAnswers = helpfulAndReport[question.question_id].reported;
          }
          const test = Object.entries(question.answers).sort((a, b) => {
            const userA = a[1].answerer_name.toLowerCase();
            const userB = b[1].answerer_name.toLowerCase();

            if (userA === 'seller' && userB !== 'seller') {
              return -1;
            }
            if (userB === 'seller' && userA !== 'seller') {
              return 1;
            }
            return b[1].helpfulness - a[1].helpfulness;
          });
          question.answers = test;
        }))
        .then(() => { setQuestions([...localQuestions].slice(0, 4)); })
        .catch((err) => console.error(err));
    }
  }, [currentProd]);

  return (
    <QAStyle>
      QUESTIONS & ANSWERS
      <Search
        allQuestions={localQuestions}
        setMatching={setMatchingQ}
        setSearching={setSearching}
      />
      {questions.length > 0 && !searching
        ? (
          <QAList
            questions={questions}
            allQuestions={localQuestions}
            setQuestions={setQuestions}
            helpfulAndReport={helpfulAndReport}
          />
        ) : null}
      {questions.length > 0 && matchingQ.length > 0
        ? (
          <QAList
            questions={matchingQ}
            allQuestions={localQuestions}
            setQuestions={setQuestions}
            helpfulAndReport={helpfulAndReport}
          />
        ) : null}
      <MoreQuestions
        questions={questions}
        allQuestions={localQuestions}
        setQuestions={setQuestions}
      />
      <AddQuestion
        allQuestions={localQuestions}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </QAStyle>
  );
}

export default QA;
