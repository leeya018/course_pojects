import React from 'react';
import { Wrapper, Title, PublishDate, Author, Image } from '../styled/Book.styled';
import BookButtons from './BookButtons';

const Book = ({ book }) => (
  <Wrapper key={book.id}>
    <Title>{book.volumeInfo.title}</Title>
    <Image src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
    <PublishDate>{book.volumeInfo.publishedDate}</PublishDate>
    <Author>{book.volumeInfo.authors[0]}</Author>
    <BookButtons book={book} />
  </Wrapper>
);

export default Book;
