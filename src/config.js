// ============================================================
// PORTFOLIO CONFIGURATION — Edit this file with your data
// ============================================================

const config = {
  // ── Personal Info ──────────────────────────────────────────
  name: 'Rafli Triwijaya',
  title: 'IoT and Embedded Engineer | IoT & Automation',
  email: 'Triwijaya.rafli@gmail.com',
  phone: '628512345678',
  location: 'Cimahi, West Java, Indonesia',
  linkedin: 'https://linkedin.com/in/rafli-triwijaya', // Replace with real URL
  githubUsername: 'raflitriwijaya',                     // Replace with real GitHub username
  avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=RT&backgroundColor=0c1628&textColor=22d3ee&fontSize=38&fontWeight=700',

  bio: `Highly motivated Agricultural Engineering graduate with a solid foundation in Instrumentation and hardware-software integration. Proven experience in designing, testing, and debugging electronic systems for automation using STM32, ESP32, and Raspberry Pi. Skilled in circuit design, sensor integration, and system-level troubleshooting, with a successful track record of leading technical projects from concept to deployment. Eager to leverage hardware expertise in a System Integration Engineer role to ensure robust integration.`,

  // ── GitHub Repo Filtering ──────────────────────────────────
  maxRepos: 6,
  excludedRepos: [],           // repo names to hide, e.g. ['my-old-project']
  filterByTopic: 'portfolio',  // show repos with this topic first; falls back to recently updated

  // ── Work Experience ────────────────────────────────────────
  experience: [
    {
      id: 1,
      role: 'Technical Support (Contract)',
      company: 'PT Project Technology Mast',
      location: 'Bandung',
      period: 'April 2026 – Present',
      current: true,
      bullets: [
        'Conducted Site Acceptance Test and Smoke Test for XCMG charging piles (heavy equipment electrification), ensuring OCPP 1.6 compliance.',
        'Analyzed WebSocket OCPP logs to validate charging session data; discovered critical firmware bug causing energy metering failure.',
      ],
      tags: ['OCPP 1.6', 'WebSocket', 'SAT/UAT', 'EV Charging'],
    },
    {
      id: 2,
      role: 'System Integrator (Freelance)',
      company: 'PT Project Technology Mast',
      location: 'Remote / Field',
      period: 'Dec 2025 – Jan 2026',
      current: false,
      bullets: [
        'Led end-to-end deployment of Smart Fuel Station at Minamas Plantation integrating software logic with industrial hardware.',
        'Developed test plans (FAT, SAT, UAT) achieving 100% system functionality; coordinated field installation and troubleshooting.',
      ],
      tags: ['FAT/SAT/UAT', 'Industrial Hardware', 'System Integration'],
    },
    {
      id: 3,
      role: 'Design Engineer (Freelance)',
      company: 'Universitas Padjadjaran',
      location: 'Bandung',
      period: 'Mar 2025 – Sep 2025',
      current: false,
      bullets: [
        'Designed 150 technical irrigation drawings, prepared budget and activity plans.',
      ],
      tags: ['Technical Drawing', 'Irrigation Design', 'Planning'],
    },
    {
      id: 4,
      role: 'IoT Engineer (Internship)',
      company: 'PT Langgeng Cipta Solusi',
      location: 'Bandung',
      period: 'Aug 2024 – Oct 2024',
      current: false,
      bullets: [
        'Designed and implemented Water Meter system for PDAM Jawa Barat using ESP32; circuit design, PCB assembly, testing.',
      ],
      tags: ['ESP32', 'PCB Design', 'IoT', 'Water Meter'],
    },
    {
      id: 5,
      role: 'Instrument Technician (Freelance)',
      company: 'PT Pupuk Kalimantan Timur',
      location: 'Bontang',
      period: 'Jun 2024 – Jul 2024',
      current: false,
      bullets: [
        'Installed and calibrated 170 positioner SVI-II Masoneilan under PT OSAII.',
      ],
      tags: ['Calibration', 'Masoneilan', 'Instrumentation'],
    },
    {
      id: 6,
      role: 'Engineering Division (Internship)',
      company: 'PT Perkebunan Nusantara VIII',
      location: 'Kabupaten Bandung',
      period: 'Jul 2023 – Aug 2023',
      current: false,
      bullets: [
        'Maintenance and service of all equipment and machines in tea factory.',
      ],
      tags: ['Maintenance', 'Industrial Machinery'],
    },
    {
      id: 7,
      role: 'Instrument Technician (Freelance)',
      company: 'PT Pertamina RU IV',
      location: 'Cilacap',
      period: 'Oct 2019 – Nov 2019',
      current: false,
      bullets: [
        'Installed and calibrated Masoneilan control valve accessories under PT OSAII.',
      ],
      tags: ['Control Valve', 'Calibration', 'Pertamina'],
    },
    {
      id: 8,
      role: 'Instrument Technician (Freelance)',
      company: 'PT Chandra Asri Petrochemical',
      location: 'Cilegon',
      period: 'Aug 2019 – Sep 2019',
      current: false,
      bullets: [
        'Installed and calibrated Masoneilan control valve accessories under PT OSAII.',
      ],
      tags: ['Control Valve', 'Petrochemical', 'Instrumentation'],
    },
    {
      id: 9,
      role: 'Instrument & Electrical Technician (Internship)',
      company: 'PT Clariant Indonesia',
      location: 'Tangerang',
      period: 'Aug 2018 – Dec 2018',
      current: false,
      bullets: [
        'Maintenance and service of electrical and instrumentation systems.',
      ],
      tags: ['Electrical', 'Instrumentation', 'Maintenance'],
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      id: 1,
      degree: 'Bachelor of Agricultural Engineering',
      major: 'Electrical and Automation',
      school: 'Universitas Padjadjaran',
      period: 'Aug 2020 – Feb 2026',
      gpa: '3.74 / 4.00',
      highlights: ['Focus on Instrumentation & Hardware-Software Integration', 'Thesis: IoT-based Irrigation Automation System'],
    },
    {
      id: 2,
      degree: 'Vocational High School',
      major: 'Instrumentation and Processing Control',
      school: 'SMKN 1 Cimahi',
      period: '2015 – 2019',
      gpa: null,
      highlights: ['Industrial Instrumentation', 'Process Control Systems'],
    },
  ],

  // ── Static Projects ────────────────────────────────────────
  staticProjects: [
    {
      id: 'p1',
      title: 'Thesis: Irrigation Automation System',
      period: 'Jan 2025 – Dec 2025',
      description: 'Deployed IoT-based automated irrigation for 1,500m² farmland. Dual-protocol communication (CAN Bus + WiFi UDP), custom PCB, firmware with External Interrupt and three-state control. Cloud pipeline with Node.js + MongoDB and real-time dashboard. 7-day field validation.',
      tags: ['STM32', 'ESP32', 'CAN Bus', 'WiFi UDP', 'Custom PCB', 'C/C++', 'Node.js', 'MongoDB'],
      featured: true,
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 'p2',
      title: 'Bangkit Academy Capstone – Greenhouse Monitor',
      period: '2024',
      description: 'Machine Learning project for monitoring and controlling greenhouse environment conditions. Built as part of Google Bangkit Academy 2024 program.',
      tags: ['Machine Learning', 'IoT', 'Python', 'Greenhouse'],
      featured: true,
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 'p3',
      title: 'Smart Water Meter',
      period: '2024',
      description: 'ESP32-based smart water meter system designed for PDAM Jawa Barat. Included full circuit design, PCB assembly, firmware development, and field testing.',
      tags: ['ESP32', 'PCB Design', 'IoT', 'C++', 'MQTT'],
      featured: false,
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 'p4',
      title: 'Smart Fuel Station Deployment',
      period: 'Dec 2025 – Jan 2026',
      description: 'End-to-end system integration of a Smart Fuel Station at Minamas Plantation. Integrated software logic with industrial hardware; led FAT, SAT, and UAT achieving 100% system functionality.',
      tags: ['System Integration', 'Industrial IoT', 'FAT/SAT/UAT'],
      featured: false,
      githubUrl: null,
      liveUrl: null,
    },
    {
      id: 'p5',
      title: 'Irrigation Technical Design (Rice Field)',
      period: '2025',
      description: 'Produced 150 technical irrigation drawings for a large-scale rice field irrigation upgrade project at Universitas Padjadjaran. Included budget planning and activity scheduling.',
      tags: ['Technical Drawing', 'Irrigation', 'Planning', 'AutoCAD'],
      featured: false,
      githubUrl: null,
      liveUrl: null,
    },
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: {
    technical: [
      { name: 'C / C++', level: 88 },
      { name: 'Python', level: 75 },
      { name: 'Arduino / ESP32', level: 92 },
      { name: 'STM32', level: 85 },
      { name: 'Raspberry Pi', level: 78 },
      { name: 'MQTT / HTTP / TCP/IP', level: 82 },
      { name: 'CAN Bus / WiFi UDP', level: 80 },
      { name: 'KiCad (PCB Design)', level: 76 },
      { name: 'Node.js / MongoDB', level: 65 },
      { name: 'OCPP 1.6', level: 72 },
    ],
    tools: ['KiCad', 'Git', 'VS Code', 'PlatformIO', 'Postman', 'Node-RED', 'MATLAB'],
    languages: [
      { lang: 'Indonesian', level: 'Native' },
      { lang: 'English', level: 'Professional' },
    ],
    soft: ['Problem Solving', 'Team Leadership', 'Technical Communication', 'Project Planning', 'Field Troubleshooting'],
  },

  // ── Contact / Formspree ───────────────────────────────────
  // Set VITE_FORMSPREE_ID in your .env file (e.g., xknqqwzv)
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || '',
};

export default config;
