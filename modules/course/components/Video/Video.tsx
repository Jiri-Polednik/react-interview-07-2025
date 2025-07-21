import React from 'react';
import Collapse from '@/components/Collapse/Collapse';
import styles from './Video.module.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

interface VideoProps {
  video: any;
  toggleCompleted: () => void;
  isCompleted: boolean;
  toggleOpen: () => void;
  isOpen: boolean;
  isDisplayed: boolean;
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const Video = ({
  video,
  toggleCompleted,
  isCompleted,
  toggleOpen,
  isOpen,
  isDisplayed,
  id,
  title,
  description,
  thumbnail,
}: VideoProps) => {
  return (
    <>
      {
        <div className={styles['video']}>
          <label className={styles['video__completed']}>
            <input
              className={styles['video__completed-checkbox']}
              type="checkbox"
              checked={isCompleted}
              onChange={toggleCompleted}
            />
          </label>
          <div className={styles['video__content']}>
            <h2 className={styles['video__title']}>{title}</h2>
            {isOpen && (
              <Collapse open={isOpen}>
                <VideoPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  onMarkCompleted={toggleCompleted}
                />
                <p className={styles['video__description']}>{description}</p>
              </Collapse>
            )}
            <button onClick={toggleOpen} type="button">
              {isOpen ? 'show less' : 'show more'}
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default React.memo(Video);
