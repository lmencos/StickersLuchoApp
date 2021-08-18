import React from 'react';
import { useFectchStickers } from '../hooks/useFectchStickers';
import { StickerGridItem } from './StickerGridItem';

export const StickersGrid = ({ category }) => {

  const { data, loading } = useFectchStickers( category );

  console.log(loading);


  return (
    <>
      <h4>{ category }</h4>

      {/* { loading ? 'Loading stickers...' : 'Loading complete' } */}

      <div className="card-grid">
            {
              data.map( img => (
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
