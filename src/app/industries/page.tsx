import styles from './page.module.css';
import { Metadata } from 'next';
import Link from 'next/link';
import { Hotel, Building2, ShoppingBag, Utensils, Check, ChevronDown, ChevronUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industries We Serve - Hotels, Restaurants & Commercial Facilities | Capital Solutions',
    description: 'Specialized maintenance and facility management for hospitality, commercial buildings, retail malls, and industrial kitchens across Saudi Arabia, UAE, Qatar, and the GCC region. 35+ years of experience.',
    keywords: ['hospitality maintenance GCC', 'hotel engineering services Saudi Arabia', 'commercial facility management UAE', 'industrial kitchen maintenance', 'mall maintenance services']
};

// Industry data with comprehensive details
const industriesData = [
    {
        id: 'hospitality',
        icon: Hotel,
        title: 'Hotels & Resorts',
        subtitle: '24/7 Guest Comfort & Operational Excellence',
        description: 'Hotels and resorts demand flawless operations around the clock. A single HVAC failure, hot water outage, or kitchen equipment breakdown can impact guest satisfaction, online reviews, and revenue. Our hospitality-first approach ensures invisible maintenance that keeps guests comfortable and operations running smoothly.',
        challenges: [
            'Guest rooms losing cooling during peak summer',
            'Hot water failures affecting multiple floors',
            'Kitchen equipment breakdowns during service hours',
            'Fire safety system compliance requirements',
            'Elevator and access system malfunctions'
        ],
        services: [
            { name: 'HVAC & Chiller Maintenance', link: '/services/hvac-cooling-refrigeration' },
            { name: 'Kitchen Equipment Repair', link: '/services/cold-room-kitchen-equipment' },
            { name: 'Plumbing & Hot Water Systems', link: '/services/plumbing-water-systems' },
            { name: 'Fire & Life Safety', link: '/services/fire-life-safety' },
            { name: 'Electrical Systems', link: '/services/electrical-elv-systems' }
        ],
        stats: [
            { value: '30+', label: 'Hotels Served' },
            { value: '24/7', label: 'Emergency Response' },
            { value: '<2hr', label: 'Response Time' }
        ]
    },
    {
        id: 'commercial',
        icon: Building2,
        title: 'Commercial Facilities',
        subtitle: 'Reliable Systems for Tenant Satisfaction',
        description: 'Office buildings, mixed-use developments, and commercial towers require consistent mechanical and electrical systems to maintain tenant satisfaction and regulatory compliance. Our structured maintenance programs ensure minimal disruption, energy efficiency, and full safety compliance.',
        challenges: [
            'HVAC inconsistencies affecting different floors',
            'Electrical system overloads and failures',
            'Fire alarm system false triggers',
            'Access control and security issues',
            'Plumbing emergencies in multi-tenant spaces'
        ],
        services: [
            { name: 'HVAC & Climate Control', link: '/services/hvac-cooling-refrigeration' },
            { name: 'Electrical & ELV Systems', link: '/services/electrical-elv-systems' },
            { name: 'Security & Access Control', link: '/services/security-access-control' },
            { name: 'Fire Safety Systems', link: '/services/fire-life-safety' },
            { name: 'Facility Management', link: '/services/facility-management-support' }
        ],
        stats: [
            { value: '500K+', label: 'Sq.m Managed' },
            { value: '99.5%', label: 'Uptime' },
            { value: 'AMC', label: 'Contracts' }
        ]
    },
    {
        id: 'retail',
        icon: ShoppingBag,
        title: 'Retail & Shopping Malls',
        subtitle: 'Perfect Environments for High Footfall',
        description: 'Shopping malls and retail spaces demand perfect lighting, consistent cooling, and flawless aesthetics at all times. Any visible maintenance issue impacts customer experience and tenant confidence. We provide after-hours maintenance to ensure zero disruption during operating hours.',
        challenges: [
            'Cooling failures during peak shopping hours',
            'Lighting and electrical issues in common areas',
            'Escalator and elevator malfunctions',
            'Fire safety compliance across large spaces',
            'Washroom and sanitary system maintenance'
        ],
        services: [
            { name: 'HVAC & Refrigeration', link: '/services/hvac-cooling-refrigeration' },
            { name: 'Electrical Systems', link: '/services/electrical-elv-systems' },
            { name: 'Civil & Interior Works', link: '/services/civil-structural-interior' },
            { name: 'Fire Safety', link: '/services/fire-life-safety' },
            { name: 'Housekeeping Support', link: '/services/housekeeping-utility' }
        ],
        stats: [
            { value: 'After-Hours', label: 'Maintenance' },
            { value: '0', label: 'Disruptions' },
            { value: 'Daily', label: 'Inspections' }
        ]
    },
    {
        id: 'kitchens',
        icon: Utensils,
        title: 'Industrial Kitchens & F&B',
        subtitle: 'Zero Downtime for Food Operations',
        description: 'Industrial kitchens, central production units, and food service operations cannot afford equipment downtime. Cold room failures mean spoiled inventory, and cooking equipment breakdowns halt production. Our specialized technicians understand the urgency and hygiene requirements of food operations.',
        challenges: [
            'Cold room temperature fluctuations',
            'Cooking equipment failures during service',
            'Ventilation and exhaust system issues',
            'Grease trap and drainage blockages',
            'Hygiene and compliance requirements'
        ],
        services: [
            { name: 'Cold Room Maintenance', link: '/services/cold-room-kitchen-equipment' },
            { name: 'HVAC & Ventilation', link: '/services/hvac-cooling-refrigeration' },
            { name: 'Plumbing & Drainage', link: '/services/plumbing-water-systems' },
            { name: 'Electrical Systems', link: '/services/electrical-elv-systems' },
            { name: 'Fire Safety', link: '/services/fire-life-safety' }
        ],
        stats: [
            { value: '100+', label: 'Kitchens Served' },
            { value: '<1hr', label: 'Emergency Response' },
            { value: '0', label: 'Inventory Loss' }
        ]
    }
];

// FAQ data for AI discoverability
const faqData = [
    {
        question: 'What industries does Capital Solutions serve?',
        answer: 'Capital Solutions provides maintenance and facility management services for four primary sectors: Hotels & Resorts, Commercial Facilities, Retail & Shopping Malls, and Industrial Kitchens & F&B operations. We operate across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.'
    },
    {
        question: 'Do you provide 24/7 emergency maintenance?',
        answer: 'Yes, we provide round-the-clock emergency support for all our contracted clients. Our average response time is under 2 hours for critical issues in hospitality and food service environments.'
    },
    {
        question: 'What is your experience in the hospitality industry?',
        answer: 'Our founder, Mohamed Faisal, has over 35 years of experience in hospitality engineering, including leadership roles at Radisson Blu properties in Saudi Arabia. This hospitality-first mindset ensures we understand the importance of guest comfort and invisible maintenance.'
    },
    {
        question: 'Do you offer Annual Maintenance Contracts (AMC)?',
        answer: 'Yes, we offer comprehensive Annual Maintenance Contracts that include preventive maintenance, emergency support, and priority response. AMC clients receive scheduled inspections, documented reporting, and guaranteed response times.'
    },
    {
        question: 'What geographic areas do you serve?',
        answer: 'Capital Solutions operates across the GCC region, including Saudi Arabia (with headquarters in Riyadh), United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman.'
    }
];

export default function IndustriesPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Industries We Serve</h1>
                    <p className={styles.heroSubtitle}>
                        Tailored maintenance strategies for sectors that cannot afford downtime.
                        Over 35 years of specialized experience across hospitality, commercial, retail, and food service operations in the GCC.
                    </p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className={styles.industriesSection}>
                <div className="container">
                    {industriesData.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div key={industry.id} className={styles.industryBlock} id={industry.id}>
                                <div className={styles.industryHeader}>
                                    <Icon className={styles.industryIcon} />
                                    <div>
                                        <h2 className={styles.industryTitle}>{industry.title}</h2>
                                        <p className={styles.industrySubtitle}>{industry.subtitle}</p>
                                    </div>
                                </div>

                                <p className={styles.industryDescription}>{industry.description}</p>

                                <div className={styles.industryContent}>
                                    {/* Challenges Column */}
                                    <div className={styles.challengesColumn}>
                                        <h3 className={styles.columnTitle}>Common Challenges</h3>
                                        <ul className={styles.challengesList}>
                                            {industry.challenges.map((challenge, idx) => (
                                                <li key={idx}>{challenge}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Services Column */}
                                    <div className={styles.servicesColumn}>
                                        <h3 className={styles.columnTitle}>How We Support</h3>
                                        <ul className={styles.servicesList}>
                                            {industry.services.map((service, idx) => (
                                                <li key={idx}>
                                                    <Check size={16} className={styles.checkIcon} />
                                                    <Link href={service.link}>{service.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Stats Column */}
                                    <div className={styles.statsColumn}>
                                        {industry.stats.map((stat, idx) => (
                                            <div key={idx} className={styles.statItem}>
                                                <span className={styles.statValue}>{stat.value}</span>
                                                <span className={styles.statLabel}>{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <p className={styles.sectionSubtitle}>Common questions about our industry expertise and services</p>

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
                    <h2 className={styles.ctaTitle}>Looking for Industry-Specific Maintenance Support?</h2>
                    <p className={styles.ctaText}>
                        Tell us about your facility and operational requirements. Our team will prepare a tailored maintenance proposal.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="https://wa.me/966500933904?text=Hi%2C%20I%27m%20interested%20in%20discussing%20maintenance%20support%20for%20my%20facility." className="btn btn-primary">
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
