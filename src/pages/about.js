import React from 'react'
import { Link } from 'gatsby'
import { SiJavascript, SiSass, SiCss3, SiReact, SiMaterialUi, SiHtml5, SiGatsby, SiPython, SiNodeDotJs, SiGit, SiGithub, SiNextDotJs, SiTailwindcss} from 'react-icons/si'
import Layout from '../components/Layout'
import * as styles from '../styles/About.module.scss'
import portrait from '../images/aboutpic.jpg'


const AboutPage = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>About Me</h1>
                <section className={styles.hero}>
                    <img src={portrait} alt="Developer's Portrait" width="400px" className={styles.imgPrimary}/>
                    <div>
                        <h2 className={`${styles.title} ${styles.secondary}`}>I'm Jordan, a Web Developer based in Eastern 
                        Washington.</h2>
                        <hr />
                        <img src={portrait} alt="Developer's Portrait" width="300px" className={styles.imgSecondary}/>
                        <p>Over the past year, I've worked tirelessly to teach 
                        myself relevant skills in the Front-end development field. While doing so,
                        I've found a true passion in code.</p>
                        <p>Though it's been a difficult task, I've found myself in 
                        the right position to claim the title of "Developer."</p>
                        <p>Nowadays, I work on projects daily to refine my skills and apply 
                        my newfound knowledge. Though I may be new to the field, I can confidently 
                        say that I know what I'm doing.</p>
                    </div>
                </section>
                <section className={styles.skills}>
                    <h2 className={`${styles.title} ${styles.secondary}`}>Skills</h2>
                    <ul className={styles.icons}>
                        <li><SiHtml5/></li>
                        <li><SiCss3/></li>
                        <li><SiJavascript/></li>
                        <li><SiReact/></li>
                        <li><SiNextDotJs/></li>
                        <li><SiSass/></li>
                        <li><SiMaterialUi/></li>
                        <li><SiNodeDotJs/></li>
                        <li><SiGatsby/></li>
                        <li><SiPython/></li>
                        <li><SiGit/></li>
                        <li><SiGithub/></li>
                        <li><SiTailwindcss/></li>
                    </ul>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage