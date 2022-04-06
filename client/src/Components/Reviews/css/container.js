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
  Bar: styled.div`
  width: 210px;
  background-image: url(./Images/bar.png);
  background-repeat: no-repeat;
  `,
  Triangle: styled.img`
  height: 15px;
  width: 15px
  `,
  CharText: styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  padding-bottom: 15px;
  margin: 0px;
  `,
};

export default Box;
