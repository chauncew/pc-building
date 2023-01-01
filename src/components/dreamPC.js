import React from 'react'
import styles from '../components/dreamPC.module.css'
import gaminMouse from '../images/gamingMouse.png'
import gamingHeadset from '../images/gamingHeadphones.png'
import gamingCase from '../images/gaminCase.webp'
import bottomDreamImage from '../images/bottomDreamImage.png'
import gpu from '../images/gpu.png'
import cpu from '../images/cpu.png'
import memory from '../images/memory.jpg'

const dreamPC = () => {
  return (
    <div className={styles.dreamSection}>
        <h1>Building Your Extreme Custom PC</h1>
        <div className={styles.topDreamInfo}>
            <div className={styles.dreamInfo1}>
                <img src={gaminMouse} alt="" />
                <h2>Gaming</h2>
                <p>Whether you want to play popular games on a budget, get eye-watering visuals, or hit peak FPS, a custom PC has got you covered. From mid-range to top-of-the-line GPUs and CPUs.</p>
            </div>
            <div className={styles.dreamInfo2}>
                <img src={gamingHeadset} alt="" />
                <h2>Streaming</h2>
                <p>Ready to go live with your stream? Customize with powerful CPUs, GPUs, and plenty RAM so you can play and stream without taking a performance hit.</p>
            </div>
            <div className={styles.dreamInfo3}>
                <img src={gamingCase} alt="" />
                <h2>Creating</h2>
                <p>Use your creative mind and start of with a clean slate. You can choose your case, memory, GPU, and CPU and all the bells and whistles to go along with it all.</p>
            </div>
        </div>

        <div className={styles.bottomDreamInfo}>
            <div className={styles.rightDreamInfo}>
                <h1>Boost Your Performance</h1>
                <div className={styles.gpu}>
                    <div className={styles.gpuImage}>
                        <img src={gpu} alt="" />
                    </div>
                    <h3>GPU</h3>
                        {/* <p>The Graphics Processing Unit offers pure power to push performance to new heights in the biggest games.</p> */}
                </div>
                <p>The Graphics Processing Unit offers pure power to push performance to new heights in the biggest games.</p>
                <div className={styles.cpu}>
                    <div className={styles.cpuImage}>
                    <img src={cpu} alt="" />
                    </div>
                    <h3>CPU</h3>
                    <p>The Central Processing Unit multitasks as well as increases performance in CPU-intensive games and helps avoid bottlenecks.</p>
                </div>
                <div className={styles.ram}>
                    <div className={styles.ramImage}>
                    <img src={memory} alt="" />
                    </div>
                    <h3>RAM</h3>
                    <p>Random Access Memory enables you to run multiple programs at once—the more RAM you have, the better you can multi-task.</p>
                </div>
            </div>
            <div className={styles.bottomDreamImage}>
                <img src={bottomDreamImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default dreamPC