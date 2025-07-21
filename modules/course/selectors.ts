import get from 'lodash/fp/get'
import { Video } from './actions'
import { CoursePageState } from './reducer'

interface RootState {
  coursePage: CoursePageState
}

export const videoFilterSelector = get('coursePage.filterValue')
export const coursePageLoadingSelector = get('coursePage.loading')
export const coursePageErrorSelector = get('coursePage.error')
export const playlistVideosSelector = get('coursePage.playlistVideos')
export const playlistTitleSelector = get('coursePage.title')

export const isCompletedSelector = (state: RootState, id: string): boolean => {
  const video = state.coursePage.playlistVideos.find(video => {
    return video.id === id
  })
  return video?.completed || false
}

export const isOpenSelector = (state: RootState, id: string): boolean => {
  const video = state.coursePage.playlistVideos.find(video => {
    return video.id === id
  })
  return video?.open || false
}

export const getFilteredVideosSelector = (state: RootState): Video[] => {
  const filterValue = videoFilterSelector(state)
  const videos = playlistVideosSelector(state)
  switch (filterValue) {
    case 'completed':
      return videos.filter((video: Video) => {
        return video.completed
      })
    case 'not-completed':
      return videos.filter((video: Video) => {
        return !video.completed
      })
    default:
      return videos
  }
}