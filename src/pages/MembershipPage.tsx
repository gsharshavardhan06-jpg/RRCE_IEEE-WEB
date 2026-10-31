import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle, 
  ShieldCheck, 
  Send, 
  UserPlus, 
  BookOpen, 
  Globe, 
  Lock 
} from 'lucide-react';
import { BRANCH_INFO } from '../data/branchData';

interface MembershipPageProps {
  openAiHub: () => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ openAiHub }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [usn, setUsn] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [year, setYear] = useState('2nd Year B.E.');
  const [preferredChapter, setPreferredChapter] = useState('Computer Society');
  const [roleInterest, setRoleInterest] = useState<'Event Volunteer' | 'Technical Workshop Apprentice' | 'Web & Media' | 'General Member'>('Event Volunteer');
  const [consentGiven, setConsentGiven] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!usn.trim()) errs.usn = 'University Seat Number (USN) or Student ID is required.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid college or personal email is required.';
    if (!consentGiven) errs.consent = 'You must acknowledge the branch privacy note.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
          Get Involved & Membership
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
          Join the IEEE Community at RRCE
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Understand the exact pathways to participate: join our free local campus branch interest roster to volunteer and attend workshops, or enroll in official IEEE Global Membership for international digital library access and conference discounts.
        </p>
      </div>

      {/* TWO DISTINCT PATHWAYS COMPARISON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pathway A: Local Branch Interest (Free) */}
        <div className="bg-white rounded-2xl border-2 border-[#00629B]/30 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00629B]/10 text-[#00629B]">
              <UserPlus className="w-4 h-4" />
              Pathway 1: Campus Community
            </div>
            
            <h2 className="text-xl font-bold text-slate-900">
              IEEE RRCE Student Branch Interest Roster
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Open to all enrolled students at RajaRajeswari College of Engineering regardless of year or department. No initial membership fee is required.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                What this gives you:
              </span>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Notices about upcoming campus workshops, hackathons, and IEEE TechFest 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Opportunities to volunteer in event organizing, technical committees, and media teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Peer collaboration on IoT, robotics, and power engineering project builds</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="#branch-interest-form"
              className="block w-full py-3 bg-[#00629B] hover:bg-[#00456e] text-white font-bold text-xs sm:text-sm rounded-xl text-center transition-colors"
            >
              Fill Campus Branch Interest Form Below ↓
            </a>
          </div>
        </div>

        {/* Pathway B: Global IEEE Membership (Official) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00B5E2]/20 text-[#00B5E2] border border-[#00B5E2]/40">
              <Globe className="w-4 h-4" />
              Pathway 2: International Professional Body
            </div>

            <h2 className="text-xl font-bold text-white">
              Official IEEE Global Membership
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Enrolled through the official IEEE.org international portal. Students receive a 50% discount on standard global membership dues through the Future50 initiative.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block">
                Official IEEE Global Benefits:
              </span>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B5E2] shrink-0 mt-0.5" />
                  <span>Official IEEE 8-digit Member Number recognized worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B5E2] shrink-0 mt-0.5" />
                  <span>Full access to <strong>IEEE Xplore Digital Library</strong> research papers & transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B5E2] shrink-0 mt-0.5" />
                  <span>Free Google Apps account with a permanent <strong>@ieee.org</strong> professional email address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B5E2] shrink-0 mt-0.5" />
                  <span>Discounted student registration at IEEE conferences worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00B5E2] shrink-0 mt-0.5" />
                  <span>Subscription to <em>IEEE Spectrum</em> and <em>IEEE Potentials</em> magazines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <a
              href={BRANCH_INFO.contact.globalJoinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#00B5E2] hover:bg-[#009ac2] text-slate-950 font-bold text-xs sm:text-sm rounded-xl text-center transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Enroll on Official IEEE.org Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* LOCAL BRANCH INTEREST FORM */}
      <div id="branch-interest-form" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 scroll-mt-24">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Campus Registration
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            RRCE Student Branch Interest & Volunteering Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Fill this form to be placed on the branch internal notifications roster for hands-on technical clinics, hardware loan opportunities, and symposium volunteering.
          </p>
        </div>

        {/* DEMONSTRATION & PRIVACY NOTICE */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Demonstration Notice & Data Privacy Policy</p>
            <p className="leading-relaxed">
              This form is a demonstration interface for the student branch website. In demonstration mode, submitted information is validated on the client side and not transmitted to external commercial databases. For formal department event enrollment, consult your department IEEE student representative or the Branch Counselor.
            </p>
          </div>
        </div>

        {formSubmitted ? (
          <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-3 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Thank You, {fullName}!</h3>
            <p className="text-xs leading-relaxed text-emerald-800">
              Your interest in the <strong>{preferredChapter}</strong> chapter under the <strong>{roleInterest}</strong> track has been validated. You will receive circulars and event notifications for IEEE RRCE activities.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFullName('');
                  setUsn('');
                  setEmail('');
                  setPhone('');
                  setConsentGiven(false);
                }}
                className="px-4 py-2 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Submit another response
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Student Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ananya Rao"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  University Seat Number (USN) *
                </label>
                <input
                  type="text"
                  value={usn}
                  onChange={(e) => setUsn(e.target.value)}
                  placeholder="e.g. 1RR22EC001"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    errors.usn ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.usn && <p className="text-[11px] text-red-600 mt-1">{errors.usn}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  College or Personal Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@rrce.org or personal email"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
                >
                  <option>Computer Science & Engineering</option>
                  <option>Electronics & Communication Engineering</option>
                  <option>Artificial Intelligence & Data Science</option>
                  <option>Electrical & Electronics Engineering</option>
                  <option>Information Science & Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Academic Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
                >
                  <option>1st Year B.E. (Freshman)</option>
                  <option>2nd Year B.E. (Sophomore)</option>
                  <option>3rd Year B.E. (Junior)</option>
                  <option>4th Year B.E. (Senior / Capstone)</option>
                  <option>Postgraduate / M.Tech</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Technical Chapter Focus
                </label>
                <select
                  value={preferredChapter}
                  onChange={(e) => setPreferredChapter(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
                >
                  <option>IEEE Computer Society (CS)</option>
                  <option>IEEE Robotics & Automation Society (RAS)</option>
                  <option>IEEE Power & Energy Society (PES)</option>
                  <option>IEEE Women in Engineering (WIE)</option>
                  <option>Cross-Disciplinary Technical Projects</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How Would You Like to Contribute?
                </label>
                <select
                  value={roleInterest}
                  onChange={(e) => setRoleInterest(e.target.value as any)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
                >
                  <option>Event Volunteer (Logistics, Anchoring, Registration)</option>
                  <option>Technical Workshop Apprentice (Hardware & Coding)</option>
                  <option>Web & Media (Graphics, Documentation, Web Lead)</option>
                  <option>General Member (Attendee)</option>
                </select>
              </div>
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-[#00629B] focus:ring-[#00629B]"
                />
                <span className="text-xs text-slate-600 leading-normal">
                  I understand this is an internal RRCE Student Branch interest submission and does not substitute for paid official IEEE Global Membership. I agree to receive technical event circulars from IEEE RRCE.
                </span>
              </label>
              {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" />
                No password or payment information requested
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#00629B] hover:bg-[#00456e] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Branch Interest</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
