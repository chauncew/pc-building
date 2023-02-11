import React, { useEffect } from 'react'
import styles from '../components/dreamPC.module.css'
import gaminMouse from '../images/gamingMouse.png'
import gamingHeadset from '../images/gamingHeadphones.png'
import gamingCase from '../images/gaminCase.webp'
import bottomDreamImage from '../images/bottomDreamImage.png'
import gpu from '../images/gpu.png'
import cpu from '../images/cpu.png'
import ram from '../images/ram.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DreamPC = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (  
    <main className={styles.dreamSection}>
        <h1 className={styles.dreamHeading} data-aos="fade-up">Building Your Extreme Custom PC</h1>
        <section className={styles.topDreamInfo}>
            <div className={styles.dreamInfo1} data-aos="fade-right">
                <img src={gaminMouse} alt="" />
                <h2>Gaming</h2>
                <p>Whether you want to play popular games on a budget, get eye-watering visuals, or hit peak FPS, a custom PC has got you covered. From mid-range to top-of-the-line GPUs and CPUs.</p>
            </div>
            <div className={styles.dreamInfo2} data-aos="fade-down">
                <img src={gamingHeadset} alt="" />
                <h2>Streaming</h2>
                <p>Ready to go live with your stream? Customize with powerful CPUs, GPUs, and plenty RAM so you can play and stream without taking a performance hit.</p>
            </div>
            <div className={styles.dreamInfo3} data-aos="fade-left">
                <img src={gamingCase} alt="" />
                <h2>Creating</h2>
                <p>Use your creative mind and start off with a clean slate. You can choose your case, memory, GPU, and CPU and all the bells and whistles to go along with it all.</p>
            </div>
        </section>

        <section className={styles.bottomDreamInfo}>
            <div className={styles.leftDreamInfo}>
                <h1 className={styles.bottomHeading}>Boost Your Performance</h1>
                <div className={styles.gpu} data-aos="flip-down">
                        <img src={gpu} alt="" />
                    <div className={styles.gpuInfo}>
                        <h3>GPU</h3>
                        <p>The Graphics Processing Unit offers pure power to push performance to new heights in the biggest games.</p>
                    </div>
                </div>

                <div className={styles.cpu} data-aos="flip-down">
                    <img src={cpu} alt="" />
                    <div className={styles.cpuInfo}>
                        <h3>CPU</h3>
                        <p>The Central Processing Unit multitasks as well as increases performance in CPU-intensive games and helps avoid bottlenecks.</p>
                    </div>
                </div>

                <div className={styles.ram} data-aos="flip-down">
                    <img src={ram} alt="" />
                    <div className={styles.ramInfo}>
                        <h3>RAM</h3>
                        <p>Random Access Memory enables you to run multiple programs at once—the more RAM you have, the better you can multi-task.</p>
                    </div>
                </div>
            </div>
            <div className={styles.rightDreamInfo}>
                <img src={bottomDreamImage} alt="" />
            </div>
        </section>
    </main>
  )
}

export default DreamPC