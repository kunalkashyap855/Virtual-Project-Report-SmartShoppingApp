import React from 'react';
import styles from './hero.module.css';

import heroImage from '../../public/hero.png'

export default function Hero() {
    return (
        <React.Fragment>
            <div className={styles.bg}></div>
            <img className={styles.hero} src={heroImage} alt="App UI Mockup Hero" />
        </React.Fragment>
    )
}