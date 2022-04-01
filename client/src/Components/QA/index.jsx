import React from 'react';
import Search from './Components/Search.jsx';
import QAList from './Components/QAList.jsx';
import MoreQuestions from './Components/MoreQuestions.jsx';
import AddQuestion from './Components/AddQuestion.jsx';

function QA({}) {
  return (
    <div>
      QUESTIONS & ANSWERS
      <Search />
      <QAList />
      <MoreQuestions />
      <AddQuestion />
    </div>
  );
}

export default QA;
