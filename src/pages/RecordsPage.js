import React from 'react';
import Records from '../components/Records';
import SumByCategory from '../components/SumByCategory';
import BalanceSummary from '../components/BalanceSummary.js';
import Header from '../components/Header';
import NewRecord from '../components/NewRecord';

const RecordsPage = () => {
  return (
    <div className="p-4">
      <Header name="Records" />
      <BalanceSummary />
      <NewRecord />
      <div className="flex">
        <div className="flex-grow mr-12">
          <Records />
        </div>
        <div className="flex-grow-0 mx-4">
          <SumByCategory />
        </div>
      </div>
    </div>
  );
};

export default RecordsPage;