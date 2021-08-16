import React from 'react';

export const StickerGridItem = ( { title, stickerUrl } ) => {

  // console.log( id, title, stickerUrl );

  return (
    <div>
      <img src={ stickerUrl } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
