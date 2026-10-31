import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Award, 
  BookOpen, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Clock,
  Download,
  Building2,
  Camera,
  Layers
} from 'lucide-react';
import { 
  BRANCH_INFO, 
  EVENTS_DATA, 
  CHAPTERS_DATA, 
  PROJECTS_DATA 
} from '../data/branchData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
  setSelectedEvent: (event: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  setActiveTab, 
  openAiHub, 
  setSelectedEvent 
}) => {
  // Get upcoming event
  const upcomingEvent = EVENTS_DATA.find(e => e.id === 'techfest-2026') || EVENTS_DATA[0];
  const pastRecap = EVENTS_DATA.find(e => e.registrationStatus === 'completed');

  // Campus facilities for photo showcase
  const campusFacilities = [
    {
      title: 'Dr. A.P.J. Abdul Kalam Auditorium',
      category: 'Flagship Event & Keynote Venue',
      image: BRANCH_INFO.campusPhotos.auditorium,
      description: 'Air-conditioned 800+ seat campus auditorium hosting IEEE TechFest 2026 keynote symposia, research presentations, and inter-college convocations.',
      venueBadge: 'TechFest 2026 Venue'
    },
    {
      title: 'Core Microprocessor & Embedded Systems Lab',
      category: 'Electronics & Computing Block, 3rd Floor',
      image: BRANCH_INFO.campusPhotos.microprocessorLab,
      description: 'Advanced testing benches equipped with digital storage oscilloscopes, logic analyzers, ARM Cortex, ESP32, STM32 kits, and solder stations.',
      venueBadge: 'Hands-on Prototyping'
    },
    {
      title: 'RRCE Central Library & Digital Research Terminal',
      category: 'Knowledge Centre, Ground Floor',
      image: BRANCH_INFO.campusPhotos.library,
      description: 'Dedicated e-resource research terminal with high-speed campus LAN access to IEEE Xplore Digital Library, VTU consortium journals, and study pods.',
      venueBadge: 'IEEE Xplore Access'
    },
    {
      title: 'RRCE Innovation & Incubation Centre',
      category: 'Technology Transfer & Startup Nursery',
      image: BRANCH_INFO.campusPhotos.incubationCenter,
      description: 'Rapid prototyping space equipped for 24-hour student hackathons, venture pitch sprints, and collaborative startup mentorship.',
      venueBadge: 'Hackathon Sprint Hub'
    },
    {
      title: 'Robotics & Automation Workshop',
      category: 'Mechanical & Mechatronics Quad',
      image: BRANCH_INFO.campusPhotos.roboticsWorkshop,
      description: 'Fabrication zone with 3D printers, CNC tooling, motor driver testbeds, and omnidirectional chassis kits for IEEE RAS student teams.',
      venueBadge: 'IEEE RAS Chapter Lab'
    },
    {
      title: 'RRCE Main Campus Quad & Academic Block',
      category: 'Kumbalgodu, Mysore Road, Bengaluru',
      image: BRANCH_INFO.campusPhotos.mainBuilding,
      description: 'Sprawling green engineering campus situated along Bangalore-Mysore corridor, accommodating state-of-the-art departments and active IEEE societies.',
      venueBadge: 'RRCE Campus'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* VERIFIED BANNER WITH RRCE CRIMSON & GOLD HIGHLIGHT */}
      <div className="bg-gradient-to-r from-rose-900 via-amber-900 to-[#00456e] text-white px-4 py-2.5 text-xs shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="bg-[#9F1239] text-white font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase border border-rose-400/40 shadow-xs">
              RRCE Official Notice
            </span>
            <span className="text-amber-200 font-medium">
              Flagship Symposium: <strong className="text-white">IEEE TechFest 2026</strong> announced at RajaRajeswari College of Engineering!
            </span>
          </div>
          <a
            href={BRANCH_INFO.contact.officialNewsPage}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-amber-300 hover:text-white hover:underline inline-flex items-center gap-1 shrink-0 transition-colors"
          >
            Read college news circular
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* HERO SECTION WITH DUAL BRANDING (IEEE ROYAL BLUE & RRCE CRIMSON/GOLD) */}
      <section className="relative bg-gradient-to-b from-[#0b1f33] via-[#00456e] to-[#00629B] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle engineering grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 bg-[#9F1239] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-rose-400/40">
                  <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                  <span>RRCE Institutional Chapter</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 text-xs text-slate-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00B5E2] animate-ping" />
                  <span>IEEE Region 10 • Bangalore Section</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Advancing Technology for Humanity at <span className="text-[#00B5E2]">IEEE RRCE</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
                A student-led engineering community at <strong className="text-amber-200 font-semibold">RajaRajeswari College of Engineering</strong>, Bengaluru. We bridge classroom engineering fundamentals with hands-on hardware development, IEEE peer-reviewed research, hackathons, and global student networking.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <span>Explore Events & TechFest</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => {
                    setActiveTab('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  Join Branch Roster
                </button>

                <button
                  onClick={openAiHub}
                  className="px-4 py-3.5 bg-[#0b1f33]/90 hover:bg-[#0b1f33] border border-[#00B5E2]/50 text-[#00B5E2] font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#00B5E2]" />
                  <span>AI Engineering Assistant</span>
                </button>

                <a
                  href="/ieee-rrce-website.zip"
                  download="ieee-rrce-website.zip"
                  className="px-4 py-3.5 bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-100 font-semibold text-sm rounded-xl flex items-center gap-2 transition-colors"
                  title="Download complete project ZIP file"
                >
                  <Download className="w-4 h-4 text-rose-300" />
                  <span>Download ZIP</span>
                </a>
              </div>

              {/* Institution Credentials Bar with RRCE Maroon & Emerald Accents */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>VTU Belagavi Affiliated</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AICTE Approved</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>NAAC A+ & NBA Accredited</span>
                </span>
              </div>
            </div>

            {/* Right Card: Next Upcoming Event Highlight with Dr. A.P.J. Abdul Kalam Auditorium Photo */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-5 shadow-2xl text-slate-900 border border-slate-100 space-y-4">
                
                {/* Event Photo Preview with Venue Badge */}
                <div className="relative h-48 rounded-xl overflow-hidden shadow-sm group">
                  <img 
                    src={upcomingEvent.venuePhoto} 
                    alt={upcomingEvent.venueLabel} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-between p-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 bg-[#00629B] text-white font-bold text-[11px] px-2.5 py-1 rounded-full shadow">
                        <Calendar className="w-3.5 h-3.5" />
                        Featured Event
                      </span>
                      <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full shadow-xs border border-emerald-300">
                        Registration Open
                      </span>
                    </div>

                    <div>
                      <span className="bg-[#9F1239] text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow-md inline-block uppercase tracking-wider">
                        {upcomingEvent.venueLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                    {upcomingEvent.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {upcomingEvent.shortDescription}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-700 space-y-2 border border-slate-200/80">
                  <div className="flex items-center gap-2 font-semibold text-slate-900">
                    <Calendar className="w-4 h-4 text-[#00629B]" />
                    <span>{upcomingEvent.dateDisplay} ({upcomingEvent.time})</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#9F1239] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{upcomingEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Time Zone: Asia/Kolkata (IST - UTC+05:30)</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedEvent(upcomingEvent);
                    }}
                    className="flex-1 py-2.5 px-4 bg-[#00629B] hover:bg-[#00456e] text-white text-xs font-bold rounded-xl transition-colors text-center shadow"
                  >
                    View Schedule & Register
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                  >
                    All Events
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RRCE CAMPUS INFRASTRUCTURE & FACILITIES PHOTO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#9F1239] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                RRCE Campus Facilities
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Bengaluru Campus Tour
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Engineering Labs & Activity Venues
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Photographs of facilities supporting IEEE Student Branch technical symposia, research authoring, and student hardware development at RajaRajeswari College of Engineering.
            </p>
          </div>
          <button
            onClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] hover:text-[#00456e] hover:underline shrink-0"
          >
            <Camera className="w-4 h-4 text-[#9F1239]" />
            <span>Open Complete Campus Photo Gallery</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusFacilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#9F1239] text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow-md tracking-wider uppercase">
                    {facility.venueBadge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {facility.category}
                  </span>
                  <h3 className="font-bold text-sm text-slate-900 mt-2 leading-snug group-hover:text-[#00629B] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-[#00629B]" />
                    RRCE Campus
                  </span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    IEEE Accessible
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO GET INVOLVED (Concise 3-Step Pathway for First-Time Visitors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            First-Time Visitor Pathway
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            How to Get Involved at IEEE RRCE
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            You do not need prior research experience or an existing IEEE membership to start participating in our open student activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-t-[#00629B] border-x border-b border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-[#00629B]/10 text-[#00629B] font-bold text-lg flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Discover & Attend Open Events
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Join open technical seminars, hands-on microcontrollers masterclasses, and college TechFest events. Most introductory talks are open to all RRCE engineering branches.
            </p>
            <button
              onClick={() => {
                setActiveTab('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#00629B] hover:text-[#00456e] inline-flex items-center gap-1"
            >
              Browse event schedule
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-t-[#9F1239] border-x border-b border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#9F1239] font-bold text-lg flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Build with Technical Chapters
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Connect with IEEE Computer Society, Robotics and Automation (RAS), Power & Energy (PES), or Women in Engineering (WIE). Work on verified student prototypes.
            </p>
            <button
              onClick={() => {
                setActiveTab('chapters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#9F1239] hover:text-[#881337] inline-flex items-center gap-1"
            >
              Explore technical chapters
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border-t-4 border-t-amber-500 border-x border-b border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 font-bold text-lg flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">
              Join Global IEEE & Lead
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Enroll in official IEEE Student Membership for IEEE Xplore digital access, conference discounts, IEEE Spectrum, and eligibility for annual branch officer leadership roles.
            </p>
            <button
              onClick={() => {
                setActiveTab('membership');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
            >
              View membership & volunteering
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* FEATURED TECHNICAL CHAPTERS PREVIEW WITH LAB IMAGERY */}
      <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-white px-3 py-1 rounded-full border border-slate-200">
                Specialized Societies & Affinity Groups
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                IEEE Technical Chapters at RRCE
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Deepen your knowledge in computing, autonomous robotics, sustainable grids, and diversity in engineering.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('chapters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00629B] hover:text-[#00456e]"
            >
              <span>View all chapter details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHAPTERS_DATA.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow"
              >
                {/* Chapter Lab Image */}
                <div className="relative h-32 overflow-hidden bg-slate-100">
                  <img
                    src={chapter.imageUrl}
                    alt={chapter.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] font-extrabold text-white bg-slate-950/80 px-2 py-0.5 rounded shadow">
                      {chapter.shortCode}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-slate-500">
                        {chapter.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug mb-2 group-hover:text-[#00629B] transition-colors">
                      {chapter.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
                      {chapter.targetDepartments[0]}
                    </span>
                    <button
                      onClick={() => {
                        setActiveTab('chapters');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-bold text-[#00629B] hover:underline"
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED PAST ACTIVITY RECAP WITH LAB PHOTOGRAPH */}
      {pastRecap && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-2xl text-white relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2.5 py-0.5 rounded">
                    Recent Workshop Outcome
                  </span>
                  <span className="text-xs text-slate-400">{pastRecap.dateDisplay}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {pastRecap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pastRecap.fullDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    80+ Registered Student Participants
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Interdisciplinary (CSE, ECE, EEE)
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedEvent(pastRecap);
                    }}
                    className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-100 rounded-xl font-bold text-xs shadow-md transition-colors"
                  >
                    Read Event Report & Outcomes
                  </button>
                </div>
              </div>

              {/* Lab Photo of Workshop */}
              <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative">
                <img
                  src={pastRecap.venuePhoto}
                  alt={pastRecap.venueLabel}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="bg-[#9F1239] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {pastRecap.venueLabel}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* AI ASSISTANT PROMPT STRIP WITH RRCE CRIMSON ACCENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#00629B] via-[#00456e] to-[#9F1239] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-amber-200 font-semibold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Powered by Google Gemini 3.8 Flash
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Try the IEEE RRCE AI Technical Mentor
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Get instant feedback on IEEE conference paper abstracts, advice on IEEE technical societies for your department, and answers to student branch FAQs.
            </p>
          </div>
          <button
            onClick={openAiHub}
            className="px-6 py-3.5 bg-white text-[#00629B] hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#00B5E2]" />
            <span>Launch AI Engineering Hub</span>
          </button>
        </div>
      </section>

    </div>
  );
};
