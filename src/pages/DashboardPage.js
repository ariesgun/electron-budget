import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';

const DashboardPage = () => {
  return (
    <>
      <div className="p-4">
        <Header name="Dashboard" />
        <Dashboard />
        <Link to="/accounts">to Accounts</Link>
      </div>
    </>
  );
};

export default DashboardPage;