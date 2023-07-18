import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__listItem}>
          <Link href='/' className={styles.nav__link}>
            Home
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link href='templates' className={styles.nav__link}>
            Templates
          </Link>
        </li>
      </ul>
      <div className={styles.nav__logoContainer}>
        <Link href='/'>
          <h1 className={styles.nav__logo}>PersonalizeIt</h1>
        </Link>
      </div>
      <ul className={styles.nav__list}>
        <li className={styles.nav__listItem}>
          <Link href='#' className={styles.nav__link}>
            Cart
          </Link>
        </li>
        <li className={styles.nav__listItem}>
          <Link href='#' className={styles.nav__link}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
