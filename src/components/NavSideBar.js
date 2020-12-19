import React, { useState } from "react";
import Navigation from "./Navigation";

const NavSideBar = () => {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-72 overflow-y-auto border-r-4 border-gray-300 bg-white-border-r-2 bg-white ">
        <Navigation 
          activeItemId="/management/members"
          onSelect={({itemId}) => {
            // maybe push to the route
          }}
          items={[
            {
              title: 'Dashboard',
              itemId: '/dashboard',
              // you can use your own custom Icon component as well
              // icon is optional
              // elemBefore: () => <Icon name="inbox" />,
            },
            {
              title: 'Management',
              itemId: '/management',
              // elemBefore: () => <Icon name="users" />,
              subNav: [
                {
                  title: 'Projects',
                  itemId: '/management/projects',
                },
                {
                  title: 'Members',
                  itemId: '/management/members',
                },
              ],
            },
            {
              title: 'Another Item',
              itemId: '/another',
              subNav: [
                {
                  title: 'Teams',
                  itemId: '/management/teams',
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default NavSideBar;