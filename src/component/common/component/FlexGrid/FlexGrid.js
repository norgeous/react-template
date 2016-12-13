require('./_FlexGrid.scss');
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';

@inject("store") @observer

export class FlexGrid extends Component {

	/*
	
	FlexGrid attributes

	child width				->		columns
	spacing						->		gutter

	flex-direction		->		direction
	flex-wrap					->		wrap
	justify-content		->		justify
	align-items				->		align
	
	*/

	constructor(props) {
		super(props);
		this.store = this.props.store
		this.propToCssName = this.propToCssName.bind(this)
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		console.log('FlexGrid.js render()')
		let me = this
		const { store,direction,wrap,justify,align,columns,gutter, ...rest } = me.props
		return (
			<div
			className={
				'FlexGrid' +
				me.propToCssName('direction') +
				me.propToCssName('wrap') +
				me.propToCssName('justify') +
				me.propToCssName('align') +
				me.propToCssName('columns')
			}
			style={
				{padding:'calc('+gutter+' / 2 )'}
			}
			{...rest}
			>
				{/*me.props.children*/}
				{me.props.children && React.Children.map(me.props.children, child => {
					
					let twin_props = Object.assign({}, child.props)
					//console.log('>>>>>>>>>>>>',child.props, twin_props)
					
					if(!twin_props.style) twin_props.style = {}
					if(twin_props.columnspan) console.log("!")
					twin_props.style.padding = 'calc('+gutter+' / 2 )'
					
					let twin = React.cloneElement(child, twin_props)
					return twin
				})}
			</div>
		)
	}

	propToCssName(propName) {
		let me = this
		if(me.props[propName]) {
			return ' '+me.props[propName].split(' ').map(function(className) {
				return propName+'-'+className;
			}).join(' ')
		} else return ''
	}


}

export class FlexItem extends Component {

	constructor(props) {
		super(props);
		this.store = this.props.store
		this.propToCssName = this.propToCssName.bind(this)
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		console.log('FlexItem.js render()')
		let me = this
		const { store,columnspan, ...rest } = me.props

		return (
			<div
			className={
				'FlexItem' +
				me.propToCssName('columnspan')
			}
			{...rest}
			>
				{me.props.children}
			</div>
		)
	}

	propToCssName(propName) {
		let me = this
		if(me.props[propName]) {
			return ' '+me.props[propName].split(' ').map(function(className) {
				return propName+'-'+className;
			}).join(' ')
		} else return ''
	}


}