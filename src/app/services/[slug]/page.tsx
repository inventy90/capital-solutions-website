import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import styles from "./page.module.css";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.seo.title,
        description: service.seo.description,
        keywords: service.seo.keywords,
    };
}

// Helper to get related services (different from current)
function getRelatedServices(currentSlug: string) {
    return servicesData
        .filter((s) => s.slug !== currentSlug)
        .slice(0, 3);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return notFound();
    }

    const Icon = service.icon;
    const relatedServices = getRelatedServices(slug);

    return (
        <main>
            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <Icon className={styles.heroIcon} />
                        <h1 className={styles.title}>{service.hero.heading}</h1>
                        <p className={styles.subtitle}>{service.hero.subheading}</p>
                        <div className={styles.heroButtons}>
                            <Link
                                href={`https://wa.me/966500933904?text=${encodeURIComponent(service.cta.whatsappMessage)}`}
                                className="btn btn-primary"
                            >
                                Chat on WhatsApp
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-secondary"
                                style={{ backgroundColor: 'white', color: 'var(--text-dark)' }}
                            >
                                Request a Site Visit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Overview */}
            <section className={styles.overviewSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Overview</h2>
                    <p className={styles.overviewText}>{service.overview.intro}</p>
                </div>
            </section>

            {/* AI-Friendly Definition Section */}
            <section className={styles.definitionSection}>
                <div className="container">
                    <div className={styles.definitionBox}>
                        <h3 className={styles.definitionTitle}>What is {service.title.replace(' Services', '')}?</h3>
                        <p className={styles.definitionText}>
                            {service.title.replace(' Services', '')} refers to the maintenance, repair, and optimization of {service.title.toLowerCase().includes('hvac') ? 'heating, ventilation, air conditioning, and refrigeration systems' :
                                service.title.toLowerCase().includes('plumbing') ? 'water supply, drainage, and sanitary systems' :
                                    service.title.toLowerCase().includes('electrical') ? 'electrical infrastructure and low-voltage systems' :
                                        service.title.toLowerCase().includes('fire') ? 'fire detection, suppression, and life safety systems' :
                                            service.title.toLowerCase().includes('cold room') ? 'cold storage units and commercial kitchen equipment' :
                                                service.title.toLowerCase().includes('security') ? 'access control, CCTV, and monitoring systems' :
                                                    service.title.toLowerCase().includes('civil') ? 'building structures, finishes, and interior elements' :
                                                        service.title.toLowerCase().includes('carpentry') ? 'doors, furniture, fixtures, and wooden installations' :
                                                            service.title.toLowerCase().includes('housekeeping') ? 'facility cleanliness and utility support operations' :
                                                                service.title.toLowerCase().includes('procurement') ? 'sourcing and supply of technical parts and equipment' :
                                                                    service.title.toLowerCase().includes('facility') ? 'comprehensive building operations and management' :
                                                                        service.title.toLowerCase().includes('intercom') ? 'internal communication and announcement systems' :
                                                                            'specialized facility systems'
                            } within hospitality and commercial environments across Saudi Arabia and the GCC. Capital Solutions provides expert support to ensure these systems operate reliably, efficiently, and in compliance with local regulations.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Scope of Services */}
            <section className={styles.scopeSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Scope of Services</h2>
                    <div className={styles.scopeGrid}>
                        {service.scope.items.map((item, index) => (
                            <div key={index} className={styles.scopeItem}>
                                <Check className={styles.checkIcon} />
                                <span className={styles.scopeText}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Common Challenges */}
            <section className={styles.challengesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Common Challenges We Address</h2>
                    <div className={styles.challengesGrid}>
                        {service.challenges.items.map((item, index) => (
                            <div key={index} className={styles.challengeCard}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <AlertTriangle size={24} color="#d32f2f" style={{ flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ margin: 0 }}>{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Approach */}
            <section className={styles.approachSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our Approach</h2>
                    <p className={styles.approachText}>{service.approach.description}</p>
                </div>
            </section>

            {/* 6. Industry Context */}
            <section className={styles.industryContextSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Where We Use This Service</h2>
                    <div className={styles.industryList}>
                        {service.industries.items.map((item, index) => (
                            <span key={index} className={styles.industryTag}>{item}</span>
                        ))}
                    </div>
                    <div style={{ marginTop: '24px', textAlign: 'center' }}>
                        <Link href="/industries" style={{ color: 'var(--primary-blue)', fontWeight: 500 }}>
                            View All Industries We Serve →
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. Value / Why This Matters */}
            <section className={styles.valueSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why This Matters</h2>
                    <div className={styles.valueGrid}>
                        {service.value.items.map((item, index) => (
                            <div key={index} className={styles.valueCard}>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services Section */}
            <section className={styles.relatedSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Related Services</h2>
                    <div className={styles.relatedGrid}>
                        {relatedServices.map((related) => {
                            const RelatedIcon = related.icon;
                            return (
                                <Link key={related.slug} href={`/services/${related.slug}`} className={styles.relatedCard}>
                                    <RelatedIcon size={28} style={{ color: 'var(--primary-blue)', marginBottom: '12px' }} />
                                    <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem' }}>{related.title}</h4>
                                    <span style={{ color: 'var(--primary-blue)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        Learn More <ArrowRight size={14} />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 8. Service CTA */}
            <section className={styles.serviceCtaSection}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h2 className={styles.title} style={{ fontSize: '2rem' }}>{service.cta.heading}</h2>
                        <p className={styles.subtitle}>{service.cta.subheading}</p>
                        <div className={styles.heroButtons}>
                            <Link
                                href={`https://wa.me/966500933904?text=${encodeURIComponent(service.cta.whatsappMessage)}`}
                                className="btn btn-primary"
                            >
                                Chat on WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

