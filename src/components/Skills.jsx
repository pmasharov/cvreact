import React, { Component } from 'react'
import NavPanel from './NavPanel'
import '../css/Skills.sass'

export default class Skills extends Component {

    makeSkillItem = (props) => {
        return props.skills.map((skill) => {
            return (
                <skill>
                    <strong>
                        {skill.name}
                    </strong>
                </skill>
            )
        })
    }

    render() {
        const skillsList = this.makeSkillItem(this.props)
        return (
            <div>
                <NavPanel />
                <section style={{
                    background: "black"
                }}>
                    {skillsList}
                </section>
            </div>
        )
    }
}

Skills.defaultProps = {
    skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Flexbox' },
        { name: 'SASS' },
        { name: 'ES6' },
        { name: 'React' },
        { name: 'JSON' },
        { name: 'REST' },
        { name: 'Github' },
        { name: 'Canvas' }
    ]
}