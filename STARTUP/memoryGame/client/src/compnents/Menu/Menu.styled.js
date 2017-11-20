import styled from 'styled-components';

export const Menu = styled.div`
  display: ${({ showMenu }) => {
    return showMenu;
  }};
  flex-direction:column;  
`;
export const GameTitle = styled.h1``;
