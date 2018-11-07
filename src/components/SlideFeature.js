import React from 'react';

const SlideFeature = ({ posts }) => {
  
  // grab post objects
  const postLeft  = posts[0];
  const postRight = posts[1];

  // 'inline' styles to dynamically populate background images
  const postLeftBgStyle = {
    backgroundImage: 'url("' + postLeft.imageUrl + '")',
    backgroundPosition: 'left top',
    backgroundSize: 'cover'
  }
  const postRightBgStyle = {
    backgroundImage: 'url("' + postRight.imageUrl + '")',
    backgroundPosition: 'right bottom',
    backgroundSize: 'cover'
  }
  
  return (
    <div className="container">
      <div className="panel panel-left" style={ postLeftBgStyle }>
        <div className="panel-text">
          <h2><a href={ postLeft.linkUrl }>{ postLeft.title }</a></h2>
          <p>{ postLeft.subtitle }</p>
        </div>
      </div>
      <div className="panel panel-right" style={ postRightBgStyle }>
        <div className="panel-text">
          <h2><a href={ postRight.linkUrl }>{ postRight.title }</a></h2>
          <p>{ postRight.subtitle }</p>
        </div>
      </div>
    </div>
  );
}

export default SlideFeature;