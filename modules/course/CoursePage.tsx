import React from 'react'
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import Spinner from '@/components/Spinner/Spinner'
import Container from '@/components/Container/Container'
import VideoContainer from './components/Video/VideoContainer'
import VideoFilterContainer from './components/VideoFilter/VideoFilterContainer'
import { Video as VideoType } from './actions'

interface CoursePageProps {
  title: string
  loading: boolean
  error: string | null
  playlistVideos: VideoType[]
}

interface RowProps {
  index: number
  style: React.CSSProperties
}

class CoursePage extends React.PureComponent<CoursePageProps> {
  listRef = React.createRef<List>()


  getItemSize = (index: number): number => {
    const { playlistVideos } = this.props
    return playlistVideos[index].open === true ? 540 : 140
  }

  toggleOpenCallback = (index: number): void => {
    this.listRef.current?.resetAfterIndex(index)
  }

  render() {
    const { title, loading, error, playlistVideos } = this.props
    const Row = ({ index, style }: RowProps) => {
      return (
        <div style={style}>
          {React.createElement(VideoContainer as React.ComponentType<any>, {
            key: playlistVideos[index].id,
            index: index,
            id: playlistVideos[index].id,
            title: playlistVideos[index].title,
            thumbnail: playlistVideos[index].thumbnail,
            description: playlistVideos[index].description,
            toggleOpenCallback: this.toggleOpenCallback,
          })}
        </div>
      )
    }

    return (
      <>
        {/*this.renderMeta()*/}
        <article>
          <Container>
            {React.createElement(VideoFilterContainer as React.ComponentType<any>)}
            <h1>{title}</h1>
            {!loading && playlistVideos.length > 0 && (
              <div style={{ height: '60vh' }}>
                <AutoSizer>
                  {({ height, width }) => 
                    React.createElement(List as React.ComponentType<any>, {
                      ref: this.listRef,
                      height: height,
                      itemCount: playlistVideos.length,
                      itemSize: this.getItemSize,
                      width: width,
                      children: Row
                    })
                  }
                </AutoSizer>
              </div>
            )}
            {loading && <Spinner />}
            {error && 'Error loading playlist'}
          </Container>
        </article>
      </>
    )
  }
}

export default CoursePage
