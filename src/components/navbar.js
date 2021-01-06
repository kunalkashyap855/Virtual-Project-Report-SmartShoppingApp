import React from 'react'
import { MdDashboard, MdCode, MdDeveloperMode } from 'react-icons/md'
import styles from './navbar.module.css'

import logo from '../../static/dtu_logo.png';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="Delhi Technological University Logo" />
            <div className={styles.container__link}>
                <Link className={styles.icons} to="#"><MdDashboard size={30} style={{"marginTop": "30px"}} /></Link>
            </div>
            <div>
                <Link className={styles.icons} to="#"><MdCode size={30} style={{"marginTop": "66px"}} /></Link>
            </div>
            <div>
                <Link className={styles.icons} to="#"><MdDeveloperMode size={30} style={{"marginTop": "66px"}} /></Link>
            </div>
        </div>
    )
}
