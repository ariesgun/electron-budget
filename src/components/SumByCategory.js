import React, {useState} from 'react';

const SumByCategory = () => {
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
        <tr>
          <td className="py-2 pl-2 pr-8 ">Consumption</td>
          <td className="py-2 pr-2 ">100</td>
        </tr>
        <tr>
          <td className="py-2 pl-2 pr-8 border-t">Housing Rent</td>
          <td className="py-2 pr-2 border-t">150</td>
        </tr>
        <tr>
          <td className="pt-2 pl-2 pb-4 pr-8 border-t">Miscellaneous</td>
          <td className="pt-2 pb-4 pr-2 border-t">200</td>
        </tr>
      </tbody>
    </table>
  )
};

export default SumByCategory;