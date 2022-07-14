import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { addBook } from '../../redux/books/books';

export default function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title,
      author,
      id: nanoid(),
    }));
  };

  return (
    <form className="add-book">
      <div>
        <input
          name="title"
          type="text"
          className="input-text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          name="author"
          type="text"
          className="input-text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="button" onClick={addBookHandler}>Add Book</button>
    </form>
  );
}
