import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.scss'
import logo from '../images/logo.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.container}>
                <Link className={styles.logo} to="/">
                    <img src={logo} alt="Site Logo" width="30px" />
                </Link>
                <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={isOpen ? styles.menu : `${styles.menu} ${styles.closed}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/blog">Blog</Link>
                </div>
        </nav>
    )
}

export default Navbar