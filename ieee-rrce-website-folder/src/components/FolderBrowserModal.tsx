import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  FileCode, 
  FileText, 
  Download, 
  Copy, 
  Check, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  FolderTree, 
  ExternalLink 
} from 'lucide-react';

interface FolderBrowserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileItem {
  path: string;
  name: string;
  size: number;
}

export const FolderBrowserModal: React.FC<FolderBrowserModalProps> = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedFilePath, setSelectedFilePath] = useState<string>('README.md');
  const [fileContent, setFileContent] = useState<string>('Loading file content...');
  const [loadingContent, setLoadingContent] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Default hardcoded tree fallback in case API is slow
  const defaultFiles: FileItem[] = [
    { path: 'README.md', name: 'README.md', size: 6691 },
    { path: 'index.html', name: 'index.html', size: 1441 },
    { path: 'package.json', name: 'package.json', size: 921 },
    { path: 'server.ts', name: 'server.ts', size: 18500 },
    { path: 'tsconfig.json', name: 'tsconfig.json', size: 561 },
    { path: 'vite.config.ts', name: 'vite.config.ts', size: 728 },
    { path: 'ASSET_CREDITS', name: 'ASSET_CREDITS', size: 1891 },
    { path: '.env.example', name: '.env.example', size: 445 },
    { path: 'src/App.tsx', name: 'App.tsx', size: 3600 },
    { path: 'src/main.tsx', name: 'main.tsx', size: 180 },
    { path: 'src/index.css', name: 'index.css', size: 1200 },
    { path: 'src/data/branchData.ts', name: 'branchData.ts', size: 16500 },
    { path: 'src/components/Navbar.tsx', name: 'Navbar.tsx', size: 9200 },
    { path: 'src/components/Footer.tsx', name: 'Footer.tsx', size: 8500 },
    { path: 'src/components/AiEngineeringHub.tsx', name: 'AiEngineeringHub.tsx', size: 15200 },
    { path: 'src/pages/HomePage.tsx', name: 'HomePage.tsx', size: 21000 },
    { path: 'src/pages/AboutPage.tsx', name: 'AboutPage.tsx', size: 13500 },
    { path: 'src/pages/EventsPage.tsx', name: 'EventsPage.tsx', size: 15800 },
    { path: 'src/pages/ProjectsPage.tsx', name: 'ProjectsPage.tsx', size: 14200 },
    { path: 'src/pages/ChaptersPage.tsx', name: 'ChaptersPage.tsx', size: 9800 },
    { path: 'src/pages/LeadershipPage.tsx', name: 'LeadershipPage.tsx', size: 9500 },
    { path: 'src/pages/MembershipPage.tsx', name: 'MembershipPage.tsx', size: 16200 },
    { path: 'src/pages/NewsResourcesPage.tsx', name: 'NewsResourcesPage.tsx', size: 8900 },
    { path: 'src/pages/GalleryPage.tsx', name: 'GalleryPage.tsx', size: 8600 },
    { path: 'src/pages/ContactPage.tsx', name: 'ContactPage.tsx', size: 14800 },
  ];

  useEffect(() => {
    if (!isOpen) return;

    fetch('/api/folder/tree')
      .then((res) => res.json())
      .then((data) => {
        if (data.files && data.files.length > 0) {
          setFiles(data.files);
        } else {
          setFiles(defaultFiles);
        }
      })
      .catch(() => {
        setFiles(defaultFiles);
      });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !selectedFilePath) return;

    setLoadingContent(true);
    fetch(`/api/folder/file?path=${encodeURIComponent(selectedFilePath)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.content !== undefined) {
          setFileContent(data.content);
        } else {
          setFileContent('// File content unavailable.');
        }
      })
      .catch(() => {
        setFileContent('// Unable to load file content directly.');
      })
      .finally(() => {
        setLoadingContent(false);
      });
  }, [isOpen, selectedFilePath]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    window.location.href = `/api/folder/file?path=${encodeURIComponent(selectedFilePath)}&download=1`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="folder-explorer-title"
    >
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#00629B]/30 rounded-xl border border-[#00629B]/50 text-[#00B5E2]">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h2 id="folder-explorer-title" className="text-base sm:text-lg font-bold flex items-center gap-2">
                Project Folder: <span className="text-[#00B5E2] font-mono text-sm">ieee-rrce-website-folder/</span>
              </h2>
              <p className="text-xs text-slate-300">
                Browse, inspect, and copy or download individual normal uncompressed project files
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/ieee-rrce-website.zip"
              download="ieee-rrce-website.zip"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00629B] hover:bg-[#00456e] text-white rounded-lg text-xs font-semibold transition-colors"
              title="Standard Windows/Mac compatible ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Standard ZIP</span>
            </a>

            <a
              href="/ieee-rrce-website.tar.gz"
              download="ieee-rrce-website.tar.gz"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
              title="Tarball Archive"
            >
              <Download className="w-3.5 h-3.5" />
              <span>TAR.GZ</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              aria-label="Close Folder Explorer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 text-xs text-emerald-900 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-200 text-emerald-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              Normal Uncompressed Folder
            </span>
            <span>
              All project files exist in the standard folder <strong>ieee-rrce-website-folder/</strong> without requiring zip extraction.
            </span>
          </div>
          <a
            href={`/folder/${selectedFilePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00629B] font-semibold hover:underline inline-flex items-center gap-1"
          >
            Open raw file in browser <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Main Explorer View: Left Sidebar Tree + Right Code Viewer */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* File Tree (Sidebar) */}
          <div className="w-full md:w-72 bg-slate-50 border-r border-slate-200 overflow-y-auto p-3 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1 flex items-center justify-between">
              <span>Files & Folders</span>
              <span>{files.length || defaultFiles.length} items</span>
            </div>

            <div className="space-y-0.5">
              {(files.length > 0 ? files : defaultFiles).map((item) => {
                const isSelected = selectedFilePath === item.path;
                const isSrc = item.path.startsWith('src/');
                const isDoc = item.name.endsWith('.md') || item.name.endsWith('CREDITS');

                return (
                  <button
                    key={item.path}
                    onClick={() => setSelectedFilePath(item.path)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-[#00629B] text-white font-semibold shadow-sm'
                        : 'text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isDoc ? (
                        <FileText className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                      ) : (
                        <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#00629B]'}`} />
                      )}
                      <span className="truncate">{item.path}</span>
                    </div>
                    <span className={`text-[10px] shrink-0 ml-1 ${isSelected ? 'text-slate-200' : 'text-slate-400'}`}>
                      {Math.round(item.size / 1024)}k
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area: File Content & Actions */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
            {/* Action Bar */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2 truncate">
                <span className="text-slate-500 font-mono">File:</span>
                <span className="font-mono text-[#00B5E2] font-semibold truncate">
                  {selectedFilePath}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-medium text-xs flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>

                <button
                  onClick={handleDownloadFile}
                  className="px-2.5 py-1 bg-[#00629B] hover:bg-[#00456e] text-white rounded font-medium text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download This File</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="flex-1 overflow-auto p-4 text-xs font-mono text-slate-200 bg-slate-950 leading-relaxed select-text">
              {loadingContent ? (
                <div className="p-4 text-slate-500 italic">Reading {selectedFilePath}...</div>
              ) : (
                <pre className="whitespace-pre overflow-x-auto">{fileContent}</pre>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 p-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div>
            Location on disk: <code className="bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-mono font-semibold">ieee-rrce-website-folder/</code>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Need the full package?</span>
            <a
              href="/ieee-rrce-website.zip"
              download="ieee-rrce-website.zip"
              className="text-[#00629B] font-bold hover:underline"
            >
              Download Standard ZIP
            </a>
            <span>•</span>
            <a
              href="/ieee-rrce-website.tar.gz"
              download="ieee-rrce-website.tar.gz"
              className="text-[#00629B] font-bold hover:underline"
            >
              Download TAR.GZ
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
