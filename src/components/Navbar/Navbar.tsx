import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo-wide.png"
                        alt="Capital Solutions"
                        width={220}
                        height={60}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/services" className={styles.navLink}>Services</Link>
                    <Link href="/industries" className={styles.navLink}>Industries</Link>
                    <Link href="/team" className={styles.navLink}>Our Team</Link>
                    <Link href="/why-us" className={styles.navLink}>Why Us</Link>
                    <Link href="/insights" className={styles.navLink}>Insights</Link>
                </nav>
                <Link href="/contact" className={`btn btn-primary ${styles.ctaButton}`}>
                    Contact Us
                </Link>
            </div>
        </header>
    );
}
