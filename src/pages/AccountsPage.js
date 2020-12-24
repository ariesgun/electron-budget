import React from 'react';
import Accounts from '../components/Accounts';
import Header from '../components/Header';

const AccountsPage = () => {
  return (
    <div className="p-4 bg-gray-100">
      <Header name="Accounts" />
      <Accounts />
    </div>
  );
};

export default AccountsPage;