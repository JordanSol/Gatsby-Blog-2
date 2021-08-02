import React, { useState } from 'react'
import * as styles from './ProjectCard.module.scss'
import ProjectModal from './ProjectModal'

const ProjectCard = ({project}) => {
    const [toggleModal, setToggleModal] = useState(false)

    const toggle = () => {
        setToggleModal(prev => !prev)
    }

    return (
        <div className={!toggleModal ? `${styles.card} ${styles.cardHover}`: styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button 
            className={styles.button}
            onClick={toggle}
            >Preview</button>
            {toggleModal ? <ProjectModal project={project} toggle={toggle} toggleModal={toggleModal}/> : null}
        </div>
    )
}

export default ProjectCard