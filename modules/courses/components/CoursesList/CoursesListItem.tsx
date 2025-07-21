'use client';
import { useDispatch } from 'react-redux';
import styles from './CoursesListItem.module.scss';
import { removeCourse } from '../../actions';

type Props = {
  id: string;
  slug: string;
  title: string;
};

const CoursesListItem: React.FC<Props> = ({ id, slug, title }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to remove "${title}"?`)) {
      dispatch(removeCourse(id));
    }
  };

  return (
    <li className={styles['courses-list-item']}>
      <span>
        {title} ({slug})
      </span>
      <button onClick={handleRemove}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
