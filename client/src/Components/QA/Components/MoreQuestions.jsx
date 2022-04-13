import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../../Contexts/CurProdContext.js';

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
    <div>
      { questions.length < allQuestions.length ?
        <button type="submit" onClick={addQuestions}>More Questions</button>
        : null }
    </div>
  );
}

export default MoreQuestions;
