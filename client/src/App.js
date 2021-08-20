import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/home/Home";

function App() {
	return (
		<BrowserRouter>
			<Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Navbar>
		</BrowserRouter>
	);
}

export default App;
