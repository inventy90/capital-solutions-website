import styles from './page.module.css';
import ContactForm from './ContactForm';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Capital Solutions - 24/7 Facility Maintenance Support in Saudi Arabia',
    description: 'Reach Capital Solutions for emergency repairs, preventive maintenance, or facility management inquiries. WhatsApp support available 24/7 across Saudi Arabia and the GCC.',
    keywords: ['contact facility maintenance company Saudi Arabia', '24/7 maintenance support GCC', 'emergency repair services Riyadh']
};

export default function ContactPage() {
    return (
        <main>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>We are ready to support your operations 24/7.</p>
                </div>
            </section>

            <section className="section">
                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* Contact Info Side */}
                        <div>
                            <div className={styles.infoBlock}>
                                <div className={styles.label}>Whatsapp (Primary)</div>
                                <div className={styles.value}>
                                    <Link href="https://wa.me/966507516840" style={{ color: 'var(--primary-blue)' }}>
                                        +966 50 751 6840
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.infoBlock}>
                                <div className={styles.label}>Contact Number (Support)</div>
                                <div className={styles.value}>
                                    <Link href="tel:+966567109170" style={{ color: 'var(--primary-blue)' }}>
                                        +966 56 710 9170
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.infoBlock}>
                                <div className={styles.label}>Email</div>
                                <div className={styles.value}>sales@capitalksa.com</div>
                            </div>

                            <div className={styles.infoBlock}>
                                <div className={styles.label}>Location</div>
                                <div className={styles.value}>Ash Shati Ash Sharqi, Dammam, Saudi Arabia</div>
                            </div>

                            <div className={styles.whatsappBlock}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: 12 }}>Need Urgent Help?</h3>
                                <p style={{ marginBottom: 20, color: 'var(--text-light)' }}>Our technical team is available on WhatsApp for immediate assistance.</p>
                                <Link href="https://wa.me/966507516840" className="btn btn-primary" style={{ width: '100%' }}>
                                    Chat Now
                                </Link>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className={styles.formCard}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: 24 }}>Send an Inquiry</h2>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
