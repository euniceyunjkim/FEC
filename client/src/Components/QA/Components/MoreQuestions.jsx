import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../../Contexts/CurProdContext.js';
import { MainButtons } from './Styles/Buttons.js';

function MoreQuestions({ questions, allQuestions, setQuestions }) {
  const [upTo, setUpTo] = useState(6);
  const { currentProd } = useContext(currentProducts);

  useEffect(() => {
    setUpTo(6);
  }, [currentProd]);

  function addQuestions() {
    setQuestions(allQuestions.slice(0, upTo));
    setUpTo(upTo + 2);
  }
  return (
    <span>
      { questions.length < allQuestions.length ?
        <MainButtons type="submit" onClick={addQuestions}>More Questions</MainButtons>
        : null }
    </span>
  );
}

export default MoreQuestions;
