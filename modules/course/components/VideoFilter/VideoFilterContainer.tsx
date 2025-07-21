import React from 'react';
import VideoFilter from './VideoFilter';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { videoFilterSelector } from '../../selectors';
import { setVideoFilter } from '../../actions';

interface FilterStateProps {
  videoFilter: string;
  setVideoFilter: (filterValue: string) => void;
}

const withFilterState = connect(
  (state: any) => ({
    videoFilter: videoFilterSelector(state),
  }),
  (dispatch: any) => ({
    setVideoFilter: (filterValue: string) => {
      dispatch(setVideoFilter(filterValue));
    },
  })
);

const withFilters = withProps(
  ({ setVideoFilter, videoFilter }: FilterStateProps) => {
    return {
      filters: [
        {
          onFilterSet: () => {
            setVideoFilter('all');
          },
          name: 'All',
          active: videoFilter === 'all',
        },
        {
          onFilterSet: () => {
            setVideoFilter('completed');
          },
          name: 'Completed',
          active: videoFilter === 'completed',
        },
        {
          onFilterSet: () => {
            setVideoFilter('not-completed');
          },
          name: 'Not completed',
          active: videoFilter === 'not-completed',
        },
      ],
    };
  }
);

export default compose(
  withFilterState,
  withFilters
)(VideoFilter as any) as React.ComponentType<any>;
