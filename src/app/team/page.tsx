import styles from './page.module.css';
import { Metadata } from 'next';
import { User, ShieldCheck, Cpu, Settings } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Our Leadership Team | Capital Solutions',
    description: 'Meet the experts leading Capital Solutions. Our team brings decades of experience in hospitality, engineering, and facility management to the GCC region.',
    keywords: ['Capital Solutions leadership', 'hospitality engineering experts Saudi Arabia', 'facility management team GCC']
};

const TEAM_MEMBERS = [
    {
        name: 'Ayman',
        role: 'Operations Leadership',
        icon: User,
        expertise: ['Operational Strategy', 'Project Management', 'Client Relations'],
        experience: 'Extensive background in supervising large-scale facility operations with a focus on efficiency and service quality.'
    },
    {
        name: 'Mohamed Faisal',
        role: 'Co-Founder & Managing Director',
        icon: ShieldCheck,
        image: '/founder-faisal.jpg',
        expertise: ['Hospitality Engineering', 'Facility Management', 'Risk Assessment'],
        experience: 'Over 35 years of experience, including 20+ years as Director of Engineering at Radisson Blu properties.'
    },
    {
        name: 'Shine Sadanandan',
        role: 'Electronic Engineer',
        icon: Cpu,
        expertise: ['ELV Systems', 'Communication Infrastructure', 'Automation'],
        experience: 'Specialized in low-voltage systems and communication technology, ensuring modern facility connectivity.'
    },
    {
        name: 'Muhammed Shanoob',
        role: 'Mechanical Engineer',
        icon: Settings,
        expertise: ['HVAC Systems', 'Refrigeration', 'Mechanical Infrastructure'],
        experience: 'Expert in mechanical systems design and maintenance, focusing on energy efficiency and system longevity.'
    }
];

export default function TeamPage() {
    return (
        <main>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Leadership</h1>
                    <p className={styles.subtitle}>Driven by decades of operational expertise and a shared commitment to hospitality excellence.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {TEAM_MEMBERS.map((member, index) => {
                            const Icon = member.icon;
                            return (
                                <div key={index} className={styles.card}>
                                    <div className={styles.imagePlaceholder}>
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={120}
                                                height={120}
                                            />
                                        ) : (
                                            <Icon size={48} />
                                        )}
                                    </div>
                                    <h2 className={styles.memberName}>{member.name}</h2>
                                    <span className={styles.memberRole}>{member.role}</span>

                                    <div className={styles.expertise}>
                                        <div className={styles.expertiseTitle}>Key Expertise</div>
                                        <ul className={styles.expertiseList}>
                                            {member.expertise.map((item, idx) => (
                                                <li key={idx} className={styles.expertiseItem}>
                                                    <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--primary-blue)' }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.experience}>
                                        <p className={styles.experienceText}>{member.experience}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-subtle)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: 24 }}>Ready to work with our experts?</h2>
                    <p style={{ color: 'var(--text-light)', marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
                        Our leadership team is directly involved in quality assurance and client success across all our projects.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a href="https://wa.me/966507516840" className="btn btn-primary">Connect on WhatsApp</a>
                        <a href="/contact" className="btn btn-secondary">Send an Inquiry</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
