import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Bookstore</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="categories">Categories</Link>
      </nav>
    </header>
  );
}
