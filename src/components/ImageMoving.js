import React from 'react';
import saitama from '../../docs/static/media/saitamaFace.8bbd1012.gif';

export const ImageMoving = () => {

  return (
    <div className="saitama">
      <img 
        src={ saitama } 
        alt="Saitama face" />
    </div>
  )
}
