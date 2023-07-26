import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <>
        <label className={styles.switch}>
        <input className={styles.switchInput} type="checkbox" role="switch"></input>
        <span className={styles.switchBaseOuter}></span>
        <span className={styles.switchBaseInner}></span>
        <svg className={styles.switchBaseNeon} viewBox="0 0 40 24" width="40px" height="24px">
          <defs>
            <filter id="switch-glow">
              <feGaussianBlur result="coloredBlur" stddeviation="1"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <linearGradient id="switch-gradient1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="hsl(var(--on-hue1),90%,70%)" />
              <stop offset="100%" stop-color="hsl(var(--on-hue2),90%,70%)" />
            </linearGradient>
            <linearGradient id="switch-gradient2" x1="0.7" y1="0" x2="0.3" y2="1">
              <stop offset="25%" stop-color="hsla(var(--on-hue1),90%,70%,0)" />
              <stop offset="50%" stop-color="hsla(var(--on-hue1),90%,70%,0.3)" />
              <stop offset="100%" stop-color="hsla(var(--on-hue2),90%,70%,0.3)" />
            </linearGradient>
          </defs>
          <path fill="none" filter="url(#switch-glow)" stroke="url(#switch-gradient1)" stroke-width="1" stroke-dasharray="0 104.26 0" stroke-dashoffset="0.01" stroke-linecap="round" d="m.5,12C.5,5.649,5.649.5,12,.5h16c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5H12C5.649,23.5.5,18.351.5,12Z"/>
        </svg>
        <span className={styles.switchKnobShadow}></span>
        <span className={styles.switchKnobContainer}>
          <span className={styles.switchKnob}>
            <svg className={styles.switchKnobNeon} viewBox="0 0 48 48" width="48px" height="48px">
              <circle fill="none" stroke="url(#switch-gradient2)" stroke-dasharray="0 90.32 0 54.19" stroke-linecap="round" stroke-width="1" r="23" cx="24" cy="24" transform="rotate(-112.5,24,24)" />
            </svg>
          </span>
        </span>
        <span className={styles.switchLed}></span>
        <span className={styles.switchText}>Power</span>
      </label>
      <a className={styles.dev} href=''>Developer by @Pierremon</a>
    </>
  )
}
