import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPlaylistRequest } from '../actions'
import { ComponentType } from 'react'

interface PlaylistProps {
  playlistId?: string
}

interface WithFetchPlaylistRequestProps extends PlaylistProps {
  fetchPlaylistRequest: () => void
}

const withFetchPlaylistRequest = connect(
  null,
  (dispatch: any, { playlistId }: PlaylistProps) => {
    if (!playlistId) {
      throw Error('Missing playlist id in props')
    }
    return {
      fetchPlaylistRequest: () => {
        dispatch(fetchPlaylistRequest(playlistId))
      },
    }
  },
)

const fetchPlaylistOnMount = lifecycle<WithFetchPlaylistRequestProps, {}>({
  componentDidMount() {
    this.props.fetchPlaylistRequest()
  },
})

export default <TProps extends PlaylistProps>(component: ComponentType<TProps>) =>
  compose(
    withFetchPlaylistRequest,
    fetchPlaylistOnMount,
  )(component)