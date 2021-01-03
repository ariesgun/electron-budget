import React, {useState} from 'react';
import Category from './Category';

const Categories = () => {
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
        <Category id="1" category="Consumption" description="Consumption, Restaurant" />
        <Category id="2" category="Housing Rent" description="Housing Rent" />
        <Category id="3" category="Transportation" description="Public transport, Weekend Vrij, Travel" />
      </tbody>
    </table>
  )
};

export default Categories;