import React from 'react';

export const StickerGridItem = ( { title, stickerUrl } ) => {

  // console.log( id, title, stickerUrl );

  return (
    <div className="card animate__animated animate__bounce">
      <img src={ stickerUrl } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
