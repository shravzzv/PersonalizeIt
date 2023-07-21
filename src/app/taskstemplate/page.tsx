import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const TasksTemplate = () => {
  return (
    <div className={styles.template}>
      <div className={styles.hero}>
        <h1 className={styles.hero__head}>Notion Tasks Template</h1>
        <p className={styles.hero__sub}>
          Contains the most sought after features for a produtivity app.
        </p>
        <Link
          href='https://shravzzv.gumroad.com/l/notion-todos'
          target='_blank'
        >
          <button className={styles.hero__cta}>Get the template</button>
        </Link>
        <Image
          src='https://public-files.gumroad.com/hofyyco0prqojjfatwn44rxsewuo'
          alt='product'
          width={700}
          height={650}
          className={styles.hero__image}
        />
      </div>

      <section className={styles.info}>
        <h2 className={styles.info__head}>Features list</h2>
        <div className={styles.info__container}>
          <div className={styles.info__features}>
            <p className={styles.info__feature}>Due Dates</p>
            <p className={styles.info__feature}>Multiple Views</p>
            <p className={styles.info__feature}>Lists</p>
            <p className={styles.info__feature}>Calendar</p>
            <p className={styles.info__feature}>Collaboration</p>
          </div>
          <div className={styles.info__features}>
            <p className={styles.info__feature}>Priority levels</p>
            <p className={styles.info__feature}>Attachments</p>
            <p className={styles.info__feature}>Notes</p>
            <p className={styles.info__feature}>Subtasks</p>
            <p className={styles.info__feature}>Recurring tasks</p>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <Image
          src='https://public-files.gumroad.com/hofyyco0prqojjfatwn44rxsewuo'
          alt='product'
          width={700}
          height={650}
          className={styles.gallery__image}
        />
        <Image
          src='https://public-files.gumroad.com/eqzdwj5oc9w6vqjgl5uiz4kpkopx'
          alt='product'
          width={561}
          height={600}
          className={styles.gallery__image}
        />
        <Image
          src='https://public-files.gumroad.com/ho1a9o876ambwiq78b5zyy3zdsfr'
          alt='product'
          width={550}
          height={590}
          className={styles.gallery__image}
        />
      </section>
    </div>
  )
}

export default TasksTemplate

/* 
Pseudocode:
  Add a hero heading, subheading and cta
  display image gallery
  show pricing
*/

/* 
Use only images that have high clarity,
retake images
*/
