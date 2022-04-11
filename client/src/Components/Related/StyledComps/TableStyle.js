import styled from 'styled-components';

export const ModalTable = styled.table`
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
  & tr:nth-child(2n) {
    background: rgba(235, 183, 204, 0.25);
  }


  & thead {
    background: rgba(235, 183, 204);
    position: sticky;
    top: 0;
    border-top: 3px solid rgba(235, 183, 204);
  }
`;
