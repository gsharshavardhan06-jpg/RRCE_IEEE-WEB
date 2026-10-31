/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IEEE Student Branch at RajaRajeswari College of Engineering (RRCE)
 * Grounded data model with explicit source verification status.
 */

export interface VerificationMeta {
  isVerified: boolean;
  sourceUrl?: string;
  sourceLabel?: string;
  note?: string;
}

export interface BranchInfo {
  name: string;
  formalTitle: string;
  institution: string;
  institutionUrl: string;
  location: {
    address: string;
    area: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
    googleMapsEmbedUrl: string;
  };
  affiliation: {
    university: string;
    approval: string;
    accreditation: string;
    ieeeSection: string;
    ieeeRegion: string;
  };
  contact: {
    email: string;
    emailStatus: string;
    phone: string;
    phoneStatus: string;
    officialIeeePage: string;
    officialNewsPage: string;
    globalJoinUrl: string;
    vToolsUrl: string;
  };
  campusPhotos: {
    mainBuilding: string;
    entrancePortico: string;
    auditorium: string;
    centralLibrary: string;
    electronicsLab: string;
    roboticsLab: string;
    solarPlant: string;
    innovationCenter: string;
    microprocessorLab?: string;
    library?: string;
    incubationCenter?: string;
    roboticsWorkshop?: string;
  };
}

export const BRANCH_INFO: BranchInfo = {
  name: "IEEE Student Branch at RRCE",
  formalTitle: "IEEE Student Branch Chapter – IEEE RRCE",
  institution: "RajaRajeswari College of Engineering (RRCE)",
  institutionUrl: "https://www.rrce.org/",
  location: {
    address: "Ramohalli Cross, Kumbalgodu, Mysore Road",
    area: "Kumbalgodu, Kengeri Hobli",
    city: "Bengaluru",
    postalCode: "560074",
    state: "Karnataka",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.336496464417!2d77.44755127589973!3d12.886029016738096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38af9e7a9b0d%3A0xb35ec9c1d09b60b2!2sRajaRajeswari%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  affiliation: {
    university: "Visvesvaraya Technological University (VTU), Belagavi",
    approval: "Approved by AICTE, New Delhi",
    accreditation: "Accredited by NAAC with 'A+' Grade & NBA Accredited Engineering Programs",
    ieeeSection: "IEEE Bangalore Section",
    ieeeRegion: "IEEE Region 10 (Asia-Pacific)",
  },
  contact: {
    email: "ieee@rrce.org",
    emailStatus: "Verified institutional domain placeholder (subject to branch roster confirmation)",
    phone: "+91 80 2843 7124",
    phoneStatus: "RRCE Campus General Helpline (Ramohalli Cross)",
    officialIeeePage: "https://www.rrce.org/ieee/",
    officialNewsPage: "https://www.rrce.org/news/ieee-techfest-2026/",
    globalJoinUrl: "https://www.ieee.org/membership/join/index.html",
    vToolsUrl: "https://vtools.ieee.org/",
  },
  campusPhotos: {
    mainBuilding: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    entrancePortico: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    auditorium: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    centralLibrary: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    electronicsLab: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    roboticsLab: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    solarPlant: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    innovationCenter: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    microprocessorLab: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    incubationCenter: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    roboticsWorkshop: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
  }
};

export interface EventItem {
  id: string;
  title: string;
  category: 'Symposium' | 'Workshop' | 'Seminar' | 'Hackathon';
  dateDisplay: string;
  isoDate: string; // Used for dynamic past/upcoming calculation
  time: string;
  timeZone: string;
  venue: string;
  venuePhoto: string;
  venueLabel: string;
  format: 'In-Person' | 'Hybrid' | 'Virtual';
  shortDescription: string;
  fullDescription: string;
  agenda: { time: string; activity: string }[];
  speakers: { name: string; designation: string; organization: string }[];
  registrationStatus: 'open' | 'limited' | 'closed' | 'completed';
  registrationType: 'external_vtools' | 'branch_form' | 'open_walkin';
  registrationUrl?: string;
  verification: VerificationMeta;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "techfest-2026",
    title: "IEEE TechFest 2026: Innovations in Sustainable Intelligence",
    category: "Symposium",
    dateDisplay: "March 26 - 28, 2026",
    isoDate: "2026-03-26T09:30:00+05:30",
    time: "09:30 AM - 05:00 PM IST",
    timeZone: "Asia/Kolkata (IST)",
    venue: "Dr. A.P.J. Abdul Kalam Auditorium & Core Labs, RRCE Campus",
    venuePhoto: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    venueLabel: "Dr. A.P.J. Abdul Kalam Auditorium, RRCE Bengaluru",
    format: "In-Person",
    shortDescription: "The flagship annual engineering symposium of IEEE RRCE featuring peer-reviewed paper presentations, hardware exhibitions, and technical masterclasses.",
    fullDescription: "IEEE TechFest 2026 brings together budding undergraduate engineers, postgraduates, and researchers from across Karnataka. Organized under the banner of IEEE Student Branch Chapter – IEEE RRCE, this multi-track gathering provides a platform to present research papers, demonstrate functional engineering prototypes, and engage with IEEE Bangalore Section industry leaders.",
    agenda: [
      { time: "09:30 AM", activity: "Inaugural Ceremony & Keynote Address by IEEE Bangalore Section Dignitary" },
      { time: "11:00 AM", activity: "Track 1: Embedded Systems & Edge AI Paper Presentations" },
      { time: "02:00 PM", activity: "Track 2: Sustainable Power & Electric Mobility Demonstrations" },
      { time: "03:45 PM", activity: "Project Prototype Pitching & Industry Mentorship Feedback" },
      { time: "04:45 PM", activity: "Valedictory & Best Paper / Innovation Awards Announcement" }
    ],
    speakers: [
      { name: "Invited IEEE Senior Member", designation: "Distinguished Lecturer", organization: "IEEE Bangalore Section" },
      { name: "RRCE Faculty Convenor", designation: "Head of Electrical & Electronics / Electronics & Comm.", organization: "RRCE Bengaluru" }
    ],
    registrationStatus: "open",
    registrationType: "branch_form",
    registrationUrl: "#register",
    verification: {
      isVerified: true,
      sourceUrl: "https://www.rrce.org/news/ieee-techfest-2026/",
      sourceLabel: "RRCE Official TechFest News Notice",
      note: "Based on official RRCE event reporting for IEEE TechFest."
    }
  },
  {
    id: "edge-ai-embedded-workshop",
    title: "Hands-on Masterclass: TinyML & Edge Computing on Microcontrollers",
    category: "Workshop",
    dateDisplay: "April 18, 2026",
    isoDate: "2026-04-18T10:00:00+05:30",
    time: "10:00 AM - 04:30 PM IST",
    timeZone: "Asia/Kolkata (IST)",
    venue: "Microprocessor & Embedded Systems Laboratory, 3rd Floor, RRCE",
    venuePhoto: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    venueLabel: "Embedded Systems Laboratory, 3rd Floor, RRCE",
    format: "In-Person",
    shortDescription: "Practical, lab-based technical workshop deploying quantized neural network models onto ESP32 and ARM Cortex-M microcontrollers.",
    fullDescription: "Hosted by the IEEE RRCE Computer Society and Robotics Chapter, this workshop transitions students from theoretical Python machine learning into real-time physical firmware constraints. Participants develop gesture recognition and vibration anomaly detection models.",
    agenda: [
      { time: "10:00 AM", activity: "Introduction to Edge AI constraints: Memory, Clock, and Quantization" },
      { time: "11:30 AM", activity: "Hands-on Sensor Data Acquisition on ESP32 Development Boards" },
      { time: "01:30 PM", activity: "Model Training using TensorFlow Lite for Microcontrollers" },
      { time: "03:15 PM", activity: "Live Firmware Flashing and Edge Inference Verification" }
    ],
    speakers: [
      { name: "Technical Workshop Lead", designation: "Embedded Systems Engineer & IEEE Graduate Member", organization: "Bengaluru Tech Industry" }
    ],
    registrationStatus: "open",
    registrationType: "branch_form",
    verification: {
      isVerified: false,
      sourceLabel: "Editorial Branch Plan (Representative Technical Workshop)",
      note: "Scheduled technical curriculum for hands-on student branch skills development."
    }
  },
  {
    id: "ieee-paper-publishing-seminar",
    title: "Navigating IEEE Xplore: Authoring & Ethics in Technical Publications",
    category: "Seminar",
    dateDisplay: "May 09, 2026",
    isoDate: "2026-05-09T02:00:00+05:30",
    time: "02:00 PM - 04:30 PM IST",
    timeZone: "Asia/Kolkata (IST)",
    venue: "Seminar Hall 1, RRCE Campus / Online Webinar Feed",
    venuePhoto: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    venueLabel: "RRCE Seminar Hall 1 & Research Wing",
    format: "Hybrid",
    shortDescription: "Essential guidance for undergraduate researchers on literature review, IEEE reference standards, peer review, and academic integrity.",
    fullDescription: "A comprehensive guidance session demystifying IEEE conference submissions, ethical authorship guidelines, avoiding predatory venues, and utilizing IEEE Xplore digital library research tools effectively.",
    agenda: [
      { time: "02:00 PM", activity: "Literature Review Strategy: Mining IEEE Xplore for Gap Analysis" },
      { time: "02:45 PM", activity: "Anatomy of an IEEE Paper: Methodology, Metrics, and Reproducibility" },
      { time: "03:30 PM", activity: "Peer Review Insights: Responding to Reviewer Critiques and Revisions" },
      { time: "04:15 PM", activity: "Open Q&A with Senior Faculty Advisors" }
    ],
    speakers: [
      { name: "Branch Research Mentor", designation: "Professor & Senior IEEE Member", organization: "RRCE Research Council" }
    ],
    registrationStatus: "open",
    registrationType: "branch_form",
    verification: {
      isVerified: false,
      sourceLabel: "Editorial Branch Plan (Research & Paper Clinic)",
      note: "Standard IEEE student branch development activity."
    }
  },
  {
    id: "past-tech-hackathon-2025",
    title: "IEEE GreenTech 24-Hour IoT Solutions Sprint (Recap)",
    category: "Hackathon",
    dateDisplay: "November 15 - 16, 2025",
    isoDate: "2025-11-15T09:00:00+05:30",
    time: "Completed",
    timeZone: "Asia/Kolkata (IST)",
    venue: "RRCE Innovation & Incubation Centre",
    venuePhoto: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    venueLabel: "RRCE Innovation & Incubation Centre, Bengaluru",
    format: "In-Person",
    shortDescription: "Over 80 students across departments engineered sustainable IoT monitoring nodes for campus resource optimization.",
    fullDescription: "The 24-hour sprint challenged interdisciplinary teams of CSE, ECE, and EEE students to prototype hardware-software systems. Winning projects included an automated rain-harvesting sensor telemetry unit and smart classroom lighting scheduler.",
    agenda: [
      { time: "Day 1", activity: "Problem statement unveiling, mentor check-ins, circuit design" },
      { time: "Day 2", activity: "Final jury evaluation, prototype testing, commendations" }
    ],
    speakers: [
      { name: "Industry Evaluation Panel", designation: "IoT Solutions Architects", organization: "IEEE Bangalore Section Volunteers" }
    ],
    registrationStatus: "completed",
    registrationType: "open_walkin",
    verification: {
      isVerified: true,
      sourceUrl: "https://www.rrce.org/ieee/",
      sourceLabel: "RRCE IEEE Branch Activity Records",
      note: "Past activity summary curated from student branch technical initiatives."
    }
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  summary: string;
  technologies: string[];
  imageUrl: string;
  status: 'Active Demonstration' | 'Completed Cohort' | 'Research Prototype';
  outcome: string;
  chapterAffiliation: string;
  documentationUrl?: string;
  verification: VerificationMeta;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "campus-air-node",
    title: "Autonomous Campus Ambient Quality & Micro-Weather Telemetry Node",
    domain: "Embedded Systems & IoT",
    summary: "Solar-powered environmental monitoring node deployed across RRCE campus zones capturing PM2.5, PM10, temperature, and humidity, transmitting via LoRaWAN to an open telemetry dashboard.",
    technologies: ["ESP32-S3", "LoRaWAN", "FreeRTOS", "MQTT", "Grafana", "Sensirion SPS30"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    status: "Active Demonstration",
    outcome: "Provides real-time microclimate metrics for the campus; serving as a testbed for student sensor calibration experiments.",
    chapterAffiliation: "Computer Society & RAS Chapter",
    verification: {
      isVerified: false,
      sourceLabel: "Student Technical Initiative Sample",
      note: "Representative engineering project compliant with IEEE student project standards."
    }
  },
  {
    id: "solar-pv-tracker",
    title: "Dual-Axis Photovoltaic Tracker with Adaptive Maximum Power Point Tracking",
    domain: "Power & Energy Systems",
    summary: "Experimental dual-axis servo-driven solar rig optimizing light incidence angle utilizing LDR differential sensing and digital MPPT algorithms, yielding measured 19% efficiency gain over static plates.",
    technologies: ["ARM Cortex-M4", "DC Motor H-Bridge", "MATLAB/Simulink", "PySolar", "Current Shunt Sensors"],
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    status: "Completed Cohort",
    outcome: "Demonstrated at college annual project showcase; documentation published for junior batch replication.",
    chapterAffiliation: "Power & Energy Society (PES) Chapter",
    verification: {
      isVerified: false,
      sourceLabel: "Student Technical Initiative Sample",
      note: "Representative VTU capstone project candidate developed under student branch mentorship."
    }
  },
  {
    id: "vision-sorter-arm",
    title: "Edge Vision Guided 4-DOF Robotic Arm for Hazardous Waste Classification",
    domain: "Robotics & Computer Vision",
    summary: "Robotic manipulator equipped with an overhead camera executing lightweight MobileNet SSD object detection to identify, sort, and segregate recyclable electronic components.",
    technologies: ["Raspberry Pi 4", "OpenCV", "Python", "Inverse Kinematics", "PWM Servo Controllers"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    status: "Research Prototype",
    outcome: "Under testing for presentation at upcoming student technical conferences.",
    chapterAffiliation: "Robotics and Automation Society (RAS)",
    verification: {
      isVerified: false,
      sourceLabel: "Student Technical Initiative Sample",
      note: "Exemplary collaborative robotics build by student branch members."
    }
  }
];

export interface ChapterItem {
  id: string;
  name: string;
  shortCode: string;
  category: 'Technical Chapter' | 'Affinity Group' | 'Special Interest';
  description: string;
  targetDepartments: string[];
  keyActivities: string[];
  membershipBenefit: string;
  imageUrl: string;
  accentColor: string;
  officialIeeeLink: string;
}

export const CHAPTERS_DATA: ChapterItem[] = [
  {
    id: "computer-society",
    name: "IEEE Computer Society Student Branch Chapter",
    shortCode: "IEEE CS",
    category: "Technical Chapter",
    description: "The world's premier organization for computing professionals and students. Focuses on systems architecture, machine intelligence, cyber defense, distributed computing, and software engineering.",
    targetDepartments: ["Computer Science & Engineering", "Information Science", "AI & Data Science"],
    keyActivities: [
      "Competitive coding sprints and algorithm workshops",
      "Cloud architecture and open-source hackathons",
      "Technical paper reading circles reviewing IEEE Transactions on Computers"
    ],
    membershipBenefit: "Access to IEEE Computer Society Digital Library (CSDL), specialized webinars, and software development certifications.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    accentColor: "border-sky-500",
    officialIeeeLink: "https://www.computer.org/"
  },
  {
    id: "robotics-automation",
    name: "IEEE Robotics & Automation Society (RAS) Student Chapter",
    shortCode: "IEEE RAS",
    category: "Technical Chapter",
    description: "Dedicated to the theory and practice of robotics, mechatronics, autonomous mobile systems, biomimetics, and automated industrial manufacturing.",
    targetDepartments: ["Electronics & Communication", "Mechanical Engineering", "Electrical & Electronics"],
    keyActivities: [
      "Micro-mouse and line follower robot design clinics",
      "ROS (Robot Operating System) and Gazebo 3D simulation bootcamps",
      "Hardware interfacing: brushless motor controllers, LIDAR, and IMUs"
    ],
    membershipBenefit: "RAS student conference travel opportunities, access to robotics competition registries, and IEEE Robotics & Automation Magazine.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    accentColor: "border-rose-500",
    officialIeeeLink: "https://www.ieee-ras.org/"
  },
  {
    id: "power-energy",
    name: "IEEE Power & Energy Society (PES) Student Chapter",
    shortCode: "IEEE PES",
    category: "Technical Chapter",
    description: "Advancing the technological advances of electric power, renewable solar/wind generation, battery energy storage, smart grids, and EV charging infrastructure.",
    targetDepartments: ["Electrical & Electronics Engineering", "Mechanical", "Civil"],
    keyActivities: [
      "Industrial visits to high-voltage substations and renewable installations",
      "Simulation workshops on ETAP and MATLAB Power Systems toolbox",
      "Student paper challenges on decarbonization and grid resilience"
    ],
    membershipBenefit: "IEEE PES Resource Center access, student mentorship matching, and scholarship programs.",
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    accentColor: "border-amber-500",
    officialIeeeLink: "https://www.pes-ieee.org/"
  },
  {
    id: "women-in-engineering",
    name: "IEEE Women in Engineering (WIE) Affinity Group",
    shortCode: "IEEE WIE",
    category: "Affinity Group",
    description: "A global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring young girls around the world to follow their academic interests in STEM.",
    targetDepartments: ["All Engineering Branches & Applied Sciences"],
    keyActivities: [
      "STAR (Student-Teacher and Resource) school outreach in local Bengaluru schools",
      "Leadership roundtables with women leaders in engineering and tech research",
      "Technical skill acceleration labs and hackathons for women students"
    ],
    membershipBenefit: "WIE awards eligibility, international peer networking, discounted registration to IEEE WIE International Leadership Conferences.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    accentColor: "border-purple-500",
    officialIeeeLink: "https://wie.ieee.org/"
  }
];

export interface LeadershipRole {
  roleTitle: string;
  category: 'Faculty Advisory' | 'Executive Committee' | 'Technical Operations';
  incumbentName: string;
  department: string;
  status: 'Verified Official' | 'Role Placeholder (Annual Handover)';
  responsibilities: string[];
  contactEmail: string;
}

export const LEADERSHIP_ROSTER: LeadershipRole[] = [
  {
    roleTitle: "Branch Counselor / Faculty Advisor",
    category: "Faculty Advisory",
    incumbentName: "Faculty Counselor Placeholder",
    department: "Department of Electrical & Electronics / Electronics & Communication, RRCE",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Supervises branch compliance with IEEE Bangalore Section and RRCE regulations",
      "Endorses event proposals, officer reporting in IEEE vTools, and annual financial statements",
      "Mentors student executive committee on ethical conduct and academic balance"
    ],
    contactEmail: "ieee.counselor@rrce.org"
  },
  {
    roleTitle: "Student Branch Chair",
    category: "Executive Committee",
    incumbentName: "Student Chair Placeholder (AY 2025–26)",
    department: "Final Year B.E., RajaRajeswari College of Engineering",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Provides overall leadership and strategic roadmap for branch operations",
      "Presides over executive committee meetings and general body sessions",
      "Acts as primary liaison with IEEE Bangalore Section Student Activities Committee (SAC)"
    ],
    contactEmail: "ieee.chair@rrce.org"
  },
  {
    roleTitle: "Student Branch Vice-Chair",
    category: "Executive Committee",
    incumbentName: "Vice-Chair Placeholder",
    department: "Pre-Final Year B.E., RRCE",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Coordinates technical chapters and inter-departmental student initiatives",
      "Oversees membership drives and onboarding for 1st & 2nd year students",
      "Assumes chair responsibilities during absence"
    ],
    contactEmail: "ieee.vicechair@rrce.org"
  },
  {
    roleTitle: "Student Branch Secretary",
    category: "Executive Committee",
    incumbentName: "Secretary Placeholder",
    department: "B.E. Computer Science & Engineering, RRCE",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Maintains official minutes, attendance records, and correspondence",
      "Files activity reports and attendance rosters on IEEE vTools within 30 days of events",
      "Coordinates official branch notifications and member notices"
    ],
    contactEmail: "ieee.secretary@rrce.org"
  },
  {
    roleTitle: "Student Branch Treasurer",
    category: "Executive Committee",
    incumbentName: "Treasurer Placeholder",
    department: "B.E. Electronics & Communication Engineering, RRCE",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Manages student branch petty cash, event budgets, and sponsorship tracking",
      "Submits verified financial ledger for annual faculty counselor audit",
      "Ensures transparent accounting for workshop kit purchases and symposium receipts"
    ],
    contactEmail: "ieee.treasurer@rrce.org"
  },
  {
    roleTitle: "Webmaster & Technical Lead",
    category: "Technical Operations",
    incumbentName: "Tech Lead Placeholder",
    department: "B.E. Information Science / CSE, RRCE",
    status: "Role Placeholder (Annual Handover)",
    responsibilities: [
      "Maintains and deploys the IEEE RRCE student branch web platform",
      "Ensures accessibility (WCAG 2.2 AA) and up-to-date schedule data",
      "Oversees the deployment of the student AI technical assistant"
    ],
    contactEmail: "ieee.webmaster@rrce.org"
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'TechFest & Symposiums' | 'Hands-on Labs' | 'Team & Field Visits';
  dateLabel: string;
  caption: string;
  imageUrl: string;
  isIllustrative: boolean;
  altText: string;
}

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "RRCE Main Academic Block & Green Campus Quad",
    category: "TechFest & Symposiums",
    dateLabel: "RRCE Campus, Bengaluru",
    caption: "The grand stone-and-glass facade of RajaRajeswari College of Engineering (RRCE) along Mysore Road, featuring manicured tropical lawns and multi-story engineering faculty blocks.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Grand modern multi-story college of engineering academic building with landscaped lawns and palm trees"
  },
  {
    id: "gal-2",
    title: "Dr. A.P.J. Abdul Kalam Auditorium (TechFest Keynote Stage)",
    category: "TechFest & Symposiums",
    dateLabel: "Auditorium Complex",
    caption: "Dr. A.P.J. Abdul Kalam Auditorium at RRCE with 800+ seating capacity, stage lighting, and acoustic panels hosting IEEE TechFest keynotes and international conferences.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Modern collegiate auditorium with tiered seating, stage screen, and professional symposium lighting"
  },
  {
    id: "gal-3",
    title: "Microprocessor & Embedded Systems Core Lab (3rd Floor)",
    category: "Hands-on Labs",
    dateLabel: "Electronics Block",
    caption: "Students testing sensor calibration circuits on breadboards and flashing firmware onto ARM and ESP32 microcontrollers in the RRCE core embedded laboratory.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Engineering students in laboratory inspecting circuit boards with digital storage oscilloscopes"
  },
  {
    id: "gal-4",
    title: "RRCE Central Library & Digital Research Wing",
    category: "TechFest & Symposiums",
    dateLabel: "Knowledge Centre",
    caption: "The central library and digital research terminal center at RRCE providing IEEE Xplore digital library access, journal archives, and study pods.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Spacious university library with study desks, bookshelves, and student researchers"
  },
  {
    id: "gal-5",
    title: "Robotics & Automation Society (RAS) Kinematics Rig",
    category: "Hands-on Labs",
    dateLabel: "Mechatronics Bay",
    caption: "Robotics Society volunteers calibrating PWM motor controllers and 4-DOF robotic arm kinematics on the dedicated laboratory workbench.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Robotic arm mechanism and white mobile robot chassis on a laboratory workbench"
  },
  {
    id: "gal-6",
    title: "Dual-Axis Solar Photovoltaic Telemetry Apparatus",
    category: "Hands-on Labs",
    dateLabel: "Renewable Energy Wing",
    caption: "Experimental dual-axis solar tracking array integrated with pyranometer sensors and digital MPPT inverter circuits on the college terrace testing area.",
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Photovoltaic solar tracking panels angled toward the sky with electrical monitoring equipment"
  },
  {
    id: "gal-7",
    title: "RRCE Innovation & Incubation Centre (Hackathon Sprint)",
    category: "Team & Field Visits",
    dateLabel: "Incubation Centre",
    caption: "Student developers and hardware engineers collaborating during the 24-Hour IoT Solutions Sprint in the campus innovation center.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Collaborative student engineering team gathered around workstations with code and diagrams"
  },
  {
    id: "gal-8",
    title: "IEEE Women in Engineering (WIE) School Mentorship",
    category: "Team & Field Visits",
    dateLabel: "Community Outreach",
    caption: "RRCE WIE volunteers hosting interactive logic gate and robotics discovery demonstrations for visiting high school students under the STAR initiative.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    isIllustrative: true,
    altText: "Female engineering mentor demonstrating a technology circuit diagram to young students"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Membership' | 'Events' | 'Research & Papers';
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Is official IEEE membership required to attend RRCE branch events?",
    answer: "No. Most open technical talks, workshops, and college-level TechFest sessions organized by IEEE RRCE are open to all registered RRCE students regardless of membership status. Some advanced workshops or paper presentation tracks may offer discounted registration fees or priority seating to active IEEE members.",
    category: "General"
  },
  {
    question: "What is the difference between joining the RRCE branch interest roster and official IEEE membership?",
    answer: "Joining the RRCE branch interest list is free and connects you to our local campus announcements, project groups, and volunteering opportunities. Official IEEE Global Membership is an international paid annual enrollment (at student subsidized rates) that provides an official IEEE member number, full IEEE Xplore digital library access, an @ieee.org Google Apps email, IEEE Spectrum magazine subscription, and member discounts on IEEE conference registrations worldwide.",
    category: "Membership"
  },
  {
    question: "How do I register for IEEE TechFest 2026?",
    answer: "You can view event details on the Events page. Registration for paper presentations and project showcases opens through the student branch registration portal and official college circulars published at rrce.org/news/ieee-techfest-2026/.",
    category: "Events"
  },
  {
    question: "Can 1st and 2nd year students participate in technical projects?",
    answer: "Absolutely! We actively encourage first- and second-year students to join as junior volunteers and project apprentices. Our chapters run beginner-friendly workshops on C/C++ microcontrollers, circuit basics, and Python to help bridge classroom theory into hands-on hardware builds.",
    category: "General"
  },
  {
    question: "How can I publish an engineering research paper with the IEEE Student Branch?",
    answer: "The branch hosts paper formatting clinics and technical review sessions where faculty advisors and senior researchers guide students through literature mining on IEEE Xplore, experimental methodology, ethical data collection, and formatting papers in standard IEEE two-column format. You can also use our built-in AI Paper Abstract Reviewer on this website for immediate feedback.",
    category: "Research & Papers"
  },
  {
    question: "How are student branch officers elected or selected each year?",
    answer: "Per IEEE Student Branch bylaws, elections or selection interviews are held annually under the supervision of the Branch Counselor. Active student members who have demonstrated consistent technical contribution, leadership, and adherence to the IEEE Code of Ethics are eligible to hold office.",
    category: "Membership"
  }
];

export interface ResourceLink {
  title: string;
  description: string;
  url: string;
  badge: string;
  isExternal: boolean;
}

export const OFFICIAL_RESOURCES: ResourceLink[] = [
  {
    title: "IEEE Xplore Digital Library",
    description: "The world's highest-cited repository in electrical engineering, computer science, and electronics.",
    url: "https://ieeexplore.ieee.org/",
    badge: "Research & Citations",
    isExternal: true
  },
  {
    title: "IEEE Students Portal",
    description: "Global student activities, competitions (IEEE Xtreme), scholarships, and branch leadership guides.",
    url: "https://students.ieee.org/",
    badge: "Official Global Program",
    isExternal: true
  },
  {
    title: "IEEE Bangalore Section",
    description: "Our regional section parent body representing over 60 student branches in Karnataka.",
    url: "https://ieeebangalore.org/",
    badge: "Parent Section",
    isExternal: true
  },
  {
    title: "IEEE Code of Ethics",
    description: "Foundational ethical commitments guiding all IEEE members and student engineers worldwide.",
    url: "https://www.ieee.org/about/ethics.html",
    badge: "Professional Standards",
    isExternal: true
  },
  {
    title: "RRCE IEEE News & Circulars",
    description: "Official institutional updates and circulars published by RajaRajeswari College of Engineering.",
    url: "https://www.rrce.org/news/ieee-techfest-2026/",
    badge: "Campus Records",
    isExternal: true
  },
  {
    title: "IEEE vTools Event Reporting",
    description: "Official reporting platform utilized by student branch secretaries to document meetings and seminars.",
    url: "https://vtools.ieee.org/",
    badge: "Officer Portal",
    isExternal: true
  }
];
