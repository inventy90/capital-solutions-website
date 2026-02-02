import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckIcon,
  Fan,
  Snowflake,
  Droplets,
  Zap,
  Phone,
  ShieldCheck,
  Flame,
  Building2,
  Hammer,
  Sparkles,
  Package,
  Settings,
  History,
  ConciergeBell,
  ClipboardCheck,
  UserCheck,

  Handshake,
  Hotel,
  ShoppingBag,
  Utensils
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          <iframe
            src="https://www.youtube.com/embed/12if2u5yW9I?autoplay=1&mute=1&controls=0&loop=1&playlist=12if2u5yW9I&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
            title="Hero Background Video"
            className={styles.videoFrame}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        <div className={styles.overlay}></div>

        <div className={`${styles.heroContent} container animate-fade-in`}>
          <h1 className={styles.heroTitle}>
            Built on Experience. Trusted for Performance.
          </h1>
          <p className={styles.heroSubtitle}>
            Over 35 years of operational experience delivering preventive, corrective, and emergency maintenance support.
          </p>
          <div className={styles.heroButtons}>
            <Link href="https://wa.me/966500933904" className="btn btn-primary">
              Chat on WhatsApp
            </Link>
            <Link href="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--text-dark)' }}>
              Request a Site Visit
            </Link>
          </div>
          <Link href="tel:+966500933904" className={styles.emergencyButton}>
            <span className={styles.pulse}></span>
            Emergency Response: +966 50 093 3904 (24/7)
          </Link>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={styles.trustedBy}>
        <div className="container">
          <div className={styles.trustedGrid}>
            <div className={styles.trustedContent}>
              <h2>Trusted by leading hospitality and commercial organizations.</h2>
              <p>
                We have built long-standing partnerships with some of the most prominent brands
                in the region, delivering consistent technical excellence and reliable support
                across their entire facility portfolios.
              </p>
            </div>
            <div className={styles.trustedLogos}>
              <div className={styles.logoBox}>
                <Image src="/clients/radissonblu.png" alt="Radisson Blu" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/carlton.png" alt="Carlton Al Moaibed Hotel" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/centro.png" alt="Centro Corniche Khobar" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/eurovillage.png" alt="Eurovillage Compound" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/dalarabia.png" alt="Dal Arabia" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/memar.jpg" alt="Memar" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/nofa.png" alt="Nofa Riyadh" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/parkinn.png" alt="Park Inn by Radisson" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/dsv.png" alt="DSV" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/plazapremium.jpg" alt="Plaza Premium Lounge" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/zamil.png" alt="Zamil Shipyards" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.logoBox}>
                <Image src="/clients/voco.png" alt="Voco IHG Hotel" width={140} height={60} style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderHeader}>
            <h2>Built on Real Operational Experience</h2>
          </div>
          <div className={styles.founderGrid}>
            <div className={styles.founderLeft}>
              <div className={styles.founderImageWrapper}>
                <Image
                  src="/founder-faisal.jpg"
                  alt="Mohamed Faisal - Founder of Capital Solutions"
                  width={853}
                  height={1024}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className={styles.founderQuote}>
                <blockquote>"Experience teaches you that consistency matters more than quick fixes. - Faisal"</blockquote>
              </div>
            </div>
            <div className={styles.founderContent}>
              <div className={styles.founderSignature} style={{ marginBottom: '24px' }}>
                <span className={styles.founderName}>Mohamed Faisal</span>
                <span className={styles.founderTitle}>Founder & Managing Director</span>
                <span className={styles.founderCompany}>Capital Solutions</span>
              </div>
              <div className={styles.founderBio}>
                <p>
                  Mohamed Faisal brings over <strong>three decades of hands-on experience</strong> in
                  hospitality engineering and maintenance, having served as a <strong>Cluster Engineer
                    with Radisson Blu</strong> in the Eastern Province of Saudi Arabia. His career has
                  been shaped by the <strong>operational realities</strong> of high-stakes hotel
                  environments, where <strong>reliability, precision, and accountability</strong>
                  are critical to <strong>uninterrupted operations</strong>.
                </p>
                <p>
                  <strong>Capital Solutions</strong> was founded to extend these same <strong>disciplined,
                    professional maintenance standards</strong> to hospitality and commercial facilities
                  across the region. The company’s approach is rooted in <strong>structured processes,
                    team-based execution, and long-term partnerships</strong>—ensuring systems perform
                  consistently and operations remain fully supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutTextWrapper}>
            <h2 className={styles.sectionTitle}>About the Company</h2>
            <div className={styles.aboutDescription}>
              <p>
                Capital Solutions is a technical and maintenance services company operating in
                Saudi Arabia. We serve hospitality and commercial facilities with a dedicated
                focus on engineering, maintenance, and comprehensive operational support.
                Our foundation is built upon an operations-first mindset, ensuring that every
                service we provide is grounded in the practical realities of the facilities we maintain.
              </p>
              <p>
                Our approach is defined by reliability, discipline, and structured execution.
                We prioritize preventive maintenance and long-term thinking to address real
                operational needs rather than focusing on generic services. This commitment
                to professional standards ensures that we remain a dependable partner in
                supporting uninterrupted operations for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Operational Services We Provide</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Our services are structured around real operational requirements in hospitality and commercial facilities.
            </p>
          </div>
          <div className={styles.cardGrid}>

            {/* 1. HVAC */}
            {/* 1. HVAC */}
            <Link href="/services/hvac-cooling-refrigeration" className={styles.card}>
              <Fan className={styles.cardIcon} />
              <div className={styles.cardTitle}>HVAC, Cooling & Refrigeration</div>
              <p className={styles.cardText}>
                Preventive and corrective maintenance for HVAC and cooling systems in hospitality environments.
              </p>
            </Link>

            {/* 2. Cold Room */}
            {/* 2. Cold Room */}
            <Link href="/services/cold-room-kitchen-equipment" className={styles.card}>
              <Snowflake className={styles.cardIcon} />
              <div className={styles.cardTitle}>Cold Room & Kitchen Equipment</div>
              <p className={styles.cardText}>
                Maintenance and support for cold rooms, kitchens, and food & beverage equipment.
              </p>
            </Link>

            {/* 3. Plumbing */}
            {/* 3. Plumbing */}
            <Link href="/services/plumbing-water-systems" className={styles.card}>
              <Droplets className={styles.cardIcon} />
              <div className={styles.cardTitle}>Plumbing & Water Systems</div>
              <p className={styles.cardText}>
                Support for plumbing networks, water systems, and hot water supply.
              </p>
            </Link>

            {/* 4. Electrical */}
            {/* 4. Electrical */}
            <Link href="/services/electrical-elv-systems" className={styles.card}>
              <Zap className={styles.cardIcon} />
              <div className={styles.cardTitle}>Electrical & Low-Voltage Systems</div>
              <p className={styles.cardText}>
                Maintenance of electrical infrastructure and low-voltage systems.
              </p>
            </Link>

            {/* 5. Intercom */}
            {/* 5. Intercom */}
            <Link href="/services/intercom-communication-systems" className={styles.card}>
              <Phone className={styles.cardIcon} />
              <div className={styles.cardTitle}>Intercom & Communication</div>
              <p className={styles.cardText}>
                Installation and maintenance of intercom and communication systems.
              </p>
            </Link>

            {/* 6. Security */}
            {/* 6. Security */}
            <Link href="/services/security-access-control" className={styles.card}>
              <ShieldCheck className={styles.cardIcon} />
              <div className={styles.cardTitle}>Security & Access Control</div>
              <p className={styles.cardText}>
                Support for access control, monitoring, and security systems.
              </p>
            </Link>

            {/* 7. Fire Safety */}
            {/* 7. Fire Safety */}
            <Link href="/services/fire-life-safety" className={styles.card}>
              <Flame className={styles.cardIcon} />
              <div className={styles.cardTitle}>Fire & Life Safety Systems</div>
              <p className={styles.cardText}>
                Maintenance and compliance support for fire and life safety systems.
              </p>
            </Link>

            {/* 8. Civil */}
            {/* 8. Civil */}
            <Link href="/services/civil-structural-interior" className={styles.card}>
              <Building2 className={styles.cardIcon} />
              <div className={styles.cardTitle}>Civil, Structural & Interior</div>
              <p className={styles.cardText}>
                Ongoing maintenance of civil works, structures, and interiors.
              </p>
            </Link>

            {/* 9. Carpentry */}
            {/* 9. Carpentry */}
            <Link href="/services/carpentry-joinery" className={styles.card}>
              <Hammer className={styles.cardIcon} />
              <div className={styles.cardTitle}>Carpentry, Joinery & Fixtures</div>
              <p className={styles.cardText}>
                Repair and upkeep of doors, furniture, fittings, and fixtures.
              </p>
            </Link>

            {/* 10. Housekeeping */}
            {/* 10. Housekeeping */}
            <Link href="/services/housekeeping-utility" className={styles.card}>
              <Sparkles className={styles.cardIcon} />
              <div className={styles.cardTitle}>Housekeeping & Utility Support</div>
              <p className={styles.cardText}>
                Operational support services that assist day-to-day facility management.
              </p>
            </Link>

            {/* 11. Procurement */}
            {/* 11. Procurement */}
            <Link href="/services/procurement-supply" className={styles.card}>
              <Package className={styles.cardIcon} />
              <div className={styles.cardTitle}>Procurement & Technical Support</div>
              <p className={styles.cardText}>
                Procurement assistance and technical support for maintenance requirements.
              </p>
            </Link>

            {/* 12. Facility Management */}
            {/* 12. Facility Management */}
            <Link href="/services/facility-management-support" className={styles.card}>
              <Settings className={styles.cardIcon} />
              <div className={styles.cardTitle}>Facility Management Support</div>
              <p className={styles.cardText}>
                Comprehensive support to ensure smooth and uninterrupted facility operations.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Team & Capability Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className={styles.sectionTitle}>Experienced Teams. Reliable Execution.</h2>
            <p className={styles.teamIntro}>
              Our teams are built on a foundation of multidisciplinary technical expertise and
              an operations-driven culture. We don’t just deploy workers; we deploy valid
              technical capability managed by experienced supervisors who understand the
              critical nature of your facilities.
            </p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamImageWrapper}>
              <Image
                src="/team-v2.jpg"
                alt="Capital Solutions Technical Team"
                width={800}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div className={styles.teamContent}>
              <ul className={styles.teamList}>
                <li>
                  <CheckIcon className={styles.listIcon} />
                  <span>Multidisciplinary technical teams</span>
                </li>
                <li>
                  <CheckIcon className={styles.listIcon} />
                  <span>Engineers, supervisors, technicians, and support staff</span>
                </li>
                <li>
                  <CheckIcon className={styles.listIcon} />
                  <span>Deep experience in hospitality and commercial facilities</span>
                </li>
                <li>
                  <CheckIcon className={styles.listIcon} />
                  <span>Focus on safety, coordination, and accountability</span>
                </li>
                <li>
                  <CheckIcon className={styles.listIcon} />
                  <span>Team-based execution rather than individual dependency</span>
                </li>
              </ul>

              <div className={styles.teamHighlights}>
                <span className={styles.highlightBadge}>Hospitality-trained</span>
                <span className={styles.highlightBadge}>Dedicated Supervisors</span>
                <span className={styles.highlightBadge}>Safety Focused</span>
                <span className={styles.highlightBadge}>Preventive & Reactive</span>
                <span className={styles.highlightBadge}>Consistent Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Clients Trust Capital Solutions</h2>
          <div className={styles.trustGrid}>

            {/* 1. Experience */}
            <div className={styles.trustCard}>
              <History className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Decades of Operational Experience</h3>
                <p>Over three decades of hands-on experience in hospitality engineering and maintenance, grounded in real operational environments.</p>
              </div>
            </div>

            {/* 2. Hospitality */}
            <div className={styles.trustCard}>
              <ConciergeBell className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Hospitality-Driven Mindset</h3>
                <p>Our processes and response models are designed specifically for hospitality and commercial operations, where uptime is critical.</p>
              </div>
            </div>

            {/* 3. Structured */}
            <div className={styles.trustCard}>
              <ClipboardCheck className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Disciplined & Structured Execution</h3>
                <p>We operate through clear systems, preventive planning, and coordinated teams to ensure consistent and reliable service delivery.</p>
              </div>
            </div>

            {/* 4. Accountability */}
            <div className={styles.trustCard}>
              <UserCheck className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Clear Accountability and Response</h3>
                <p>Every task is handled with defined responsibility, timely response, and operational follow-through.</p>
              </div>
            </div>

            {/* 5. Partnership */}
            <div className={styles.trustCard}>
              <Handshake className={styles.trustIcon} />
              <div className={styles.trustContent}>
                <h3>Built for Long-Term Partnerships</h3>
                <p>We focus on sustainable maintenance solutions that support uninterrupted operations over the long term.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={styles.industrySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <div className={styles.industryGrid}>

            {/* 1. Hospitality */}
            <div className={styles.industryCard}>
              <div className={styles.industryHeader}>
                <Hotel className={styles.industryIcon} />
                <h3>Hospitality</h3>
              </div>
              <p>Technical and maintenance support for hotels, resorts, restaurants, and hospitality-driven environments where uptime and guest experience are critical.</p>
            </div>

            {/* 2. Commercial */}
            <div className={styles.industryCard}>
              <div className={styles.industryHeader}>
                <Building2 className={styles.industryIcon} />
                <h3>Commercial Facilities</h3>
              </div>
              <p>Maintenance and operational support for office buildings, mixed-use developments, and corporate facilities.</p>
            </div>

            {/* 3. Retail */}
            <div className={styles.industryCard}>
              <div className={styles.industryHeader}>
                <ShoppingBag className={styles.industryIcon} />
                <h3>Retail & Shopping Malls</h3>
              </div>
              <p>Support services for retail spaces and malls, focused on continuous operations and tenant coordination.</p>
            </div>

            {/* 4. Kitchens */}
            <div className={styles.industryCard}>
              <div className={styles.industryHeader}>
                <Utensils className={styles.industryIcon} />
                <h3>Industrial Kitchens & F&B</h3>
              </div>
              <p>Specialized maintenance support for commercial kitchens, food preparation areas, and cold storage environments.</p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Looking for Reliable Maintenance Support?</h2>
            <p className={styles.ctaSubtitle}>
              Our team is available to understand your requirements and support your facility operations.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="https://wa.me/966500933904" className="btn btn-primary">
                Chat on WhatsApp
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--text-dark)' }}>
                Request a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}


