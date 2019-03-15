import React, { Component } from 'react';
import Avatar from './Avatar'
import { Link } from 'react-router-dom'
import '../css/NavPanel.sass'
// import { withRouter } from 'react-router';
// import { connect } from 'react-redux'
// import { activateLink } from '../redux/countersAC'


class NavPanel extends Component {
    constructor() {
        super()
        this.state = {
            activeButton: null
        }
    }
    makeConsLog = (label) => {
        return (
            <section>
                <span className="class_text">console</span>
                <span className="bracket_text">.</span>
                <span className="method_text">log</span>
                <span className="bracket_text">(</span>
                <span className="string_text">"{label}"</span>
                <span className="bracket_text">)</span>
            </section>
        )
    }
    createButtonItem(buttons, classes) {
        return buttons.map((button) => {
            const { id, label, path } = button
            const buttonClasses = classes.join(' ')
            const makeConsLog = this.makeConsLog(label)
            return (
                <Link
                    to={{ pathname: path }}
                    path={path}
                    className={(this.state.activeButton !== id) ? buttonClasses : buttonClasses + ' navPanel_navLink__active'}
                    key={id}
                    onClick={() => { }} >
                    {makeConsLog}
                </Link>
            )
        })
    }
    navPanelRenderer = () => {
        const { buttons, buttonClasses } = this.props
        const classes = this.props.classes.join(' ')
        const buttonItems = this.createButtonItem(buttons, buttonClasses)
        return (
            <nav className={classes}>
                <Avatar />
                <section>
                    {buttonItems}
                </section>
            </nav>
        )
    }
    render() {
        const renderer = this.navPanelRenderer()
        return renderer
    }
}

NavPanel.defaultProps = {
    classes: [
        'navPanel'
    ],
    buttons: [
        {
            id: 1,
            label: 'Skills',
            path: '/skills'
        },
        {
            id: 2,
            label: 'Education',
            path: '/education'
        },
        {
            id: 3,
            label: 'Experience',
            path: '/experience'
        },
        {
            id: 4,
            label: 'Portfolio',
            path: '/portfolio'
        },
        {
            id: 5,
            label: 'Contacts',
            path: '/contacts'
        }
    ],
    buttonClasses: [
        'navPanel_navLink'
    ]
}


export default NavPanel
// const mapStateToProps = function (state) {
//     return {
//         store: state.store,
//     };
// };
// export default connect(mapStateToProps)(NavPanel);