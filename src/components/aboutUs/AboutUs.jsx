import styles from './AboutUs.module.scss';
import React from 'react';

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <h3 className={styles.title}>About Us</h3>
      <div className={styles.imageContainer}>
        <img src="/images/beans_logo-footer.svg" alt="About Us" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
      <p className={styles.description}>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.</p>

        <p className={styles.description}>
        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.
      </p>
      </div>
    </section>
  );
}

export default AboutUs;
