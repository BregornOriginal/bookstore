import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { addBooksAsync } from '../../base-api';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBooksAsync({
      title,
      author,
      item_id: nanoid(),
      category: 'fiction',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="add-book">
      <div>
        <input
          value={title}
          name="title"
          type="text"
          className="input-text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          value={author}
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
