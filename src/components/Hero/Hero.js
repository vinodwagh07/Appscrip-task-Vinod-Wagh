import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.productHero} aria-labelledby="hero-title">
      <div className={styles.heroContainer}>
        <h1 id="hero-title" className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </section>
  );
}
