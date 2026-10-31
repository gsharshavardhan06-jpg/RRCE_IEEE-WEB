import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Tag, 
  Sparkles, 
  Send, 
  Lightbulb 
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/branchData';

interface ProjectsPageProps {
  openAiHub: () => void;
  setActiveTab: (tab: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ openAiHub, setActiveTab }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalDept, setProposalDept] = useState('');
  const [proposalDesc, setProposalDesc] = useState('');

  const domains = ['All', 'Embedded Systems & IoT', 'Power & Energy Systems', 'Robotics & Computer Vision'];

  const filteredProjects = selectedDomain === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.domain === selectedDomain);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalTitle || !proposalDesc) return;
    setSubmissionSuccess(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Applied Engineering & Prototypes
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Student Projects & Technical Demonstrations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Real hardware-software builds mentored under IEEE RRCE chapters. We encourage interdisciplinary collaboration across CSE, ECE, EEE, AI&DS, and Mechanical engineering.
          </p>
        </div>

        <button
          onClick={openAiHub}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00629B] to-[#00456e] text-white rounded-xl text-xs font-semibold shadow hover:shadow-md transition-all shrink-0"
        >
          <Sparkles className="w-4 h-4 text-[#00B5E2]" />
          <span>Review Abstract with AI</span>
        </button>
      </div>

      {/* Editorial Disclaimer Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#00629B] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-800">Transparency Note:</span> The items showcased below represent approved technical initiative templates and capstone prototypes developed in accordance with IEEE engineering guidelines. In compliance with student privacy regulations, individual student roll numbers are withheld.
        </div>
      </div>

      {/* Domain Filters */}
      <div className="flex flex-wrap gap-2">
        {domains.map((dom) => (
          <button
            key={dom}
            onClick={() => setSelectedDomain(dom)}
            className={`text-xs px-3.5 py-2 rounded-xl transition-colors ${
              selectedDomain === dom
                ? 'bg-[#00629B] text-white font-bold shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {dom}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Project Hardware & Software Prototype Image */}
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-white bg-[#00629B] px-2.5 py-0.5 rounded shadow">
                    {project.domain}
                  </span>
                  <span className="text-[10px] font-bold text-slate-900 bg-white/90 px-2 py-0.5 rounded shadow">
                    {project.status}
                  </span>
                </div>
                <div>
                  <span className="bg-[#9F1239] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    RRCE Student Prototype
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">

              {/* Title */}
              <h3 className="font-bold text-base text-slate-900 leading-snug">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.summary}
              </p>

              {/* Chapter Affiliation */}
              <div className="text-xs text-slate-700 font-medium flex items-center gap-1.5 pt-1">
                <Layers className="w-3.5 h-3.5 text-[#00629B]" />
                <span>Mentored by: <strong>{project.chapterAffiliation}</strong></span>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1.5 uppercase tracking-wider">
                  Technologies Employed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measured Outcome */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Outcome & Milestone
                </span>
                <p className="text-[11px] leading-relaxed text-slate-600">{project.outcome}</p>
              </div>

              {/* Editorial label */}
              <div className="text-[10px] text-slate-400 bg-slate-50/50 p-2 rounded border border-slate-100">
                <span className="font-semibold text-slate-600">Sample Classification:</span> {project.verification.note}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveTab('membership');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#00629B] hover:underline"
              >
                Inquire about project cohort →
              </button>
              <button
                onClick={openAiHub}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                title="Review similar project idea"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00B5E2]" />
                <span>AI Review</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PROPOSE A STUDENT PROJECT OR CAPSTONE FOR IEEE MENTORSHIP */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Student Innovation Incubator
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Propose a Project for IEEE RRCE Mentorship
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Have an engineering prototype idea, IoT concept, or VTU final-year project proposal? Submit your technical brief to connect with student branch chapter mentors and faculty advisors.
          </p>
        </div>

        {submissionSuccess ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 space-y-2">
            <h3 className="font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Project Proposal Received!
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Thank you for submitting <strong>"{proposalTitle}"</strong>. The IEEE RRCE Technical Committee will review your brief during the upcoming monthly project clinic. You can also test and polish your abstract right now using our AI Abstract Reviewer!
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={openAiHub}
                className="px-4 py-2 bg-[#00629B] text-white text-xs font-semibold rounded-lg"
              >
                Launch AI Paper Reviewer
              </button>
              <button
                onClick={() => {
                  setSubmissionSuccess(false);
                  setProposalTitle('');
                  setProposalDept('');
                  setProposalDesc('');
                }}
                className="px-4 py-2 bg-white border border-emerald-300 text-emerald-800 text-xs font-semibold rounded-lg"
              >
                Submit another idea
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitProposal} className="space-y-4 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Proposed Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={proposalTitle}
                  onChange={(e) => setProposalTitle(e.target.value)}
                  placeholder="e.g. Automated Micro-Hydro Turbine Monitor"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Department & Team Members *
                </label>
                <input
                  type="text"
                  required
                  value={proposalDept}
                  onChange={(e) => setProposalDept(e.target.value)}
                  placeholder="e.g. 3rd Year ECE / Team of 3"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Technical Brief & Target IEEE Chapter *
              </label>
              <textarea
                rows={4}
                required
                value={proposalDesc}
                onChange={(e) => setProposalDesc(e.target.value)}
                placeholder="Explain the problem statement, proposed hardware/software architecture, and what guidance you need from IEEE RRCE..."
                className="w-full text-xs sm:text-sm p-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-[11px] text-slate-500">
                Note: In demo mode, submissions are validated locally. For official endorsement, submit through your department project coordinator.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#00629B] hover:bg-[#00456e] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Proposal</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
