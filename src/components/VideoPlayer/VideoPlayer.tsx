import { useEffect, useRef, useState } from 'react';
import { parseYouTubeVideoId } from '../../utils/youtube';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  videoUrl?: string;
  posterSrc?: string;
  title: string;
}

const isLocalPoster = (src: string) =>
  (src.startsWith('/') && !src.startsWith('//')) ||
  src.startsWith('./') ||
  src.startsWith('../') ||
  src.startsWith('data:image/');

const VideoPlayer = ({ videoUrl, posterSrc, title }: VideoPlayerProps) => {
  const [isActivated, setIsActivated] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = videoUrl ? parseYouTubeVideoId(videoUrl) : null;
  const localPosterSrc =
    posterSrc && isLocalPoster(posterSrc) ? posterSrc : undefined;

  useEffect(() => {
    if (isActivated) {
      iframeRef.current?.focus();
    }
  }, [isActivated]);

  if (!videoId) {
    return (
      <div className={`${styles.player} ${styles.unavailable}`} role="status">
        Video će uskoro biti dostupan.
      </div>
    );
  }

  return (
    <div className={styles.player}>
      {isActivated ? (
        <iframe
          ref={iframeRef}
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1`}
          title={`Video: ${title}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          tabIndex={0}
        />
      ) : (
        <div className={styles.preview}>
          {localPosterSrc && (
            <img className={styles.poster} src={localPosterSrc} alt="" />
          )}
          <button
            type="button"
            className={styles.playButton}
            aria-label={`Pokreni video: ${title}`}
            onClick={() => setIsActivated(true)}
          >
            <svg
              className={styles.playIcon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
