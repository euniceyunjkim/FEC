import styled from 'styled-components';

export const ModalTable = styled.table`

  overflow-wrap: normal;
  overflow-x: auto;
  text-align: center;
  height: 60vh;
  & td {
    padding: 10px;
    margin: 5px;
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
    margin: 25px;
  }
  & tr:nth-child(2n) {
    background: rgba(235, 183, 204, 0.25);

  }
`;
