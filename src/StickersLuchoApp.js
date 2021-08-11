import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const StickersLuchoApp = () => {

  const [categories, setCategories] = useState(['Goku', 'Saitama', 'Mazinger']);



  return (
    <>
      <h4>Stickers Lucho App</h4>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {
          categories.map( cats => {
            return <li key={cats} >{ cats }</li>
          })
        }
      </ol>
    </>
  )
}
