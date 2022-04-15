import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answers from './Answers';
import AddAnswer from './AddAnswer';
import {
  ParentQ,
  QStyle,
  QuestionStyle,
  QFeatures,
  QFeat,
  QFeat1,
  QFeat2,
  QFeat12,
  AStyle,
  AnswerList,
  AnswerStyle,
  QBody,
  AnswerBlock,
  ChangeAnswers,
  ChangeAnswersBack,
  Separator,
} from './Styles/QA';

function Questions({
  question,
  questions,
  index,
  allQuestions,
  setQuestions,
  helpfulAndReport,
}) {
  const [answers, setAnswers] = useState(question.answers.slice(0, 2));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAnswers(question.answers.slice(0, 2));
  }, [question]);

  function addAnswers() {
    setAnswers(question.answers);
  }

  function collapse() {
    setAnswers(question.answers.slice(0, 2));
  }

  function addHelpful(qId) {
    axios.put(`qa/questions/${qId}/helpful`, {})
      .then(() => {
        helpfulAndReport[question.question_id]
          ? helpfulAndReport[question.question_id].helpful = true
          : helpfulAndReport[question.question_id] = { helpful: true, answers: {}, reported: {} };
        question.helpfulQ = true;
        question.question_helpfulness += 1;
        allQuestions[index] = question;
        setQuestions(allQuestions.slice(0, questions.length));
      });
  }

  return (
    <div>
      <ParentQ>
        <QStyle>Q: </QStyle>
        <QuestionStyle>
          <QBody>{question.question_body}</QBody>
          <QFeatures>
            <QFeat>Helpful?&nbsp;</QFeat>
            {!question.helpfulQ
              ? (
                <QFeat1
                  onClick={() => addHelpful(question.question_id)}
                  onKeyUp={() => addHelpful(question.question_id)}
                  role="button"
                  tabIndex={0}
                >
                  Yes
                </QFeat1>
              )
              : <QFeat12>Yes</QFeat12> }
            <Separator>
              &nbsp;
              {question.question_helpfulness}
              &nbsp;|&nbsp;
            </Separator>
            <QFeat2>
              <AddAnswer
                showModal={showModal}
                setShowModal={setShowModal}
                question={question}
              />
            </QFeat2>
          </QFeatures>
        </QuestionStyle>
      </ParentQ>
      {question.answers.length > 0
        ? (
          <AnswerBlock>
            <AStyle>A: </AStyle>
            <AnswerList>
              <AnswerStyle>
                {answers.map((answer, answerIndex) => (
                  <Answers
                    key={answer[1].id}
                    answerIndex={answerIndex}
                    answer={answer[1]}
                    allQuestions={allQuestions}
                    setQuestions={setQuestions}
                    helpfulAndReport={helpfulAndReport}
                    question={question}
                    index={index}
                    questions={questions}
                  />
                ))}
              </AnswerStyle>
            </AnswerList>
          </AnswerBlock>
        ) : null}
      {answers.length < question.answers.length
        ? (
          <ChangeAnswers
            onClick={() => addAnswers()}
            onKeyUp={() => addAnswers()}
            role="button" tabIndex={0}>
            See More Answers
          </ChangeAnswers>
        )
        : null}
      {answers.length > 2
        ? (
          <ChangeAnswersBack onClick={() => collapse()}
            onKeyUp={() => collapse()}
            role="button"
            tabIndex={0}>
            Collapse Answers
          </ChangeAnswersBack>
        )
        : null}
    </div>
  );
}

export default Questions;
