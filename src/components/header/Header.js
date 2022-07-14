import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>Bookstore CMS</h1>
        <nav className="nav-bar">
          <Link to="/">BOOKS</Link>
          <Link to="categories">CATEGORIES</Link>
        </nav>
      </div>
      <button type="button" className="icon-button">
        <i className="fa-solid fa-user" />
      </button>
    </header>
  );
}
