import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SpecsTable from './SpecsTable';
import MarkdownSection from './MarkdownSection';
import styles from './HardwareDetailTemplate.module.css';

export default function HardwareDetailTemplate(props) {
  const { device, meta } = props;

  const tags = Array.isArray(meta.tags) ? meta.tags : [];
  const rawSpecs = meta.specs || [];
  const specs = Array.isArray(rawSpecs)
    ? rawSpecs
    : Object.entries(rawSpecs).map(([name, value]) => ({ name, value }));
  const markdownFile = meta.markdownFile;

  return (
    <main className={styles.contentContainer}>
      <Link to={useBaseUrl('/hardware_pages')} className={styles.backButton}>
        ← Back to devices
      </Link>

      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img
            src={useBaseUrl(`/img/hardware/${device.image}`)}
            alt={device.name}
            className={styles.deviceImage}
          />
        </div>
        <div className={styles.deviceInfo}>
          <h1 className={styles.deviceTitle}>{device.name}</h1>
          <p className={styles.deviceDescription}>{device.overview}</p>
          {tags.length > 0 && (
            <div className={styles.tagsContainer}>
              {tags.map((tag, idx) => (
                <span key={idx} className={styles.tagBadge}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Specifications</h2>
        <div className={styles.specsTableContainer}>
          <SpecsTable specs={specs} />
        </div>
      </section>

      {markdownFile && (
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Details</h2>
          <MarkdownSection
            source={markdownFile}
            className={styles.markdownContent}
          />
        </section>
      )}
    </main>
  );
}