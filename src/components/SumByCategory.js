import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const SumByCategory = () => {

  const sumByCategories = useSelector(state => state.sumByCategory.items);

  const renderedSumCategories = sumByCategories.map((sumCategory, idx) => {
    return (
      <tr key={idx}>
        <td className="py-2 pl-2 pr-8">{sumCategory.category}</td>
        <td className="py-2 pr-2">{sumCategory.amount}</td>
      </tr>
    )
  });

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pl-2 pr-8 border-b border-gray-200">
              Category
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-8 border-b border-gray-200">
              Amount
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {renderedSumCategories}
      </tbody>
    </table>
  )
};

export default SumByCategory;