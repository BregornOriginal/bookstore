import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListOfBooks from './components/pages/list-of-books/List-of-books';
import Categories from './components/pages/categories/Categories';
import Header from './components/header/Header';
import './index.css';

function App() {
  return (
    <div className="main-container">
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/" element={<ListOfBooks />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}

export default App;
