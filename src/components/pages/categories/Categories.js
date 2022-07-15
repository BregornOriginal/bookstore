import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checking } from '../../../redux/categories/categories';
import './categories.css';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const checkStatusHandler = () => {
    dispatch(checking('Under construction'));
  };

  return (
    <main>
      <div className="status">{categories}</div>
      <button
        className="check-button"
        type="button"
        onClick={() => checkStatusHandler(categories)}
      >
        Check Status
      </button>
    </main>
  );
}
