'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notFound } from 'next/navigation';
import CoursePageContainer from '@/modules/course/CoursePageContainer';
import { coursesSelector } from '@/modules/courses/selectors';
import { loadCourses } from '@/modules/courses/actions';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function Course({ params: { slug } }: CoursePageProps) {
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  const course = courses.find((c) => c.slug === slug);

  if (courses.length > 0 && !course) {
    notFound();
  }

  if (!course) {
    return <div>Loading course...</div>;
  }

  const CoursePageComponent = CoursePageContainer as React.ComponentType<{
    playlistId: string;
  }>;
  return <CoursePageComponent playlistId={course.playlistId} />;
}
