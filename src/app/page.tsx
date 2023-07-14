import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2 className={styles.heroHeadline}>
          Tailor-Made Templates for Your Unique Productivity Journey
        </h2>
        <div className={styles.heroDescription}>
          Break free from the myth of one-size-fits-all productivity tools. Our
          templates provide a cutting-edge starting point that you can customize
          to your specific needs. Embrace the power of personalization and
          unlock your true productivity potential.
          <strong>Utlimately we use what's useful.</strong>
        </div>
        <a href='#' className={styles.heroCTA}>
          Explore Templates
        </a>
      </div>
    </main>
  )
}
