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
  height: 50%;
  overflow: auto;
`;

export const QAStyle = styled.div`
  height: 80%;
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
  font-size: 24px;
  font-weight: bold;
  padding-left: 5px;
`;

export const QStyle = styled.div`
  font-size: 24px;
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
    }
`;

export const QFeat12 = styled.div`
  order: 2;
  text-decoration: underline;
  color: #4B15A3;
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
    }
`;

export const QFeatures = styled.div`
  display: flex;
  margin-left: auto;
  color: #696767;
  padding-top: 13px;
  vertical-align: top;
  font-size: 19px;
`;

export const AStyle = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex: 2%;
`;

export const AnswerBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-left: 45px
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
  font-size: 21px;
`;

export const AFeat = styled.div`
  order: 1;
  padding-right: 5px;
`;

export const AFeat1 = styled.div`
  order: 2;
  padding-right: 5px;
`;

export const AFeat2 = styled.div`
  order: 3;
  text-decoration: underline;

  &:hover {
    color: #4b15a3;
    cursor: pointer;
    }
`;

export const AFeat21 = styled.div`
  order: 3;
  text-decoration: underline;
  color: #4B15A3;
`;

export const AFeat3 = styled.div`
  order: 4;
  text-decoration: underline;
  &:hover {
    color: #4b15a3;
    cursor: pointer;
    }
`;

export const AFeat31 = styled.div`
  order: 4;
  text-decoration: underline;
  color: #4B15A3;
`;

export const AFeatures = styled.div`
  display: flex;
  margin-left: auto;
  color: #696767;
  padding-top: 4px;
  padding-left: 8px;
  vertical-align: top;
  font-size: 17px;
`;

export const Div = styled.div`
  padding-bottom: 10px;
`;

export const ChangeAnswers = styled.div`
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: #4b15a3;
    cursor: pointer;
    }
`;
