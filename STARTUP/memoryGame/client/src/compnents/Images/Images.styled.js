import styled from 'styled-components';

const boardHelper = {
  0:{
    columns:0,
    rows:0,    
    cellWidth:'200px',
    cellHeight:'300px'
  },
  1:{
    columns:2,
    rows:2,    
    cellWidth:'200px',
    cellHeight:'300px'
  },
  2:{
    columns:3,
    rows:2,    
    cellWidth:'160px',
    cellHeight:'250px'
  },
  3:{
    columns:4,
    rows:3,    
    cellWidth:'140px',
    cellHeight:'200px'
  },
  4:{
    columns:5,
    rows:4,    
    cellWidth:'130px',
    cellHeight:'180px'
  },
  5:{
    columns:6,
    rows:5,    
    cellWidth:'100px',
    cellHeight:'140px'
  }
}

const Grid = styled.div`
flex:5;
display: grid;
grid-template-columns:repeat(${props => boardHelper[props.level].columns},${props => boardHelper[props.level].cellWidth});
grid-template-rows:repeat(${props => boardHelper[props.level].rows},${props => boardHelper[props.level].cellHeight});

grid-gap:1%;
`;

export default Grid;



// const boardHelper = {
//   1:{
//     columns:2,
//     cell:'49%'
//   },
//   2:{
//     columns:3,
//     cell:'29%'
//   },
//   3:{
//     columns:4,
//     cell:'24%'
//   },
//   4:{
//     columns:4,
//     cell:'24%'
//   },
//   5:{
//     columns:6,
//     cell:'15%'
//   }
// }