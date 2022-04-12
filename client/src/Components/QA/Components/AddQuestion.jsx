import React from 'react';
import QuestionModal from './QuestionModal.jsx';

function AddQuestion({ allQuestions, showModal, setShowModal }) {
  return (
    <div>
<<<<<<< HEAD
      { allQuestions.length > 0 ? <button type="submit" className="add_question" onClick={() => setShowModal(true)}>Add a Question</button> : <button type="submit" className="add_first_question" onClick={() => setShowModal(true)}>Add a Question</button> }
      {showModal ? <QuestionModal setShowModal={setShowModal} /> : null}
=======
      <button type="submit">ADD A QUESTION  +</button>
      <form>
        <label htmlFor="newQuestion">
          Your Question
          <input type="text" id="newQuestion" maxLength="1000" required />
        </label>
        <label htmlFor="nickname">
          What is your nickname
          <input type="text" id="nickname" maxLength="60" placeholder="Example: jackson11!" required />
        </label>
        <div>For privacy reasons, do not use your full name or email address</div>
        <label htmlFor="email">
          Your email
          <input type="email" id="email" maxLength="60" placeholder="Why did you like the roduct or not?" required />
        </label>
        <div>For authentication reasons, you will not be emailed</div>
        <input type="submit" value="Submit question" />
      </form>
>>>>>>> main
    </div>
  );
}

export default AddQuestion;
