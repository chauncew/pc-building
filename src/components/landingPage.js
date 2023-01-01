import React from 'react'
import landingVideo from '../images/20221229_084903.mp4'
import styles from './landingPage.module.css'

const landingPage = () => {
  return (
    <section className={styles.landingSection}>
        <div className={styles.leftLandingInfo}>
            <h1>Wright's</h1>
            <h1>Building <span className={styles.extreme}>Extreme</span> Gaming PC's</h1>
            <h3>Info on custom PC builds</h3>
            <button className={`${styles.buttons} ${styles.landingButton}`}>Getting Started</button>
                <div className={`${styles.landingLined} ${styles.line1}`}></div>
                <div className={`${styles.landingLined} ${styles.line2}`}></div>
                <div className={`${styles.landingLined} ${styles.line3}`}></div>
        </div>

        <div className={styles.landingVideo}>
            <video autostart autoPlay muted loop>
                <source src={landingVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    </section>
  )
}

export default landingPage