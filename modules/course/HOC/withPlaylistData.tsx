import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  getFilteredVideosSelector,
  coursePageLoadingSelector,
  coursePageErrorSelector,
  playlistTitleSelector,
} from '../selectors'
import { Video } from '../actions'

export interface WithPlaylistDataProps {
  playlistVideos: Video[]
  loading: boolean
  error: string | null
  title: string
}

const withPlaylistData = connect(
  createStructuredSelector({
    playlistVideos: getFilteredVideosSelector,
    loading: coursePageLoadingSelector,
    error: coursePageErrorSelector,
    title: playlistTitleSelector,
  }),
)

export default withPlaylistData