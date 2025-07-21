import { RootState } from '../course/store';

export const coursesSelector = (state: RootState) => state.courses.courses;
export const coursesLoadingSelector = (state: RootState) =>
  state.courses.loading;
export const coursesErrorSelector = (state: RootState) => state.courses.error;
