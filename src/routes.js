import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavSideBar from './components/NavSideBar';
import AccountsPage from './pages/AccountsPage';
import CategoryPage from './pages/CategoryPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import RecordsPage from './pages/RecordsPage';


const Routes = () => {
  return (
    <HashRouter>
      <div className="w-full max-w-8xl">
        <div className="flex">
          <NavSideBar />
          <div className="min-w-0 w-full min-h-screen">
              <Route path="/records" component={RecordsPage} />
              <Route path="/accounts" component={AccountsPage} />
              <Route path="/categories" component={CategoryPage} />
              <Route path="/" exact component={DashboardPage} />
            
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default Routes;