import React from 'react';
import AnswerModal from './AnswerModal';

function AddAnswer({ showModal, setShowModal, question }) {
  return (
    <div>
      <span
        role="link"
        tabIndex={0}
        onKeyPress={() => setShowModal(true)}
        onClick={() => setShowModal(true)}
      >
        Add Answer
      </span>
      {showModal ? <AnswerModal setShowModal={setShowModal} question={question} /> : null}
    </div>
  );
}

export default AddAnswer;
