import React from 'react';
import { 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Users, 
  Award, 
  Sparkles, 
  Heart, 
  Compass 
} from 'lucide-react';
import { CHAPTERS_DATA } from '../data/branchData';

interface ChaptersPageProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
}

export const ChaptersPage: React.FC<ChaptersPageProps> = ({ setActiveTab, openAiHub }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Specialized Engineering Societies
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Chapters & Affinity Groups
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            IEEE Technical Chapters provide dedicated student groups focused on specific engineering disciplines—from artificial intelligence and autonomous robotics to clean power grids and diversity in STEM.
          </p>
        </div>

        <button
          onClick={openAiHub}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#00629B] text-white rounded-xl text-xs font-semibold shadow hover:bg-[#00456e] transition-all shrink-0"
        >
          <Compass className="w-4 h-4 text-[#00B5E2]" />
          <span>Find My Ideal Chapter with AI</span>
        </button>
      </div>

      {/* Chapters Detailed Breakdown */}
      <div className="space-y-8">
        {CHAPTERS_DATA.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-[#00629B]/40 transition-colors flex flex-col md:flex-row"
          >
            {/* Chapter Lab Image */}
            <div className="md:w-72 lg:w-80 h-52 md:h-auto relative overflow-hidden bg-slate-100 shrink-0">
              <img
                src={chapter.imageUrl}
                alt={chapter.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-between p-4">
                <span 
                  className="text-white text-xs font-extrabold px-2.5 py-1 rounded shadow self-start"
                  style={{ backgroundColor: chapter.accentColor || '#00629B' }}
                >
                  {chapter.shortCode}
                </span>
                <span className="text-white text-[11px] font-medium bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded self-start">
                  RRCE Chapter Lab
                </span>
              </div>
            </div>

            {/* Chapter Content */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Header info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 text-white shadow-xs"
                    style={{ backgroundColor: chapter.accentColor || '#00629B' }}
                  >
                    {chapter.shortCode}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      {chapter.name}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span className="font-semibold" style={{ color: chapter.accentColor || '#00629B' }}>{chapter.category}</span>
                      <span>•</span>
                      <span>Active in IEEE RRCE Student Branch</span>
                    </div>
                  </div>
                </div>

                <a
                  href={chapter.officialIeeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00629B] hover:underline shrink-0"
                >
                  <span>Global Society Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {chapter.description}
              </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Who it is for */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#00629B]" />
                  Target Engineering Branches
                </h3>
                <ul className="text-xs text-slate-600 space-y-1">
                  {chapter.targetDepartments.map((dept, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00629B]" />
                      <span>{dept}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What participants do */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#00629B]" />
                  Key Chapter Activities
                </h3>
                <ul className="text-xs text-slate-600 space-y-1">
                  {chapter.keyActivities.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Member Benefits */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#00629B]" />
                  Chapter Benefits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {chapter.membershipBenefit}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setActiveTab('membership');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-2 px-3 bg-[#00629B] hover:bg-[#00456e] text-white text-xs font-semibold rounded-lg text-center transition-colors"
                  >
                    Join {chapter.shortCode} Chapter
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
      </div>

      {/* External IEEE Competitions and Opportunities */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00B5E2] bg-white/10 px-3 py-1 rounded-full">
            Global Contests & Programs
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mt-2">
            International IEEE Student Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            As an IEEE student member at RRCE, you gain eligibility for premier international competitive events and travel grants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
            <h3 className="font-bold text-white text-sm">IEEEXtreme Programming</h3>
            <p className="text-slate-300 leading-relaxed">
              A virtual 24-hour global algorithmic programming competition where thousands of student proctors compete simultaneously against university teams worldwide.
            </p>
            <a
              href="https://ieeextreme.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B5E2] hover:underline font-semibold inline-flex items-center gap-1"
            >
              ieeextreme.org <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
            <h3 className="font-bold text-white text-sm">IEEE Region 10 SAC Awards</h3>
            <p className="text-slate-300 leading-relaxed">
              Excellence awards, student paper contests, and conference travel grants organized by IEEE Region 10 (Asia-Pacific) Student Activities Committee.
            </p>
            <a
              href="https://r10.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B5E2] hover:underline font-semibold inline-flex items-center gap-1"
            >
              r10.ieee.org <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
            <h3 className="font-bold text-white text-sm">IEEE Standards Education</h3>
            <p className="text-slate-300 leading-relaxed">
              Student grants up to $500 for senior capstone design projects incorporating recognized IEEE industry standards into their technical implementation.
            </p>
            <a
              href="https://standards.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B5E2] hover:underline font-semibold inline-flex items-center gap-1"
            >
              standards.ieee.org <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
