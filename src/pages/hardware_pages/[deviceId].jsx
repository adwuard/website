import React from 'react';
import { useParams } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Redirect } from '@docusaurus/router';
import NotFound from '@theme/NotFound';
import devices from '../../data/hardware/devices';
import esp32Meta from '../../data/hardware/metadata/esp32';
import picoMeta from '../../data/hardware/metadata/pico';
import SpecsTable from '../../components/SpecsTable';
import MarkdownSection from '../../components/MarkdownSection';
import styles from './[deviceId].module.css';

export default function DeviceDetailPage() {
  const { deviceId } = useParams();
  const device = devices.find((d) => d.id === deviceId);

  if (!device) {
    return <NotFound />;
  }

  const metaMap = {
    esp32: esp32Meta,
    pico: picoMeta,
  };
  const meta = metaMap[deviceId] || {};
  const tags = Array.isArray(meta.tags) ? meta.tags : [];
  const rawSpecs = meta.specs || [];
  const specs = Array.isArray(rawSpecs)
    ? rawSpecs
    : Object.entries(rawSpecs).map(([name, value]) => ({ name, value }));
  const markdownFile = meta.markdownFile;

  // Redirect from old URL pattern if needed
  if (window.location.pathname.startsWith('/hardware/') && window.location.pathname !== `/hardware/${deviceId}`) {
    return <Redirect to={useBaseUrl(`/hardware_pages/${deviceId}`)} />;
  }

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
