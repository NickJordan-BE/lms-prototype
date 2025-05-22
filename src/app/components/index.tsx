import React from 'react'
import Image from 'next/image';
import styles from './index.module.css';

export default function Index() {
  return (
    <div className={styles.intro}>

      <div className={styles.backgroundImage}>
        <Image
            src={'/images/landingbackground.png'}
            fill={true}
            alt="background image"
        />
      </div>

      <div className={styles.introContainer}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.introImage}>
              <Image
                  src={'/images/logo.png'}
                  fill={true}
                  alt="logo"
              />
          </div>
          <h1>Illuminance Esthetics</h1>

        </div>
      </div>

    </div>
  )
}

