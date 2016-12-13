import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';
import { FlexGrid, FlexItem } from '../../../common/component/FlexGrid/FlexGrid';

@inject("store") @observer
export default class HomeGrid extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
	}

	componentDidMount() {
	}

	render() {
		const store = this.store
		return (
			<div className="HomeGrid container">
				<FlexGrid	columns="1 xs-2 sm-3 md-4 lg-5" gutter="10px">
					<FlexItem columnspan="1 xxs-1 xs-1 sm-2 md-3 lg-4">
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem>
						<img className="responsive" src="src/public_media/common/dummy.jpg"/>
						<div style={{background:'#222',color:'white',padding:'10px',flex:1}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
				</FlexGrid>
			</div>
		)

	}

}

