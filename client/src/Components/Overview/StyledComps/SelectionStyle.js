import styled from 'styled-components';

export const SelectionContainer = styled.div`
width: 100%;
display: flex;
@media (max-width: 400px) {
  width: 300px;
}
`;

export const SizeContainer = styled.div`
z-index: 1;
display: grid;
grid-template-columns: repeat(6, 1fr);
@media (max-width: 400px){
  grid-template-columns: repeat(4, 1fr);
}
`;

export const SizeButton = styled.button`
display: grid;
border: 1px solid;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 20px;
${({ styles }) => `${styles}`};
&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
`;

export const QuantDrop = styled.div`
  z-index: 2;
  place-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  @media (max-width: 400px){
    display:flex;
  }
`;

export const DropdownContainer = styled.div`
  z-index: 3;
  float: left;
  display: grid;
  grid-template: 1fr/ 1fr;
  place-items: center;

`;

export const AddButton = styled.button`
  float: right;
  color: black;
  border: 1px solid;
  background: white;
  font-align: center;
  font-size: 15px;
  margin: 8px;
  padding:10px 20px;
  z-index:3;

  &:hover {
    cursor: pointer;
    background-color: #4b15a3;
    color: white;
  };
`;

export const MinusBut = styled.button`
color: black;
border: 1px solid;
background: white;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 30px;
float: left;
&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
};
`;

export const Count = styled.div`
color: black;
  border: 1px solid;
  background: white;
  font-align: center;
  font-size: 15px;
  margin: 8px;
  padding:10px 50px;
  float: left;
`;

export const PlusBut = styled.button`
  color: black;
  border: 1px solid;
  background: white;
  font-align: center;
  font-size: 15px;
  margin: 8px;
  padding:10px 30px;
  float: right;
  &:hover {
    cursor: pointer;
    background-color: #4b15a3;
    color: white;
  };
`;

export const NoBut = styled.button`
float: right;
color: white;
border: 1px solid;
background: #4b15a3;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 20px;
`;
