import styled from 'styled-components';

export const List = styled.div`
  width: 90%;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SmolList = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 800px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
`;
