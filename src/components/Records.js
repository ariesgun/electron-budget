import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Record from './Record';

const Records = () => {

  const records = useSelector(state => state.records.items);

  const renderedRecords = records.map((record, idx) => {
    return <Record key={idx}
                   id={idx} 
                   record={record.record}
                   category={record.category} 
                   account={record.account}
                   amount={record.amount}
                   date={record.date} />
  })

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
        {renderedRecords}
      </tbody>
    </table>
  )
};

export default Records;