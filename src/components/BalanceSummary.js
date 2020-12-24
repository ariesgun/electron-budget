import React, {useState} from 'react';

const BalanceSummary = () => {
  return (
    <div className="flex justify-center min-w-0 w-full mb-7">
      <div className="w-full my-4 px-14 py-1 bg-white shadow-lg sm:rounded-3xl">
        <div className="py-8 text-base leading-6 text-gray-700 text-center">
          <p className="font-bold">Income</p>
          <p>EUR 2500</p>
        </div>
      </div>

      <div className="w-full mx-6 my-4 px-14 py-1 bg-white shadow-lg sm:rounded-3xl">
        <div className="py-8 text-base leading-6 text-gray-700 text-center">
          <p className="font-bold">Expenses</p>
          <p>EUR 1000</p>
        </div>
      </div>

      <div className="w-full mr-4 my-4 px-14 py-1 bg-white shadow-lg sm:rounded-3xl">
        <div className="py-8 text-base leading-6 text-gray-700 text-center">
          <p className="font-bold">Balance</p>
          <p>EUR 1500</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;