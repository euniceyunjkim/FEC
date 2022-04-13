import React from 'react';
import QuestionModal from './QuestionModal.jsx';

function AddQuestion({ allQuestions, showModal, setShowModal }) {
  return (
    <div>
      { allQuestions.length > 0 ? <button type="submit" className="add_question" onClick={() => setShowModal(true)}>Add a Question</button> : <button type="submit" className="add_first_question" onClick={() => setShowModal(true)}>Add a Question</button> }
      {showModal ? <QuestionModal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default AddQuestion;
