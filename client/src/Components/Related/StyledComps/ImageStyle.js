import styled from 'styled-components';

export const CardImage = styled.img`
  width: 200px;
  height: 225px;
  min-height: 225px;
  max-height: 225px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 535px) {
    width: 120px;
    height: 120px;
    min-height: 135px;
    max-height: 145px;
  }
`;

export const CardImageContainer = styled.div`
  width: 200px;
  min-height: 225px;
  max-height: 225px;
  position: relative;
  @media (max-width: 535px) {
    width: 120px;
    height: 145px;
    min-height: 145px;
    max-height: 145px;
  }
`;
