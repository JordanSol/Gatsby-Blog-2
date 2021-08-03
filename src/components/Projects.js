import React from 'react'
import * as styles from './Projects.module.scss'
import { SiJavascript, SiSass, SiCss3, SiReact, SiMaterialUi, SiHtml5 } from 'react-icons/si'
import tracker from '../images/Covid-Tracker.gif'
import list from '../images/Reading-List.gif'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
            title: 'Covid Tracker App',
            description: 'A simple web app for tracking current world Covid-19 stats.',
            image: tracker,
            code: 'https://github.com/JordanSol/covid-tracker',
            link: 'https://jf-covid-tracker.netlify.app',
            stack: [<SiHtml5/>, <SiSass/>, <SiJavascript/>, <SiReact/>, <SiMaterialUi/>]
        },
        {
            title: 'Reading List App',
            description: 'A reading list that stores your books in local storage!',
            image: list,
            code: 'https://github.com/JordanSol/Reading-List',
            link: 'https://jf-reading-list.netlify.app',
            stack: [<SiHtml5/>, <SiCss3/>, <SiJavascript/>, <SiReact/>]
        },
    ]

    return (
        <div className={styles.container}>
            {projects.map(project => {
                return (
                    <div>
                        <ProjectCard project={project}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects