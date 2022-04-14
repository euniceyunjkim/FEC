import styled from 'styled-components';

export const MainButtons = styled.button`
  width: 25%;
  margin-right: 30px;
  border-radius: 4px;
  justify-content: center;
  padding: 18px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  font-size: 20px;
  font-weight: 300;
  color: black;
  background-color: #fff;
  border: 2px solid #4b15a3;
  border-radius: 3px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
  box-shadow: 0 0 5px 5px rgba(17, 16, 62, 0.15);
  background: #4b15a3;
  color: white;

  &:active {
    color: #4b15a3;
  };
`;

export const ButtonContainer = styled.div`
  width: 80%;
  padding-bottom: 100px;
  padding-top: 40px;
`;
