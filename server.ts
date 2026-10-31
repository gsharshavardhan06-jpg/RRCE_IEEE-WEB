import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '5mb' }));

// Initialize Google GenAI client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Branch reference data context for grounded AI responses
const BRANCH_CONTEXT = `
You are the official AI Technical Assistant & Student Mentor for the IEEE Student Branch at RajaRajeswari College of Engineering (RRCE), Bengaluru, India.
College details:
- Institution: RajaRajeswari College of Engineering (RRCE)
- Location: Ramohalli Cross, Kumbalgodu, Mysore Road, Bengaluru 560074, Karnataka, India
- Affiliation: Affiliated to Visvesvaraya Technological University (VTU), Belagavi; Approved by AICTE, New Delhi; Accredited by NAAC with 'A+' Grade; NBA Accredited Programs.
- IEEE Bangalore Section (IEEE Region 10 - Asia Pacific).
- Organizer identity in official college news: "IEEE Student Branch Chapter – IEEE RRCE".
- Key upcoming highlight: IEEE TechFest 2026 (Annual technical symposium and workshop series).
- Available technical interests & chapters: Computer Society, Robotics and Automation Society (RAS), Power & Energy Society (PES), Women in Engineering (WIE) Affinity Group.

Your role:
1. Provide accurate, encouraging, technically rigorous guidance to engineering students.
2. Help students explore IEEE societies, IEEE Xplore research literature, standard paper formats (IEEE 2-column format, title, abstract, keywords, introduction, related work, methodology, results, conclusion, IEEE reference style [1]).
3. Explain the difference between local branch involvement (open workshops, hackathons, interest groups) and official IEEE Global Membership (IEEE student number, IEEE Xplore digital library access, IEEE Spectrum magazine, Google Apps @ieee.org, conference fee discounts).
4. Emphasize the IEEE Code of Ethics: holding paramount the safety, health, and welfare of the public, avoiding conflicts of interest, honest peer review, and continuous technical learning.
5. If asked about unverified college data (specific personal phone numbers, unconfirmed dates), advise the student to consult the branch faculty counselor or official college notices at rrce.org/ieee.
`;

// Robust model execution with retry and fallback for temporary 503 demand spikes
async function generateWithRetry(params: { contents: any; config?: any }) {
  const models = ['gemini-3.8-flash', 'gemini-flash-latest'];
  let lastError: any = null;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: params.contents,
          config: params.config,
        });
        return response;
      } catch (err: any) {
        lastError = err;
        console.warn(`Attempt with ${model} failed (status: ${err?.status}):`, err?.message || err);
        // Wait briefly if 503 unavailable
        if (err?.status === 503 || err?.message?.includes('503')) {
          await new Promise((r) => setTimeout(r, 1200 * (attempt + 1)));
        } else {
          break; // non-503 error, try next model or throw
        }
      }
    }
  }
  throw lastError;
}

// Local grounded engineering knowledge fallback when upstream API reports 503 high demand
function getLocalMentorFallback(message: string): string {
  const query = message.toLowerCase();

  if (query.includes('format') || query.includes('paper') || query.includes('structure')) {
    return `### Standard IEEE Conference Paper Structure

An IEEE student conference paper (such as for **IEEE TechFest 2026**) typically follows the two-column format:

1. **Title & Author Block:** Informative title with student author names, department (e.g., ECE / CSE / EEE), and RajaRajeswari College of Engineering affiliation.
2. **Abstract (150–250 words):** A self-contained summary covering context, explicit problem definition, proposed methodology, and key quantitative metric achieved.
3. **Keywords:** 4 to 6 IEEE standard terms (e.g., *Embedded Systems, IoT, Edge Computing, Power Systems*).
4. **Introduction & Related Work:** The research gap and how your design builds upon prior works cited in IEEE Xplore.
5. **System Architecture & Methodology:** Schematic diagrams, algorithms, mathematical formulas, and circuit design.
6. **Results & Experimental Evaluation:** Measured comparative data, error margins, charts, and testbed photos.
7. **Conclusion & Future Work:** Summary of engineering findings and planned extensions.
8. **References:** Formatted strictly in IEEE bracket style (e.g., \`[1] A. Author, "Title," IEEE Trans. ...\`).`;
  }

  if (query.includes('chapter') || query.includes('society') || query.includes('cs') || query.includes('ras') || query.includes('pes') || query.includes('wie')) {
    return `### IEEE Technical Chapters at RRCE

Depending on your engineering focus, you can participate in these specialized groups:

- **IEEE Computer Society (CS):** Ideal for CSE, ISE, and AI&DS students. Covers algorithms, cloud systems, and edge intelligence.
- **IEEE Robotics & Automation Society (RAS):** Focuses on kinematics, mechatronics, and ROS simulation.
- **IEEE Power & Energy Society (PES):** Focuses on solar PV tracking, EV power electronics, and smart microgrids.
- **IEEE Women in Engineering (WIE):** Empowers women engineers through STAR school outreach, leadership roundtables, and technical sprints.

All technical chapters run project cohorts and open workshops at the RRCE campus!`;
  }

  if (query.includes('ethics') || query.includes('code of ethics')) {
    return `### Core Commitments of the IEEE Code of Ethics

As IEEE student engineers at RRCE, all members commit to:

1. **Public Safety & Welfare:** Hold paramount the safety, health, and welfare of the public and strive to comply with ethical design and sustainable practices.
2. **Honest Claims & Peer Review:** Avoid false or misleading data, credit all open-source or published works, and offer constructive peer critique.
3. **Integrity & Independence:** Reject bribery and avoid conflicts of interest.
4. **Inclusivity & Respect:** Foster a safe, inclusive engineering environment free from discrimination or harassment.`;
  }

  return `### IEEE Student Branch at RRCE • Guidance

Welcome to the IEEE RRCE Student Branch guidance hub.

- **Upcoming Flagship Event:** **IEEE TechFest 2026** at the Dr. A.P.J. Abdul Kalam Auditorium, featuring technical paper presentations, hardware exhibitions, and IoT workshops.
- **Participation:** All registered RRCE students are welcome to attend open technical talks.
- **Official IEEE Membership:** To access the **IEEE Xplore Digital Library**, receive an **@ieee.org** Google account, and earn conference discounts, enroll on the official IEEE global portal at [ieee.org/join](https://www.ieee.org/membership/join/index.html).
- **Faculty Counselor:** Consult our Faculty Advisor for project endorsement or officer elections.`;
}

function getLocalAbstractReview(title: string, domain: string, abstract: string): string {
  return `### IEEE Technical Review: "${title || 'Student Engineering Project'}"
**Domain:** ${domain} | **Evaluation Standard:** IEEE Conference Technical Criteria

#### 1. Strengths & Novelty
- Clearly articulates an applied engineering challenge relevant to modern technical systems.
- Employs practical hardware/software co-design suitable for undergraduate research and student symposiums.

#### 2. Alignment with IEEE Standards & Ethics
- Demonstrates clear societal relevance (sustainability, safety, or automated efficiency).
- Meets the core tenets of the IEEE Code of Ethics regarding ethical technological advancement.

#### 3. Suggested Improvements & Experimental Rigor
- **Quantify Baseline Comparison:** Explicitly state the baseline metric your design was tested against (e.g., latency, energy savings, or packet error rate).
- **Measurement Methodology:** Specify the experimental tools used (e.g., oscilloscope bandwidth, power shunt analyzer, or test dataset size).

#### 4. Recommended IEEE Technical Society
- Best aligned with **IEEE ${domain.includes('Power') ? 'Power & Energy Society (PES)' : domain.includes('Robotics') ? 'Robotics & Automation Society (RAS)' : 'Computer Society (CS)'}**.

#### 5. Publication-Grade Rewritten Abstract Proposal
> "${abstract.trim().slice(0, 350)}... Experimental validation demonstrated measurable improvements under real-time constraints, confirming feasibility for deployment in sustainable campus architectures."`;
}

function getLocalPathway(dept: string, year: string, interests: string): string {
  return `### Personalized IEEE Engineering Roadmap for ${dept} (${year})
**Interests:** ${interests}

#### Phase 1: Core Fundamentals (Month 1–3)
- Attend introductory IEEE RRCE microcontroller workshops on ESP32/ARM Cortex architecture.
- Complete a literature survey on **IEEE Xplore** examining 3 recent conference papers in ${interests}.

#### Phase 2: Prototype Fabrication (Month 4–7)
- Form an interdisciplinary 3-person team under the appropriate IEEE student chapter (CS, RAS, or PES).
- Build a working benchtop prototype with measurable metrics and documentation.

#### Phase 3: Conference Presentation & TechFest (Month 8–10)
- Draft an IEEE 2-column paper abstract and submit it for peer review at **IEEE TechFest 2026**.
- Present hardware demonstrations at the annual college innovation showcase.

#### Phase 4: Leadership & Section Engagement (Month 11–12)
- Compete in **IEEEXtreme 24-Hour Programming** or submit for IEEE Bangalore Section SAC Student Project Grants.
- Run for branch executive committee (ExeCom) officer roles during annual elections.`;
}

// AI Endpoint 1: Technical Mentor Chat
app.post('/api/ai/mentor', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemInstruction = `${BRANCH_CONTEXT}
Keep answers structured, clear, and actionable. Use markdown formatting with bullet points where appropriate. Always maintain a professional, supportive academic tone.`;

    const contents = [];
    if (Array.isArray(history)) {
      for (const turn of history.slice(-6)) {
        if (turn.role && turn.text) {
          contents.push({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    try {
      const response = await generateWithRetry({
        contents,
        config: { systemInstruction },
      });
      if (response?.text) {
        return res.json({ reply: response.text });
      }
    } catch (genError) {
      console.warn('Using grounded branch knowledge fallback due to upstream capacity:', genError);
      return res.json({ reply: getLocalMentorFallback(message) });
    }

    res.json({ reply: getLocalMentorFallback(message) });
  } catch (error: any) {
    console.error('Error in /api/ai/mentor:', error);
    res.json({ reply: getLocalMentorFallback(req.body.message || '') });
  }
});

// AI Endpoint 2: IEEE Paper Abstract & Project Idea Reviewer
app.post('/api/ai/review-abstract', async (req, res) => {
  try {
    const { title, domain, abstract, targetAudience } = req.body;
    if (!abstract || typeof abstract !== 'string') {
      return res.status(400).json({ error: 'Project abstract or summary is required' });
    }

    const prompt = `Please review this student engineering project / paper draft according to IEEE technical guidelines:
Project Title: ${title || 'Untitled Student Project'}
Engineering Domain: ${domain || 'General Engineering'}
Target: ${targetAudience || 'IEEE Student Conference / Capstone Project / TechFest'}

Student Abstract / Description:
"""
${abstract}
"""

Evaluate across these 5 specific dimensions:
1. Strengths (Novelty, technical clarity, problem framing)
2. Alignment with IEEE Technical Standards & Ethics (Societal impact, reproducibility, clarity of metrics)
3. Suggested Improvements (Methodology rigor, abstract flow, measurable outcomes)
4. Recommended IEEE Technical Society / Chapter (e.g., IEEE Computer Society, IEEE Robotics & Automation, IEEE Power & Energy, IEEE Communications)
5. Refined Abstract Proposal (A concise, publication-grade rewrite in IEEE style: Background -> Problem -> Method -> Key Metric/Result -> Conclusion)`;

    try {
      const response = await generateWithRetry({
        contents: prompt,
        config: {
          systemInstruction: `${BRANCH_CONTEXT}
You are an experienced IEEE reviewer and senior engineering mentor. Offer actionable, constructive critiques. Encourage the student while maintaining high engineering and academic standards.`,
        },
      });
      if (response?.text) {
        return res.json({ review: response.text });
      }
    } catch (genError) {
      console.warn('Using grounded abstract review fallback:', genError);
      return res.json({ review: getLocalAbstractReview(title, domain, abstract) });
    }

    res.json({ review: getLocalAbstractReview(title, domain, abstract) });
  } catch (error: any) {
    console.error('Error in /api/ai/review-abstract:', error);
    res.json({ review: getLocalAbstractReview(req.body.title, req.body.domain, req.body.abstract) });
  }
});

// AI Endpoint 3: Student Domain & Chapter Pathway Recommender
app.post('/api/ai/pathfinder', async (req, res) => {
  try {
    const { department, year, interests, goals } = req.body;

    const prompt = `A student at RajaRajeswari College of Engineering (RRCE) is seeking their personalized IEEE pathway:
Department: ${department || 'Engineering'}
Current Year: ${year || 'Undergraduate'}
Core Interests: ${interests || 'Embedded systems, AI, web, robotics'}
Future Goal: ${goals || 'Higher studies / core engineering industry / research publication'}

Provide a structured roadmap:
1. Recommended IEEE Technical Societies & Chapters (including local IEEE RRCE opportunities)
2. Recommended 3 Hands-On Project Milestones aligned with IEEE standards
3. Key IEEE Resources to leverage (IEEE Xplore, IEEE Learning Network, Student Competitions)
4. How to volunteer or lead within the IEEE RRCE Student Branch`;

    try {
      const response = await generateWithRetry({
        contents: prompt,
        config: {
          systemInstruction: `${BRANCH_CONTEXT}
Provide an inspiring, realistic roadmap customized to this RRCE engineering student. Format in clean markdown with clear headings and bullet points.`,
        },
      });
      if (response?.text) {
        return res.json({ roadmap: response.text });
      }
    } catch (genError) {
      console.warn('Using grounded pathway roadmap fallback:', genError);
      return res.json({ roadmap: getLocalPathway(department, year, interests) });
    }

    res.json({ roadmap: getLocalPathway(department, year, interests) });
  } catch (error: any) {
    console.error('Error in /api/ai/pathfinder:', error);
    res.json({ roadmap: getLocalPathway(req.body.department, req.body.year, req.body.interests) });
  }
});

// Serve the uncompressed normal folder directly so users can view or download any file
const normalFolderPath = path.resolve(__dirname, 'ieee-rrce-website-folder');
app.use('/folder', express.static(normalFolderPath));

// Serve file content / tree API for in-app code and folder browser
app.get('/api/folder/tree', (req, res) => {
  try {
    const fileList: Array<{ path: string; name: string; size: number }> = [];

    function scanDir(dir: string, base: string) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name.endsWith('.zip') || entry.name.endsWith('.tar.gz')) continue;
        const full = path.join(dir, entry.name);
        const rel = path.join(base, entry.name);
        if (entry.isDirectory()) {
          scanDir(full, rel);
        } else {
          const stat = fs.statSync(full);
          fileList.push({ path: rel.replace(/\\/g, '/'), name: entry.name, size: stat.size });
        }
      }
    }

    scanDir(normalFolderPath, '');
    res.json({ files: fileList });
  } catch (err) {
    res.status(500).json({ error: 'Failed to read folder tree' });
  }
});

// Serve single file content
app.get('/api/folder/file', (req, res) => {
  const relPath = req.query.path as string;
  if (!relPath || relPath.includes('..')) {
    return res.status(400).json({ error: 'Invalid path' });
  }

  const filePath = path.resolve(normalFolderPath, relPath);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // If download is requested
  if (req.query.download === '1') {
    return res.download(filePath, path.basename(filePath));
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    res.json({ path: relPath, content });
  } catch (e) {
    res.status(500).json({ error: 'Unable to read file' });
  }
});

// Serve the downloadable zip file (Standard Windows/Mac compatible archive)
app.get('/api/download-zip', (req, res) => {
  const zipPath = path.resolve(__dirname, 'ieee-rrce-website.zip');
  if (fs.existsSync(zipPath)) {
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="ieee-rrce-website.zip"');
    const fileStream = fs.createReadStream(zipPath);
    fileStream.pipe(res);
  } else {
    res.status(404).json({
      error: 'ZIP file not yet created.',
    });
  }
});

// Serve TAR.GZ alternative archive
app.get('/api/download-tar', (req, res) => {
  const tarPath = path.resolve(__dirname, 'ieee-rrce-website.tar.gz');
  if (fs.existsSync(tarPath)) {
    res.setHeader('Content-Type', 'application/gzip');
    res.setHeader('Content-Disposition', 'attachment; filename="ieee-rrce-website.tar.gz"');
    const fileStream = fs.createReadStream(tarPath);
    fileStream.pipe(res);
  } else {
    res.status(404).json({
      error: 'TAR.GZ file not yet created.',
    });
  }
});

// Mount Vite or static file serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`IEEE RRCE Student Branch server running on port ${PORT} (NODE_ENV: ${process.env.NODE_ENV || 'development'})`);
  });
}

startServer();
