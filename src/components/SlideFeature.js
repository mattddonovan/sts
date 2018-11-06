import React from 'react';

const SlideFeature = ({ posts }) => {
  
  const postLeft  = posts[0];
  const postRight = posts[1];
  
  return (
    <div className="container">
      <div className="panel panel-left">
        <img src={ postLeft.imageUrl } />
        <p>{postLeft.title}</p>
        <p>{ postLeft.subtitle }</p>
      </div>
      <div className="panel panel-right">
        <img src={ postRight.imageUrl } />
        <h2>{ postRight.title }</h2>
        <p>{ postRight.subtitle }</p>
      </div>
    </div>
  );
}

export default SlideFeature;