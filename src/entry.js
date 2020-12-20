'use strict';
import React from "react";
import ReactDOM from "react-dom";

import '../static/sass/main.scss';
import NavSideBar from "./components/NavSideBar";
import Routes from "./routes";

var App = () =>{
		return ( 
			<div>
				<Routes />
			</div>
		);
};

ReactDOM.render(<App/>, document.getElementById('react-root'));