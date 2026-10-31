import React from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Target, 
  Eye, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Building2, 
  Globe 
} from 'lucide-react';
import { BRANCH_INFO, OFFICIAL_RESOURCES } from '../data/branchData';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, openAiHub }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
          About IEEE Student Branch at RRCE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Engineering Excellence & Leadership for Humanity
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          The IEEE Student Branch at RajaRajeswari College of Engineering (RRCE), Bengaluru, provides undergraduate and postgraduate engineering students with a professional platform for technical growth, collaborative project development, and IEEE global networking.
        </p>
      </div>

      {/* Official Identity & Affiliation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#00629B]/10 text-[#00629B] flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-base text-slate-900">Host Institution</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>RajaRajeswari College of Engineering (RRCE)</strong>, established under Moogambigai Charitable and Educational Trust, Bengaluru.
          </p>
          <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Affiliated to VTU, Belagavi
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Approved by AICTE, New Delhi
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Accredited with NAAC 'A+' Grade & NBA
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#00B5E2]/20 text-[#00629B] flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="font-bold text-base text-slate-900">IEEE Geographic Hierarchy</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The student branch functions within the organizational structure of the world's premier technical professional body:
          </p>
          <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
            <li className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Region:</span> IEEE Region 10 (Asia-Pacific)
            </li>
            <li className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Section:</span> IEEE Bangalore Section
            </li>
            <li className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-800">Official Tag:</span> IEEE Student Branch Chapter – IEEE RRCE
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#00B5E2]" />
          </div>
          <h2 className="font-bold text-base text-slate-900">Governance & Bylaws</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Supervised by designated Faculty Advisors/Counselors following IEEE Student Branch reporting bylaws. Event reporting and meeting minutes are archived on <strong>IEEE vTools</strong>.
          </p>
          <div className="pt-1">
            <a
              href="https://students.ieee.org/student-branches/officer-responsibilities-reporting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#00629B] hover:underline inline-flex items-center gap-1"
            >
              IEEE Officer Responsibilities
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#00629B] to-[#00456e] text-white p-8 rounded-2xl shadow-md space-y-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2">
            <Target className="w-5 h-5 text-[#00B5E2]" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Our Branch Mission</h2>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
            To cultivate technical excellence, scientific inquiry, and collaborative innovation among students of RajaRajeswari College of Engineering. We provide an egalitarian platform where students can acquire cutting-edge engineering skills, publish peer-reviewed research, engage in IEEE competitions, and build technologies that address pressing regional and societal challenges.
          </p>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-md space-y-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-2">
            <Eye className="w-5 h-5 text-[#00B5E2]" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Our Branch Vision</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            To stand as a vibrant, model IEEE Student Branch in the IEEE Bangalore Section, recognized for student-led technological breakthroughs, sustainable community outreach, active technical societies (Computer Society, RAS, PES, WIE), and nurturing ethical engineers who champion technology for humanity.
          </p>
        </div>
      </div>

      {/* RRCE CAMPUS & LABORATORY INFRASTRUCTURE OVERVIEW WITH PHOTO COPIES */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9F1239] bg-rose-100/70 px-2.5 py-0.5 rounded border border-rose-200">
              Campus Facilities & Infrastructure
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              RajaRajeswari College of Engineering Facilities
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              State-of-the-art facilities located on Kumbalgodu, Mysore Road campus supporting student branch initiatives.
            </p>
          </div>
          <button
            onClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#00629B] hover:underline shrink-0"
          >
            View Photo Gallery →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="h-44 overflow-hidden">
              <img
                src={BRANCH_INFO.campusPhotos.mainBuilding}
                alt="RRCE Main Academic Block"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Main Campus
              </span>
              <h3 className="font-bold text-xs text-slate-900">Academic Block & Campus Quad</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Modern multi-storey engineering facility with lecture halls, smart classrooms, departmental research centers, and seminar halls.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="h-44 overflow-hidden">
              <img
                src={BRANCH_INFO.campusPhotos.auditorium}
                alt="Dr. A.P.J. Abdul Kalam Auditorium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-[#9F1239] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                TechFest 2026 Venue
              </span>
              <h3 className="font-bold text-xs text-slate-900">Dr. A.P.J. Abdul Kalam Auditorium</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Central fully air-conditioned 800+ seater hall with high-definition AV equipment hosting annual IEEE symposia and national conferences.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs group">
            <div className="h-44 overflow-hidden">
              <img
                src={BRANCH_INFO.campusPhotos.microprocessorLab}
                alt="Core Microprocessor & IoT Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-[#00629B] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Electronics & IoT Hub
              </span>
              <h3 className="font-bold text-xs text-slate-900">Microprocessor & IoT Lab</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Hands-on workbench laboratory for embedded microcontrollers, sensor nodes, and real-time computing student experiments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Students Can Learn or Contribute */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">What You Gain at IEEE RRCE</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Student members develop tangible competencies spanning engineering hardware, modern software stacks, and organizational leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Hands-on Hardware & IoT</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work with real microcontrollers (ESP32, STM32, Arduino), wireless protocols (LoRaWAN, Zigbee, BLE), and sensor calibration in guided laboratory clinics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Research Paper Authoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Learn structured scientific methodology, literature citation using IEEE Xplore, LaTeX paper formatting, and how to present at IEEE international conferences.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Annual TechFest Organization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gain professional event management experience coordinating hackathons, paper evaluation juries, stage logistics, and budget tracking under faculty guidance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">IEEE Bangalore Section Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participate in inter-college Student Activity Committee (SAC) meets, IEEE Xtreme 24-Hour competitive programming, and congresses across Karnataka.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Women in Engineering (WIE)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participate in dedicated STEM mentorship circles, technical skill acceleration sprints, and community outreach teaching schoolchildren basic robotics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2">
            <h3 className="font-bold text-sm text-slate-900">Executive Committee Leadership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elected student officers hone leadership, financial stewardship, public speaking, and report filing on IEEE vTools for global recognition.
            </p>
          </div>
        </div>
      </div>

      {/* IEEE CODE OF ETHICS */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#00629B]" />
          <h2 className="text-xl font-bold text-slate-900">
            Adherence to the IEEE Code of Ethics
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Every member and volunteer of the IEEE Student Branch at RRCE commits to the IEEE Code of Ethics. In our technical projects, hackathons, and research reviews, we commit:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 pt-2">
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong>1. Public Safety & Welfare:</strong> To hold paramount the safety, health, and welfare of the public and to strive to comply with ethical design and sustainable development practices.
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong>2. Honest Claims & Peer Review:</strong> To be honest and realistic in stating claims or estimates based on available data, and to credit the contributions of others properly.
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong>3. Integrity & Conflicts:</strong> To reject bribery, avoid real or perceived conflicts of interest whenever possible, and disclose them to affected parties when they do exist.
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200">
            <strong>4. Inclusivity & Respect:</strong> To treat all persons fairly and with respect, avoid harassment, and avoid unlawful discrimination based on race, religion, gender, or disability.
          </div>
        </div>
        <div className="pt-2">
          <a
            href="https://www.ieee.org/about/ethics.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#00629B] hover:underline inline-flex items-center gap-1"
          >
            Read the complete IEEE Code of Ethics document
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* VERIFIED SOURCES AND CITATIONS */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#00629B]" />
          Verified Reference Sources & Editorial Disclosures
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          In strict compliance with editorial accuracy and IEEE guidelines, this website uses only verified facts from published college records and official IEEE portals. Any operational roles undergoing annual transition are designated with role placeholders:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
          {OFFICIAL_RESOURCES.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-[#00629B] uppercase">
                  {res.badge}
                </span>
                <p className="font-semibold text-slate-800 mt-1">{res.title}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">{res.description}</p>
              </div>
              <span className="text-[11px] font-medium text-[#00629B] mt-2 inline-flex items-center gap-1">
                Visit source <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Clear Next Step CTA */}
      <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Ready to take your next step?</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Explore our upcoming TechFest schedule, volunteer for our next workshop, or test your draft project abstract with our AI Engineering Mentor.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={() => {
              setActiveTab('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-[#00629B] hover:bg-[#00456e] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors"
          >
            Explore Events & TechFest
          </button>
          <button
            onClick={() => {
              setActiveTab('membership');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
          >
            Join Branch Interest Roster
          </button>
          <button
            onClick={openAiHub}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <span>Ask AI Engineering Assistant</span>
          </button>
        </div>
      </div>

    </div>
  );
};
