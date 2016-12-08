import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';
//import { Row, Col } from 'react-bootstrap';
import { FlexGrid, div } from '../../../common/component/FlexGrid/FlexGrid';

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
				{/*<FlexGrid
					direction="row xxs-column xs-row sm-column md-row lg-column"
				>
					<div>X</div>
					<div>X</div>
					<div>X</div>
					<div>X</div>
				</FlexGrid>
				<FlexGrid
					justify="start xxs-end xs-center sm-space-between md-space-around lg-space-between"
				>
					<div>Z</div>
					<div>Z</div>
					<div>Z</div>
					<div>Z</div>
				</FlexGrid>*/}
				<FlexGrid	columns="1 xs-2 sm-3 md-4 lg-5">
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorm</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem um</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
					<div>
						<img className="responsive" src="https://dummyimage.com/60x40/000/fff&text=dummyimage.com"/>
						<div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
					</div>
				</FlexGrid>
			</div>
		)

	}

}

