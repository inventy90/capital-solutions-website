import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1 - Identity */}
                    <div className={styles.col}>
                        <h3 className={styles.logo}>Capital Solutions</h3>
                        <p className={styles.desc}>
                            Technical, maintenance, and operational support for hospitality and commercial facilities.
                        </p>
                        <p className={styles.region}>Saudi Arabia</p>
                    </div>

                    {/* Column 2 - Services (Group 1) */}
                    <div className={styles.col}>
                        <h4>Our Services</h4>
                        <Link href="/services/hvac-cooling-refrigeration">HVAC & Cooling</Link>
                        <Link href="/services/cold-room-kitchen-equipment">Cold Rooms & Kitchens</Link>
                        <Link href="/services/plumbing-water-systems">Plumbing & Water</Link>
                        <Link href="/services/electrical-elv-systems">Electrical & ELV</Link>
                        <Link href="/services/intercom-communication-systems">Intercoms & Comms</Link>
                        <Link href="/services/security-access-control">Security & Access</Link>
                    </div>

                    {/* Column 3 - Services (Group 2) */}
                    <div className={styles.col}>
                        <h4 style={{ visibility: 'hidden' }}>Support Services</h4>
                        <Link href="/services/fire-life-safety">Fire & Life Safety</Link>
                        <Link href="/services/civil-structural-interior">Civil & Interior</Link>
                        <Link href="/services/carpentry-joinery">Carpentry & Joinery</Link>
                        <Link href="/services/housekeeping-utility">Housekeeping Support</Link>
                        <Link href="/services/procurement-supply">Procurement & Supply</Link>
                        <Link href="/services/facility-management-support">Facility Management</Link>
                    </div>

                    {/* Column 4 - Quick Links & Contact */}
                    <div className={styles.col}>
                        <h4>Quick Links</h4>
                        <Link href="/why-us">Why Capital Solutions</Link>
                        <Link href="/industries">Industries We Serve</Link>
                        <Link href="/team">Our Team</Link>
                        <Link href="/insights">Insights</Link>
                        <Link href="/contact">Contact Us</Link>

                        <div style={{ marginTop: '24px' }}>
                            <Link href="https://wa.me/966507516840" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'white', display: 'block', marginBottom: '8px' }}>
                                WhatsApp: +966 50 751 6840
                            </Link>
                            <Link href="tel:+966567109170" style={{ fontWeight: 500, color: 'white', display: 'block', marginBottom: '8px' }}>
                                Contact: +966 56 710 9170
                            </Link>
                            <Link href="mailto:sales@capitalksa.com" style={{ display: 'block' }}>
                                sales@capitalksa.com
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Capital Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
