import styled from 'styled-components';

export const Facebook = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

export const Twitter = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

export const Pinterest = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

export const SocialContainer = styled.div`
display:flex;
justify-content: space-evenly;
width: 200px;
padding-bottom: 15px;
padding-top: 15px;
`;
