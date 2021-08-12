import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { StickersGrid } from './components/StickersGrid';

export const StickersLuchoApp = () => {

  const [categories, setCategories] = useState(['Saitama']);

  return (
    <>
      <h4>Stickers Lucho App</h4>
      <AddCategory setCategories={ setCategories } />
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
