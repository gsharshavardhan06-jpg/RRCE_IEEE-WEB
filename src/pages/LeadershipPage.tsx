import React from 'react';
import { 
  UserCheck, 
  Mail, 
  ShieldAlert, 
  FileCode, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Users 
} from 'lucide-react';
import { LEADERSHIP_ROSTER, LeadershipRole } from '../data/branchData';

interface LeadershipPageProps {
  setActiveTab: (tab: string) => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ setActiveTab }) => {
  const facultyRoster = LEADERSHIP_ROSTER.filter(r => r.category === 'Faculty Advisory');
  const studentExecRoster = LEADERSHIP_ROSTER.filter(r => r.category !== 'Faculty Advisory');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Governance & Executive Committee
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Branch Leadership & Faculty Advisory
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            The IEEE Student Branch at RRCE operates under the guidance of our Faculty Counselor and an annually elected student executive committee following IEEE Student Branch bylaws.
          </p>
        </div>

        {/* Annual transition notice */}
        <div className="flex items-center gap-2 text-xs bg-amber-50 text-amber-900 px-3.5 py-2 rounded-xl border border-amber-200 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Annual Officer Handover: AY 2025–26 Roster</span>
        </div>
      </div>

      {/* Editorial Transparency Policy */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-1">
        <p className="font-bold text-slate-800 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          IEEE Student Branch Ethics & Privacy Policy
        </p>
        <p className="leading-relaxed">
          In adherence to branch reporting standards and student privacy, generic role placeholders are maintained in public web builds until officially certified by the Branch Counselor in the IEEE vTools Officer Reporting system.
        </p>
      </div>

      {/* FACULTY COUNSELOR & ADVISOR SECTION */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-[#00629B]" />
          <span>Faculty Advisory & Branch Counselor</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facultyRoster.map((leader, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4 hover:border-[#00629B]/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00629B]/10 text-[#00629B] font-bold text-xl flex items-center justify-center shrink-0 border border-[#00629B]/20">
                  FC
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#00629B] bg-[#00629B]/10 px-2.5 py-0.5 rounded uppercase">
                    {leader.roleTitle}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mt-1">
                    {leader.incumbentName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{leader.department}</p>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Key Counselor Responsibilities
                </span>
                <ul className="text-xs text-slate-600 space-y-1">
                  {leader.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00629B] shrink-0 mt-1.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Institutional Contact:</span>
                <a
                  href={`mailto:${leader.contactEmail}`}
                  className="font-semibold text-[#00629B] hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {leader.contactEmail}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STUDENT EXECUTIVE COMMITTEE */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#00629B]" />
          <span>Student Executive Committee (ExeCom)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentExecRoster.map((officer, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00629B] bg-[#00629B]/10 px-2.5 py-0.5 rounded">
                    {officer.roleTitle}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    AY 2025–26
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {officer.incumbentName}
                  </h3>
                  <p className="text-[11px] text-slate-500">{officer.department}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Portfolio
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {officer.responsibilities.slice(0, 2).map((res, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Official Roster</span>
                <a
                  href={`mailto:${officer.contactEmail}`}
                  className="text-xs font-medium text-[#00629B] hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW OFFICER ELECTIONS & HANDOVERS WORK */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          How to Become an IEEE RRCE Branch Officer
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Leadership roles in IEEE are open to active student members in good academic standing. Holding an officer position qualifies you for IEEE Bangalore Section leadership certificates, organizational mentorship, and project funding coordination.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="font-bold text-slate-800">1. Maintain IEEE Membership</span>
            <p className="text-slate-600 text-[11px]">
              ExeCom officers must hold active IEEE Student Member status throughout their tenure.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="font-bold text-slate-800">2. Active Participation</span>
            <p className="text-slate-600 text-[11px]">
              Serve as a volunteer in at least one major symposium (e.g. IEEE TechFest) or technical workshop.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
            <span className="font-bold text-slate-800">3. Annual Nomination</span>
            <p className="text-slate-600 text-[11px]">
              Submit your expression of interest when the Branch Counselor issues the election notice in the spring term.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setActiveTab('membership');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-[#00629B] hover:bg-[#00456e] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Submit Student Volunteer Expression of Interest
          </button>
        </div>
      </div>

      {/* MAINTENANCE & HANDOVER NOTES FOR FUTURE COMMITTEES */}
      <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 sm:p-8 space-y-3 text-xs">
        <div className="flex items-center gap-2 text-white">
          <FileCode className="w-5 h-5 text-[#00B5E2]" />
          <h3 className="font-bold text-sm sm:text-base">
            Incoming Committee Maintenance Guide (Handover Note)
          </h3>
        </div>
        <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
          To update officer names for the next academic year, edit <code className="text-[#00B5E2] bg-slate-800 px-1.5 py-0.5 rounded">src/data/branchData.ts</code> in the <code className="text-[#00B5E2] bg-slate-800 px-1.5 py-0.5 rounded">LEADERSHIP_ROSTER</code> array. Ensure every officer has submitted their report via IEEE vTools at <a href="https://vtools.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-white underline">vtools.ieee.org</a> within 30 days of election.
        </p>
      </div>

    </div>
  );
};
