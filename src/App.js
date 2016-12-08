import React, { Component } from 'react'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
export default class App extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store	    
	}

	render() {
		const store = this.props.store;
		return (
			<BrowserRouter>
				<Provider store={store}>
					<div className="wrapper">
						<nav>
							<Link className="" to="/" activeOnlyWhenExact activeClassName="active" className="text-uppercase">Home</Link>
							 | 
							<Link className="" to="/some" activeOnlyWhenExact activeClassName="active" className="text-uppercase">Some</Link>
						</nav>
						{/* Routes */}
						<Match exactly pattern="/" component={require('react-router?name=home!./component/page/home/HomePage')} />
						<Miss component={require('react-router?name=notfound!./component/page/404/NotFoundPage')} />
					</div>
				</Provider>
			</BrowserRouter>
		)
	}
}