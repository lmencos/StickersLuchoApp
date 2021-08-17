import React, { useEffect, useState } from 'react';
import { getStickers } from '../helpers/getStickers';
import { StickerGridItem } from './StickerGridItem';

export const StickersGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getStickers( category )
      .then(setImages)
  }, [category]);

  return (
    <>
      <h4>{ category }</h4>
      <div className="card-grid">
            {
              images.map( img => (
                <StickerGridItem 
                  key={ img.id }
                  { ...img }
                />
              ))
            }
      </div>
    </>
  )
}
