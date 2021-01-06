import React from 'react';
import ReactPlayer from 'react-player';

import styles from './demo.module.css';
import video from '../../public/appDemo.mp4';

export default function demo() {
    return (
        <React.Fragment>
            <div className={styles.video_container}>
                <ReactPlayer url={video} controls />
            </div>
            <div>
                <p className={styles.advice}>Please enter <strong>full screen mode</strong> for a better viewing experience</p>
            </div>
        </React.Fragment>
    )
}
