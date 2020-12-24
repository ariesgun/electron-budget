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
              Transaction
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Date
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 pr-2 ">1</td>
          <td className="py-2 pr-2 ">Belanja AH</td>
          <td className="py-2 pr-2 ">15/02/2020</td>
        </tr>
        <tr>
          <td className="py-2 pr-2 border-t">2</td>
          <td className="py-2 pr-2 border-t">Belanja AH</td>
          <td className="py-2 pr-2 border-t">11/03/2020</td>
        </tr>
        <tr>
          <td className="py-2 pr-2 border-t">3</td>
          <td className="py-2 pr-2 border-t">Dinner</td>
          <td className="py-2 pr-2 border-t">20/04/2020</td>
        </tr>
      </tbody>
    </table>
  )
};

export default Categories;