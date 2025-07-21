export const ADD_COURSE = 'Courses/ADD_COURSE';
export const REMOVE_COURSE = 'Courses/REMOVE_COURSE';
export const LOAD_COURSES = 'Courses/LOAD_COURSES';

export interface PayloadAction<T = any> {
  type: string;
  payload?: T;
}

export interface AddCoursePayload {
  slug: string;
  title: string;
  playlistId: string;
}

export const addCourse = (
  payload: AddCoursePayload
): PayloadAction<AddCoursePayload> => ({
  type: ADD_COURSE,
  payload,
});

export const removeCourse = (payload: string): PayloadAction<string> => ({
  type: REMOVE_COURSE,
  payload,
});

export const loadCourses = (): PayloadAction => ({
  type: LOAD_COURSES,
});
