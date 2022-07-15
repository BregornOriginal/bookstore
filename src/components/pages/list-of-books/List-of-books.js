import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CreateBook from '../../add-book/Add-book';
import { getBooks } from '../../../base-api';
import Book from '../../book/book';
import './list-of-books.css';

export default function ListOfBooks() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <section className="list-of-books">
        {
          books.length ? books.map((book) => (
            <Book
              author={book.author}
              category={book.category}
              id={book.id}
              key={book.id}
              title={book.title}
              percentage={book.percentage}
            />
          )) : <p>Books not found</p>
        }
      </section>
      <hr className="book-divisor" />
      <h6>ADD NEW BOOK</h6>
      <CreateBook />
    </>

  );
}
