import React from 'react';
import graphQLPoster from '../images/GraphQLPoster.jpg';

const GraphQLVideo = () => {
  const id = 'graph-ql';
  const mediaSrc = 'https://s3-us-west-2.amazonaws.com/akuttruff-media/GraphQL.mp4';

  return (
    <video
      id={id}
      src={mediaSrc}
      controls
      width="80%"
      poster={graphQLPoster}>
    </video>
  );
};

export default GraphQLVideo;
