import Layout from '@theme/Layout';
import HardwareCard from '../../components/HardwareCard';
import categories from '../../data/hardware/categories';
import devices from '../../data/hardware/devices';
import styles from './index.module.css';

export default function HardwareListPage() {
  return (
    <Layout title="Supported Hardware" description="Browse supported hardware devices">
      <main className={styles.container}>
        {categories.map((category) => {
          const categoryDevices = devices.filter(
            (device) => device.category === category.id
          );

          return (
            <section key={category.id} className={styles.categorySection}>
              <h2 className={styles.categoryHeading}>
                {category.label}
              </h2>

              {categoryDevices.length > 0 ? (
                <div className={styles.cardGrid}>
                  {categoryDevices.map((device) => (
                    <div
                      key={device.id}
                      className={styles.cardWrapper}
                    >
                      <HardwareCard
                        id={device.id}
                        name={device.name}
                        image={`/img/hardware/${device.image}`}
                        overview={device.overview}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className={styles.emptyState}>
                  No devices available in this category.
                </p>
              )}
            </section>
          );
        })}
      </main>
    </Layout>
  );
}