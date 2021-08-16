import React, { useEffect, useState } from 'react';
import { StickerGridItem } from './StickerGridItem';

export const StickersGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getStickers();
  }, []);

  const getStickers = async() => {
    const url = 'https://api.giphy.com/v1/stickers/search?q=rick+and+morty&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const stickers = data.map( img => { 
      return {
        id: img.id,
        title: img.title,
        stickerUrl: img.images?.fixed_height_small.url
      }
    })

    console.log(stickers);
    setImages(stickers);

  };

  return (
    <div>
        <h4>{ category }</h4>
          {
            images.map( img => (
              <StickerGridItem 
                key={ img.id }
                { ...img }
              />
            ))
          }
    </div>
  )
}
