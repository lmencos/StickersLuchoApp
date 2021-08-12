import React from 'react';

export const StickersGrid = ({ category }) => {

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

  };

  getStickers();

  return (
    <div>
        <h4>{ category }</h4>
    </div>
  )
}
