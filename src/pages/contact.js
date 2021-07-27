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
                        <AiFillGithub className={styles.icon}/>
                        <AiFillLinkedin className={styles.icon}/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage