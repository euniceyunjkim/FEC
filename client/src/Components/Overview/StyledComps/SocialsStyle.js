import styled from 'styled-components';

export const Facebook = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(75, 21, 163);
}
`;

export const Twitter = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(75, 21, 163);
}
`;

export const Pinterest = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(75, 21, 163);
}
`;

export const SocialContainer = styled.div`
display:flex;
justify-content: space-evenly;
width: 200px;
padding-bottom: 15px;
padding-top: 15px;
`;
