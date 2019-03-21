import React, { Component } from 'react';
import avatar from '../img/avatar.png'
import '../css/Avatar.sass'
import { classes, joinClasses } from '../js/classes'
import { types } from '../js/types'

export default class Avatar extends Component {
    avatarRenderer = (props) => {
        const { avatarClasses, avatarContainerClasses, avatarImg, alt } = props
        const avatar = () => {
            React.createElement(types.section, {className: avatarContainerClasses}, () =>
                React.createElement(types.img, {className: avatarClasses })
            )
        }
        return (
            <div className={avatarContainerClasses}>
                <img className={avatarClasses} src={avatarImg} alt={alt} />
            </div>
        )
    }
    render() {
        const renderer = this.avatarRenderer(this.props)
        return renderer
    }
}

Avatar.defaultProps = {
    avatarClasses: joinClasses(classes.avatarClasses),
    avatarContainerClasses: classes.avatarContainerClasses,
    avatarImg: avatar,
    types: types,
    alt: "Avatar"
}