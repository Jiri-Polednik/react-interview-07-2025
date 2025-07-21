import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPlaylistRequest } from '../actions'

interface OwnProps {
  playlistId: string;
}

const withFetchPlaylistRequest = connect(
  null,
  (dispatch: any, { playlistId }: OwnProps) => {
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

const fetchPlaylistOnMount = lifecycle({
  componentDidMount() {
    (this.props as any).fetchPlaylistRequest()
  },
})

export default compose(
  withFetchPlaylistRequest,
  fetchPlaylistOnMount,
)
