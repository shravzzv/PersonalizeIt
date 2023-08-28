import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className={styles.footer__main}>
        <h1 className={styles.footer__logo}>PersonalizeIt</h1>
        <p className={styles.footer__desc}>
          Tailor made templates for productivity.
        </p>
        <p className={styles.footer__copyright}>&copy; Sai Shravan Vadla</p>
      </main>

      <hr className={styles.hr} />

      <section className={styles.footer__section}>
        <ul className={styles.footer__list}>
          <li className={styles.footer__listItem}>
            <Link
              href='https://personalizeit.vercel.app/'
              className={styles.footer__link}
              target='_blank'
            >
              PersonalizeIt
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://personalizeit.vercel.app/'
              className={styles.footer__link}
              target='_blank'
            >
              Home
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://personalizeit.vercel.app/taskstemplate'
              className={styles.footer__link}
              target='_blank'
            >
              Templates
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://personalizeit.vercel.app/taskstemplate'
              className={styles.footer__link}
              target='_blank'
            >
              Tasks template
            </Link>
          </li>
        </ul>

        <ul className={styles.footer__list}>
          <li className={styles.footer__listItem}>
            <Link
              href='https://saishravan.vercel.app/'
              target='_blank'
              className={styles.footer__link}
            >
              Contact me
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://github.com/shravzzv'
              target='_blank'
              className={styles.footer__link}
            >
              GitHub
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://www.linkedin.com/in/sai-shravan-027040244/'
              target='_blank'
              className={styles.footer__link}
            >
              LinkedIn
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://instagram.com/shravzzv'
              target='_blank'
              className={styles.footer__link}
            >
              Instagram
            </Link>
          </li>
          <li className={styles.footer__listItem}>
            <Link
              href='https://www.youtube.com/@shravzzv'
              target='_blank'
              className={styles.footer__link}
            >
              YouTube
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
