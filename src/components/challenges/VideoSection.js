import React, { memo, useCallback, useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import Tags from '../Tags';
import ShareButton from '../ShareButton';
import YouTubeVideo from '../YouTubeVideo';
import TimestampTimeline from '../TimestampTimeline';
import * as css from './VideoSection.module.css';

const VideoSection = ({ challenge }) => {
  const { topics, languages } = challenge;

  const youTubeVideoRef = useRef();
  const [showTimeline, setShowTimeline] = useState(false);
  const [timestamp, setTimestamp] = useState();

  const updateTimestamp = useCallback((value) => {
    setTimestamp(value);
    setShowTimeline(false);
  }, []);

  useEffect(() => {
    if (showTimeline) {
      document.body.style.overflow = 'hidden';
      youTubeVideoRef.current.scrollIntoView();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showTimeline]);

  return (
    <div className={css.root}>
      <h2 className={css.subheading}>{challenge.title}</h2>
      <div className={css.videoPlayer}>
        <div className={css.left}>
          <div className={css.details}>
            <Tags className={css.tags} heading="Languages" items={languages} />
            <Tags className={css.tags} heading="Topics" items={topics} />
            <ShareButton className={css.share} variant="cyan" />
          </div>
          <div className={css.video} ref={youTubeVideoRef}>
            <YouTubeVideo
              containerClassName={css.videoWrapper}
              videoId={challenge.videoId}
              timestamp={timestamp}
            />
          </div>
        </div>
        <div className={cn(css.right, { [css.unCollapsed]: showTimeline })}>
          <div
            className={css.timelinesToggle}
            onClick={() => setShowTimeline((v) => !v)}
            onKeyPress={(e) => e.key === 'Enter' && setShowTimeline((v) => !v)}
            role="button"
            tabIndex="0"
            aria-label="Toggle timeline">
            <span className={css.back}>Back</span>
            <span className={css.arrow}> </span>
          </div>
          <div className={css.timelinesContent}>
            <div className={css.tabs}>
              <div className={css.tab}>Video timestamps</div>
            </div>
            <div className={css.timeline}>
              <TimestampTimeline
                variant="cyan"
                timestamps={challenge.timestamps}
                updateTimestamp={updateTimestamp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoSection);