import React from 'react';

// SlideFeature component
const SlideFeature = ({ posts }) => {
  
  // Grab post objects
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
          <h2>
            <a 
              href={ postLeft.linkUrl }
              target="_blank"
              rel="noopener noreferrer">
                { postLeft.title }
            </a>
          </h2>
          <p>{ postLeft.subtitle }</p>
        </div>
      </div>
      <div className="panel panel-right" style={ postRightBgStyle }>
        <div className="panel-text">
          <h2>
            <a 
              href={ postRight.linkUrl } 
              target="_blank"
              rel="noopener noreferrer">
                { postRight.title }
              </a>
            </h2>
          <p>{ postRight.subtitle }</p>
        </div>
      </div>
    </div>
  );
}

export default SlideFeature;