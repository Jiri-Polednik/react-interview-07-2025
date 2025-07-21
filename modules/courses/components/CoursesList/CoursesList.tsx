'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoursesListItem from './CoursesListItem';
import { coursesSelector } from '../../selectors';
import { loadCourses } from '../../actions';

const CoursesList: React.FC = () => {
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <ul>
      {courses.map((course) => (
        <CoursesListItem
          key={course.id}
          id={course.id}
          slug={course.slug}
          title={course.title}
        />
      ))}
    </ul>
  );
};

export default CoursesList;
