import React, {useState} from 'react';

const Header = (props) => {
    return (
    <div className="pb-4">
      <p className="text-2xl font-bold">{props.name}</p> 
    </div>
  )
};

export default Header;