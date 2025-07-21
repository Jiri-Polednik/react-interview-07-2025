'use client';
import CoursePageContainer from '@/modules/course/CoursePageContainer';

const playlistIds: Record<string, string> = {
  java: 'PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f',
  'free-code-camp': 'UU8butISFwT-Wl7EV0hUK0BQ',
  'ten-days-of-javascript': 'PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs',
  'fk-2024-e': 'PLnXfazh66kVfUsfw9Oh5rBttZHaJe6HKB',
  'fk-2024-p': 'PLnXfazh66kVd0jXpYliCLAreHc4TDwnTf',
  'fk-2024-f': 'PLnXfazh66kVc8TRx1qmK3wshWs330_xsK',
};

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function Course({ params: { slug } }: CoursePageProps) {
  const CoursePageComponent = CoursePageContainer as React.ComponentType<{
    playlistId: string;
  }>;
  return <CoursePageComponent playlistId={playlistIds[slug]} />;
}
