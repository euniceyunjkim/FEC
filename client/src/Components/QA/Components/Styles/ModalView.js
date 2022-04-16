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
  border-radius: 5px;
`;

export const PhotoModalView = styled.div`
  position: fixed;
  background: white;
  width: 40vw;
  height: 30vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 5px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-contents: left;
  color: black;
  text-shadow: none;
  overflow: scroll;
`;

export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 35px;
  font-weight: 300;
  font-size: 24px;
`;

export const Label = styled.label`
  margin-top: 20px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const Input = styled.textarea`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border-width: 2px;
  border-style: inset;
  border-color: #4B15A3;
  border-radius: 3px;
  width: 94%;
  margin-bottom: 0.5em;
  margin-left: 10px;
  position-contents: top;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  ::placeholder {
    color: #4B15A3;
    font-family: 'Amatic SC', cursive;
    font-family: 'Space Mono', monospace;
  }
`;

export const Input2 = styled.textarea`
  height: 20px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border-width: 2px;
  border-style: inset;
  border-color: #4B15A3;
  border-radius: 3px;
  width: 50%;
  margin-bottom: 0.5em;
  margin-left: 10px;
  box-shadow: 0 5px 5px rgba(17, 16, 62, 0.1);
  ::placeholder {
    color: #4B15A3;
    font-family: 'Amatic SC', cursive;
    font-family: 'Space Mono', monospace;
  }
`;

export const Disclaimer = styled.div`
  display: flex;
  margin-left: 7px;
  padding-left: 8px;
  vertical-align: top;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  padding-bottom: 40px;
  padding-top: 40px;
  margin-left: 12px;
`;

export const CancelContainer = styled.div`
  display: flex;
  width: 80%;
  margin-left: 12px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  max-height: 60px;
  max-width: 60px;
  padding: 5px;
`;
