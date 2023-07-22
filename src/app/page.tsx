import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.hero}>
    //     <h2 className={styles.heroMain}>
    //       Tailor-Made Templates for Your Unique Productivity Journey
    //     </h2>
    //     <div className={styles.heroSub}>
    //       Break free from the myth of one-size-fits-all productivity tools. Our
    //       templates provide a cutting-edge starting point that you can customize
    //       to your specific needs. Embrace the power of personalization and
    //       unlock your true productivity potential.
    //       <strong>Utlimately we use what's useful.</strong>
    //     </div>
    //     <a href='#' className={styles.heroCTA}>
    //       Explore Templates
    //     </a>
    //   </div>
    // </main>
    <div className={styles.home}>
      <main className={styles.hero}>
        <h1 className={styles.hero__head}>
          Tailor made templates for productivity
        </h1>
        <p className={styles.hero__sub}>
          Embrace the power of personalization with uniquely crafted and tested
          tools
        </p>
        <Link href='/taskstemplate'>
        <button className={styles.cta__button}>Explore</button>
        </Link>
      </main>

      <div className={styles.gallery}>
        <div className={styles.product}>
          <Link href='/taskstemplate'>
            <Image
              src='https://public-files.gumroad.com/hofyyco0prqojjfatwn44rxsewuo'
              alt='product'
              width={700}
              height={650}
              className={styles.product__image}
            />
            <h2 className={styles.product__title}>Tasks template</h2>
            <p className={styles.product__desc}>
              A robust tasks template that contains all the leading features
              required in a tasks app.
            </p>
            <p className={styles.product__price}>$5</p>
          </Link>
        </div>
        {/* <div className={styles.product}>
          <Link href='#'>
            <Image
              src='https://images.unsplash.com/photo-1648134859186-a05fb609f41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
              alt='product'
              width={1155}
              height={577}
              className={styles.product__image}
            />
            <h2 className={styles.product__title}>Tasks template</h2>
            <p className={styles.product__desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
              dicta.
            </p>
            <p className={styles.product__price}>$5</p>
          </Link>
        </div>
        <div className={styles.product}>
          <Link href='#'>
            <Image
              src='https://images.unsplash.com/photo-1648134859186-a05fb609f41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
              alt='product'
              width={1155}
              height={577}
              className={styles.product__image}
            />
            <h2 className={styles.product__title}>Tasks template</h2>
            <p className={styles.product__desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
              dicta.
            </p>
            <p className={styles.product__price}>$5</p>
          </Link>
        </div> */}
      </div>

      <section className={styles.section}>
        <div className={styles.section__text}>
          <h2 className={styles.section__head}>Research</h2>
          <p className={styles.section__desc}>
            Delve into our world of productivity tools, where groundbreaking
            ideas meet comprehensive research. We leave no stone unturned to
            uncover the most effective methodologies and strategies, ensuring
            that every tool we offer is a catalyst for your success.
          </p>
        </div>
        <Image
          src='https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80'
          alt='research'
          width={852}
          height={570}
          className={styles.section__image}
        />
      </section>
      <section className={styles.section}>
        <div className={styles.section__text}>
          <h2 className={styles.section__head}>Design</h2>
          <p className={styles.section__desc}>
            Immerse yourself in a realm of innovative design, where creativity
            and user-centricity converge. Our productivity tools are carefully
            crafted to seamlessly integrate into your workflow, offering an
            intuitive and personalized experience that empowers you to conquer
            your goals with flair.
          </p>
        </div>
        <Image
          src='https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='design'
          width={700}
          height={466}
          className={styles.section__image}
        />
      </section>
      <section className={styles.section}>
        <div className={styles.section__text}>
          <h2 className={styles.section__head}>Testing</h2>
          <p className={styles.section__desc}>
            Embrace the confidence that comes with knowing our productivity
            tools have endured rigorous testing and surpassed the highest
            performance benchmarks. Join the league of high achievers who rely
            on tools built to excel under any challenge, paving the way for
            unparalleled productivity and success.
          </p>
        </div>
        <Image
          src='https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='testing'
          width={872}
          height={582}
          className={styles.section__image}
        />
      </section>
    </div>
  )
}

// todo: add a FAQ section, notion certified logo, about the creator
