import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { ImageMoving } from './components/ImageMoving';
import { StickersGrid } from './components/StickersGrid';

export const StickersLuchoApp = () => {

  const [categories, setCategories] = useState(['Goku']);

  return (
    <>
      <h4>Stickers Lucho App</h4>
      <div className="saitama-container">
        <ImageMoving />
      </div>
      <div className="input-container">
        <AddCategory setCategories={ setCategories } />
      </div>
      <hr />

      <ol>
        {
          categories.map( category => (
            <StickersGrid 
              category={ category }
              key={ category }
            />
            ))
        }
      </ol>
    </>
  )
}
