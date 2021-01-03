import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../reducers/categoriesReducer';

const NewCategory = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    dispatch(addCategory(
      {category, description}
    ))
    setCategory('');
    setDescription('');
  }

  const handleCategoryChange = e => setCategory(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  return (
    <form className="NewCategory" onSubmit={handleSubmit}>
      <div className="flex w-full">
        <div className="w-3/12 pr-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-category">
            Category
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={category} onChange={handleCategoryChange} id="grid-category" type="text" />
        </div>
        <div className="w-5/12 px-3 mb-6">
          <label className="font-bold text-grey-darker block uppercase" htmlFor="grid-transaction">
            Description
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter px-4 py-2" value={description}  onChange={handleDescriptionChange} id="grid-description" type="text" />
        </div>
        <div className="w-2/12 px-3 mt-6 mb-6">
          <input className="block w-full h-full items-stretch " value="Add" type="submit"/>
        </div>
      </div>
    </form>
  );

}

NewCategory.defaultProps = {
  onSubmit: () => {}
}

export default NewCategory;