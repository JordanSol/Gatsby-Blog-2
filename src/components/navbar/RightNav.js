import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.scss'
import Burger from './Burger'

const RightNav = () => {
    const [showList, setShowList] = useState(true)

    const toggleShowList = () => {
        let toggled = !showList
        setShowList(toggled)
    }

    return (
        <div>
            <ul className={showList ? styles.list : styles.hiddenList}>
                <li onClick={toggleShowList}><Burger/></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Home</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/about">About</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Contact</Link></li>
                <li><Link className={styles.link} activeClassName={styles.activeLink} to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}

export default RightNav