import React, { Component } from 'react';
import avatar from '../img/avatar.png'
import '../css/Avatar.sass'

export default class Avatar extends Component {
    avatarRenderer = () => {
        const { containerClasses, avatarImg, alt } = this.props;
        const imgClasses = this.props.imgClasses.join(' ')
        return (
            <div className={containerClasses}>
                <img className={imgClasses} src={avatarImg} alt={alt} />
            </div>
        )
    }
    render() {
        const renderer = this.avatarRenderer()
        return renderer
    }
}

Avatar.defaultProps = {
    imgClasses: [
        'circle',
        'avatar',
        'light'
    ],
    containerClasses: 'avatar_container',
    avatarImg: avatar,
    alt: "Avatar"
}