import React from "react";
import styles from './layout.module.css';

//Components
import Navbar from './navbar'
import Main from './main'
import Sidebar from './sidebar'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            <Main />
            <Sidebar />
        </div>
    )
}