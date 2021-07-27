import React from 'react'
import * as styles from '../styles/Contact.module.scss'
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <Layout>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.content}>
                    <EmailForm/>
                    <div className={styles.socials}>
                        <h3>Socials</h3>
                        <a href="https://github.com/JordanSol"
                        target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className={styles.icon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/jordan-freeman-36417a218/"
                        target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin className={styles.icon}/>
                        </a>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage