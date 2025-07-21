import ReactPlayer from 'react-player';
import styles from './VideoPlayer.module.scss';

type Props = {
  url: string;
  onMarkCompleted?: () => void;
};

const VideoPlayer: React.FC<Props> = ({ url, onMarkCompleted }) => {
  return (
    <div className={styles['video-player']}>
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        onEnded={onMarkCompleted}
      />
    </div>
  );
};

export default VideoPlayer;
