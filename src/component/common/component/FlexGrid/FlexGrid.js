require('./_FlexGrid.scss');
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import ReactDOM from 'react-dom';

@inject("store") @observer

export class FlexGrid extends Component {

	/*
	
	FlexGrid attributes

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

		return (
			<div className={
				'FlexGrid' +
				me.propToCssName('direction') +
				me.propToCssName('wrap') +
				me.propToCssName('justify') +
				me.propToCssName('align') +
				me.propToCssName('columns')
			}>
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

export class FlexItem extends Component {

	/*
	
	FlexItem attributes

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
		console.log('FlexItem.js render()')
		let me = this

		return (
			<div className={
				'FlexItem' +
				me.propToCssName('direction') +
				me.propToCssName('wrap') +
				me.propToCssName('justify') +
				me.propToCssName('align')
			}>
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