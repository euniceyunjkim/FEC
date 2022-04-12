import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';

function AddAnswer({ showModal, setShowModal }) {
  return (
    <div>
      <span className="add_answer" onKeyPress={() => setShowModal(true)} onClick={() => setShowModal(true)}>Add Answer</span>
      {showModal ? <AnswerModal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default AddAnswer;
