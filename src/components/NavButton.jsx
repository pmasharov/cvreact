import React, { PureComponent } from 'react';

export default class NavButton extends PureComponent {
    navButtonRenderer = (button) => {
        const {label, width, height, border, background, borderRadius } = this.props;
        console.log('label in NavButton: ', label)
        return (
            <button style={{
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