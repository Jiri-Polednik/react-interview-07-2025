'use client';
import React from 'react';
import { compose } from 'recompose';

import CoursePage from './CoursePage';

import withPlaylistData from './HOC/withPlaylistData';
import fetchPlaylistOnMount from './HOC/fetchPlaylistOnMount';

const CoursePageWithData = compose(
  fetchPlaylistOnMount,
  withPlaylistData
)(CoursePage as any) as React.ComponentType<{ playlistId: string }>;

export default CoursePageWithData;
