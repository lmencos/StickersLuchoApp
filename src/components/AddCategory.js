import React, { useState } from 'react';

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hi');

  const handleInputValue = (e) => {
    setInputValue( e.target.value );
  };

  const handleSubmit = ( e ) => {
    console.log('Submit done!')
    e.preventDefault();
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <input 
        type="text" 
        value={ inputValue }
        onChange={ handleInputValue }
      />
    </form>
  )
}
