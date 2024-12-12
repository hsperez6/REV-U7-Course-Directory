import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {

  let params = useParams();

  return (
    <div className="main-content">
      <h2>Featured: </h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong></strong>!</p>
    </div>
  );
}

export default Featured;