import styled from 'styled-components';

export const MemoryGame = styled.div`
display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  `;

  export const Right = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
  `;
  
  export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  `;
  
  export const Game = styled.div`
  display: flex;
  width: 100%;
`;

const boardHelper = {
  0: {
    columns: 0,
    rows: 0,
    cellWidth: '200px',
    cellHeight: '300px'
  },
  1: {
    columns: 2,
    rows: 2,
    cellWidth: '200px',
    cellHeight: '300px'
  },
  2: {
    columns: 3,
    rows: 2,
    cellWidth: '160px',
    cellHeight: '250px'
  },
  3: {
    columns: 4,
    rows: 4,
    cellWidth: '140px',
    cellHeight: '169px'
  },
  4: {
    columns: 5,
    rows: 4,
    cellWidth: '130px',
    cellHeight: '169px'
  },
  5: {
    columns: 6,
    rows: 5,
    cellWidth: '100px',
    cellHeight: '136px'
  }
};
export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Grid = styled.div`
  flex: 5;
  display: grid;
  grid-template-columns: repeat(
    ${props => boardHelper[props.level].columns},
    ${props => boardHelper[props.level].cellWidth}
  );
  grid-template-rows: repeat(
    ${props => boardHelper[props.level].rows},
    ${props => boardHelper[props.level].cellHeight}
  );

  grid-gap: 1%;
`;

