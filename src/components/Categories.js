import React, {useState} from 'react';
import Category from './Category';

import { useSelector, useDispatch } from 'react-redux';
import {
  addCategory,

} from '../reducers/categoriesReducer';

const Categories = () => {
  const categories = useSelector(state => state.categories.items);

  const renderedCategories = categories.map((category, idx) => {
    return <Category key={idx} id={idx} category={category.category} description={category.description} />
  })

  return (
    <table className="text-left border-collapse w-10/12">
      <thead>
        <tr>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0 w-1/12">
            <div className="pb-2 pr-2 border-b border-gray-200">
              #
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0 w-3/12">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Category
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Description
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {renderedCategories}
      </tbody>
    </table>
  )
};

export default Categories;