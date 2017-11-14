import styled from 'styled-components';

const boardHelper = {
  1:{
    columns:2,
    cell:'49%'
  },
  2:{
    columns:3,
    cell:'29%'
  },
  3:{
    columns:4,
    cell:'24%'
  },
  4:{
    columns:4,
    cell:'24%'
  },
  5:{
    columns:6,
    cell:'15%'
  }
}

const Grid = styled.div`
display: grid;
grid-template-columns:repeat(${props => boardHelper[props.level].columns},${props => boardHelper[props.level].cell});
grid-gap:1%;
`;

export default Grid;