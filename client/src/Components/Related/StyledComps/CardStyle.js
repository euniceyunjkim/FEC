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
