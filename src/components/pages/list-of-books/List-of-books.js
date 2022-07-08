import Book from '../../book/Book';
import AddBook from '../../new-book/Add-book';

export default function ListOfBooks() {
  return (
    <div>
      <ul />
      <Book />
      <button type="button">Delete</button>
      <AddBook />
    </div>
  );
}
