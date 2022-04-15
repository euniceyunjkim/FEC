import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
`;

export const Logo = styled.div`
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
&:hover {
  cursor: pointer;
}
`;

export const SearchCartContainer = styled.div`
display: flex;
`;

export const Cart = styled.div`
order: 2;
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
position: relative;
&:hover {
  cursor: pointer;
}
`;

export const Count = styled.div`
font-weight: bold;
position: absolute;
width: 100%;
height: 100%;
top: 46px;
left: 0;
text-align: center;
`;

export const LDSContainer = styled.div`
top: -1px;
display: grid;
grid-template: 1fr/1fr;
height: 55px;
`;

export const LightDark = styled.div`
z-index: 1;
background-image: ${({ src }) => `url(${src})`};
width: 55px;
height: 55px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
border-radius: 10rem;
justify-self: end;
&:hover {
  cursor: pointer;
}
`;

export const SearchContainer = styled.div`
  justify-self: end;
  z-indez: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: #4b15a3;
  height: 25px;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Bar = styled.input`
  margin-left: 10px;
  width: 220px;
  line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #4b15a3;
  ${({ styles }) => `${styles}`};
`;

export const Search = styled.button`
  margin-right: 5px;
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  align-items: right;
  border: none;
  color: #4b15a3;
  &::placeholder {
    color: #4b15a3;
  }
  &:hover {
    cursor: pointer;
  }
`;
