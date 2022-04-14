import styled from 'styled-components';

const ModalContent = styled.div`
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
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export default ModalContent;
