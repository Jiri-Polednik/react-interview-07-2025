export const FETCH_PLAYLIST_REQUEST = 'PlaylistPage/FETCH_PLAYLIST_REQUEST'
export const FETCH_PLAYLIST_SUCCESS = 'PlaylistPage/FETCH_PLAYLIST_SUCCESS'
export const FETCH_PLAYLIST_ERROR = 'PlaylistPage/FETCH_PLAYLIST_ERROR'

export const TOGGLE_VIDEO_COMPLETED = 'PlaylistPage/TOGGLE_VIDEO_COMPLETED'
export const TOGGLE_VIDEO_OPEN = 'PlaylistPage/TOGGLE_VIDEO_OPEN'
export const SET_VIDEO_FILTER = 'PlaylistPage/SET_VIDEO_FILTER'

export interface PayloadAction<T = any> {
  type: string
  payload?: T
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  open?: boolean
  completed?: boolean
}

export interface Playlist {
  title: string
  videos: Video[]
}

export const fetchPlaylistRequest = (payload?: string): PayloadAction<string> => ({ type: FETCH_PLAYLIST_REQUEST, payload })
export const fetchPlaylistSuccess = (payload: Playlist): PayloadAction<Playlist> => ({ type: FETCH_PLAYLIST_SUCCESS, payload })
export const fetchPlaylistError = (payload: string): PayloadAction<string> => ({ type: FETCH_PLAYLIST_ERROR, payload })

export const toggleVideoCompleted = (payload: string): PayloadAction<string> => ({ type: TOGGLE_VIDEO_COMPLETED, payload })
export const toggleVideoOpen = (payload: string): PayloadAction<string> => ({ type: TOGGLE_VIDEO_OPEN, payload })
export const setVideoFilter = (payload: string): PayloadAction<string> => ({ type: SET_VIDEO_FILTER, payload })