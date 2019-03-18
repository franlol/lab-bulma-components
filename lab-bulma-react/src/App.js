import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './App.css';

import CoolNavBar from "./components/CoolNavBar"
import FormField from "./components/FormField"
import CoolButton from "./components/CoolButton"
import Message from "./components/Message"

class App extends Component {
	render() {
		return (
			<div className="App">

				<h1>Iteration 1:</h1>
				<CoolNavBar isLink />

				<h1>Iteration 2:</h1>
				<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
				<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

				<h1>Iteration 3:</h1>
				<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
				<CoolButton isSmall isSuccess>Button 2</CoolButton>

				<hr />

				<h1>Iteration 4:</h1>
				<CoolNavBar isInfo />
				<div className="container">
					<FormField label="Name" type="text" placeholder="Name please" />
					<FormField label="Email" type="email" placeholder="Email please" />
					<FormField label="Password" type="password" placeholder="********" />
					<CoolButton isSuccess>Submit</CoolButton>
				</div>

				<h1>Bonus Iteration:</h1>
				<div className="container">
					<Message isDanger title="Hello World">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
					</Message>
				</div>
			</div >
		);
	}
}

export default App;
