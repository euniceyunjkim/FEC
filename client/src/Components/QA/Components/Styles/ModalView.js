import styled from 'styled-components';

export const ModalView = styled.div`
  position: fixed;
  background: white;
  width: 50vw;
  height: 75vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-contents: left;
  color: black;
  text-shadow: none;
`;

export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const Input2 = styled.input`
  height: 15px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border: 2px solid black;
  border-radius: 3px;
  width: 50%;
  margin-bottom: 0.5em;
  margin-left: 5px;
`;

export const Input = styled.input`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border: 2px solid black;
  border-radius: 3px;
  width: 96%;
  margin-bottom: 0.5em;
  margin-left: 5px;
`;
