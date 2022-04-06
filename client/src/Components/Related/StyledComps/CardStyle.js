import styled from 'styled-components';
import ProductCard from '../ProductCard.jsx';

export const Card = styled(ProductCard)`
  width: 225px;
  height: 390px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 2px;
  text-align: center;
  object-fit: cover;
  };
`;
  // & button {
  //   position: absolute;
  //   bottom: 10%;
  //   right: 10%;
  //   width: 70%;
  //   height: auto;
  //   padding: 25px;
  //   border: none;
  //   z-index: 99;
  //   -webkit-transform: translate3d(0,0,0);
  //   -webkit-transition: all .25s ease;
  //   -moz-transition: all .25s ease;
  //   -ms-transition: all .25s ease;
  //   -o-transition: all .25s ease;
  //   transition: all .25s ease;
  //   text-align: center;