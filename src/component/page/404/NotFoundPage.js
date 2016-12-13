import React, { Component } from 'react'

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="page NotFoundPage text-center">
				404 Not Found
        <hr/>
        origin: {document.origin}
      </div>
		)
	}
}