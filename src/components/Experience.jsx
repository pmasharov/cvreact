import React, { Component, useState } from 'react';
import NavPanel from './NavPanel'
import { classes, joinClasses } from '../js/classes'

export default class Experience extends Component {

    createExperience = (props) => {
        const { classes, experienceArr } = props
        const experienceList = () => {
            return experienceArr.map((experience, i) => {
                const skillsString = experience.skills.join(', ')
                return (
                    <section key={i}>
                        <h2 className={classes.class_text} key={i}>{experience.name}</h2>
                        <span className={classes.bracket_text}>&#123; </span>
                        <br />
                        <span className={joinClasses([classes.code_text, ...classes.prop_margin])}>position: </span>
                        <span className={joinClasses([classes.return_text, ...classes.prop_margin])}>{experience.position}</span>
                        <span className={joinClasses([classes.comment_text, ...classes.prop_margin])}>{(experience.direction)?`//${experience.direction}`:null}</span>
                        <br />
                        <span className={joinClasses([classes.code_text, ...classes.prop_margin])}>from: </span>
                        <span className={classes.tag_text}>new </span>
                        <span className={classes.class_text}>Date</span>
                        <span className={classes.bracket_text}>&#40;</span>
                        <span className={classes.method_text}>{experience.from}</span>
                        <span className={classes.bracket_text}>&#41;</span>
                        <span className={classes.bracket_text}>&#44;</span>
                        <br />
                        <span className={joinClasses([classes.code_text, ...classes.prop_margin])}>to: </span>
                        <span className={classes.tag_text}>new </span>
                        <span className={classes.class_text}>Date</span>
                        <span className={classes.bracket_text}>&#40;</span>
                        <span className={classes.method_text}>{experience.to}</span>
                        <span className={classes.bracket_text}>&#41;</span>
                        <span className={classes.bracket_text}>&#44;</span>
                        <br />
                        <span className={joinClasses([classes.code_text, ...classes.prop_margin])}>skills: </span>
                        <span className={classes.string_text}>&#96;{skillsString}&#96;</span>
                        <br />
                        <span className={classes.bracket_text}>&#125; </span>
                        <br />
                    </section>
                )
            }
            )
        }
        return (
            experienceList()
        )
    }
    render() {
        const experience = this.createExperience(this.props)
        return (
            <div>
                <NavPanel />
                {experience}
            </div>
        )
    }
}

Experience.defaultProps = {
    classes: classes,
    experienceArr: [
        {
            name: 'LLC AROBOT',
            position: 'Front-end developer',
            direction: 'Javascript, React.js',
            from: '12.2018',
            to: '03.2019',
            skills: [
                'HTML5',
                'CSS3 (SASS, Flexbox)',
                'JS (ES6)',
                'React16',
                'Redux',
                'JSON',
                'Github',
                'Heroku',
                'Figma'
            ],
            responsibility: [
                ' '
            ]
        },
        {
            name: 'AC Hight Technology Park',
            position: 'Student',
            from: '',
            to: '',
            skills: [
                'HTML5',
                'CSS3',
                'JS (ES6)',
                'REST',
                'JSON',
                'Canvas'
            ],
            responsibility: [
                ''
            ]
        },
        {
            name: 'AC Hight Technology Park',
            position: 'Student',
            from: '',
            to: '',
            skills: [
                'HTML5',
                'CSS3 (Flexbox)',
                'SVG'
            ],
            responsibility: [
                ''
            ]
        }
    ]
}