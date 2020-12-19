'use strict';
import React from "react";
import ReactDOM from "react-dom";

import '../static/sass/main.scss';
import NavSideBar from "./components/NavSideBar";

var App = () =>{
		return ( 
			<div>
				<NavSideBar />
			</div>
		);
};

ReactDOM.render(<App/>, document.getElementById('react-root'));