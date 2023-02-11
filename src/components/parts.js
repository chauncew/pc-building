import React, { useEffect } from 'react'
import styles from '../components/parts.module.css'
import memory from '../images/partsRam.jpg'
import cases from '../images/partsCase.jpg'
import motherboard from '../images/partsMotherboard.jpg'
import cpu from '../images/partsCpu.webp'
import ram from '../images/partsRam.png'
import ssd from '../images/partsSsd.jpg'
import psu from '../images/partsPsu.jpg'
import air from '../images/partsAir.jpg'
import aio from '../images/partsAio.jpg'
import wifi from '../images/partsWifi.jpg'
import gpu from '../images/partsGpu.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Parts = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <main>
        <h1 className={styles.partsHeading}>Putting The Parts Together</h1>
        <div className={styles.parts}>
            <div className={styles.parts1}>
                <div data-aos="flip-left">
                    <img src={cases} alt="" />
                </div>
                <h2>Case</h2>
                <h3>The case is the house of the unit</h3>
                <p>The case is where everything lives. There are many different variety of case styles and sizes. The case also serves as an electrical current ground for all of your components.</p>
            </div>

            <div className={styles.parts2}>
                <div data-aos="flip-left">
                    <img src={motherboard} alt="" />
                </div>
                <h2>Motherboard</h2>
                <h3>The motherboard is the connection foundation</h3>
                <p>The motherboard is the part that all the internal components connects to. The motherboard is responsible for distributing power from your PSU to the other components.</p>
            </div>

            <div className={styles.parts3}>
                <div data-aos="flip-left">
                    <img src={cpu} alt="" />
                </div>
                <h2>CPU</h2>
                <h3>The CPU is the brain of the unit</h3>
                <p>The CPU, or Central Processing Unit, is responsible for taking your request and delegating tasks to various components to be executed.</p>
            </div>

            <div className={styles.parts4}>
                <div data-aos="flip-right">
                    <img src={memory} alt="" />
                </div>
                <h2>RAM</h2>
                <h3>RAM affects the number of tasks that can be efficiently processed at once.</h3>
                <p>RAM is responsible for pulling programs or files from mass storage into active use. The RAM will pull data from applications in use, acting as the short-term memory.</p>
            </div>

            <div className={styles.parts5}>
                <div data-aos="flip-right">
                    <img src={ssd} alt="" />
                </div>
                <h2>SSD</h2>
                <h3>The SSD is where you store your data</h3>
                <p>The SSD is a fast and efficient way to store and access games, apps, files, and more on your computer. SSD stands for solid-state drive, meaning it has no moving parts, which in turn offers less wear and tear, as well as faster access to your stuff.</p>
            </div>

            <div className={styles.parts6}>
                <div data-aos="flip-right">
                    <img src={psu} alt="" />
                </div>
                <h2>PSU</h2>
                <h3>The PSU is what powers the unit.</h3>
                <p>The PSU (power supply unit) is what give power to the unit. it converts alternating current to direct current to give the PC power</p>
            </div>

            <div className={styles.parts7}>
                <div data-aos="flip-left">
                    <img src={air} alt="" />
                </div>
                <h2>Air Cooler</h2>
                <h3>The air cooler is like the A/C</h3>
                <p>An air cooler mounts to your CPU and uses 1 or 2 fans to move air through a series of thin metal fins. These metal fins house the heat given off by your CPU when it is under load.</p>
            </div>

            <div className={styles.parts8}>
                <div data-aos="flip-left">
                    <img src={aio} alt="" />
                </div>
                <h2>AIO Cooler</h2>
                <h3>The AIO cooler keeps things cool</h3>
                <p>The AIO is a liquid cooling system that keeps the CPU nice and cool. It's an all in one cooler that can combine a water pump, water block that fits over the CPU, a fan, and a radiator.</p>
            </div>

            <div className={styles.parts9}>
                <div data-aos="flip-left">
                    <img src={gpu} alt="" />
                </div>
                <h2>GPU</h2>
                <h3>The GPU put the images on the screen</h3>
                <p>The GPU is in charge of processing all of the visual data of a game or application.</p>
            </div>

            <div className={styles.parts10}>
                <div data-aos="flip-right">
                    <img src={wifi} alt="" />
                </div>
                <h2>WiFi</h2>
                <h3>WiFi if for communication</h3>
                <p>The WiFi card gives you a wireless connection to the internet from your home, public, or anywhere where wireless connectivity is possible</p>
            </div>
        </div>
    </main>
  )
}

export default Parts