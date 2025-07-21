import {
  ADD_COURSE,
  REMOVE_COURSE,
  LOAD_COURSES,
  PayloadAction,
  AddCoursePayload,
} from './actions';
import { CoursesState, Course } from './types';

const loadCoursesFromStorage = (): Course[] => {
  if (typeof window === 'undefined') return getDefaultCourses();
  try {
    const stored = localStorage.getItem('courses');
    return stored ? JSON.parse(stored) : getDefaultCourses();
  } catch {
    return getDefaultCourses();
  }
};

const saveCoursesToStorage = (courses: Course[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('courses', JSON.stringify(courses));
  } catch {}
};

const getDefaultCourses = (): Course[] => [
  {
    id: '1',
    slug: 'java',
    title: 'Java Course',
    playlistId: 'PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f',
  },
  {
    id: '2',
    slug: 'free-code-camp',
    title: 'Free Code Camp',
    playlistId: 'UU8butISFwT-Wl7EV0hUK0BQ',
  },
  {
    id: '3',
    slug: 'ten-days-of-javascript',
    title: 'Ten Days of JavaScript',
    playlistId: 'PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs',
  },
];

export const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};

function coursesReducer(
  state = initialState,
  action: PayloadAction
): CoursesState {
  switch (action.type) {
    case LOAD_COURSES:
      const loadedCourses = loadCoursesFromStorage();
      return {
        ...state,
        courses: loadedCourses,
      };
    case ADD_COURSE: {
      const { slug, title, playlistId } = action.payload as AddCoursePayload;
      const newCourse: Course = {
        id: Date.now().toString(),
        slug,
        title,
        playlistId,
      };
      const updatedCourses = [...state.courses, newCourse];
      saveCoursesToStorage(updatedCourses);
      return {
        ...state,
        courses: updatedCourses,
      };
    }
    case REMOVE_COURSE: {
      const courseId = action.payload as string;
      const filteredCourses = state.courses.filter(
        (course) => course.id !== courseId
      );
      saveCoursesToStorage(filteredCourses);
      return {
        ...state,
        courses: filteredCourses,
      };
    }
    default:
      return state;
  }
}

export default coursesReducer;
