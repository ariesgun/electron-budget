import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavSideBar from './components/NavSideBar';
import AccountsPage from './pages/AccountsPage';
import HomePage from './pages/HomePage';
import RecordsPage from './pages/RecordsPage';


const Routes = () => {
  return (
    <HashRouter>
      <NavSideBar />
      <div className="fixed left-72">
        
          <Route path="/records" component={RecordsPage} />
          <Route path="/accounts" component={AccountsPage} />
          <Route path="/" exact component={HomePage} />
        
      </div>
    </HashRouter>
  );
};

export default Routes;