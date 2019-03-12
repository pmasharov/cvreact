import React, { Component } from 'react';
import avatar from '../img/avatar.png'

export default class Avatar extends Component {
    avatarRenderer = () => {
        const { width, height, border, background, avatarImg, alt } = this.props;
        return (
            <div style={{
                width: width,
                height: height,
                border: border,
                background: background,
                alt: alt
            }}>
                <img src={avatarImg} alt={alt} />
            </div>
        )
    }
    render() {
        const renderer = this.avatarRenderer()
        return renderer
    }
}

Avatar.defaultProps = {
    width: 50 + "%",
    height: 50 + "%",
    border: "solid 2px #2395f3",
    background: "transparent",
    avatarImg: avatar,
    alt: "Avatar"
}