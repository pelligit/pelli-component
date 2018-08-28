import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Test from './component/Test';

const Nav = () => (
	<ul>
		<li><Link to='/test'>Test</Link></li>
	</ul>
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<ul className='fixed-head'>
							<li><Link to='/'>首页</Link></li>
						</ul>

						<Route exact path='/' component={Nav} />
						<Route path='/test' component={Test} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
