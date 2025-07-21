import React from 'react'
import styles from './VideoFilter.module.scss'

interface Filter {
  onFilterSet: () => void;
  name: string;
  active: boolean;
}

export interface VideoFilterProps {
  filters: Filter[];
}

const VideoFilter = ({ filters }: VideoFilterProps) => {
  return (
    <div className={styles['video-filter']}>
      Filter:
      {filters.map(({ onFilterSet, name, active }) => {
        return (
          <button
            className={`${styles['video-filter__filter-button']} ${
              active ? styles['video-filter__filter-button--active'] : ''
            }`}
            type="button"
            onClick={onFilterSet}
            key={name}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default VideoFilter
