import React from 'react';
import QuestionModal from './QuestionModal.jsx';
import { MainButtons } from './Styles/Buttons.js';

function AddQuestion({ allQuestions, showModal, setShowModal }) {
  return (
    <span>
      { allQuestions.length > 0 ? <MainButtons type="submit" className="add_question" onClick={() => setShowModal(true)}>Add a Question</MainButtons> : <MainButtons type="submit" className="add_first_question" onClick={() => setShowModal(true)}>Add a Question</MainButtons> }
      {showModal ? <QuestionModal setShowModal={setShowModal} /> : null}
    </span>
  );
}

export default AddQuestion;
