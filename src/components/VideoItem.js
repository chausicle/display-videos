import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={(e) => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title.toString()}</div>
      </div>
    </div>
  );
};

export default VideoItem;
