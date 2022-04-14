import styled from 'styled-components';

export const StylesContainer = styled.div`
width: 100%;
height: 100%;
margin-top: 15px;
margin-left: 10px;
`;

export const StyleIcon = styled.div`
width:70px;
height:70px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-position: center;
background-size: cover;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(75, 21, 163);
}
@media (min-width: 1450px) {
  height: 90px;
  width: 90px;
}
@media (min-width: 1880px) {
  height: 105px;
  width: 105px;
}
`;

export const Checkmark = styled.div`
width: 25px;
height: 25px;
background-repeat: no-repeat;
background-size: contain;
position: absolute;
${({ styled }) => `${styled}`};
`;
