import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';

function AddAnswer({ showModal, setShowModal, question }) {
  return (
    <div>
      <span className="add_answer" onKeyPress={() => setShowModal(true)} onClick={() => setShowModal(true)}>Add Answer</span>
      {showModal ? <AnswerModal setShowModal={setShowModal} question={question} /> : null}
    </div>
  );
}

export default AddAnswer;
