"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo-main.png"
                            alt="Capital Solutions"
                            width={160}
                            height={40}
                            className={styles.logoImage}
                            priority
                        />
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop and Mobile Navigation */}
                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
                    <Link href="/services" className={styles.navLink} onClick={closeMenu}>Services</Link>
                    <Link href="/industries" className={styles.navLink} onClick={closeMenu}>Industries</Link>
                    <Link href="/team" className={styles.navLink} onClick={closeMenu}>Our Team</Link>
                    <Link href="/why-us" className={styles.navLink} onClick={closeMenu}>Why Us</Link>
                    <Link href="/insights" className={styles.navLink} onClick={closeMenu}>Insights</Link>
                    <Link href="/contact" className={`${styles.navLink} ${styles.mobileCta}`} onClick={closeMenu}>
                        Contact Us
                    </Link>
                </nav>

                <Link href="/contact" className={`btn btn-primary ${styles.ctaButton}`}>
                    Contact Us
                </Link>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
        </header>
    );
}
