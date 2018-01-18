import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
  display: grid;
  padding: 10px;
  background: #27282a;
  justify-items: center;
  grid-template-areas: 'Image Image' 'Title Title' ' Author Author' 'PublishDate PublishDate' 'Buttons Buttons';
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  grid-area: Title;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 180px;
  overflow: hidden;
  color: white;
`;

export const PublishDate = styled.p`
  color: #797a7c;
  margin: 0;
  align-self: center;
  grid-area: PublishDate;
`;

export const Author = styled.p`
  color: #797a7c;
  margin: 0 0 15px 0;
  grid-area: Author;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 180px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
  grid-area: Image;
  justify-self: center;
`;
