'use client';

import { useState, useRef } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeLoadedCount, setIframeLoadedCount] = useState(0);

    const handleIframeLoad = () => {
        setIframeLoadedCount(prev => prev + 1);
        // The first load is the initial mount. 
        // The second load is after the form submission redirects.
        if (iframeLoadedCount >= 1) {
            setSubmitted(true);
        }
    };

    const handleSubmit = () => {
        // We could also set a small timeout here as a fallback
        // but iframe onLoad is more precise.
    };

    return (
        <div className={styles.contactFormWrapper}>
            {submitted && (
                <div className={styles.submitted}>
                    <p style={{ marginBottom: 32, fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: 500, lineHeight: 1.6 }}>
                        Thank you. Your inquiry has been received. Our team will contact you shortly.
                    </p>
                    <div className={styles.whatsappSuggestion}>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: 16 }}>
                            Need an immediate response?
                        </p>
                        <a
                            href="https://wa.me/966500933904?text=Hi%2C%20I%20just%20submitted%20an%20inquiry%20from%20your%20website%20and%20need%20urgent%20assistance."
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            )}

            {/* Hidden iframe to handle Google Form submission without page reload */}
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                ref={iframeRef}
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
            ></iframe>

            <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfUCqPA0JdD8nMmv_SJKC-nfmY8kV70liTdiDMNa2wXn0OPzg/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className={`${styles.customForm} ${submitted ? styles.hidden : ''}`}
            >
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="entry.2005620554"
                        required
                        className={styles.input}
                        placeholder="e.g. Mohamed Faisal"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.inputLabel}>Company Name</label>
                    <input
                        type="text"
                        id="company"
                        name="entry.1045781291"
                        required
                        className={styles.input}
                        placeholder="e.g. Capital Solutions"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.inputLabel}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="entry.1166974658"
                        required
                        className={styles.input}
                        placeholder="e.g. +966 50 000 0000"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="requirement" className={styles.inputLabel}>Requirement</label>
                    <input
                        type="text"
                        id="requirement"
                        name="entry.1065046570"
                        required
                        className={styles.input}
                        placeholder="e.g. Technical Audit or Cold Room Repair"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.inputLabel}>Message (Optional)</label>
                    <textarea
                        id="message"
                        name="entry.839337160"
                        className={styles.textarea}
                        placeholder="Tell us more about your facility requirements..."
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', marginTop: '12px', fontWeight: 600 }}>
                    Submit Inquiry
                </button>

                <p className={styles.formNote}>
                    Submissions are processed within 24 hours. For urgent technical emergencies, please use the WhatsApp button below.
                </p>
            </form>
        </div>
    );
}

