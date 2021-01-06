import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.container__details}>
                <div className={styles.container__details__text}>
                    <p className={styles.container__details__text__name}>Kunal Kashyap</p>
                    <p className={styles.container__details__text__roll}><strong>2K17/EC/89</strong></p>
                </div>
                <div className={styles.container__details__avatar}></div>
            </div>
            <div className={styles.container__about}>
                <p className={styles.container__about__text}>
                    Final year B.Tech. Project in 7th and 8th semester done between September 2020 and December 2020.
                </p>
            </div>
            <div className={styles.container__dtu}>DELHI TECHNOLOGICAL UNIVERSITY</div>
        </div>
    )
}
