import React from 'react'
import Video from './Video'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { isCompletedSelector, isOpenSelector } from '../../selectors'
import { toggleVideoCompleted, toggleVideoOpen } from '../../actions'
import { CoursePageState } from '../../reducer'

interface OwnProps {
  id: string;
  toggleOpenCallback: (index: number) => void;
  index: number;
}

interface RootState {
  coursePage: CoursePageState;
}

const withCompleted = connect(
  (state: RootState, { id }: OwnProps) => ({
    isCompleted: isCompletedSelector(state, id),
  }),
  (dispatch: any, { id, toggleOpenCallback, index }: OwnProps) => ({
    toggleCompleted: () => {
      dispatch(toggleVideoCompleted(id))
      toggleOpenCallback(index)
    },
  }),
)

const withOpen = connect(
  (state: RootState, { id }: OwnProps) => ({
    isOpen: isOpenSelector(state, id),
  }),
  (dispatch: any, { id, toggleOpenCallback, index }: OwnProps) => ({
    toggleOpen: () => {
      dispatch(toggleVideoOpen(id))
      toggleOpenCallback(index)
    },
  }),
)

export default compose(
  withCompleted,
  withOpen,
)(Video as any) as React.ComponentType<any>
