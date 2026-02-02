import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../page.module.css';

const ARTICLES = [
    { slug: 'preventing-hvac-failures-summer' },
    { slug: 'cold-room-maintenance-checklist' },
    { slug: 'benefits-of-amc' }
];

export async function generateStaticParams() {
    return ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
        title: `${title} | Capital Solutions Insights`,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main>
            <section className={styles.header} style={{ textAlign: 'left', paddingBottom: 40 }}>
                <div className="container">
                    <Link href="/insights" className={styles.readMore} style={{ marginBottom: 20, display: 'inline-block' }}>
                        &larr; Back to Insights
                    </Link>
                    <h1 className={styles.title} style={{ fontSize: '2rem' }}>{title}</h1>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="content">
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: 20 }}>
                            This is a placeholder for the full article content. In a production environment,
                            this would be populated from a CMS or Markdown file corresponding to the slug: <strong>{slug}</strong>.
                        </p>
                        <p>
                            At Capital Solutions, we believe in sharing our knowledge to help you maintain better facilities.
                            Proper maintenance of key systems like HVAC, Cold Rooms, and Electrical infrastructure is crucial
                            for avoiding costly downtime.
                        </p>
                        <h3 style={{ marginTop: 30, marginBottom: 15 }}>Key Takeaways</h3>
                        <ul style={{ paddingLeft: 20, marginBottom: 30, lineHeight: 1.8 }}>
                            <li>Regular inspections prevent major failures.</li>
                            <li>Safety compliance is non-negotiable in hospitality.</li>
                            <li>Professional partners bring specialized tools and expertise.</li>
                        </ul>
                        <p>
                            Contact us today to learn more about how we can support your specific needs.
                        </p>
                    </div>

                    <div style={{ marginTop: 60, padding: 40, background: 'var(--bg-subtle)', borderRadius: 12, textAlign: 'center' }}>
                        <h3 style={{ marginBottom: 16 }}>Have a similar issue?</h3>
                        <Link href="https://wa.me/966507516840" className="btn btn-primary">
                            Talk to our team on WhatsApp
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
