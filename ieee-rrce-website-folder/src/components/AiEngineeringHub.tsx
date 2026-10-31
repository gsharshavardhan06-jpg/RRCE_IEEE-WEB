import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  FileText, 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  RotateCcw, 
  Lightbulb, 
  X, 
  Bot, 
  User 
} from 'lucide-react';

interface AiEngineeringHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiEngineeringHub: React.FC<AiEngineeringHubProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'mentor' | 'reviewer' | 'pathfinder'>('mentor');

  // Tab 1: Mentor State
  const [mentorInput, setMentorInput] = useState('');
  const [mentorLoading, setMentorLoading] = useState(false);
  const [mentorMessages, setMentorMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: "Hello! I am your IEEE RRCE Technical Mentor & Branch Navigator, powered by Google Gemini. Ask me about IEEE technical societies, IEEE Xplore literature searches, conference paper formatting, the IEEE Code of Ethics, or our IEEE TechFest 2026 symposium!"
    }
  ]);

  // Tab 2: Reviewer State
  const [revTitle, setRevTitle] = useState('');
  const [revDomain, setRevDomain] = useState('Electronics & Computer Engineering');
  const [revTarget, setRevTarget] = useState('IEEE Student Conference / TechFest');
  const [revAbstract, setRevAbstract] = useState('');
  const [revLoading, setRevLoading] = useState(false);
  const [revResult, setRevResult] = useState<string | null>(null);
  const [copiedReview, setCopiedReview] = useState(false);

  // Tab 3: Pathfinder State
  const [pathDept, setPathDept] = useState('Computer Science & Engineering');
  const [pathYear, setPathYear] = useState('2nd Year Undergraduate');
  const [pathInterests, setPathInterests] = useState('Edge AI, Embedded Microcontrollers, Robotics');
  const [pathGoals, setPathGoals] = useState('Publish research paper and build real hardware prototypes');
  const [pathLoading, setPathLoading] = useState(false);
  const [pathResult, setPathResult] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle Mentor Send
  const handleSendMentor = async (textToSend?: string) => {
    const query = textToSend || mentorInput.trim();
    if (!query || mentorLoading) return;

    const newMessages = [...mentorMessages, { role: 'user' as const, text: query }];
    setMentorMessages(newMessages);
    setMentorInput('');
    setMentorLoading(true);

    try {
      const res = await fetch('/api/ai/mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: newMessages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', text: m.text }))
        })
      });
      const data = await res.json();
      if (data.reply) {
        setMentorMessages([...newMessages, { role: 'assistant', text: data.reply }]);
      } else {
        setMentorMessages([
          ...newMessages,
          { role: 'assistant', text: data.error || 'Server did not return a response. Please try again.' }
        ]);
      }
    } catch (err: any) {
      setMentorMessages([
        ...newMessages,
        { role: 'assistant', text: 'Network connection issue or server unavailable. Please try again.' }
      ]);
    } finally {
      setMentorLoading(false);
    }
  };

  // Handle Abstract Review
  const handleReviewAbstract = async () => {
    if (!revAbstract.trim() || revLoading) return;
    setRevLoading(true);
    setRevResult(null);

    try {
      const res = await fetch('/api/ai/review-abstract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: revTitle,
          domain: revDomain,
          targetAudience: revTarget,
          abstract: revAbstract
        })
      });
      const data = await res.json();
      if (data.review) {
        setRevResult(data.review);
      } else {
        setRevResult(data.error || 'Could not analyze abstract.');
      }
    } catch (err) {
      setRevResult('Network error while processing abstract.');
    } finally {
      setRevLoading(false);
    }
  };

  // Handle Pathfinder
  const handleGeneratePathway = async () => {
    if (pathLoading) return;
    setPathLoading(true);
    setPathResult(null);

    try {
      const res = await fetch('/api/ai/pathfinder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          department: pathDept,
          year: pathYear,
          interests: pathInterests,
          goals: pathGoals
        })
      });
      const data = await res.json();
      if (data.roadmap) {
        setPathResult(data.roadmap);
      } else {
        setPathResult(data.error || 'Could not generate pathway.');
      }
    } catch (err) {
      setPathResult('Failed to generate pathway.');
    } finally {
      setPathLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 2000);
  };

  // Sample Abstract Loader
  const loadSampleAbstract = () => {
    setRevTitle('Autonomous LoRaWAN Ambient Quality Monitoring Node with Solar Energy Harvesting');
    setRevDomain('Electronics & Communication / IoT');
    setRevTarget('IEEE Student Paper Conference');
    setRevAbstract(`Urban and educational campuses face localized air quality variations caused by vehicular transit and laboratory emissions. This project presents a standalone wireless sensor node utilizing an ESP32-S3 microcontroller coupled with an optical particulate sensor (SPS30) and electrochemical gas sensors. Data is packaged using compact binary serialization and transmitted over a 868 MHz LoRaWAN protocol to a campus gateway up to 3.2 km line-of-sight. The node is sustained by a 5W monocrystalline photovoltaic panel and supercapacitor buffer. Experimental testing demonstrated 99.2% packet reception rate with an average active power consumption of 42 mW, enabling indefinite outdoor telemetry without grid reliance.`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-hub-title"
    >
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00629B] via-[#00456e] to-[#0b1f33] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Sparkles className="w-6 h-6 text-[#00B5E2] animate-pulse" />
            </div>
            <div>
              <h2 id="ai-hub-title" className="text-lg sm:text-xl font-bold flex items-center gap-2">
                IEEE RRCE AI Engineering Hub
                <span className="text-[11px] font-semibold bg-[#00B5E2]/20 text-[#00B5E2] px-2 py-0.5 rounded-full border border-[#00B5E2]/40">
                  Gemini 3.8 Flash
                </span>
              </h2>
              <p className="text-xs text-slate-200">
                Grounded technical mentor, IEEE publication abstract reviewer, and student career navigator
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
            aria-label="Close AI Engineering Hub"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('mentor')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'mentor'
                ? 'border-[#00629B] text-[#00629B] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Branch Mentor Chat</span>
          </button>

          <button
            onClick={() => setActiveTab('reviewer')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'reviewer'
                ? 'border-[#00629B] text-[#00629B] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>IEEE Abstract Reviewer</span>
          </button>

          <button
            onClick={() => setActiveTab('pathfinder')}
            className={`pb-2.5 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'pathfinder'
                ? 'border-[#00629B] text-[#00629B] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Student Pathway Finder</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-white">
          
          {/* TAB 1: MENTOR */}
          {activeTab === 'mentor' && (
            <div className="flex flex-col h-full space-y-4">
              <div className="flex flex-wrap gap-1.5 pb-2 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Prompts:
                </span>
                {[
                  "What is standard IEEE 2-column paper structure?",
                  "Which chapter fits robotics & embedded systems?",
                  "What are key IEEE Code of Ethics commitments?",
                  "How to prepare for IEEE TechFest 2026?"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMentor(prompt)}
                    className="text-xs bg-slate-100 hover:bg-[#00629B]/10 hover:text-[#00629B] text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Chat Messages */}
              <div className="flex-1 space-y-3 min-h-[260px] max-h-[380px] overflow-y-auto pr-1">
                {mentorMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 text-xs sm:text-sm ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-full bg-[#00629B] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#00629B] text-white rounded-br-none'
                          : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/70 whitespace-pre-line'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {mentorLoading && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
                    <div className="w-2 h-2 rounded-full bg-[#00629B] animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-[#00629B] animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-[#00629B] animate-bounce [animation-delay:0.4s]" />
                    <span>Gemini is generating engineering guidance...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="pt-2 border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  value={mentorInput}
                  onChange={(e) => setMentorInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMentor()}
                  placeholder="Ask a technical or branch question (e.g. 'How do I submit to IEEE Xplore?')..."
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] focus:border-transparent"
                  disabled={mentorLoading}
                />
                <button
                  onClick={() => handleSendMentor()}
                  disabled={mentorLoading || !mentorInput.trim()}
                  className="px-4 py-2.5 bg-[#00629B] hover:bg-[#00456e] disabled:opacity-50 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: REVIEWER */}
          {activeTab === 'reviewer' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 flex items-start justify-between gap-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">IEEE Paper & Project Abstract Reviewer:</span> Paste your draft project summary or conference abstract below to receive feedback on novelty, IEEE ethical alignment, methodology rigor, and an IEEE-style rewritten abstract.
                  </div>
                </div>
                <button
                  onClick={loadSampleAbstract}
                  className="px-2.5 py-1 bg-white border border-amber-300 rounded text-amber-800 hover:bg-amber-100 font-medium text-[11px] whitespace-nowrap transition-colors"
                >
                  Load Sample Abstract
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project / Paper Title
                  </label>
                  <input
                    type="text"
                    value={revTitle}
                    onChange={(e) => setRevTitle(e.target.value)}
                    placeholder="e.g. Edge AI Sensor Node"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Engineering Department / Domain
                  </label>
                  <select
                    value={revDomain}
                    onChange={(e) => setRevDomain(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                  >
                    <option>Electronics & Communication Engineering</option>
                    <option>Computer Science & Engineering</option>
                    <option>AI & Data Science / Machine Learning</option>
                    <option>Electrical & Electronics Engineering</option>
                    <option>Mechanical & Mechatronics</option>
                    <option>Civil & Environmental Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Conference / Milestone
                  </label>
                  <input
                    type="text"
                    value={revTarget}
                    onChange={(e) => setRevTarget(e.target.value)}
                    placeholder="e.g. IEEE TechFest 2026 / VTU Capstone"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Draft Abstract / Project Summary (150 - 300 words recommended)
                </label>
                <textarea
                  rows={5}
                  value={revAbstract}
                  onChange={(e) => setRevAbstract(e.target.value)}
                  placeholder="Enter background, problem statement, methodology, hardware/software stack, and experimental findings..."
                  className="w-full text-xs sm:text-sm p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={handleReviewAbstract}
                  disabled={revLoading || !revAbstract.trim()}
                  className="px-5 py-2.5 bg-[#00629B] hover:bg-[#00456e] disabled:opacity-50 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#00B5E2]" />
                  <span>{revLoading ? 'Analyzing Abstract...' : 'Review Abstract & Structure'}</span>
                </button>
              </div>

              {revResult && (
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl relative">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      IEEE Expert Reviewer Feedback
                    </span>
                    <button
                      onClick={() => copyToClipboard(revResult)}
                      className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-[#00629B] p-1 rounded"
                    >
                      {copiedReview ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedReview ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed max-h-[300px] overflow-y-auto pr-2">
                    {revResult}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PATHFINDER */}
          {activeTab === 'pathfinder' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Identify the IEEE technical chapters, research resources, and milestone student projects best aligned with your branch and engineering ambitions at RRCE.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Department at RRCE
                  </label>
                  <input
                    type="text"
                    value={pathDept}
                    onChange={(e) => setPathDept(e.target.value)}
                    placeholder="e.g. Computer Science, ECE, EEE"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Academic Year
                  </label>
                  <select
                    value={pathYear}
                    onChange={(e) => setPathYear(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                  >
                    <option>1st Year (Freshman)</option>
                    <option>2nd Year (Sophomore)</option>
                    <option>3rd Year (Junior)</option>
                    <option>4th Year (Senior / Capstone)</option>
                    <option>M.Tech / Research Scholar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Technical Interests & Technologies You Enjoy
                </label>
                <input
                  type="text"
                  value={pathInterests}
                  onChange={(e) => setPathInterests(e.target.value)}
                  placeholder="e.g. IoT, Robotics, VLSI, Renewable energy, Web3, Deep Learning"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary 12-Month Goal
                </label>
                <input
                  type="text"
                  value={pathGoals}
                  onChange={(e) => setPathGoals(e.target.value)}
                  placeholder="e.g. Present a paper at IEEE TechFest, win a hackathon, build hardware portfolio"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-[#00629B]"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleGeneratePathway}
                  disabled={pathLoading}
                  className="px-5 py-2.5 bg-[#00629B] hover:bg-[#00456e] disabled:opacity-50 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#00B5E2]" />
                  <span>{pathLoading ? 'Designing Your Roadmap...' : 'Generate IEEE Student Roadmap'}</span>
                </button>
              </div>

              {pathResult && (
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 pb-2 border-b border-slate-200 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Personalized IEEE RRCE Engineering Roadmap
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed max-h-[300px] overflow-y-auto pr-2">
                    {pathResult}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer info note */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>AI outputs are intended for technical mentoring and academic guidance.</span>
          <span className="font-medium text-[#00629B]">IEEE Student Branch • IEEE RRCE</span>
        </div>
      </div>
    </div>
  );
};
