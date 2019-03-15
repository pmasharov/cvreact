import React, { Component } from 'react';
import NavPanel from './NavPanel'
import ContactForm from './ContactForm'
import '../css/Contacts.sass'

export default class Contacts extends Component {

    render() {
        return (
            <div>
                <NavPanel />
                <ContactForm/>
            </div>
        )
    }
}