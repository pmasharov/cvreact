import React, { Component } from 'react';
import NavButton from './NavButton'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

export default class NavPanel extends Component {

    createButtonItem(buttons) {
        return buttons.map((button) => {
            const { id, label, path } = button
            return (
                <Link to={{ pathname: path }}>
                    <NavButton path={path} key={id} label={label} />
                </Link>
            )
        })
    }
    navPanelRenderer = () => {
        const { buttons, border } = this.props
        const buttonItems = this.createButtonItem(buttons)
        return (
            <nav style={{ border: border }}>
                {buttonItems}
            </nav>
        )
    }
    render() {
        const renderer = this.navPanelRenderer()
        return (
            <Avatar /> ,
            renderer
        )
    }
}

NavPanel.defaultProps = {
    border: "solid 2px red",
    buttons: [
        {
            id: 1,
            label: 'Навыки',
            path: '/skills'
        },
        {
            id: 2,
            label: 'Образование',
            path: '/education'
        },
        {
            id: 3,
            label: 'Опыт работы',
            path: '/experience'
        },
        {
            id: 4,
            label: 'Портфолио',
            path: '/portfolio'
        },
        {
            id: 5,
            label: 'Контакты',
            path: '/contacts'
        }
    ]
}