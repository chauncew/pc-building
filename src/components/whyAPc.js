import React from 'react'
import styles from './whyAPc.module.css'
import whyImage from '../images/whyImage.jpg'

const whyAPc = () => {
  return (
    <div className={styles.whySection}>
        <div className={styles.topWhy}>
            <div className={styles.whyLeft}>
                <h1>Why Build A Custom Gaming PC</h1>
                <p>Custom gaming rigs are great. You can style them any way you want with any compatible gear you want. Give it RGB lighting, water cooling, best CPU and best graphics card. It all depends on your budget.</p>
            </div>
            <div className={styles.whyRight}>
                <img src={whyImage} alt='' />
            </div>
        </div>

        <div className={styles.bottomWhy}>
            <h1>Be The Biggest And Baddest On The Block</h1>
            <p>Whether it's trying to get the most FPS or the best onscreen graphics and really enjoying the look and feel of your PC, building it yourself will make you the biggest and baddest and the envy of all the gamers on the block.</p>
            <div className={styles.bottomVale}></div>
        </div>
    </div>
  )
}

export default whyAPc