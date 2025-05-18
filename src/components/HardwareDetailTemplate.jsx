import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import SpecsTable from './SpecsTable';
import MarkdownSection from './MarkdownSection';

export default function HardwareDetailTemplate(props) {
  const { device: devices, meta } = props;
  
  const deviceId = meta.id
  const device = devices.find(d => d.id === deviceId);
  console.log('Device ID:', deviceId);
  console.log('Device:', device);
  
  // Handle case where device is not found
  // if (!device) {
    // return <div>Device not found: {deviceId}</div>;
  // }

  const tags = Array.isArray(meta.tags) ? meta.tags : [];
  const rawSpecs = meta.specs || [];
  const specs = Array.isArray(rawSpecs)
    ? rawSpecs
    : Object.entries(rawSpecs).map(([name, value]) => ({ name, value }));
  const markdownFile = meta.markdownFile
    ? useBaseUrl(meta.markdownFile)
    : null;
  return (
    <Layout title={device.name} description={device.overview}>
      <main className="tw-max-w-4xl tw-mx-auto tw-px-4 tw-py-8">
        <Link
          to={useBaseUrl('/hardware_pages')}
          className="tw-inline-block tw-mb-4 tw-text-primary hover:tw-underline"
        >
          ← Back to devices
        </Link>

        <section className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6 tw-mb-8">
          <div className="tw-flex-shrink-0 tw-w-full md:tw-w-2/5">
            
            <img
              src={useBaseUrl(`/img/hardware/${device.image}`)}
              alt={device.name}
              className="tw-w-full tw-rounded-lg tw-shadow-md tw-object-contain"
              style={{ maxHeight: '300px' }}
            />
          </div>
          <div className="tw-flex-grow">
            <h1 className="tw-text-2xl tw-font-bold tw-mb-2">{device.name}</h1>
            <p className="tw-text-gray-700 tw-mb-4">{device.overview}</p>
            {tags.length > 0 && (
              <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mt-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="tw-bg-primary/10 tw-text-primary tw-px-3 tw-py-1 tw-rounded-full tw-text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="tw-mb-8">
          <h2 className="tw-text-xl tw-font-semibold tw-mb-4 tw-pb-2 tw-border-b tw-border-gray-200">
            Specifications
          </h2>
          <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-overflow-hidden">
            <SpecsTable specs={specs} />
          </div>
        </section>

        {markdownFile && (
          <section className="tw-mb-8">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-4 tw-pb-2 tw-border-b tw-border-gray-200">
              Details
            </h2>
            <MarkdownSection
              source={markdownFile}
              className="tw-prose tw-prose-sm md:tw-prose-base tw-max-w-none"
            />
          </section>
        )}
      </main>
    </Layout>
  );
}