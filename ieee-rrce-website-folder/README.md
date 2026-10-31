# IEEE Student Branch at RajaRajeswari College of Engineering (RRCE)

Welcome to the official web platform for the **IEEE Student Branch at RajaRajeswari College of Engineering (RRCE)**, Bengaluru, Karnataka, India.

This project delivers a responsive, accessible, production-grade web application built to serve undergraduate and postgraduate engineering students, faculty advisors, industry speakers, and visiting collaborators.

---

## 1. Project Overview & Institutional Identity

- **Branch Display Name:** IEEE Student Branch at RRCE
- **Official Organizer Description:** *IEEE Student Branch Chapter – IEEE RRCE* (per RRCE official news circulars)
- **Host Institution:** RajaRajeswari College of Engineering (RRCE)
- **Institution Portal:** [https://www.rrce.org/](https://www.rrce.org/)
- **College IEEE Portal:** [https://www.rrce.org/ieee/](https://www.rrce.org/ieee/)
- **Campus Physical Location:** Ramohalli Cross, Kumbalgodu, Mysore Road, Bengaluru 560074, Karnataka, India
- **Institutional Accreditation:** Affiliated to Visvesvaraya Technological University (VTU), Belagavi; Approved by AICTE, New Delhi; Accredited by NAAC with 'A+' Grade; NBA Accredited Programs
- **IEEE Organizational Hierarchy:**
  - IEEE Region 10 (Asia-Pacific)
  - IEEE Bangalore Section
  - IEEE Student Branch Chapter – IEEE RRCE

---

## 2. Technical Stack

- **Frontend Framework:** React 19 (Functional components, Hooks)
- **Build Tool:** Vite 8
- **Language:** TypeScript 7 (Strict typing)
- **Styling:** Tailwind CSS 4 with custom IEEE design tokens:
  - Primary: IEEE Blue (`#00629B`)
  - Dark Accent: IEEE Dark (`#00456E`)
  - Secondary Accent: IEEE Cyan (`#00B5E2`)
  - Neutrals: Charcoal Slate (`#0B1F33`, `#1E293B`) and Warm White (`#F8FAFC`)
  - Typography: Open Sans (accessible web font)
- **Icons:** Lucide React
- **Backend & Server:** Express 4 on Node.js (via `tsx`)
- **Artificial Intelligence:** Google GenAI SDK (`@google/genai`) with `gemini-3.8-flash` on server-side proxy routes

---

## 3. Key Features

1. **Editorial Transparency & Verified Data:**
   - Real events curated from college notices (including the **IEEE TechFest 2026** flagship symposium).
   - Dynamic event filtering (Symposium, Workshop, Seminar, Hackathon) with timezone calculations anchored in **Asia/Kolkata (IST - UTC+05:30)**.
   - Clear visual differentiation between verified records and sample/placeholder entries.

2. **Full-Stack Gemini 3.8 Flash AI Engineering Suite:**
   - **Branch Mentor & FAQ Assistant:** Real-time conversational guidance on IEEE technical societies, IEEE Xplore mining, paper formatting, and the IEEE Code of Ethics.
   - **IEEE Paper Abstract & Project Reviewer:** Evaluates student project abstracts across novelty, ethical alignment, methodology rigor, recommended IEEE society, and outputs an IEEE-style rewritten abstract.
   - **Student Domain & Pathway Pathfinder:** Generates a custom 4-phase milestone roadmap based on the student's department, year, and technical interests.

3. **Clear Distinction Between Local vs Global Membership:**
   - **RRCE Branch Interest Roster:** Free, campus-level community participation with validated form and honest demonstration privacy notice.
   - **Official IEEE Global Membership:** Verified link to `ieee.org/membership/join` with accurate student benefits (IEEE Xplore, `@ieee.org` email, IEEE Spectrum, conference discounts).

4. **Interactive Technical Chapters:**
   - Detailed focus areas for **IEEE Computer Society**, **IEEE Robotics & Automation Society (RAS)**, **IEEE Power & Energy Society (PES)**, and **IEEE Women in Engineering (WIE)** Affinity Group.

5. **Accessibility (Targeting WCAG 2.2 AA):**
   - High-contrast color palette meeting 4.5:1 ratio for body text and 3:1 for large headings.
   - Dedicated "Skip to main content" link for keyboard users.
   - Visible `:focus-visible` outline rings throughout all buttons and links.
   - Fully keyboard-operable Lightbox modal (Escape to close, Left/Right arrow keys for navigation).
   - Respect for `prefers-reduced-motion`.

---

## 4. Local Setup & Commands

### Prerequisites
- Node.js (v20 or v22 recommended)
- npm (v10+)
- Gemini API key (set in `.env` as `GEMINI_API_KEY`)

### Install Dependencies
```bash
npm install
```

### Run Full-Stack Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000` with hot-module reloading and active backend endpoints.

### Type Check & Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 5. Editing & Handover Guidance for Future Committees

Student officers can maintain and update the website each academic year without altering complex layouts:

1. **Updating Events:** Edit `EVENTS_DATA` in `src/data/branchData.ts`. Add your new symposium, workshop, or hackathon with date, venue, and registration link.
2. **Updating Officer Roster:** Edit `LEADERSHIP_ROSTER` in `src/data/branchData.ts` to replace annual placeholders once the new ExeCom has completed IEEE vTools reporting.
3. **Updating Projects:** Add new student-built prototypes in `PROJECTS_DATA` in `src/data/branchData.ts`.
4. **Updating Gallery Photos:** Add photography in `GALLERY_DATA` in `src/data/branchData.ts`. Ensure to add descriptive `altText` and flag whether the image is authentic or illustrative.

---

## 6. Verification Sources & Citations

1. RRCE Official News - IEEE TechFest 2026: `https://www.rrce.org/news/ieee-techfest-2026/`
2. RRCE Official IEEE Page: `https://www.rrce.org/ieee/`
3. RajaRajeswari College of Engineering: `https://www.rrce.org/`
4. IEEE Students Portal: `https://students.ieee.org/`
5. IEEE Student Branch Program: `https://students.ieee.org/student-branches/student-branch-program/`
6. IEEE Officer Responsibilities & Reporting: `https://students.ieee.org/student-branches/officer-responsibilities-reporting/`
7. IEEE Visual Identity Guidelines: `https://entrepreneurship.ieee.org/wp-content/uploads/2020/09/Powered-by-IEEE-Visual-Identity-Guidelines-2020.pdf`
8. IEEE Code of Ethics: `https://www.ieee.org/about/ethics.html`

---

## 7. Limitations & Honest Disclosures

- **Demonstration Forms:** The branch interest form and contact inquiry form operate in demonstration mode with client-side validation. In demo mode, submissions are not routed to third-party databases.
- **Roster Certification:** Operational ExeCom officer names are presented as role placeholders pending certified vTools handover.
- **Illustrative Imagery:** Illustrative conference setups in the photo gallery are tagged with visible badges to prevent confusion with campus archives.
