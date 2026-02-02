import {
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
    Settings
} from "lucide-react";

export interface ServiceData {
    slug: string;
    id: string;
    icon: any;
    title: string;
    hero: {
        heading: string;
        subheading: string;
    };
    overview: {
        intro: string;
    };
    scope: {
        items: string[];
    };
    challenges: {
        items: string[];
    };
    approach: {
        description: string;
    };
    industries: {
        items: string[];
    };
    value: {
        items: string[];
    };
    cta: {
        heading: string;
        subheading: string;
        whatsappMessage: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
}

export const servicesData: ServiceData[] = [
    {
        slug: "hvac-cooling-refrigeration",
        id: "hvac",
        icon: Fan,
        title: "HVAC, Cooling & Refrigeration Services",
        hero: {
            heading: "HVAC, Cooling & Refrigeration Services",
            subheading: "Comprehensive climate control solutions for hospitality and commercial environments."
        },
        overview: {
            intro: "Reliable climate control is the backbone of guest comfort and operational safety. Our HVAC and refrigeration services are designed to ensure consistent performance, energy efficiency, and rapid recovery from breakdowns, specifically tailored for high-demand environments in Saudi Arabia."
        },
        scope: {
            items: [
                "Preventive maintenance for chillers, AHUs, and FCUs",
                "Corrective repair for split and package units",
                "Refrigeration cycle analysis and gas charging",
                "Duct cleaning and air quality management",
                "Compressor overhaul and replacement",
                "Performance testing and energy optimization"
            ]
        },
        challenges: {
            items: [
                "Unexpected cooling failures during peak summer months",
                "High energy costs due to inefficient systems",
                "Uneven cooling affecting guest comfort",
                "Frequent compressor burnouts due to poor maintenance",
                "Air quality issues leading to health concerns"
            ]
        },
        approach: {
            description: "We adopt a predictive maintenance strategy, monitoring system parameters to detect issues before they cause downtime. Our teams are trained to handle complex industrial systems and ensure that repairs address root causes, not just symptoms."
        },
        industries: {
            items: ["Hotels & Resorts", "Commercial Towers", "Shopping Malls", "Industrial Facilities"]
        },
        value: {
            items: [
                "Reduced energy consumption and utility bills",
                "Extended asset lifespan for expensive chillers",
                "Consistent guest comfort and satisfaction",
                "Lower risk of sudden catastrophic failure"
            ]
        },
        cta: {
            heading: "Need Support with HVAC Systems?",
            subheading: "Ensure your cooling infrastructure is ready for the heat.",
            whatsappMessage: "Hello, I’m looking for support with HVAC, Cooling & Refrigeration Services for our facility. Please contact me."
        },
        seo: {
            title: "HVAC & Refrigeration Maintenance Services Saudi Arabia | Capital Solutions",
            description: "Expert HVAC, cooling, and refrigeration maintenance for hospitality and commercial facilities in Saudi Arabia. Preventive and corrective support.",
            keywords: ["HVAC maintenance Saudi Arabia", "Chiller repair Dammam", "Commercial refrigeration services", "AC maintenance GCC", "Hospitality cooling solutions"]
        }
    },
    {
        slug: "cold-room-kitchen-equipment",
        id: "cold-room",
        icon: Snowflake,
        title: "Cold Room, Kitchen & F&B Equipment",
        hero: {
            heading: "Cold Room, Kitchen & F&B Equipment Services",
            subheading: "Critical support for commercial kitchens and food storage facilities."
        },
        overview: {
            intro: "In hospitality, a kitchen failure is a direct revenue loss. We provide specialized maintenance for cold rooms, freezers, and industrial cooking equipment, ensuring uninterrupted food service operations and strict adherence to food safety standards."
        },
        scope: {
            items: [
                "Maintenance of walk-in chillers and freezers",
                "Repair of industrial ovens, ranges, and fryers",
                "Calibration of temperature monitoring systems",
                "Compressor and evaporator coil cleaning",
                "Door seal and hygiene component replacement",
                "Emergency breakdown response for perishable stock"
            ]
        },
        challenges: {
            items: [
                "Temperature fluctuations spoiling inventory",
                "Equipment downtime during peak service hours",
                "Health and safety compliance violations",
                "Increased energy usage from leaking seals",
                "Unreliable thermostat readings"
            ]
        },
        approach: {
            description: "Our technicians understand the urgency of food service operations. We prioritize rapid response for cold storage failures and maintain a stock of critical spare parts to minimize downtime for essential kitchen assets."
        },
        industries: {
            items: ["Hotels & Resorts", "Restaurants & Cafes", "Catering Facilities", "Supermarkets"]
        },
        value: {
            items: [
                "Prevention of food spoilage and waste",
                "Compliance with HACCP and safety regulations",
                "Consistent food quality and service speed",
                "Protection of high-value kitchen investments"
            ]
        },
        cta: {
            heading: "Need Support with Kitchen Equipment?",
            subheading: "Keep your kitchen running without interruptions.",
            whatsappMessage: "Hello, I’m looking for support with Cold Room, Kitchen & F&B Equipment Services for our facility. Please contact me."
        },
        seo: {
            title: "Cold Room & Commercial Kitchen Maintenance Saudi Arabia",
            description: "Specialized maintenance for cold rooms, freezers, and industrial kitchen equipment in Saudi Arabia. Support for hotels and restaurants.",
            keywords: ["Cold room repair Saudi Arabia", "Commercial kitchen maintenance", "Industrial freezer repair", "HACCP compliance maintenance", "Restaurant equipment support"]
        }
    },
    {
        slug: "plumbing-water-systems",
        id: "plumbing",
        icon: Droplets,
        title: "Plumbing, Water Systems & Hot Water",
        hero: {
            heading: "Plumbing, Water Systems & Hot Water Services",
            subheading: "Ensuring reliable water supply and sanitation for large-scale facilities."
        },
        overview: {
            intro: "Water system integrity is fundamental to facility hygiene and operation. We manage complex plumbing networks, boilers, and filtration systems, ensuring consistent pressure, temperature, and quality while preventing leaks and structural damage."
        },
        scope: {
            items: [
                "Maintenance of pumps, boosters, and lift stations",
                "Boiler and calorifier inspection and repair",
                "Leak detection and pipe network repair",
                "Drainage and sewage system clearing",
                "Water filtration and treatment plant support",
                "Fixture and sanitary ware replacement"
            ]
        },
        challenges: {
            items: [
                "Low water pressure affecting upper floors",
                "Inconsistent hot water supply for guests",
                "Hidden leaks causing structural damage",
                "Blocked drainage leading to hygiene risks",
                "Pump failures disrupting supply"
            ]
        },
        approach: {
            description: "We focus on system integrity and efficiency. Our team conducts regular pressure checks and proactively maintains pumps and heaters to prevent the disruptions that guests notice immediately."
        },
        industries: {
            items: ["Hotels & Resorts", "Residential Towers", "Commercial Complexes", "Industrial Sites"]
        },
        value: {
            items: [
                "Consistent water pressure and temperature",
                "Prevention of costly water damage",
                "Reduced water wastage and utility costs",
                "Hygiene and sanitation compliance"
            ]
        },
        cta: {
            heading: "Need Support with Plumbing Systems?",
            subheading: "Secure your facility's water infrastructure.",
            whatsappMessage: "Hello, I’m looking for support with Plumbing, Water Systems & Hot Water Services for our facility. Please contact me."
        },
        seo: {
            title: "Plumbing & Water System Maintenance Saudi Arabia",
            description: "Commercial plumbing, boiler, and water system maintenance services in Saudi Arabia. Expert support for pumps, drainage, and hot water.",
            keywords: ["Commercial plumbing Saudi Arabia", "Boiler maintenance GCC", "Water pump repair Dammam", "Facility plumbing services", "Drainage solutions"]
        }
    },
    {
        slug: "electrical-elv-systems",
        id: "electrical",
        icon: Zap,
        title: "Electrical, ELV & Low-Voltage Systems",
        hero: {
            heading: "Electrical, ELV & Low-Voltage Systems",
            subheading: "Powering your operations with safety and stability."
        },
        overview: {
            intro: "Stable electrical infrastructure is non-negotiable. Our services cover the full spectrum of high and low-voltage systems, ensuring safety, compliance, and continuous power availability for critical facility equipment."
        },
        scope: {
            items: [
                "MDB, SMDB, and DB panel maintenance",
                "Lighting system repair and LED upgrades",
                "Cable tray and containment management",
                "Generator and UPS system checks",
                "Circuit troubleshooting and load balancing",
                "Earthing and lightning protection inspection"
            ]
        },
        challenges: {
            items: [
                "Frequent tripping or power fluctuations",
                "Outdated lighting increasing energy costs",
                "Unlabeled or disorganized distribution boards",
                "Safety hazards from loose connections",
                "Backup power failure during outages"
            ]
        },
        approach: {
            description: "Safety is our priority. We use strict lockout/tagout procedures and thermographic scanning to identify hotspots and risks before they lead to failure or fire hazards."
        },
        industries: {
            items: ["Commercial Buildings", "Hotels", "Industrial Warehouses", "Retail Centers"]
        },
        value: {
            items: [
                "Guaranteed electrical safety and compliance",
                "Reduced fire risks",
                "Lower energy consumption through upgrades",
                "Uninterrupted business operations"
            ]
        },
        cta: {
            heading: "Need Electrical System Support?",
            subheading: "Ensure your facility's power is safe and stable.",
            whatsappMessage: "Hello, I’m looking for support with Electrical, ELV & Low-Voltage Systems for our facility. Please contact me."
        },
        seo: {
            title: "Commercial Electrical Maintenance Saudi Arabia | Capital Solutions",
            description: "Professional electrical and ELV maintenance services for commercial and industrial facilities in Saudi Arabia. Safety inspections and repairs.",
            keywords: ["Electrical maintenance Saudi Arabia", "Commercial electrician Dammam", "ELV system support", "Power distribution maintenance", "Industrial electrical services"]
        }
    },
    {
        slug: "intercom-communication-systems",
        id: "intercom",
        icon: Phone,
        title: "Intercom, Communication & ELV Systems",
        hero: {
            heading: "Intercom, Communication & ELV Systems",
            subheading: "Connecting your facility with reliable communication infrastructure."
        },
        overview: {
            intro: "Effective communication networks are essential for security and convenience. We install and maintain intercoms, PABX systems, and structured cabling to keep your facility connected and responsive."
        },
        scope: {
            items: [
                "Video and audio intercom installation",
                "PABX and IP telephone system support",
                "Structured cabling and fiber optic termination",
                "Room management system integration",
                "PA system maintenance",
                "Network cabinet organization"
            ]
        },
        challenges: {
            items: [
                "Poor voice quality or signal dropping",
                "Outdated analog systems limiting features",
                "Cable clutter causing connectivity issues",
                "Integration failures between systems",
                "Security gaps from faulty intercoms"
            ]
        },
        approach: {
            description: "We treat communication as a critical utility. Our technicians ensure neat, labeled, and tested connections, verifying that data and voice traffic flow smoothly without interference."
        },
        industries: {
            items: ["Residential Compounds", "Office Towers", "Hotels", "Gated Communities"]
        },
        value: {
            items: [
                "Clear and reliable internal communication",
                "Enhanced security through verification",
                "Scalable network infrastructure",
                "Professional and organized cabling"
            ]
        },
        cta: {
            heading: "Need Communication System Support?",
            subheading: "Keep your facility connected and secure.",
            whatsappMessage: "Hello, I’m looking for support with Intercom, Communication & ELV Systems for our facility. Please contact me."
        },
        seo: {
            title: "Intercom & PABX System Maintenance Saudi Arabia",
            description: "Installation and maintenance of intercoms, PABX, and communication networks for facilities in Saudi Arabia.",
            keywords: ["Intercom repair Saudi Arabia", "PABX system maintenance", "Structured cabling Dammam", "Video intercom installation", "Office communication systems"]
        }
    },
    {
        slug: "security-access-control",
        id: "security",
        icon: ShieldCheck,
        title: "Security & Access Control Systems",
        hero: {
            heading: "Security & Access Control Systems",
            subheading: "Protecting people and assets with advanced security technology."
        },
        overview: {
            intro: "Security systems require absolute reliability. We support CCTV, biometric access control, and gate barriers to ensure that your facility remains secure, monitored, and accessible only to authorized personnel."
        },
        scope: {
            items: [
                "CCTV camera installation and maintenance",
                "Biometric and card-based access control",
                "Gate barrier and turnstile repair",
                "Security control room setup",
                "DVR/NVR storage management",
                "Integration with fire and safety systems"
            ]
        },
        challenges: {
            items: [
                "Camera blind spots or recording failures",
                "Access cards failing to grant entry",
                "Gate barriers stuck in open/closed position",
                "System lag preventing real-time monitoring",
                "Data loss due to storage errors"
            ]
        },
        approach: {
            description: "We adopt a zero-tolerance approach to security failures. Regular audits of camera angles, recording status, and access logs ensure the system functions as a true deterrent and protection tool."
        },
        industries: {
            items: ["Corporate Offices", "Residential Complexes", "Warehouses", "Government Facilities"]
        },
        value: {
            items: [
                "Enhanced physical security",
                "Audit trails for movement and access",
                "Deterrence of theft and vandalism",
                "Peace of mind for tenants and managers"
            ]
        },
        cta: {
            heading: "Need Security System Support?",
            subheading: "Upgrade or maintain your facility's protection.",
            whatsappMessage: "Hello, I’m looking for support with Security & Access Control Systems for our facility. Please contact me."
        },
        seo: {
            title: "CCTV & Access Control Maintenance Saudi Arabia",
            description: "Security system maintenance including CCTV, access control, and gate barriers for facilities in Saudi Arabia.",
            keywords: ["CCTV maintenance Saudi Arabia", "Access control repair", "Security system installation Dammam", "Gate barrier maintenance", "Biometric systems"]
        }
    },
    {
        slug: "fire-life-safety",
        id: "fire-safety",
        icon: Flame,
        title: "Fire & Life Safety Systems",
        hero: {
            heading: "Fire & Life Safety Systems",
            subheading: "Compliance-driven maintenance for fire detection and suppression."
        },
        overview: {
            intro: "There is no room for error with life safety. We maintain fire alarm and firefighting systems to strict civil defense standards, ensuring readiness, compliance, and the protection of lives and property."
        },
        scope: {
            items: [
                "Fire alarm control panel maintenance",
                "Smoke and heat detector testing",
                "Sprinkler system inspection",
                "Fire hose reel and extinguisher checks",
                "Emergency lighting verification",
                "System integration testing"
            ]
        },
        challenges: {
            items: [
                "False alarms causing disruption",
                "Silent failures in detectors",
                "Low pressure in fire suppression lines",
                "Expired certifications and fines",
                "Battery failures in control panels"
            ]
        },
        approach: {
            description: "Compliance is our baseline. We follow a strict testing schedule compliant with local regulations, documenting every check to ensure you are audit-ready and operationally safe."
        },
        industries: {
            items: ["All Sectors", "Hotels", "Malls", "Industrial Plants"]
        },
        value: {
            items: [
                "Full regulatory compliance",
                "Protection of life and property",
                "Reduction of false alarms",
                "Readiness for civil defense inspections"
            ]
        },
        cta: {
            heading: "Need Fire Safety System Support?",
            subheading: "Ensure your facility meets all safety standards.",
            whatsappMessage: "Hello, I’m looking for support with Fire & Life Safety Systems for our facility. Please contact me."
        },
        seo: {
            title: "Fire Alarm & Safety System Maintenance Saudi Arabia",
            description: "Certified maintenance for fire alarms, sprinklers, and life safety systems in Saudi Arabia. Ensure compliance and protection.",
            keywords: ["Fire alarm maintenance Saudi Arabia", "Firefighting system repair", "Sprinkler system check", "Civil defense compliance maintenance", "Life safety services"]
        }
    },
    {
        slug: "civil-structural-interior",
        id: "civil",
        icon: Building2,
        title: "Civil, Structural & Interior Maintenance",
        hero: {
            heading: "Civil, Structural & Interior Maintenance",
            subheading: "Preserving the fabric and finish of your facility."
        },
        overview: {
            intro: "The physical condition of your building defines the guest experience. We execute civil repairs, masonry, painting, and structural upkeep to ensure your facility looks as professional as it operates."
        },
        scope: {
            items: [
                "Wall painting and wallpaper repair",
                "Tiling, grouting, and flooring works",
                "Gypsum board and ceiling repairs",
                "Waterproofing and crack injection",
                "Facade cleaning and maintenance",
                "Masonry and concrete touch-ups"
            ]
        },
        challenges: {
            items: [
                "Cracked walls or peeling paint",
                "Water seepage damaging interiors",
                "Loose or broken tiles posing hazards",
                "Faded exteriors affecting curb appeal",
                "Deteriorating gypsum ceilings"
            ]
        },
        approach: {
            description: "Detail matters. Whether it's a guest room touch-up or a lobby renovation, we work cleanly and efficiently to restore finishes without disrupting the daily flow of your property."
        },
        industries: {
            items: ["Hotels", "Retail Spaces", "Offices", "Public Buildings"]
        },
        value: {
            items: [
                "Maintained property value",
                "Positive visual impression for visitors",
                "Prevention of structural degradation",
                "Extended life of interior finishes"
            ]
        },
        cta: {
            heading: "Need Civil & Interior Maintenance?",
            subheading: "Keep your building looking pristine.",
            whatsappMessage: "Hello, I’m looking for support with Civil, Structural & Interior Maintenance for our facility. Please contact me."
        },
        seo: {
            title: "Civil & Interior Maintenance Services Saudi Arabia",
            description: "Building maintenance, painting, tiling, and structural repair services for commercial properties in Saudi Arabia.",
            keywords: ["Civil maintenance Saudi Arabia", "Commercial painting services", "Flooring repair Dammam", "Building structural maintenance", "Interior fit-out repair"]
        }
    },
    {
        slug: "carpentry-joinery",
        id: "carpentry",
        icon: Hammer,
        title: "Carpentry, Joinery & Fixtures",
        hero: {
            heading: "Carpentry, Joinery & Fixtures",
            subheading: "Skilled craftsmanship for furniture, doors, and fittings."
        },
        overview: {
            intro: "Functional fixtures and well-maintained furniture are essential for usability. Our carpentry team handles repairs and installations for doors, cabinets, and custom joinery, extending the life of your wood assets."
        },
        scope: {
            items: [
                "Door installation and lock repair",
                "Furniture repair and polishing",
                "Cabinet and shelving installation",
                "Wooden flooring maintenance",
                "Partition styling and repair",
                "Custom joinery projects"
            ]
        },
        challenges: {
            items: [
                "Misaligned doors or faulty locks",
                "Scratched or wobbly furniture",
                "Damaged wooden paneling",
                "Stuck drawers and cabinets",
                "Wear and tear on wooden flooring"
            ]
        },
        approach: {
            description: "We combine craftsmanship with speed. Our carpenters are equipped to handle on-site repairs quickly, ensuring that a broken lock or scratched table doesn't take a room out of service."
        },
        industries: {
            items: ["Hotels", "Offices", "Residences", "Showrooms"]
        },
        value: {
            items: [
                "Restored functionality of fixtures",
                "Extended furniture lifespan",
                "Improved aesthetics and safety",
                "Quick resolution of guest complaints"
            ]
        },
        cta: {
            heading: "Need Carpentry Support?",
            subheading: "Expert repair for all your wooden fixtures.",
            whatsappMessage: "Hello, I’m looking for support with Carpentry, Joinery & Fixtures for our facility. Please contact me."
        },
        seo: {
            title: "Carpentry & Joinery Services Saudi Arabia",
            description: "Professional carpentry, furniture repair, and door maintenance services for commercial facilities in Saudi Arabia.",
            keywords: ["Carpenter Saudi Arabia", "Furniture repair service", "Door lock repair", "Commercial joinery", "Office furniture maintenance"]
        }
    },
    {
        slug: "housekeeping-utility",
        id: "housekeeping",
        icon: Sparkles,
        title: "Housekeeping & Utility Support Services",
        hero: {
            heading: "Housekeeping & Utility Support Services",
            subheading: "Operational support to maintain hygiene and order."
        },
        overview: {
            intro: "Cleanliness is the first indicator of quality. We provide specialized housekeeping and utility support teams to assist facility managers in maintaining high standards of hygiene and operational order."
        },
        scope: {
            items: [
                "Deep cleaning for specialized areas",
                "Facade and high-glass cleaning",
                "Waste management support",
                "Utility team deployment",
                "Public area sanitation",
                "Event setup and breakdown support"
            ]
        },
        challenges: {
            items: [
                "Inconsistent cleaning standards",
                "Difficulty managing high-traffic areas",
                "Lack of specialized cleaning equipment",
                "Staff shortages during peak times",
                "Poor waste handling processes"
            ]
        },
        approach: {
            description: "We don't just clean; we manage hygiene. Our teams are trained in chemical safety, proper equipment use, and efficient workflows to deliver high-impact results with minimal intrusion."
        },
        industries: {
            items: ["Malls", "Hotels", "Corporate Offices", "Event Venues"]
        },
        value: {
            items: [
                "Impeccable facility presentation",
                "Hygienic and safe environment",
                "Flexible manpower support",
                "Professional waste handling"
            ]
        },
        cta: {
            heading: "Need Housekeeping Support?",
            subheading: "Maintain a pristine environment for your visitors.",
            whatsappMessage: "Hello, I’m looking for support with Housekeeping & Utility Support Services for our facility. Please contact me."
        },
        seo: {
            title: "Commercial Housekeeping & Utility Services Saudi Arabia",
            description: "Specialized housekeeping, deep cleaning, and utility support for commercial and hospitality venues in Saudi Arabia.",
            keywords: ["Commercial cleaning services Saudi Arabia", "Facade cleaning Dammam", "Hotel housekeeping support", "Deep cleaning services", "Facility hygiene management"]
        }
    },
    {
        slug: "procurement-supply",
        id: "procurement",
        icon: Package,
        title: "Procurement, Supply & Technical Support",
        hero: {
            heading: "Procurement, Supply & Technical Support",
            subheading: "Sourcing the right parts, on time, for your operations."
        },
        overview: {
            intro: "Maintenance delays are often caused by missing parts. We streamline the procurement of technical spares, consumables, and equipment, leveraging our supply chain network to ensure you have what you need, when you need it."
        },
        scope: {
            items: [
                "Sourcing of MEP spare parts",
                "Supply of specialized hospitality equipment",
                "Technical consumable management",
                "Vendor vendor negotiation",
                "Inventory auditing and management",
                "Logistics and delivery coordination"
            ]
        },
        challenges: {
            items: [
                "Long lead times for critical spares",
                "Difficulty finding obsolete parts",
                "Overpaying for technical consumables",
                "Inventory mismanagement",
                "Incorrect part specifications ordered"
            ]
        },
        approach: {
            description: "We speak the language of engineering. Our technical background ensures we verify specifications before ordering, eliminating costly mistakes and ensuring that the part that arrives is the part that fits."
        },
        industries: {
            items: ["Facility Management Companies", "Hotels", "Industrial Maintenance Departments"]
        },
        value: {
            items: [
                "Reduced equipment downtime",
                "Cost savings on procurement",
                "Access to hard-to-find parts",
                "Streamlined inventory processes"
            ]
        },
        cta: {
            heading: "Need Technical Supply Support?",
            subheading: "Get the right parts faster.",
            whatsappMessage: "Hello, I’m looking for support with Procurement, Supply & Technical Support for our facility. Please contact me."
        },
        seo: {
            title: "Technical Procurement & Spare Parts Supply Saudi Arabia",
            description: "Sourcing and supply of MEP spare parts, hotel equipment, and technical consumables in Saudi Arabia.",
            keywords: ["MEP spare parts supplier", "Hotel equipment sourcing", "Technical procurement Saudi Arabia", "Maintenance supplies Dammam", "Industrial parts supply"]
        }
    },
    {
        slug: "facility-management-support",
        id: "fm-support",
        icon: Settings,
        title: "Facility Management & Operational Support",
        hero: {
            heading: "Facility Management & Operational Support",
            subheading: "Holistic support for smooth and efficient facility operations."
        },
        overview: {
            intro: "Managing a modern facility requires more than just repairs; it requires oversight. We provide comprehensive operational support, embedding expert teams to manage the technical and day-to-day requirements of your building."
        },
        scope: {
            items: [
                "Embedded technical team deployment",
                "Maintenance schedule planning",
                "Asset register management",
                "Subcontractor supervision",
                "Energy management audits",
                "Helpdesk and reporting support"
            ]
        },
        challenges: {
            items: [
                "Fragmented management of multiple vendors",
                "Lack of visibility into asset health",
                "Reactive rather than proactive operations",
                "High operational overheads",
                "Inconsistent service levels"
            ]
        },
        approach: {
            description: "We act as your technical partner. By taking ownership of the maintenance lifecycle, we free your management team to focus on core business activities while we ensure the building operates at peak performance."
        },
        industries: {
            items: ["Commercial Towers", "Mixed-Use Developments", "Corporate Campuses", "Hospitals"]
        },
        value: {
            items: [
                "Single point of accountability",
                "Optimized operational costs",
                "Data-driven maintenance decisions",
                "Extended asset lifecycles"
            ]
        },
        cta: {
            heading: "Need Facility Management Support?",
            subheading: "Streamline your facility operations today.",
            whatsappMessage: "Hello, I’m looking for support with Facility Management & Operational Support for our facility. Please contact me."
        },
        seo: {
            title: "Facility Management Support Services Saudi Arabia",
            description: "Comprehensive facility management and operational support services in Saudi Arabia. Technical teams, asset management, and supervision.",
            keywords: ["Facility management Saudi Arabia", "Building operations support", "Embedded maintenance teams", "FM services Dammam", "Asset management solutions"]
        }
    }
];
