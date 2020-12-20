import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const HomePage = () => {
  return (
    <>
      <Dashboard />
      <Link to="/accounts">to Accounts</Link>
    </>
  );
};

export default HomePage;