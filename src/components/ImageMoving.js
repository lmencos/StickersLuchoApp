import React from 'react';
import saitama from '../media/saitamaFace.gif';

export const ImageMoving = () => {

  return (
    <div className="saitama">
      <img 
        src={ saitama } 
        alt="Saitama face" />
    </div>
  )
}