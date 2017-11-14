import styled from 'styled-components';

export const MemoryGame = styled.div`
  display: flex;
  width:100%;
  margin:0; 

`;
export const Game = styled.div`
  display:${({showGame})=>{return showGame}}
`




// nst MemoryGame = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width:90%;
//   margin:0; 
  
// `;