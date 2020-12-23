import React from 'react';
import Records from '../components/Records';
import SumByCategory from '../components/SumByCategory';

const RecordsPage = () => {
  return (
    <div className="p-4 flex">
      <div className="flex-grow mr-12">
        <Records />
      </div>
      <div className="flex-grow-0 mx-4">
        <SumByCategory />
      </div>
    </div>
  );
};

export default RecordsPage;