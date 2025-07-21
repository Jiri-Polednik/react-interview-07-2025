export interface Course {
  id: string;
  slug: string;
  title: string;
  playlistId: string;
}

export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}
