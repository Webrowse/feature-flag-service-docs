import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const SECTIONS = [
  {
    label: 'Getting Started',
    path: '/docs/getting-started/quickstart',
    description: 'Up and running in 5 minutes. Create a flag, evaluate it from your app.',
  },
  {
    label: 'Concepts',
    path: '/docs/concepts',
    description: 'Understand how projects, environments, flags, and rules fit together.',
  },
  {
    label: 'Guides',
    path: '/docs/guides/gradual-rollout',
    description: 'Step-by-step walkthroughs for gradual rollouts, kill switches, and targeting.',
  },
  {
    label: 'SDK Integration',
    path: '/docs/sdk/overview',
    description: 'Evaluate flags from any application using the SDK endpoint.',
  },
  {
    label: 'API Reference',
    path: '/docs/api-reference',
    description: 'Full REST API documentation for the management and SDK APIs.',
  },
  {
    label: 'Self-Hosting',
    path: '/docs/self-hosting',
    description: 'Deploy on your own infrastructure with Docker or Railway.',
  },
] as const;

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Feature Flag Service Docs"
      description="Ship features safely. Control who sees what."
    >
      <main className={styles.main}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>docs.ffs.adarshrust.com</p>
          <h1 className={styles.title}>Feature Flag Service</h1>
          <p className={styles.subtitle}>
            Ship features safely. Control who sees what — without touching your
            deployment pipeline.
          </p>
          <div className={styles.actions}>
            <Link to="/docs/getting-started/quickstart" className={styles.primaryBtn}>
              Get started
            </Link>
            <Link to="/docs/concepts" className={styles.secondaryBtn}>
              Read the concepts
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {SECTIONS.map((s) => (
            <Link key={s.path} to={s.path} className={styles.card}>
              <span className={styles.cardLabel}>{s.label}</span>
              <span className={styles.cardDesc}>{s.description}</span>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link
            to="https://ffs.adarshrust.com"
            className={styles.footerLink}
          >
            Open Dashboard
          </Link>
          <Link
            to="https://github.com/Webrowse/feature-flag-service-backend"
            className={styles.footerLink}
          >
            GitHub
          </Link>
        </div>
      </main>
    </Layout>
  );
}
