import React, {useState} from 'react';

const Categories = () => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              #
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
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
        <tr>
          <td className="py-2 pr-2 ">1</td>
          <td className="py-2 pr-2 ">Consumption</td>
          <td className="py-2 pr-2 ">Consumption, Restaurant</td>
        </tr>
        <tr>
          <td className="py-2 pr-2 border-t">2</td>
          <td className="py-2 pr-2 border-t">Housing Rent</td>
          <td className="py-2 pr-2 border-t">Housing Rent</td>
        </tr>
        <tr>
          <td className="py-2 pr-2 border-t">3</td>
          <td className="py-2 pr-2 border-t">Transportation</td>
          <td className="py-2 pr-2 border-t">Weekend Vrij, Travel</td>
        </tr>
      </tbody>
    </table>
  )
};

export default Categories;