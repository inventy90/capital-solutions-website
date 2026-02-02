import styles from './page.module.css';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { History, ConciergeBell, ClipboardCheck, UserCheck, Handshake, Check, Award, Shield, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why Capital Solutions - 35 Years of Hospitality Maintenance Excellence in GCC',
    description: 'With over 35 years of experience in Saudi Arabia and the GCC, Capital Solutions delivers reliable, accountable, and expert facility maintenance for hotels and commercial properties.',
    keywords: ['experienced facility management company GCC', 'trusted maintenance partner Saudi Arabia', 'hospitality engineering expertise', '35 years experience']
};

// 5 Pillars of Trust
const pillarsData = [
    {
        icon: History,
        title: '35+ Years Experience',
        description: 'Over three decades of hands-on facility management across hospitality and commercial sectors in Saudi Arabia and the GCC.'
    },
    {
        icon: ConciergeBell,
        title: 'Hospitality-First Mindset',
        description: 'We understand that guest comfort and invisible operations are paramount. Our teams work quietly and efficiently.'
    },
    {
        icon: ClipboardCheck,
        title: 'Structured Execution',
        description: 'Every task is documented, scheduled, and tracked. We bring process discipline to maintenance operations.'
    },
    {
        icon: UserCheck,
        title: 'Accountability',
        description: 'Clear ownership, transparent reporting, and direct communication. No finger-pointing, just solutions.'
    },
    {
        icon: Handshake,
        title: 'Partnership Approach',
        description: 'We see ourselves as an extension of your operations team, not just a vendor. Your success is our success.'
    }
];

// Our Process
const processSteps = [
    {
        number: '01',
        title: 'Site Assessment',
        description: 'We begin with a thorough inspection of your facility, documenting equipment condition, maintenance history, and operational requirements.'
    },
    {
        number: '02',
        title: 'Tailored Plan',
        description: 'Based on the assessment, we create a customized maintenance schedule that addresses your specific needs, budget, and operational constraints.'
    },
    {
        number: '03',
        title: 'Preventive Maintenance',
        description: 'Regular scheduled maintenance to catch issues before they become emergencies. We reduce downtime and extend asset life.'
    },
    {
        number: '04',
        title: 'Rapid Response',
        description: 'When emergencies happen, our teams respond quickly. For contracted clients, we guarantee response times under 2 hours.'
    },
    {
        number: '05',
        title: 'Reporting & Optimization',
        description: 'Monthly reports with work completed, issues identified, and recommendations for improving efficiency and reducing costs.'
    }
];

// Key Differentiators
const differentiators = [
    {
        icon: Award,
        title: 'Radisson Blu Leadership',
        description: 'Our founder spent 30+ years leading engineering operations at Radisson Blu properties, bringing 5-star standards to every project.'
    },
    {
        icon: Shield,
        title: 'Safety First',
        description: 'Zero compromise on safety. Our teams are trained in proper protocols, PPE usage, and emergency procedures.'
    },
    {
        icon: Users,
        title: 'Multi-Skilled Teams',
        description: 'HVAC, electrical, plumbing, fire safety, kitchen equipment—our diversified teams handle it all, reducing coordination overhead.'
    },
    {
        icon: Clock,
        title: '24/7 Availability',
        description: "Emergencies don't follow business hours. Our teams are available around the clock for critical support."
    }
];

// FAQ Data
const faqData = [
    {
        question: 'How long has Capital Solutions been in operation?',
        answer: 'Capital Solutions was founded by Mohamed Faisal, who brings over 35 years of hands-on experience in hospitality and facility management, including 30+ years in senior engineering roles at Radisson Blu properties in Saudi Arabia.'
    },
    {
        question: 'What makes Capital Solutions different from other maintenance companies?',
        answer: 'Our hospitality-first mindset sets us apart. We understand that maintenance must be invisible to guests. Combined with structured processes, documented reporting, and a genuine partnership approach, we deliver reliability that generic maintenance companies cannot match.'
    },
    {
        question: 'Do you offer guarantees on your work?',
        answer: 'Yes, all our work is backed by a satisfaction guarantee. For AMC clients, we also provide guaranteed response times (under 2 hours for critical issues) and documented preventive maintenance schedules.'
    },
    {
        question: 'Can you handle multiple facility types?',
        answer: 'Absolutely. Our teams have experience across hotels, commercial towers, shopping malls, restaurants, and industrial kitchens. We tailor our approach to each facility type while maintaining consistent quality standards.'
    },
    {
        question: 'What geographic areas do you cover?',
        answer: 'We operate across the GCC region including Saudi Arabia (headquarters in Riyadh), UAE, Qatar, Kuwait, Bahrain, and Oman. For large projects, we can mobilize teams across the region.'
    }
];

export default function WhyUsPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Why Capital Solutions?</h1>
                    <p className={styles.heroSubtitle}>
                        35 years of experience. A hospitality-first mindset. Structured execution.
                        We don't just fix problems—we become your long-term maintenance partner.
                    </p>
                </div>
            </section>

            {/* Stats Banner */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>35+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Projects Completed</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>24/7</span>
                            <span className={styles.statLabel}>Emergency Support</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>6</span>
                            <span className={styles.statLabel}>GCC Countries</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Story Section */}
            <section className={styles.founderSection}>
                <div className="container">
                    <div className={styles.founderGrid}>
                        <div className={styles.founderImageWrapper}>
                            <Image
                                src="/founder-faisal.jpg"
                                alt="Mohamed Faisal - Founder of Capital Solutions"
                                width={400}
                                height={500}
                                className={styles.founderImage}
                            />
                        </div>
                        <div className={styles.founderContent}>
                            <h2 className={styles.sectionTitle}>A Lifetime of Hospitality Excellence</h2>
                            <p className={styles.founderText}>
                                <strong>Mohamed Faisal</strong>, Founder & Managing Director, brings over 35 years of dedicated experience
                                in hospitality and facility management. His career includes 30+ years in senior engineering leadership
                                roles at Radisson Blu properties in Saudi Arabia, where he managed everything from HVAC systems to
                                complete kitchen renovations.
                            </p>
                            <p className={styles.founderText}>
                                This deep hospitality background means we understand what it takes to keep a property running flawlessly.
                                We know that a single equipment failure can impact guest reviews, restaurant service, or tenant satisfaction.
                                Our approach is built on prevention, rapid response, and absolute accountability.
                            </p>
                            <div className={styles.founderQuote}>
                                <blockquote>
                                    "Maintenance should be invisible to guests. When done right, nobody notices us—and that's exactly the point."
                                </blockquote>
                                <cite>— Mohamed Faisal, Founder</cite>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 Pillars of Trust */}
            <section className={styles.pillarsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Our 5 Pillars of Trust</h2>
                    <p className={styles.sectionSubtitle}>The principles that guide every project we undertake</p>

                    <div className={styles.pillarsGrid}>
                        {pillarsData.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={index} className={styles.pillarCard}>
                                    <Icon className={styles.pillarIcon} />
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                    <p className={styles.pillarText}>{pillar.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className={styles.processSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>How We Work</h2>
                    <p className={styles.sectionSubtitle}>Our structured approach ensures consistent, reliable outcomes</p>

                    <div className={styles.processTimeline}>
                        {processSteps.map((step, index) => (
                            <div key={index} className={styles.processStep}>
                                <span className={styles.processNumber}>{step.number}</span>
                                <div className={styles.processContent}>
                                    <h3 className={styles.processTitle}>{step.title}</h3>
                                    <p className={styles.processText}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className={styles.differentiatorsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>

                    <div className={styles.differentiatorsGrid}>
                        {differentiators.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className={styles.differentiatorCard}>
                                    <Icon className={styles.differentiatorIcon} />
                                    <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                                    <p className={styles.differentiatorText}>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <p className={styles.sectionSubtitle}>Common questions about working with Capital Solutions</p>

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
                    <h2 className={styles.ctaTitle}>Ready to Experience the Difference?</h2>
                    <p className={styles.ctaText}>
                        Let's discuss your facility's needs. Whether you're looking for an AMC, emergency support, or a one-time project, we're here to help.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="https://wa.me/966507516840?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Capital%20Solutions." className="btn btn-primary">
                            Chat on WhatsApp
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
