import styled from 'styled-components';

export const Header = styled.div`
width: 100%;
height: 90px;
background-color: #4b15a3;
text-align: center;
`;

export const SpaceII = styled.div`
width:100%;
height: 10px;
background-color: #280f54
`;

export const Space = styled.div`
width:100%;
height: 10px;
background-color: #ffffff
`;

export const Product = styled.div`
padding-top: 70px;
display: flex;
justify-content: space-evenly;
height: 100%;
width: 100%;
@media (max-width: 500px) {
  flex-direction: column;
  padding-top: 30px;
}
`;

export const Left = styled.div`
width: 100%;
height: 100%;
margin-right: 5%;
flex: 70%;
order: 1;
@media (max-width: 500px) {
  margin-bottom: 30px;
  height: 500px;
  flex: 50%;
}
`;

export const Right = styled.div`
width: 100%;
height: 100%;
flex: 30%;
order: 2;
@media (max-width: 500px) {
  flex: 50%;
  width: 500px;
}
`;

export const ReviewSumm = styled.div`
display: flex;
padding-bottom: 10px;
`;

export const Bottom = styled.div`
width: 100%
padding-top: 100px;
padding-bottom: 100px;
text-align: center;
display: grid;
grid-template: 1fr/ 1fr;
place-items: center;
`;

export const Social = styled.div`
padding-top: 25px;
z-index: 1;
`;

export const POverview = styled.div`
z-index: 2;
`;

export const Price = styled.div`
padding: 15px 0px;
display: flex;
`;

export const OnSale = styled.div`
color: black;
font-size: 20px;
text-decoration: line-through;
float: left;
order: 1;
padding-right: 10px;
`;

export const Og = styled.div`
color: black;
font-size: 20px;
order: 1;
`;

export const Sale = styled.div`
color: red;
font-size: 20px;
float: left;
order: 2;
`;

export const Stylesdesc = styled.div`
padding-top: 10px;
padding-bottom: 10px;
`;

export const Reviews = styled.div`
text-decoration: underline;
padding-left: 10px;
&:hover {
  cursor: pointer;
  color: #280f54;
}
`;

export const MoreContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
place-items: center;
`;

export const StyleContainer = styled.div`
z-index: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
height: 80%;
margin-top: 30px;
margin-bottom: 30px;
`;

export const SelectionContainer = styled.div`
z-index: 2;
`;