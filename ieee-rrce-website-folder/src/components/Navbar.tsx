import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  Award, 
  BookOpen, 
  Users, 
  Compass, 
  Cpu, 
  Mail, 
  ExternalLink,
  Download,
  FolderTree
} from 'lucide-react';
import { BRANCH_INFO } from '../data/branchData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openAiHub: () => void;
  openFolderBrowser?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  openAiHub,
  openFolderBrowser 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'projects', label: 'Projects & Tech' },
    { id: 'chapters', label: 'Chapters & WIE' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'membership', label: 'Get Involved' },
    { id: 'news', label: 'News & Resources' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip to main content for screen readers and keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00629B] focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Top institution reference bar */}
      <div className="bg-[#0b1f33] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white tracking-wide">RajaRajeswari College of Engineering</span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-400">Bengaluru (Affiliated to VTU, Belagavi)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-[#00B5E2] font-medium">IEEE Region 10 • Bangalore Section</span>
            <a
              href="https://www.rrce.org/ieee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white text-slate-400 underline underline-offset-2"
              aria-label="Official RRCE IEEE portal (opens in new tab)"
            >
              rrce.org/ieee
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo & Title */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#00629B] rounded-lg p-1"
            >
              {/* Authorized IEEE Emblem Lockup with RRCE Co-Brand */}
              <div className="w-12 h-12 rounded-lg bg-[#00629B] flex items-center justify-center text-white shadow-sm font-bold tracking-tighter text-xl border border-[#00456e] flex-shrink-0">
                <span>IEEE</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight group-hover:text-[#00629B] transition-colors">
                    IEEE Student Branch
                  </span>
                  <span className="bg-[#9F1239] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs uppercase tracking-wider">
                    RRCE
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-600 tracking-normal flex items-center gap-1.5">
                  <span className="text-amber-700 font-bold">RajaRajeswari College of Engineering</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-slate-500 font-normal hidden sm:inline truncate max-w-[200px]">
                    Bengaluru
                  </span>
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#00629B]/10 text-[#00629B] font-semibold'
                      : 'text-slate-700 hover:text-[#00629B] hover:bg-slate-100'
                  }`}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Buttons: Folder Browser, AI Hub, ZIP Download & Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              {openFolderBrowser && (
                <button
                  onClick={openFolderBrowser}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-300 transition-colors"
                  title="Browse uncompressed normal project folder and code files"
                >
                  <FolderTree className="w-3.5 h-3.5 text-amber-700" />
                  <span>Browse Folder</span>
                </button>
              )}

              <a
                href="/ieee-rrce-website.zip"
                download="ieee-rrce-website.zip"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-300 transition-colors"
                title="Download standard ZIP archive"
              >
                <Download className="w-3.5 h-3.5 text-[#00629B]" />
                <span>Download ZIP</span>
              </a>

              <button
                onClick={openAiHub}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00629B] to-[#00456e] hover:from-[#00456e] hover:to-[#0b1f33] rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#00B5E2] focus:ring-offset-2"
                aria-label="Open IEEE AI Engineering Assistant and Mentor"
              >
                <Sparkles className="w-4 h-4 text-[#00B5E2] animate-pulse" />
                <span className="font-medium">AI Engineering Hub</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00629B]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 text-base rounded-md text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#00629B] text-white font-semibold'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              {openFolderBrowser && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openFolderBrowser();
                  }}
                  className="w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg flex items-center justify-center gap-2 font-medium text-sm border border-amber-300"
                >
                  <FolderTree className="w-4 h-4 text-amber-700" />
                  Browse Normal Project Folder (No ZIP Needed)
                </button>
              )}
              <a
                href="/ieee-rrce-website.zip"
                download="ieee-rrce-website.zip"
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg flex items-center justify-center gap-2 font-medium text-sm border border-slate-300"
              >
                <Download className="w-4 h-4 text-[#00629B]" />
                Download Website ZIP Archive
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAiHub();
                }}
                className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg flex items-center justify-center gap-2 font-medium text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#00B5E2]" />
                Launch AI Engineering Assistant
              </button>
              <div className="text-xs text-slate-500 text-center pt-1">
                Official Chapter: IEEE Student Branch Chapter – IEEE RRCE
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
