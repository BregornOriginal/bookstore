import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NewBook from '../../new-book/Add-book';
import { getBooks, deleteBooksAsync } from '../../../base-api';

export default function ListOfBooks() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const deleteBookHandler = (id) => {
    console.log(id);
    dispatch(deleteBooksAsync(id));
  };
  const booksTable = books.length ? books.map((book) => (
    <tr
      key={book.id}
    >
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" className="delete" onClick={() => deleteBookHandler(book.id)}>
          Delete
        </button>
      </td>
    </tr>
  )) : <tr className="fieldEmpty"><td>Books not found</td></tr>;

  return (
    <div className="list-of-books">
      <table>
        <tbody>
          {booksTable}
        </tbody>
      </table>
      <NewBook />
    </div>
  );
}
