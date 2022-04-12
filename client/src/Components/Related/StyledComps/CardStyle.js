import styled from 'styled-components';
import ProductCard from '../ProductCard.jsx';

export const Card = styled(ProductCard)`
  width: 225px;
  height: 390px;
  border: 1px solid #4B15A3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 2px;
  text-align: center;
  object-fit: cover;
  &:hover {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
    transform: scale(1.02);
  }
  };
`;
