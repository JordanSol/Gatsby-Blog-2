import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as styles from './Navbar.module.scss'

const Burger = () => {
    return (
        <div className={styles.burgerMenu}>
            <GiHamburgerMenu/>
        </div>
    )
}

export default Burger