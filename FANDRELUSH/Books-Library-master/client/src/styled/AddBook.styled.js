import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  display: grid;
  background: #27282a;
  justify-items: flex-end;
  grid-template-areas:
    'Header  Header'
    'Title Author'
    'publishedDate ImageURL'
    'Save  Cancel';
`;

export const Header = styled.h2`
  grid-area: Header;
  color: white;
  justify-self: center;
`;

export const InputBox = styled.input`
  background: #1d1e20;
  color: white;
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
`;

export const InputLabel = styled.label`
  color: white;
  grid-area: ${props => props.gridArea};
`;

export const Save = styled.input`
  grid-area: Save;
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;

export const Cancel = styled.button`
  grid-area: Cancel;
  background: #1d1e20;
  color: white;
  border: 1px solid #2c2d2f;
  padding: 10px 20px;
`;
