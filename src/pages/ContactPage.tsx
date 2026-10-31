import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  ExternalLink, 
  Building2, 
  HelpCircle 
} from 'lucide-react';
import { BRANCH_INFO, FAQ_DATA, FaqItem } from '../data/branchData';

interface ContactPageProps {
  openAiHub: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ openAiHub }) => {
  // FAQ state
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Event Inquiry');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSuccess, setFormSuccess] = useState(false);

  // Filter FAQ
  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Full name is required.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email address is required.';
    if (!subject.trim()) errs.subject = 'Subject line is required.';
    if (!message.trim() || message.trim().length < 10) errs.message = 'Message must be at least 10 characters long.';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSuccess(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
          Get in Touch & Frequently Asked Questions
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
          Contact IEEE RRCE Student Branch
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          Reach out for event collaboration, student membership queries, or speaker invitations. Visit us at the RajaRajeswari College of Engineering campus in Bengaluru.
        </p>
      </div>

      {/* CONTACT INFO & MAP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Details Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* RRCE Campus Photograph Banner */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={BRANCH_INFO.campusPhotos.mainBuilding}
                alt="RRCE Main Academic Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-3.5">
                <span className="bg-[#9F1239] text-white text-[10px] font-extrabold px-2.5 py-1 rounded shadow uppercase tracking-wider">
                  RRCE Campus • Mysore Road, Bengaluru
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00629B]" />
                <span>Campus Physical Location</span>
              </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00629B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">RajaRajeswari College of Engineering</p>
                  <p className="text-slate-600">{BRANCH_INFO.location.address}</p>
                  <p className="text-slate-600">{BRANCH_INFO.location.area}</p>
                  <p className="text-slate-600">{BRANCH_INFO.location.city} - {BRANCH_INFO.location.postalCode}, {BRANCH_INFO.location.state}, {BRANCH_INFO.location.country}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Landmark: Near Mysore Road Metro / Kumbalgodu Industrial Area</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00629B] shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-xs">Branch Email</p>
                  <a href={`mailto:${BRANCH_INFO.contact.email}`} className="text-xs text-[#00629B] hover:underline">
                    {BRANCH_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00629B] shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-xs">Campus Helpline</p>
                  <p className="text-xs text-slate-600">{BRANCH_INFO.contact.phone}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00629B] shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-xs">Branch Operating Hours</p>
                  <p className="text-xs text-slate-600">Monday – Friday: 09:00 AM – 04:30 PM IST</p>
                  <p className="text-[11px] text-slate-400">Closed on university public holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Quick links to college portals */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs space-y-2">
            <span className="font-bold text-slate-800 uppercase tracking-wider block text-[11px]">
              Verified College URLs
            </span>
            <div className="space-y-1.5">
              <a
                href={BRANCH_INFO.contact.officialIeeePage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#00629B] hover:underline"
              >
                <span>RRCE Official IEEE Webpage</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRANCH_INFO.contact.officialNewsPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#00629B] hover:underline"
              >
                <span>IEEE TechFest 2026 Announcement</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={BRANCH_INFO.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#00629B] hover:underline"
              >
                <span>RRCE College Main Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Embedded Google Map & Routing Help (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm">Interactive Campus Map</h3>
                <p className="text-[11px] text-slate-300">RajaRajeswari College of Engineering, Mysore Road, Bengaluru</p>
              </div>
              <a
                href="https://maps.google.com/?q=RajaRajeswari+College+of+Engineering+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#00B5E2] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full h-80 sm:h-96 bg-slate-100">
              <iframe
                title="Google Map showing RajaRajeswari College of Engineering Bengaluru"
                src={BRANCH_INFO.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Directions: Accessible via Kengeri TTMC bus station and Challaghatta / Kengeri metro stations on the Purple Line, followed by BMTC feeder services toward Kumbalgodu.
          </p>
        </div>

      </div>

      {/* CONTACT INQUIRY FORM */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Direct Communication
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            Send an Inquiry to the Branch Committee
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Have questions regarding upcoming paper presentations, technical workshops, or chapter activities? Submit your query below.
          </p>
        </div>

        {/* DEMO NOTICE DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#00629B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold text-slate-800">Demonstration Notice:</span> This contact form runs in client-side demonstration mode with real input validation. Submitted messages are not transmitted to external email servers. For urgent academic communication, write directly to <a href={`mailto:${BRANCH_INFO.contact.email}`} className="text-[#00629B] font-semibold underline">{BRANCH_INFO.contact.email}</a>.
          </p>
        </div>

        {formSuccess ? (
          <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-3 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg">Inquiry Validated Successfully</h3>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Thank you, <strong>{name}</strong>! In an active deployment, your message would be dispatched to the IEEE RRCE executive committee inbox ({BRANCH_INFO.contact.email}).
            </p>
            <button
              onClick={() => {
                setFormSuccess(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }}
              className="px-4 py-2 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    formErrors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {formErrors.name && <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {formErrors.email && <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
                >
                  <option>IEEE TechFest 2026 Participation</option>
                  <option>Technical Workshop / Masterclass Registration</option>
                  <option>Project Mentorship & Hardware Loan</option>
                  <option>Global IEEE Student Membership Inquiries</option>
                  <option>Speaker / Industry Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject Line *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Query regarding TechFest paper submission deadline"
                  className={`w-full text-xs sm:text-sm px-3.5 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                    formErrors.subject ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {formErrors.subject && <p className="text-[11px] text-red-600 mt-1">{formErrors.subject}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Message / Query *
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please describe your query in detail..."
                className={`w-full text-xs sm:text-sm p-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] ${
                  formErrors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}
              />
              {formErrors.message && <p className="text-[11px] text-red-600 mt-1">{formErrors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-500">
                Data collected is used strictly for technical branch correspondence.
              </span>
              <button
                type="submit"
                className="px-6 py-3 bg-[#00629B] hover:bg-[#00456e] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry (Demo)</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
              Student Knowledge Base
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#00629B]" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Answers to common student questions about events, membership distinction, paper publishing, and chapter activities.
            </p>
          </div>

          {/* FAQ Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-1 focus:ring-[#00629B]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
          {(['All', 'General', 'Membership', 'Events', 'Research & Papers'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFaqCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                selectedFaqCategory === cat
                  ? 'bg-[#00629B] text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {faq.question}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500 hidden sm:inline">
                      {faq.category}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#00629B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Prompting Fallback */}
        <div className="p-4 bg-gradient-to-r from-slate-900 to-[#00456e] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p className="font-bold">Have a question not listed here?</p>
            <p className="text-slate-300 text-[11px]">Ask our Gemini-powered AI Technical Mentor anytime for instant engineering guidance.</p>
          </div>
          <button
            onClick={openAiHub}
            className="px-4 py-2 bg-white text-[#00629B] hover:bg-slate-100 font-bold rounded-lg shrink-0 transition-colors"
          >
            Ask AI Assistant
          </button>
        </div>
      </div>

    </div>
  );
};
