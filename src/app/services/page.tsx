import styles from './page.module.css';
import Link from 'next/link';
import { Metadata } from 'next';
import { servicesData } from '@/data/servicesData';

export const metadata: Metadata = {
    title: 'Maintenance Services for Hotels & Commercial Facilities | Capital Solutions',
    description: 'Comprehensive HVAC, kitchen equipment, cold room, electrical, and facility maintenance services for hotels, restaurants, and commercial buildings across Saudi Arabia and GCC.',
    keywords: ['facility maintenance services GCC', 'hotel maintenance Saudi Arabia', 'HVAC maintenance hospitality', 'kitchen equipment repair', 'cold room maintenance']
};

// FAQ Data for AI discoverability
const faqData = [
    {
        question: 'What maintenance services does Capital Solutions offer?',
        answer: 'We offer 12 core services: HVAC & Refrigeration, Cold Room & Kitchen Equipment, Plumbing & Water Systems, Electrical & ELV Systems, Intercom & Communication, Security & Access Control, Fire & Life Safety, Civil & Interior Works, Carpentry & Joinery, Housekeeping Support, Procurement & Supply, and Facility Management.'
    },
    {
        question: 'Do you offer preventive maintenance contracts?',
        answer: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) that include scheduled preventive maintenance, emergency support, priority response times, documentation, and monthly reporting.'
    },
    {
        question: 'What is the difference between preventive and corrective maintenance?',
        answer: 'Preventive maintenance is scheduled servicing to prevent equipment failures before they occur. Corrective maintenance is repair work done after a failure. We prioritize preventive maintenance to minimize emergency repairs and extend equipment life.'
    },
    {
        question: 'Can you handle emergency repairs outside business hours?',
        answer: 'Absolutely. We provide 24/7 emergency support for contracted clients. Our average response time is under 2 hours for critical issues at hospitality and food service facilities.'
    },
    {
        question: 'Do you service equipment from all manufacturers?',
        answer: 'Yes, our technicians are trained on equipment from major manufacturers including Carrier, Daikin, Trane, Siemens, Schneider, Hager, and commercial kitchen brands like Rational, True, and Hobart.'
    }
];

export default function ServicesPage() {
    return (
        <main>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Services</h1>
                    <p className={styles.subtitle}>
                        We don't just offer generic maintenance; we provide task-based solutions designed around your real operational needs.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.serviceGrid}>
                        {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link key={service.slug} href={`/services/${service.slug}`} className={styles.serviceCard}>
                                    <div className={styles.iconWrapper}>
                                        <Icon className={styles.icon} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDesc}>{service.overview.intro.substring(0, 100)}...</p>
                                    <span className={styles.learnMore}>Read More &rarr;</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <p className={styles.sectionSubtitle}>Common questions about our maintenance services</p>

                    <div className={styles.faqGrid}>
                        {faqData.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Need a Custom Maintenance Solution?</h2>
                    <p className={styles.ctaText}>
                        Let us know your facility type and requirements. We'll prepare a tailored proposal.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="https://wa.me/966507516840?text=Hi%2C%20I%27d%20like%20to%20discuss%20maintenance%20services%20for%20my%20facility." className="btn btn-primary">
                            Chat on WhatsApp
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Request a Site Visit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

