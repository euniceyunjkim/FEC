import React, { useState } from 'react';

function MoreQuestions({ questions, allQuestions, setQuestions }) {
  const [upTo, setUpTo] = useState(6);

  function addQuestions() {
    setQuestions(allQuestions.slice(0, upTo));
    setUpTo(upTo + 2);
  }
  return (
    <div>
      { questions.length < allQuestions.length ?
        <button type="submit" onClick={addQuestions}>More Answered Questions</button>
        : null }
    </div>
  );
}

export default MoreQuestions;
