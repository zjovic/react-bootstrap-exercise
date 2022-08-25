import React from "react";
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Jumbotron from './Jumbotron.jsx'

//create your first component
const App = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container mb-5">
				<Jumbotron />
			</div>
			<div className="container mb-5">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	)
};

export default App;
