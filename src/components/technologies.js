import React from 'react';
import styles from './technologies.module.css';

function technologies() {
    return (
        <React.Fragment>
            <div className={styles.grid}>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://roszkowski.dev/images/2020-05-04/logo_flutter_1080px_clr.png" alt="Flutter Logo"/>
                    <p className={styles.grid__item__title}>Flutter</p>
                </div>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://img.icons8.com/color/452/firebase.png" alt="Firebase Logo"/>
                    <p className={styles.grid__item__title}>Firebase</p>
                </div>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://image.winudf.com/v2/image1/Y29tLmdvb2dsZS56eGluZy5jbGllbnQuYW5kcm9pZHRlc3RfaWNvbl8xNTY2OTk1Nzk3XzA4Nw/icon.png?w=&fakeurl=1" alt="ZXing Logo"/>
                    <p className={styles.grid__item__title}>ZXing Library</p>
                </div>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://cdn.iconscout.com/icon/free/png-512/arduino-4-569256.png" alt="Arduino Logo"/>
                    <p className={styles.grid__item__title}>Arduino</p>
                </div>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://media.istockphoto.com/vectors/rfid-technology-label-vector-id1191475118?b=1&k=6&m=1191475118&s=612x612&w=0&h=2haeRgo1s07sVuL08ry9vEhZPXmMemnMPiIPyCrnDRA=" alt="RFID Logo"/>
                    <p className={styles.grid__item__title}>RFID</p>
                </div>
                <div className={styles.grid__item}>
                    <img className={styles.grid__item__logo} src="https://www.bluetooth.com/wp-content/uploads/2019/04/Bluetooth_FM_Color.png" alt="Bluetooth Logo"/>
                    <p className={styles.grid__item__title}>Bluetooth</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default technologies
