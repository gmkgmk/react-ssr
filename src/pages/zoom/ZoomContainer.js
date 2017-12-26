import React, { Component } from 'react';

export default class ZoomContainer extends Component {

	static displayName = 'ZoomContainer';

	constructor(props) {
		super(props);
		this.onZoom = this.onZoom.bind(this);
	}

	onZoom(e) {
		e.stopPropagation();
		e.preventDefault();

		if (this.leaveTimer) {
			clearTimeout(this.leaveTimer);
			this.leaveTimer = null;
		}

		let { deltaX, deltaY, deltaZ }=e;
		let delta = 0;
		if (Math.abs(deltaX) > 0) {
			delta = deltaX;
		} else if (Math.abs(deltaY) > 0) {
			delta = deltaY;
		} else if (Math.abs(deltaZ) > 0) {
			delta = deltaZ;
		} else {
			return;
		}
		delta = delta / 100;
		if (this.brushComponent) {
			this.handleSlideWheel(delta);
		}
	}

	handleSlideWheel(delta) {
		let { slideMoveStartX, startX, endX } = this.brushComponent.state;
		const { x, width, travellerWidth, startIndex, endIndex, onChange } = this.brushComponent.props;

		if (Math.abs(delta) > 0) {
			delta = delta * 10;
		} else {
			delta = 10;
		}
		if (startX > endX) {
			// debugger;
			endX = Math.max(x, endX - delta);
			startX = Math.min(x + width - travellerWidth, startX + delta);
		} else {
			startX = Math.max(x, startX + delta);
			endX = Math.min(x + width - travellerWidth, endX - delta);
		}
		const newIndex = this.brushComponent.getIndex({
			startX,
			endX,
		});
		if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
			onChange(newIndex);
		}
		this.brushComponent.setState({
			startX,
			endX,
		});
	}

	initBrushComponent(component) {
		this.brushComponent = component;
	}

	componentWillUnmount() {
		if (this.leaveTimer) {
			clearTimeout(this.leaveTimer);
			this.leaveTimer = null;
		}
	}

	render() {
		const { children } = this.props;
		return (
			<div className="zoom-container" onWheel={this.onZoom}>
				{children}
			</div>
		);
	}
}

