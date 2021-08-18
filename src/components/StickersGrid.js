import React from 'react';
import { useFectchStickers } from '../hooks/useFectchStickers';
import { StickerGridItem } from './StickerGridItem';

export const StickersGrid = ({ category }) => {

  const { data: images, loading } = useFectchStickers( category );

  console.log(loading);


  return (
    <>
      <h4>{ category }</h4>

      {/* { loading ? 'Loading stickers...' : 'Loading complete' } */}

      { loading ? <p>Loading 6 stickers of { category }</p> : null }

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
