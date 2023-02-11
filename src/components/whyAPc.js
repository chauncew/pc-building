import React, { useEffect } from 'react'
import styles from './whyAPc.module.css'
import whyImage from '../images/whyImage.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyAPc = () => {
        useEffect(() => {
            AOS.init({duration: 2000})
        }, [])
  return (
    <div className={styles.whySection}>
        <div className={styles.topWhy}>
            <div className={styles.whyLeft}>
                <h1 data-aos="fade-up">Why Build A Custom Gaming PC</h1>
                <p data-aos="fade-down">Custom gaming rigs are great. You can style them any way you want with any compatible gear you want. Give it RGB lighting, water cooling, best CPU and best graphics card. It all depends on your budget.</p>
            </div>
            <div className={styles.whyRight} data-aos="fade-left">
                <img src={whyImage} alt='' />
            </div>
        </div>

        <div className={styles.bottomWhy}>
            <h1 data-aos="fade-right">Be The Biggest And Baddest On The Block</h1>
            <p data-aos="fade-left">Whether it's trying to get the most FPS or the best onscreen graphics and really enjoying the look and feel of your PC, building it yourself will make you the biggest and baddest and the envy of all the gamers on the block.</p>
            <div className={styles.bottomVale}></div>
        </div>
    </div>
  )
}

export default WhyAPc