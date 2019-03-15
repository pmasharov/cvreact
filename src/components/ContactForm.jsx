import React, { Component } from 'react';

export default class ContactForm extends Component {
    makeAddressElem = (name, props, f) => {
        return (
            <section>
                <strong>{name}:</strong><br />
                {/*  */}
                <section className={props.classes.inline_block}>
                    <span className={props.classes.tag_text}>const</span>
                    <span className={props.classes.method_text}> my{name}</span>
                    <span className={props.classes.bracket_text}> = ()</span>
                    <span className={props.classes.tag_text}> =></span>
                </section>
                {/*  */}
                {f(props, name)}
            </section>
        )
    }
    makePhone = (props) => {
        return (
            <section className={props.classes.inline_block}>
                <span> +{props.phone.pref}</span>
                <span>(</span>
                <span>{props.phone.code}</span>
                <span>)</span>
                <span>{props.phone.tel}</span>
                <span className={props.classes.comment_text}> &frasl;&frasl;{props.phone.operator}</span>
            </section>
        )
    }
    makeLink = (props, name) => {
        const text = props[`${name.toLowerCase()}`]
        return (
            <section className={props.classes.inline_block}>
                <span> {text}</span>
            </section>
        )
    }
    render() {
        const { addressLink, email, actionPath, linkedin, github, phone } = this.props

        const phoneElem = this.makeAddressElem('Phone', this.props, this.makePhone)
        const emailElem = this.makeAddressElem('Email', this.props, this.makeLink)
        const githubElem = this.makeAddressElem('Github', this.props, this.makeLink)
        const linkedinElem = this.makeAddressElem('Linkedin', this.props, this.makeLink)
        const addressElem = this.makeAddressElem('Address', this.props, this.makeLink)

        const phoneHref = `tel:+${phone.pref}${phone.code}${phone.tel}`
        const emailHref = `mailto:${email}`
        return (
            <section className='contacts'>
                <h1>Contacts</h1>
                <section>
                    <a target='_blank' rel="noopener noreferrer" href={addressLink}>{addressElem}</a>
                    <a target='_blank' rel="noopener noreferrer" href={emailHref}>{emailElem}</a>
                    <a target='_blank' rel="noopener noreferrer" href={linkedin}>{linkedinElem}</a>
                    <a target='_blank' rel="noopener noreferrer" href={github}>{githubElem}</a>
                    <a href={phoneHref}>{phoneElem}</a>
                </section>
                <form action={actionPath}>
                    <input className='input_active' type="text" placeholder='name *' required />
                    <input type="email" placeholder='emial *' required />
                    <input type="text" placeholder='subject' />
                    <textarea rows='5' placeholder='message' style={{ resize: 'none' }} />
                </form>
            </section>
        )
    }
}

ContactForm.defaultProps = {
    classes: {
        method_text: 'method_text',
        string_text: 'string_text',
        comment_text: 'comment_text',
        bracket_text: 'bracket_text',
        tag_text: 'tag_text',
        code_text: 'code_text',
        inline_block: 'inline_block'
    },
    phone: {
        pref: '375',
        code: '29',
        tel: '2386444',
        operator: 'mts'
    },
    address: "ст.м. 'Академия наук', Минск, Беларусь",
    addressLink: "https://www.google.com/maps/place/%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F+%D0%BD%D0%B0%D1%83%D0%BA/@53.9224425,27.6001548,18.27z/data=!4m12!1m6!3m5!1s0x46dbcf08656f42ad:0xd44e52d56795ecc!2z0JDQutCw0LTQtdC80LjRjyDQvdCw0YPQug!8m2!3d53.9221165!4d27.600508!3m4!1s0x46dbcf08656f42ad:0xd44e52d56795ecc!8m2!3d53.9221165!4d27.600508",
    email: "pmasharov@gmail.com",
    linkedin: "https://www.linkedin.com/in/pavel-masharov-40bb39155",
    github: "https://github.com/pmasharov",
    actionPath: "http://fe.it-academy.by/TestForm.php"
}