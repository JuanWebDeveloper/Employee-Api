import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
		</BrowserRouter>
	);
}

export default App;
