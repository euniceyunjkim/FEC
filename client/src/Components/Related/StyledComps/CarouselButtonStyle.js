import styled from 'styled-components';

export const PreviousIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  top: 50%;
  left: 0;
  &.hidden {
    visibility: hidden;
  }
  &:hover {
    -moz-box-shadow: 0 0 10px #4b15a3;
    -webkit-box-shadow: 0 0 10px #4b15a3;
    box-shadow: 0 0 10px #4b15a3;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const NextIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  top: 50%;
  right: 0;
  &.hidden {
    visibility: hidden;
  }
  &:hover {
    -moz-box-shadow: 0 0 10px #4b15a3;
    -webkit-box-shadow: 0 0 10px #4b15a3;
    box-shadow: 0 0 10px #4b15a3;
    transform: scale(1.02);
    cursor: pointer;
  }
`;
