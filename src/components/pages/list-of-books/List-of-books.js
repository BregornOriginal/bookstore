import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import NewBook from '../../new-book/Add-book';
import { deleteBook } from '../../../redux/books/books';

export default function ListOfBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const deleteBookHandler = (id) => {
    dispatch(deleteBook({ id }));
  };

  const booksTable = books.map((book) => (
    <tr
      key={book.title}
    >
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button type="button" className="delete" onClick={() => deleteBookHandler(book.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
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
