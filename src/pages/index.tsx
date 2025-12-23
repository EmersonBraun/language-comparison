import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Language Comparison
        </Heading>
        <p className="hero__subtitle">
          Your ultimate programming language comparison guide with structured syntax insights
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhatIsThisProject() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              What is this project?
            </Heading>
            <p className={styles.sectionDescription}>
              This Language Comparison is your comprehensive companion for understanding programming languages. 
              Each language concept is presented in a structured format with code examples across 11 popular languages: 
              JavaScript, PHP, Rust, Go, Python, Zig, C#, C++, C, Java, Ruby, and Swift. This organization helps you 
              quickly understand syntax differences, best practices, and implementation patterns across different languages.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/getting-started">
                Explore Languages ✨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HelpImproveGuide() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              Help Improve This Guide
            </Heading>
            <p className={styles.sectionDescription}>
              This project thrives on community contributions. If you're learning programming languages or working 
              with multiple languages, your insights are valuable! You can help by:
            </p>
            <ul className={styles.contributionList}>
              <li>Adding new code examples based on your experience</li>
              <li>Updating syntax examples with the latest language features</li>
              <li>Contributing to language comparisons</li>
              <li>Fixing outdated information</li>
              <li>Improving explanations and examples</li>
            </ul>
            <p className={styles.sectionDescription}>
              Your contributions help keep this guide current and valuable for everyone in the programming community. 
              Check out our contribution guidelines to get started!
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="https://github.com/EmersonBraun/comparison">
                Contribute to the Project 🤝
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreeEbook() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className={styles.sectionTitle}>
              🎯 Tired of failing technical interviews?
            </Heading>
            <p className={styles.sectionDescription}>
              Get my <strong>FREE e-book</strong> "Cracking The Technical Interview" and learn proven strategies 
              to ace your next technical interview with confidence!
            </p>
            <ul className={styles.ebookList}>
              <li>✅ Master coding and system design questions</li>
              <li>✅ Learn behavioral interview techniques</li>
              <li>✅ Discover negotiation strategies</li>
              <li>✅ Build unshakeable confidence</li>
            </ul>
            <p className={styles.trustedBy}>
              Trusted by 2,000+ developers • No spam, we promise
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="#">
                Get My Free E-book 📚
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Language Comparison"
      description="Compare programming languages side by side">
      <HomepageHeader />
      <main>
        <WhatIsThisProject />
        <HelpImproveGuide />
        <FreeEbook />
      </main>
    </Layout>
  );
}


