import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
right: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
width: 100%;
z-index: 1000;
top: 105px;
@media (max-width: 500px) {
  left: -43%;
}
`;

export const Space = styled.div`
order: 1;
`;

export const Modall = styled.div`
order: 2;
animation: fadeIn 0.2s ease-in-out;
align-items: center;
background: rgb(146, 122, 191);
border-radius: 0.25rem;
display: flex;
flex-direction: column;
margin: 15px;
max-width: 500px;
position: relative;
z-index: 100;
`;

export const ConfirmButton = styled.button`
  color: white;
  background-color: #4b15a3;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;

export const Cart = styled.div`
width: 100%;
`;

export const Item = styled.div`
display: flex;
width: 100%;
height: auto;
`;

export const Pic = styled.div`
order: 1;
padding: 3px 5px;
`;

export const Name = styled.div`
order: 2;
padding: 3px 5px;
`;

export const Count = styled.div`
padding: 3px 5px;
order: 3;
`;

export const Delete = styled.button`
order: 4;
padding: 3px 5px;
background-color: transparent;
border: none;
&:hover {
  cursor: pointer;
  color: white;
  background-color: #4b15a3;
}
`;
