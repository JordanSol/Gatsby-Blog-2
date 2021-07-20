import React from 'react'
import * as styles from '../styles/Contact.module.scss'
import Layout from '../components/Layout'


const ContactPage = () => {
    return (
        <div className={styles.container}>
            <Layout>
                <h1 className={styles.title}>Contact</h1>
                <p>The best way to reach me is via email</p>
            </Layout>
        </div>
    )
}

export default ContactPage