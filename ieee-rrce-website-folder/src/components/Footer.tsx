import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  Cpu, 
  HeartHandshake,
  FolderTree 
} from 'lucide-react';
import { BRANCH_INFO } from '../data/branchData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
  openFolderBrowser?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openAiHub, openFolderBrowser }) => {
  const currentYear = 2026;

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner: Student Engineering Mission */}
      <div className="bg-[#00456e] text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Cpu className="w-5 h-5 text-[#00B5E2]" />
            </div>
            <div>
              <p className="font-semibold text-sm sm:text-base">
                Advancing Technology for Humanity • IEEE Student Branch at RRCE
              </p>
              <p className="text-xs text-slate-200">
                Empowering student engineers at RajaRajeswari College of Engineering with technical mastery and ethical leadership.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {openFolderBrowser && (
              <button
                onClick={openFolderBrowser}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold shadow-sm transition-colors"
                title="Browse all project files directly without ZIP"
              >
                <FolderTree className="w-3.5 h-3.5 text-slate-900" />
                <span>Browse Project Folder</span>
              </button>
            )}
            <button
              onClick={openAiHub}
              className="px-3.5 py-2 bg-white text-[#00629B] hover:bg-slate-100 rounded-lg text-xs font-semibold shadow-sm transition-colors"
            >
              Ask AI Mentor
            </button>
            <a
              href="/ieee-rrce-website.zip"
              download="ieee-rrce-website.zip"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#00629B] hover:bg-[#003758] text-white rounded-lg text-xs font-semibold border border-white/20 transition-colors"
              title="Download standard ZIP archive"
            >
              <Download className="w-3.5 h-3.5" />
              Standard ZIP
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity & Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#00629B] text-white font-bold flex items-center justify-center text-lg">
                IEEE
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  IEEE Student Branch
                </h3>
                <p className="text-xs text-[#00B5E2] font-medium">IEEE RRCE Bengaluru</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official student branch at RajaRajeswari College of Engineering. Affiliated with Visvesvaraya Technological University (VTU) Belagavi, approved by AICTE, accredited by NAAC (A+ Grade) and NBA.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60 text-xs space-y-1">
              <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Institutional Identity
              </p>
              <p className="text-slate-400 text-[11px]">
                Organizer news description: <span className="text-slate-200">“IEEE Student Branch Chapter – IEEE RRCE”</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Branch Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
                  Home & Announcements
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About Branch & Mission
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('events')} className="hover:text-white transition-colors">
                  Events & TechFest 2026
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('projects')} className="hover:text-white transition-colors">
                  Student Technical Projects
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('chapters')} className="hover:text-white transition-colors">
                  Computer Society, RAS, PES & WIE
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('leadership')} className="hover:text-white transition-colors">
                  Faculty Advisor & Student Officers
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('gallery')} className="hover:text-white transition-colors">
                  Photo & Activity Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official External Portals */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Official IEEE & College Portals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={BRANCH_INFO.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>RRCE Official Website</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BRANCH_INFO.contact.officialIeeePage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>RRCE IEEE Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BRANCH_INFO.contact.officialNewsPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>IEEE TechFest 2026 Notice</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://ieeebangalore.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>IEEE Bangalore Section</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://students.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>IEEE Students Global Program</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BRANCH_INFO.contact.globalJoinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#00B5E2] hover:text-white font-medium transition-colors"
                >
                  <span>Official Global IEEE Membership</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Location & Verified Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Campus Location & Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#00B5E2] flex-shrink-0 mt-0.5" />
              <span>
                {BRANCH_INFO.location.address}, {BRANCH_INFO.location.area}, {BRANCH_INFO.location.city} {BRANCH_INFO.location.postalCode}, {BRANCH_INFO.location.state}, {BRANCH_INFO.location.country}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#00B5E2] flex-shrink-0" />
              <a href={`mailto:${BRANCH_INFO.contact.email}`} className="hover:text-white transition-colors">
                {BRANCH_INFO.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-[#00B5E2] flex-shrink-0" />
              <span>{BRANCH_INFO.contact.phone} (College Campus)</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full text-center py-2 px-3 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded border border-slate-700 transition-colors"
              >
                View Campus Map & FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Editorial Disclosure */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p>
              © {currentYear} IEEE Student Branch at RajaRajeswari College of Engineering (RRCE). Built with React, Vite, Tailwind CSS & Google GenAI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-xs">
              <span className="text-slate-400">Time Zone: Asia/Kolkata (IST)</span>
              <span>•</span>
              <button onClick={() => navigateTo('about')} className="hover:text-white">
                Verification Sources
              </button>
              <span>•</span>
              <button onClick={() => navigateTo('membership')} className="hover:text-white">
                Member Disclosure
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 leading-normal">
            Disclaimer: IEEE is the world’s largest technical professional organization dedicated to advancing technology for humanity. This website is operated by student volunteers and faculty advisors of the IEEE Student Branch at RajaRajeswari College of Engineering. Unofficial student rosters and illustrative sample records are visibly labeled with placeholder notices.
          </p>
        </div>
      </div>
    </footer>
  );
};
