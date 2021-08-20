import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/home/Home";
import Create from "./components/employee/Create";

function App() {
	return (
		<BrowserRouter>
			<Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/employee/create" exact component={Create} />
				</Switch>
			</Navbar>
		</BrowserRouter>
	);
}

export default App;
