import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.scss'
import Burger from './Burger'

const RightNav = () => {
    return (
        <div>
        <ul className={styles.list}>
                <li><Burger/></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Home</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/about">About</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Contact</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}

export default RightNav