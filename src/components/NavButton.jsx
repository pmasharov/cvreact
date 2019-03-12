import React, { Component } from 'react'
export default class NavButton extends Component {
    handleClick = (e) => {
        console.log(this)
    }
    navButtonRenderer = (button) => {
        const { label, width, height, border, background, borderRadius } = this.props;
        return (
            <button onClick={this.handleClick}
                style={{
                    width: width,
                    height: height,
                    border: border,
                    borderRadius: borderRadius,
                    background: background,
                    label: label
                }}>
                {label}
            </button>
        )
    }
    render() {
        const renderer = this.navButtonRenderer()
        return renderer
    }
}

NavButton.defaultProps = {
    width: "5rem",
    height: "2rem",
    border: "none",
    borderRadius: "0"
}