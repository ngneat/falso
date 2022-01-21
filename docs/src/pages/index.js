import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>
          <img src='img/logo.png' alt='falso' width={200} />
        </h1>
        <p className='hero__subtitle'>
          All the Fake {' '}
          <b>
            <em>Data</em>
          </b>{' '}
          for All Your Real Needs
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/getting-started'
          >
            Get Started
          </Link>
          <iframe src="https://ghbtns.com/github-btn.html?user=ngneat&repo=falso&type=star&count=true&size=large"></iframe>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      keywords={[
        'fake',
        'fake data',
        'random data',
        'mock data',
        'js mock',
        'mocks'
      ]}
      description='Falso - All the Fake Data for All Your Real Needs'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
