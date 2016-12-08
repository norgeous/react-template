import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';
//import { Row, Col } from 'react-bootstrap';
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
					<FlexItem columnspread="1 xs-2">
						<img className="responsive" src="https://dummyimage.com/600x192/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem columnspread="1 xs-2 sm-3 md-4 lg-5">
						<img className="responsive" src="https://dummyimage.com/600x192/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem columnspread="1 xs-1 sm-2 md-3 lg-4">
						<img className="responsive" src="https://dummyimage.com/600x192/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem columnspread="1 xs-1 sm-1 md-2 lg-3">
						<img className="responsive" src="https://dummyimage.com/600x192/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<FlexItem columnspread="2">
						<img className="responsive" src="https://dummyimage.com/600x192/000/fff&text=2"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</FlexItem>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ip</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div className="ellipsis">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/600x400/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
				</FlexGrid>
			</div>
		)

	}

}

