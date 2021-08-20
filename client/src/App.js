import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/home/Home";
import Create from "./components/employee/Create";
import List from "./components/employee/List";
import Edit from "./components/employee/Edit";

function App() {
	return (
		<BrowserRouter>
			<Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/employee/create" exact component={Create} />
					<Route path="/employee/list" exact component={List} />
					<Route path="/employee/edit/:id" exact component={Edit} />
				</Switch>
			</Navbar>
		</BrowserRouter>
	);
}

export default App;
