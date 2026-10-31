/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiEngineeringHub } from './components/AiEngineeringHub';
import { FolderBrowserModal } from './components/FolderBrowserModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ChaptersPage } from './pages/ChaptersPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { MembershipPage } from './pages/MembershipPage';
import { NewsResourcesPage } from './pages/NewsResourcesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

import { EventItem, EVENTS_DATA } from './data/branchData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAiHubOpen, setIsAiHubOpen] = useState<boolean>(false);
  const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Sync state with URL hash for direct route bookmarking & refresh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setActiveTab('home');
        return;
      }

      // Check if hash points to an event detail: #events-techfest-2026
      if (hash.startsWith('events-')) {
        const eventId = hash.replace('events-', '');
        const found = EVENTS_DATA.find((e) => e.id === eventId);
        if (found) {
          setActiveTab('events');
          setSelectedEvent(found);
          return;
        }
      }

      const validTabs = [
        'home',
        'about',
        'events',
        'projects',
        'chapters',
        'leadership',
        'membership',
        'news',
        'gallery',
        'contact',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const updateTab = (newTab: string) => {
    setActiveTab(newTab);
    window.location.hash = newTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Primary Accessible Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={updateTab}
        openAiHub={() => setIsAiHubOpen(true)}
        openFolderBrowser={() => setIsFolderOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={updateTab}
            openAiHub={() => setIsAiHubOpen(true)}
            setSelectedEvent={(ev) => {
              setSelectedEvent(ev);
              setActiveTab('events');
              window.location.hash = `events-${ev.id}`;
            }}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={updateTab}
            openAiHub={() => setIsAiHubOpen(true)}
          />
        )}

        {activeTab === 'events' && (
          <EventsPage
            selectedEvent={selectedEvent}
            setSelectedEvent={(ev) => {
              setSelectedEvent(ev);
              if (ev) {
                window.location.hash = `events-${ev.id}`;
              } else {
                window.location.hash = 'events';
              }
            }}
            setActiveTab={updateTab}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
            openAiHub={() => setIsAiHubOpen(true)}
            setActiveTab={updateTab}
          />
        )}

        {activeTab === 'chapters' && (
          <ChaptersPage
            setActiveTab={updateTab}
            openAiHub={() => setIsAiHubOpen(true)}
          />
        )}

        {activeTab === 'leadership' && (
          <LeadershipPage setActiveTab={updateTab} />
        )}

        {activeTab === 'membership' && (
          <MembershipPage openAiHub={() => setIsAiHubOpen(true)} />
        )}

        {activeTab === 'news' && (
          <NewsResourcesPage
            setActiveTab={updateTab}
            openAiHub={() => setIsAiHubOpen(true)}
          />
        )}

        {activeTab === 'gallery' && <GalleryPage />}

        {activeTab === 'contact' && (
          <ContactPage openAiHub={() => setIsAiHubOpen(true)} />
        )}
      </main>

      {/* Footer with verified institutional accreditation and download links */}
      <Footer
        setActiveTab={updateTab}
        openAiHub={() => setIsAiHubOpen(true)}
        openFolderBrowser={() => setIsFolderOpen(true)}
      />

      {/* AI Engineering Hub Modal (Mentor, Abstract Reviewer & Pathway Finder) */}
      <AiEngineeringHub
        isOpen={isAiHubOpen}
        onClose={() => setIsAiHubOpen(false)}
      />

      {/* Project Folder Browser & Code Viewer Modal */}
      <FolderBrowserModal
        isOpen={isFolderOpen}
        onClose={() => setIsFolderOpen(false)}
      />
    </div>
  );
}
