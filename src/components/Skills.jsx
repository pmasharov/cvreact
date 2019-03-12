import React, { Component } from 'react';
import NavPanel from './NavPanel'

export default class Skills extends Component {

    render() {
        return (
            <div>
                <NavPanel />
                skills
            </div>
        )
    }
}

Skills.defaultProps = {
    skills: [

    ]
}