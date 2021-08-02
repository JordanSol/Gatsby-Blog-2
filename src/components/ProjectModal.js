import React from 'react'
import { AiOutlineClose} from 'react-icons/ai'
import * as styles from './ProjectModal.module.scss'

const ProjectModal = ({ project, toggle, toggleModal }) => {
    return (
        <div>
            {toggleModal ? <div className={styles.background}>
                <div className={styles.modal}>
                    <img src={project.image} alt="Preview gif" />
                    <section>
                        <span className={styles.x}>
                            <a href="/" 
                            onClick={e => {
                                e.preventDefault()
                                toggle()
                            }}>
                                <AiOutlineClose/>
                            </a>
                        </span>
                        <h3>{project.title}</h3>
                        <div>
                            <div className={styles.info}>
                                <p>{project.description}</p>
                                <div>
                                    <span><a href={project.link} target="_blank" rel="noopener noreferrer">View Site</a></span>
                                    <span><a href={project.code} target="_blank" rel="noopener noreferrer">View Code</a></span>
                                </div>
                            </div>
                            <div className={styles.stack}>
                                <h3>Tech Used:</h3>
                                <ul>
                                    {project.stack.map(x => (
                                        <li>{x}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div> : null}
        </div>
    )
}

export default ProjectModal