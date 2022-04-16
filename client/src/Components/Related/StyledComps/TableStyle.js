import styled from 'styled-components';

const ModalTable = styled.table`
overflow-wrap: normal;
display: block;
overflow-y: scroll;
text-align: center;
height: 60vh;
position: relative;
border-top: 0 solid black;
margin: 20px 0 20px 0;
& td {
  padding: 10px;
}
& td:nth-child(1) {
  width: 100px;;
}
& td:nth-child(2) {
  width: 300px;;
}
& td:nth-child(3) {
  width: 100px;;
}
& th {
  font-size: 1.25em;
  border-radius: 5px;
}
${({ styles }) => `${styles}`};
`;

export default ModalTable;
