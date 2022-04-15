import styled from 'styled-components';
import ProductCard from '../ProductCard';

const Card = styled(ProductCard)`
  width: 225px;
  height: 390px;
  border: 1px solid #4B15A3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 15px;
  padding: 2px;
  text-align: center;
  object-fit: cover;
  &:hover {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
    cursor: pointer;
  };
  @media (max-width: 535px) {
    width: 125px;
    height: 300px;
    min-height: 300px;
    max-height: 300px;
    margin: 5px 10px;
  }
`;

export default Card;
