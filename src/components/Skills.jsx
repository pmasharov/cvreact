import React, { Component } from 'react'
import NavPanel from './NavPanel'
import '../css/Skills.sass'
import { classes, joinClasses } from '../js/classes'
import { types } from '../js/types'

export default class Skills extends Component {

    makeSkillItem = (props) => {
        const { skills, classes, types } = props
        const skillsList = (skillsArr) =>
            skillsArr.map((skill, i) =>
                React.createElement(types.strong, { key: i, className: classes.skillClasses }, skill.name)
            )
        return skillsList(skills)
    }

    render() {
        const skillsList = this.makeSkillItem(this.props)
        return (
            <div>
                <NavPanel />
                <section className=''>
                    <h1>Skills</h1>
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
    ],
    classes: classes,
    types: types

}