import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 35px;
  width: 80%;
  justify-contents: left;
  font-weight: 300;
  font-size: 24px;
`;

export const QAListStyle = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: left;
  align-self: center;
  flex-direction: column;
  justify-content: start;
  width: 78%;
  max-height: 80vh;
  overflow: scroll;
`;

export const QAStyle = styled.div`
  height: 80%;
  min-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ParentQ = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const QuestionStyle = styled.div`
  display: flex;
  flex: 98%;
  padding-top: 3px;
  margin-left: 10 px;
  justify-content: space-between;
`;

export const QBody = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
`;

export const QStyle = styled.div`
  font-size: 20px;
  font-weight: bold;
  flex: 2%;
`;

export const QFeat = styled.div`
  order: 1;
  padding-right: 5px;
`;

export const QFeat1 = styled.div`
  order: 2;
  padding-right: 5px;
  text-decoration: underline;
  &:hover {
    color: #4b15a3;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
    }
`;

export const QFeat12 = styled.div`
  order: 2;
  text-decoration: underline;
  color: #4B15A3;
  text-shadow: 2px 2px 5px rgb(75, 21, 163);
`;

export const Separator = styled.div`
  order: 3;
`;

export const QFeat2 = styled.div`
  order: 4;
  text-decoration: underline;
  &:hover {
    color: #4b15a3;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
    }
`;

export const QFeatures = styled.div`
  display: flex;
  margin-left: auto;
  color: #310d70;
  padding-right: 10px;
  vertical-align: top;
  font-size: 16px;
`;

export const AStyle = styled.div`
  font-size: 16px;
  font-weight: bold;
  flex: 2%;
`;

export const AnswerBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 30px;
  max-height: 50vh;
  overflow: scroll;
`;

export const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 98%
`;

export const AnswerStyle = styled.div`
  padding: 0 0 10px 10px;
`;

export const ABody = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const AFeat = styled.div`
  order: 1;
  padding-right: 5px;
`;

export const AFeat01 = styled.div`
  order: 2;
  padding-right: 5px;
  text-shadow: 0px 0px 1px rgb(116, 83, 166);
`;

export const AFeat02 = styled.div`
  order: 2;
  padding-right: 5px;
`;

export const AFeat03 = styled.div`
  order: 3;
  padding-right: 5px;
`;

export const AFeat1 = styled.div`
  order: 4;
  padding-right: 5px;
`;

export const AFeat2 = styled.div`
  order: 5;
  text-decoration: underline;

  &:hover {
    color: #4b15a3;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
    }
`;

export const AFeat21 = styled.div`
  order: 5;
  text-decoration: underline;
  color: #4B15A3;
  text-shadow: 2px 2px 5px rgb(75, 21, 163);
`;

export const SeparatorA = styled.div`
  order: 6;
`;

export const AFeat3 = styled.div`
  order: 7;
  text-decoration: underline;
  &:hover {
    color: #4b15a3;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
    }
`;

export const AFeat31 = styled.div`
  order: 7;
  text-decoration: underline;
  color: #4B15A3;
`;

export const AFeatures = styled.div`
  display: flex;
  margin-left: auto;
  color: #310d70;
  padding-top: 4px;
  padding-left: 8px;
  vertical-align: top;
  font-size: 14px;
`;

export const Div = styled.div`
  padding-bottom: 17px;
`;

export const ChangeAnswers = styled.a`
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 15px;
  padding-left: 30px;

  &:hover {
    color: #4b15a3;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
  }

  &&:active {
    color: #4b15a3;
  }
`;

export const ChangeAnswersBack = styled.a`
  font-weight: 700;
  font-size: 16px;
  padding-bottom: 15px;
  padding-left: 30px;
  color: #4b15a3;

  &:hover {
    color: black;
    cursor: pointer;
    text-shadow: 2px 2px 5px rgb(75, 21, 163);
  }`;
