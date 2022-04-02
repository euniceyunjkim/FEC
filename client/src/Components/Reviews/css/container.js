import styled from 'styled-components';

const Box = {
  Container: styled.div`
display: flex;
background: lime
`,
  InnerCol: styled.div`
flexDirection: column;
`,
  ReviewSum: styled.div`
flex-grow: 1;
height: 100px;
margin: 1em;
border: 2px solid palevioletred;
color: palevioletred;
`,
};

export default Box;
