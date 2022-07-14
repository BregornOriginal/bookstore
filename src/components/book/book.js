import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBooksAsync } from '../../base-api';
import './book.css';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, author, category, title, percentage, chapter,
  } = props;

  const deleteBookHandler = () => {
    dispatch(deleteBooksAsync(id));
  };

  return (
    <div className="book-container">
      <div className="book-description">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h4>{category}</h4>
      </div>
      <ul>
        <li>
          <p>Comments</p>
        </li>
      </ul>
      <button type="button" className="delete" onClick={() => deleteBookHandler()}>
        Delete
      </button>
      <div className="sec-graph">
        <CircularProgressbar
          value={percentage}
          className="graphBox"
          strokeWidth={6}
          styles={buildStyles({
            pathColor: '#0290ff',
            trailColor: 'rgba(0,0,0,0.1)',
          })}
        />
        <div>
          <h4>{`${percentage}%`}</h4>
          <p>Completed</p>
        </div>
      </div>
      <div className="sec-update">
        <h4>CURRENT CHAPTER</h4>
        <p>{chapter}</p>
        <button type="button" label="UPDATE PROGRESS" axn={() => console.log(`${title} btn pressed`)} />
      </div>
    </div>
  );
};

Book.defaultProps = {
  chapter: 'Not Specificated',
  percentage: 0,
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  chapter: PropTypes.number,
};

export default Book;
