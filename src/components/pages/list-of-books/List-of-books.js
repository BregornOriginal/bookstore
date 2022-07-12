import { useSelector } from 'react-redux';
import Book from '../../book/Book';
import NewBook from '../../new-book/Add-book';

export default function ListOfBooks() {
  const deleteBookHandler = (id) => {

  };

  const books = useSelector((state) => state.books.books);
  console.log(books);
  const booksTable = books.map((book) => (
    <tr
      key={book.title}
    >
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button type="button" className="delete" onClick={() => deleteBookHandler(book.id)}>
          x
        </button>
      </td>
    </tr>
  ));
  return (
    <div>
      <ul />
      <Book />
      <table>
        <tbody>
          {booksTable}
        </tbody>
      </table>
      <NewBook />
    </div>
  );
}
