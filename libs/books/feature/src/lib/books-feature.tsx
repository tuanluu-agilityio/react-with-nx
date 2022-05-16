import { useEffect, useState } from 'react';
import { getBooks } from '@acme/books/data-access';
import { Books } from '@acme/books/ui';
import { IBook } from '@acme/shared-models';

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(
    () => {
      getBooks().then(setBooks);
    },
    [
      // TODO
    ]
  );

  const onAdd = (book: IBook) => {
    alert(`Added ${book.title}`);
  };

  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={onAdd} />
    </>
  );
};

export default BooksFeature;
