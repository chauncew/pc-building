import React, { useEffect } from 'react'
import styles from '../components/moreInfo.module.css'
import image1 from '../images/img1.jpg'
import image2 from '../images/img3.jpg'
import image3 from '../images/img5.jpg'
import bottomImg from '../images/bottomDreamImage.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MoreInfo = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <main>
        <h1 className={styles.moreHeading}>Additional Info</h1>
        <div className={styles.moreInfo}>
            <img src={image1} className={styles.infoImg1} alt="" data-aos="zoom-in" />
            <img src={image2} className={styles.infoImg2} alt="" data-aos="zoom-in" />
            <img src={image3} className={styles.infoImg3} alt="" data-aos="zoom-in"/>
        </div>
        <div className={styles.moreInfoBtm} >
        <p data-aos="zoom-out">Easily create truly mesmerizing PC gaming systems with the help of this build info and from true gamers. Wright's Extreme PC Builds helps put the power of creation in your hands. What will you build? Wright's helps you removes all the barriers between you and your next gaming rig. We help to give you the ability to choose the components you need and make sure they all work together at peak performance. We help git the info out to you with the most complete info of high-end computer parts, including the latest AMD Radeon and NVIDIA GeForce graphics cards, current-gen Intel and AMD processors, a robust selection of motherboards, lightning-fast RAM sticks, certified PSUs, and mind-bending cooling solutions to take your overclocking needs to the next level. Drastically improve your gaming performance by unlocking the full potential of every component. Click on one of the three links below to show you how.</p>

            <div className={styles.infoLinks}>
                <a href="https://www.pcgamesn.com/how-to-build-gaming-pc
                " target="_blank" rel="noreferrer">
                    <div className={styles.moreInfo1} data-aos="flip-up">
                        <h2>Full Putting It Together Details</h2>
                    </div>
                </a>

                <a href="https://www.corsair.com/us/en/build-your-gaming-pc
                " target="_blank" rel="noreferrer">       
                <div className={styles.moreInfo2} data-aos="flip-up">
                    <h2>Corsair PC Builder</h2>
                </div>
                </a>

                <a href="https://www.tomshardware.com/best-picks/best-pc-builds-gaming
                " target="_blank" rel="noreferrer">
                    <div className={styles.moreInfo3} data-aos="flip-up">
                        <h2>Budget PC Building</h2>
                    </div>
                </a>

            </div>
        </div>
    </main>
  )
}

export default MoreInfo