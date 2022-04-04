import styled from 'styled-components';

const Box = {
  Container: styled.div`
  display: flex;
  `,
  InnerCol: styled.div`
  flexDirection: column;
  padding-left: 30px;
  `,
  ReviewSum: styled.div`
  display: flex;
  flex-grow: 1;
  height: 0px;
  margin: 1em;
  border: 0px solid rgb(75, 21, 163);
  `,
  Star: styled.img`
  height: 10px;
  width: 10px
  `,
  Rating: styled.h1`
  padding: 0px;
  margin: 0px;
  padding-right: 10px;
  color: rgb(75, 21, 163);
  `,
};

export default Box;
