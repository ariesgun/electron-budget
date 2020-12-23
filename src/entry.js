'use strict';
import React from "react";
import ReactDOM from "react-dom";

require( '../static/sass/main.scss');
import Routes from "./routes";

var App = () =>{
		return ( 
			<div>
				<Routes />
			</div>
		);
};

ReactDOM.render(<App/>, document.getElementById('react-root'));