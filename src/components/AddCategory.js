import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue( e.target.value );
  };

  const handleSubmit = ( e ) => {
    console.log('Submit done!')
    e.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      setCategories( cats => [ inputValue, ...cats ] );
      setInputValue('');
    }

  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <input 
        className="input-typing"
        type="text" 
        value={ inputValue }
        onChange={ handleInputValue }
        placeholder="Saitama says: Type some category"
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
