import React from 'react';

const VideoListItem = ({video}) => {
  console.log(video);

  const imgUrl = video.snippet.thumbnails.default.url
  const imgTitle = video.snippet.title

  return (
    <li className="list-group-item">
      <div className="video-list-media">
        <div className="medie-left">
          <img className="media-object" src={imgUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{imgTitle}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
