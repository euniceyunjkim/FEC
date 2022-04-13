import styled from 'styled-components';

export const CardButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  right: 8px;
  top: 5px;
  position: absolute;
  &.Compare {
    -moz-box-shadow: 0 0 10px #4b15a3;
    -webkit-box-shadow: 0 0 10px #4b15a3;
    box-shadow: 0 0 10px #4b15a3;
    transform: scale(1.08);
    cursor: pointer;
  }
  &.Remove {
    -moz-box-shadow: 0 0 10px #b10f0f;
    -webkit-box-shadow: 0 0 10px #b10f0f;
    box-shadow: 0 0 10px #b10f0f;
    transform: scale(1.08);
    cursor: pointer;
  }
`;

export const TableButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
