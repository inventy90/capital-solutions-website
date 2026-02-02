import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Facility Maintenance Insights & Tips for Hotels in GCC | Capital Solutions',
    description: 'Expert articles on HVAC maintenance, cold room care, kitchen equipment upkeep, and best practices for hospitality facility management in Saudi Arabia and the GCC.',
    keywords: ['facility maintenance tips', 'HVAC maintenance guide hotels', 'cold room maintenance checklist', 'hospitality engineering best practices GCC']
};

const ARTICLES = [
    {
        slug: 'preventing-hvac-failures-summer',
        title: 'How to Prevent HVAC Failures During Peak Summer',
        excerpt: 'Summer heat puts immense strain on your cooling systems. Learn the critical preventive steps to avoid breakdowns.'
    },
    {
        slug: 'cold-room-maintenance-checklist',
        title: 'The Essential Cold Room Maintenance Checklist',
        excerpt: 'Stop risking inventory spoilage. Daily and weekly checks every kitchen manager must know.'
    },
    {
        slug: 'benefits-of-amc',
        title: 'Why an Annual Maintenance Contract Saves You Money',
        excerpt: 'Reactive repairs cost 3x more than preventive maintenance. Here is the math behind AMC value.'
    }
];

export default function InsightsPage() {
    return (
        <main>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Insights</h1>
                    <p className={styles.subtitle}>Expert advice to keep your operations running smoothly.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {ARTICLES.map((article) => (
                            <Link href={`/insights/${article.slug}`} key={article.slug} className={styles.card}>
                                <h2 className={styles.cardTitle}>{article.title}</h2>
                                <p className={styles.cardExcerpt}>{article.excerpt}</p>
                                <span className={styles.readMore}>Read Article &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
