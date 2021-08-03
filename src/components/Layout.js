import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ParticleBackground from './ParticleBackground'
import '../styles/index.scss'

import * as styles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <ParticleBackground/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                {props.children}
                <Footer/>
            </div>
        </div>
    )
}

export default Layout