'use strict';
import React from "react";
import ReactDOM from "react-dom";
import database from './database';
import Application from "./components/Application";

require( '../static/sass/main.scss');
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import Routes from "./routes";

var App = () =>{
		return ( 
			<Application database={database} />
		);
};

ReactDOM.render(<App/>, document.getElementById('react-root'));