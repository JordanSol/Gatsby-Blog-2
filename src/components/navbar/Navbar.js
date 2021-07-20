import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.scss'
import logo from '../../images/logo.svg'
import RightNav from './RightNav'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
                <RightNav/>
            </nav>
        </div>
    )
}

export default Navbar