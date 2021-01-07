import React, { useState } from "react";
import styles from './layout.module.css';

//Components
import Navbar from './navbar'
import Main from './main'
import Sidebar from './sidebar'

export default function Layout({ children }) {
    const [current, setCurrent] = useState("Hero")

    return (
        <div className={styles.container}>
            <Navbar setCurrent={setCurrent} />
            <Main current={current} />
            <Sidebar />
        </div>
    )
}