import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Download, 
  Award 
} from 'lucide-react';
import { OFFICIAL_RESOURCES, BRANCH_INFO } from '../data/branchData';

interface NewsResourcesPageProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
}

export const NewsResourcesPage: React.FC<NewsResourcesPageProps> = ({ setActiveTab, openAiHub }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
          Dispatches & Knowledge Base
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
          News & Verified IEEE Resources
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Official institutional circulars published by RRCE, combined with authoritative research repositories, digital libraries, and officer reporting guides from IEEE.org.
        </p>
      </div>

      {/* OFFICIAL VERIFIED ANNOUNCEMENTS */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#00629B]" />
          <span>Institutional Notices & News Dispatches</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Announcement 1: TechFest 2026 */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4 hover:border-[#00629B]/40 transition-colors">
            <div className="flex items-center justify-between text-xs">
              <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded">
                Official Campus News Notice
              </span>
              <span className="text-slate-400">March 2026 Announcement</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              RajaRajeswari College of Engineering Announces IEEE TechFest 2026
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the institutional banner "IEEE Student Branch Chapter – IEEE RRCE," RajaRajeswari College of Engineering has officially released the schedule for IEEE TechFest 2026. The three-day engineering confluence encompasses technical paper tracks across computing and electronics, working hardware demonstrations, and student project pitch sessions.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">Verified Verification Source:</p>
              <a
                href={BRANCH_INFO.contact.officialNewsPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00629B] hover:underline flex items-center gap-1 font-medium break-all"
              >
                <span>https://www.rrce.org/news/ieee-techfest-2026/</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveTab('events');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#00629B] hover:underline"
              >
                View full TechFest schedule & tracks →
              </button>
            </div>
          </div>

          {/* Announcement 2: IEEE Bangalore Section Student Activities */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4 hover:border-[#00629B]/40 transition-colors">
            <div className="flex items-center justify-between text-xs">
              <span className="bg-[#00629B]/10 text-[#00629B] font-bold px-2.5 py-0.5 rounded">
                Section Coordination
              </span>
              <span className="text-slate-400">IEEE Bangalore Section</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              Student Activities Committee (SAC) Karnataka Regional Meet
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Student branch officers from RRCE will represent the branch at the upcoming Bangalore Section Student Congress. Discussion topics include student travel grants for Region 10 conferences, inter-college robotics hackathons, and IEEE vTools compliance workshops.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">Parent Body Reference:</p>
              <a
                href="https://ieeebangalore.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00629B] hover:underline flex items-center gap-1 font-medium"
              >
                <span>IEEE Bangalore Section Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#00629B] hover:underline"
              >
                Learn about IEEE geographic hierarchy →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CURATED VERIFIED IEEE RESEARCH & LEARNING RESOURCES */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#00629B]" />
            <span>Authoritative IEEE Portals & Digital Repositories</span>
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Access world-renowned scientific repositories, digital courses, student competitions, and officer documentation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_RESOURCES.map((res, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#00629B] bg-[#00629B]/10 px-2.5 py-0.5 rounded uppercase">
                  {res.badge}
                </span>
                <h3 className="font-bold text-base text-slate-900">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Direct Link:</span>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#00629B] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REPOSITORY & WEBSITE ASSETS DOWNLOAD */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#00B5E2] uppercase tracking-wider">
              Student Committee Codebase & Archive
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Download Full Website Source Archive (ZIP)
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Includes all React, TypeScript, Tailwind CSS source code, verified branch data models, documentation, and asset credits.
            </p>
          </div>
          <a
            href="/api/download-zip"
            className="px-5 py-3 bg-[#00629B] hover:bg-[#00456e] text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 shadow-md inline-flex items-center gap-2 shrink-0 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download ieee-rrce-website.zip</span>
          </a>
        </div>
      </div>

    </div>
  );
};
