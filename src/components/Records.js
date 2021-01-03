import React, {useState} from 'react';
import Record from './Record';

const Records = () => {
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
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Category
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Account
            </div>
          </th>
          <th className="top-9 text-lg font-semibold text-gray-600 p-0">
            <div className="pb-2 pr-2 border-b border-gray-200">
              Amount
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <Record id="1" description="Belanja AH" date="15/02/2020" category="Consumption" account="Rabobank" amount="10" />
        <Record id="2" description="Belanja AH" date="16/02/2020" category="Consumption" account="Rabobank" amount="20" />
        <Record id="3" description="Housing Rent" date="20/02/2020" category="Housing Rent" account="Rabobank" amount="375" />
        <Record id="4" description="Belanja AH" date="22/02/2020" category="Consumption" account="Rabobank" amount="15" />
      </tbody>
    </table>
  )
};

export default Records;