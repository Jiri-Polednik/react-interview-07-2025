import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_ERROR,
  FETCH_PLAYLIST_SUCCESS,
  TOGGLE_VIDEO_COMPLETED,
  TOGGLE_VIDEO_OPEN,
  SET_VIDEO_FILTER,
  PayloadAction,
  Video,
} from './actions';

export interface CoursePageState {
  loading: boolean;
  error: boolean;
  playlistVideos: Video[];
  title: string;
  filterValue: 'all' | 'completed' | 'not-completed';
}

const loadCompletedVideosFromStorage = (): Record<string, boolean> => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem('completedVideos');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveCompletedVideosToStorage = (
  completedVideos: Record<string, boolean>
) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('completedVideos', JSON.stringify(completedVideos));
};

export const initialState: CoursePageState = {
  loading: false,
  error: false,
  playlistVideos: [],
  title: '',
  filterValue: 'all',
};

function playlistReducer(
  state = initialState,
  action: PayloadAction
): CoursePageState {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_PLAYLIST_SUCCESS:
      const { playlistVideos, title } = action.payload;
      const completedVideos = loadCompletedVideosFromStorage();
      const videosWithCompletion = playlistVideos.map((video: Video) => ({
        ...video,
        completed: completedVideos[video.id] || false,
      }));
      return {
        ...state,
        loading: false,
        error: false,
        playlistVideos: videosWithCompletion,
        title,
      };
    case FETCH_PLAYLIST_ERROR:
      return { ...state, loading: false, error: true };
    case TOGGLE_VIDEO_COMPLETED: {
      const id = action.payload;
      const updatedVideos = state.playlistVideos.map((video) => {
        if (video.id === id) {
          return { ...video, completed: !video.completed };
        }
        return video;
      });

      const completedVideos: Record<string, boolean> = {};
      updatedVideos.forEach((video) => {
        if (video.completed) {
          completedVideos[video.id] = true;
        }
      });
      saveCompletedVideosToStorage(completedVideos);

      return {
        ...state,
        playlistVideos: updatedVideos,
      };
    }
    case TOGGLE_VIDEO_OPEN: {
      const id = action.payload;
      return {
        ...state,
        playlistVideos: state.playlistVideos.map((video) => {
          if (video.id === id) {
            return { ...video, open: !video.open };
          }
          return video;
        }),
      };
    }
    case SET_VIDEO_FILTER:
      const filterValue = action.payload;
      return { ...state, filterValue };
    default:
      return state;
  }
}

export default playlistReducer;
