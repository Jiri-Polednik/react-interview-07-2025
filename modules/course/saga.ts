import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchPlaylistError,
  fetchPlaylistSuccess,
  FETCH_PLAYLIST_REQUEST,
  PayloadAction,
  Playlist,
} from './actions';
import ApiService from '@/services/ApiService';

export function* fetchPlaylistSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    const playlistId = action.payload;
    if (!playlistId) {
      throw new Error('Playlist ID is required');
    }

    const api = new ApiService();
    const response: Response = yield api.getPlaylist(playlistId);

    if (!response.ok) {
      const errorData: any = yield response.json();
      throw new Error(
        errorData.message || `HTTP ${response.status}: Failed to fetch playlist`
      );
    }

    const data: any = yield response.json();
    const { playlist, playlistVideos } = data;

    if (!playlist || !playlist.localized) {
      throw new Error('Invalid playlist data: missing playlist information');
    }

    if (!Array.isArray(playlistVideos)) {
      throw new Error('Invalid playlist data: no videos found');
    }

    const formattedVideos = playlistVideos.map((video: any) => ({
      id: video.id,
      title: video.title,
      thumbnail: video.thumbnails?.medium?.url || '',
      description: video.description || '',
    }));

    yield put(
      fetchPlaylistSuccess({
        title: playlist.localized.title,
        playlistVideos: formattedVideos,
      })
    );
  } catch (err) {
    console.error('Playlist fetch error:', err);
    yield put(
      fetchPlaylistError(
        err instanceof Error
          ? err.message
          : 'An error occurred while fetching the playlist'
      )
    );
  }
}

export default function* playlistData() {
  yield takeLatest(FETCH_PLAYLIST_REQUEST, fetchPlaylistSaga);
}
