import React, { Component } from 'react'

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="page NotFoundPage text-center">
				404 Not Found
        <hr/>
        {window.location.href}
			</div>
		)
	}
}