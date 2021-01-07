import React from 'react';
import styles from './main.module.css';

import Hero from './hero';
import Technologies from './technologies';
import Demo from './demo';

export default function Main({ current }) {
    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <p className={styles.container__header__text}>B.Tech. <strong className={styles.container__header__text}>PROJECT</strong></p>
            </div>
            <div className={styles.container__content}>
                {
                    current === "Hero" ? <Hero />
                    : current === "Tech" ? <Technologies /> : <Demo />
                }
            </div>
        </div>
    )
}
