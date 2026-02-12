import { type ReactElement } from 'react';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

export function EbookCta(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        <Translate id="ebook.title">🎯 Tired of failing technical interviews?</Translate>
      </h3>
      <p className={styles.description}>
        <Translate id="ebook.description">
          Get my FREE e-book "Cracking The Technical Interview" and learn proven strategies
          to ace your next technical interview with confidence!
        </Translate>
      </p>
      <a
        href="https://ebook.emersonbraun.dev/"
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer">
        <Translate id="ebook.cta">Get My Free E-book 📚</Translate>
      </a>
      <p className={styles.footer}>
        <Translate id="ebook.footer">Trusted by 2,000+ developers • No spam, we promise</Translate>
      </p>
    </div>
  );
}
