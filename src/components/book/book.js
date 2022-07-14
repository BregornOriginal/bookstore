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
    <article className="card">
      <section className="book-section">
        <div className="book-description">
          <h4>{category}</h4>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <ul className="book-options">
          <li>
            <a href="/">Comments</a>
          </li>
          <span className="separator" />
          <li>
            <button type="button" className="remove-button" onClick={() => deleteBookHandler()}>
              Remove
            </button>
          </li>
          <span className="separator" />
          <li>
            <a href="/">Edit</a>
          </li>
        </ul>
      </section>
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
        <div className="chapter-status">
          <h4>{`${percentage}%`}</h4>
          <p>Completed</p>
        </div>
      </div>
      <span className="status-separator" />
      <div className="sec-update">
        <h5>CURRENT CHAPTER</h5>
        <p>{chapter}</p>
        <button type="button" label="UPDATE PROGRESS" className="update-progress">
          UPDATE PROGRESS
        </button>
      </div>
    </article>
  );
};

Book.defaultProps = {
  chapter: 'Not Specificated',
  percentage: 87,
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
