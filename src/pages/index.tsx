import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { EbookCta } from '../components/EbookCta';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.hero.title">Language Comparison</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Your ultimate programming language comparison guide with structured syntax insights
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/roadmap">
            <Translate id="homepage.hero.cta">Start Learning 🚀</Translate>
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
              <Translate id="homepage.whatIs.title">What is this project?</Translate>
            </Heading>
            <p className={styles.sectionDescription}>
              <Translate id="homepage.whatIs.description">
                This Language Comparison is your comprehensive companion for understanding programming languages. 
                Each language concept is presented in a structured format with code examples across 12 popular languages: 
                JavaScript, PHP, Rust, Go, Python, Zig, C#, C++, C, Java, Ruby, and Swift. This organization helps you 
                quickly understand syntax differences, best practices, and implementation patterns across different languages.
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/roadmap">
                <Translate id="homepage.whatIs.cta">Explore Languages ✨</Translate>
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
              <Translate id="homepage.contribute.title">Help Improve This Guide</Translate>
            </Heading>
            <p className={styles.sectionDescription}>
              <Translate id="homepage.contribute.description">
                This project thrives on community contributions. If you're learning programming languages or working 
                with multiple languages, your insights are valuable! You can help by:
              </Translate>
            </p>
            <ul className={styles.contributionList}>
              <li><Translate id="homepage.contribute.list.examples">Adding new code examples based on your experience</Translate></li>
              <li><Translate id="homepage.contribute.list.syntax">Updating syntax examples with the latest language features</Translate></li>
              <li><Translate id="homepage.contribute.list.comparisons">Contributing to language comparisons</Translate></li>
              <li><Translate id="homepage.contribute.list.outdated">Fixing outdated information</Translate></li>
              <li><Translate id="homepage.contribute.list.explanations">Improving explanations and examples</Translate></li>
            </ul>
            <p className={styles.sectionDescription}>
              <Translate id="homepage.contribute.closing">
                Your contributions help keep this guide current and valuable for everyone in the programming community. 
                Check out our contribution guidelines to get started!
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="https://github.com/EmersonBraun/language-comparison">
                <Translate id="homepage.contribute.cta">Contribute to the Project 🤝</Translate>
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
      title={translate({id: 'homepage.layout.title', message: 'Language Comparison'})}
      description={translate({id: 'homepage.layout.description', message: 'Compare programming languages side by side'})}>
      <HomepageHeader />
      <main>
        <WhatIsThisProject />
        <HelpImproveGuide />
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <EbookCta />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
