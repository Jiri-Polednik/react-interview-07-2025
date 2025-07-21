'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@/components/Container/Container';
import styles from './Header.module.scss';
import { coursesSelector } from '@/modules/courses/selectors';
import { loadCourses } from '@/modules/courses/actions';

const Header = () => {
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <header className={styles.base}>
      <Container>
        <div className={styles.logo}>Awesome project</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {courses.map((course) => (
              <li key={course.id}>
                <Link href={`/course/${course.slug}`}>{course.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
