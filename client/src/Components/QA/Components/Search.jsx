import React, { useState } from 'react';

function Search({ allQuestions, setMatching, setSearching }) {
  const [searching, updateSearching] = useState('');

  function updateSearch(e) {
    updateSearching(e.target.value);
    if (e.target.value.length >= 3) {
      setMatching(allQuestions.filter(
        (question) => question.question_body.toLowerCase().includes(e.target.value.toLowerCase()),
      ));
      setSearching(true);
    } else {
      setMatching([]);
      setSearching(false);
    }
  }

  // question.question_body.toLowerCase().contains(e.target.value)

  return (
    <form>
      <input type="text" value={searching} placeholder="Have a question? Search for answers..." onChange={updateSearch} />
    </form>
  );
}

export default Search;
