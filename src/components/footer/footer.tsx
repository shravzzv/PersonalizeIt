import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__main}>PersonalizeIt</h2>
      <p className={styles.footer__copyright}>©SAI SHRAVAN 2023</p>
      <ul className={styles.footer__list}>
        <li className={styles.footer__listItem}>
          <Link
            href='https://www.github.com/shravzzv'
            className={styles.footer__link}
            target='_blank'
          >
            GitHub
          </Link>
        </li>
        <li className={styles.footer__listItem}>
          <Link
            href='https://www.instagram.com/shravzzv'
            className={styles.footer__link}
            target='_blank'
          >
            Instagram
          </Link>
        </li>
        <li className={styles.footer__listItem}>
          <Link
            href='https://www.linkedin.com/in/sai-shravan-027040244/'
            className={styles.footer__link}
            target='_blank'
          >
            LinkedIn
          </Link>
        </li>
        <li className={styles.footer__listItem}>
          <Link
            href='https://www.youtube.com/@shravzzv'
            className={styles.footer__link}
            target='_blank'
          >
            YouTube
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
