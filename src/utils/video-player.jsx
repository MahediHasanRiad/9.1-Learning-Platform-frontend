import ReactPlayer from "react-player";

import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

function Player({video}) {
  return (
    <MediaController
      style={{
        width: "100%",
        // aspectRatio: "16/9",
      }}
    >
      <ReactPlayer
        slot="media"
        src={video}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          "--controls": "none",
        }}
      ></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={5} />
        <MediaSeekForwardButton seekOffset={10} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
}

export default Player