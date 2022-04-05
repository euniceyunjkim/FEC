import styled from 'styled-components';

export const ModalTable = styled.table`

  overflow-wrap: normal;

  > tr {
    &:nth-child(1) {
      width: 50px;
    }
    &:nth-child(2) {
      width: 150px;
    }
    &:nth-child(3) {
      width: 250px;
    }
  }
`;