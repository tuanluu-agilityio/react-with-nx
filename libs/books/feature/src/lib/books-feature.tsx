import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { IBook } from '@acme/shared-models';
import { useDispatch } from 'react-redux';
import { cartActions } from '@acme/cart/data-access';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(
    () => {
      getBooks().then(setBooks);
    }, []
  );

  const onAdd = (book: IBook) => {
    dispatch(cartActions.add({
      id: book.id,
      description: book.title,
      cost: book.price,
    }));
  };

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={onAdd} />
    </>
  );
};

export default BooksFeature;
