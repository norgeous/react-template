import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap'

@inject("store") @observer

export default class Popup extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
		
		this.closePopup = this.closePopup.bind(this)

		this.state = {
			heading: this.props.heading?this.props.heading:false,
			zindex: this.props.zindex?this.props.zindex:2,
			is_open: this.props.show?true:false,
			mw: this.props.mw?this.props.mw:'400px',
			closeable: this.props.closeable?true:false,
			scrollable: this.props.scrollable?true:false,
			padded: this.props.padded?true:false
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(props) {
		this.setState({
			is_open: props.show
		})
	}

	render() {
		console.log('Popup.js render()')
		let me = this

		return (
			<div className="Popup" style={{display:(me.state.is_open?'block':'none')}}>
				<div className="overlay" style={{zIndex:me.state.zindex}}>
					<div className="bufferzone" onClick={me.closePopup}>
						<div className={(me.state.heading?'popupbox has-title':'popupbox')} style={{maxWidth:me.state.mw}}>
							
							<div className="heading">{me.state.heading}</div>
							<img src="src/public_media/common/svg/close.svg" className="closepopup hitzone" style={{display:(me.state.closeable?'block':'none')}} onClick={me.closePopup} />
							
							<div className={me.state.scrollable?'scrollable':''}>
								<div className={me.state.padded?'padded':''}>
									{ this.props.children }
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}

	closePopup(e) {
		let me = this
		let whatclicked = e.target.getAttribute('class');
		if(me.state.closeable && (whatclicked === 'closepopup hitzone' || whatclicked === 'bufferzone')) {
			me.setState({
				is_open: false
			})
		}
	}

}