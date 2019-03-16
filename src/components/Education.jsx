import React, { Component } from 'react';
import NavPanel from './NavPanel'

export default class Education extends Component {

makeInstitutionElem = () => {
    return (
        <section>
            <strong></strong>
        </section>
    )
}

    render() {
        return (
            <div>
                <NavPanel />
                Education
            </div>
        )
    }
}