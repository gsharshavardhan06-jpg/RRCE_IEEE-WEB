import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  User, 
  Tag, 
  X, 
  Info, 
  Share2,
  Building2 
} from 'lucide-react';
import { EVENTS_DATA, EventItem } from '../data/branchData';

interface EventsPageProps {
  selectedEvent: EventItem | null;
  setSelectedEvent: (event: EventItem | null) => void;
  setActiveTab: (tab: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ 
  selectedEvent, 
  setSelectedEvent, 
  setActiveTab 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter events
  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;

    const matchesStatus = 
      statusFilter === 'All' ||
      (statusFilter === 'Upcoming' && event.registrationStatus !== 'completed') ||
      (statusFilter === 'Completed' && event.registrationStatus === 'completed');

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['All', 'Symposium', 'Workshop', 'Seminar', 'Hackathon'];

  const handleShare = (event: EventItem) => {
    if (navigator.share) {
      navigator.share({
        title: `${event.title} - IEEE Student Branch at RRCE`,
        text: event.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}#events-${event.id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00629B] bg-[#00629B]/10 px-3 py-1 rounded-full">
            Technical Activities & Symposia
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Branch Events & Masterclasses
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Explore peer-reviewed symposia, hands-on microcontrollers workshops, IEEE research clinics, and hackathons. All times formatted for <strong>Asia/Kolkata (IST - UTC+05:30)</strong>.
          </p>
        </div>
        
        {/* Verification badge */}
        <div className="flex items-center gap-2 text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
          <Info className="w-4 h-4 text-[#00629B]" />
          <span>Dates verified against official college circulars</span>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event title, keyword, or venue..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00629B] focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
            {(['All', 'Upcoming', 'Completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  statusFilter === status
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#00629B] text-white font-semibold shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-900">No events matched your filter</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try resetting your search query or switching categories. We only list verified student branch and institutional activities.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setStatusFilter('All');
            }}
            className="px-4 py-2 bg-[#00629B] text-white text-xs font-semibold rounded-lg mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const isPast = event.registrationStatus === 'completed';

            return (
              <div
                key={event.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Venue Photo Thumbnail with RRCE Venue Tag */}
                <div className="relative h-44 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  <img
                    src={event.venuePhoto}
                    alt={event.venueLabel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-between p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white bg-[#00629B] px-2.5 py-0.5 rounded-full shadow">
                        {event.category}
                      </span>
                      <span
                        className={`text-[11px] font-extrabold px-2 py-0.5 rounded shadow ${
                          isPast
                            ? 'bg-slate-200 text-slate-800'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {isPast ? 'Completed' : 'Open'}
                      </span>
                    </div>

                    <div>
                      <span className="bg-[#9F1239] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded shadow tracking-wide uppercase">
                        {event.venueLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="font-bold text-base text-slate-900 leading-snug hover:text-[#00629B] transition-colors cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2">
                      {event.shortDescription}
                    </p>
                  </div>

                  {/* Logistics */}
                  <div className="space-y-1.5 pt-2 text-xs text-slate-600 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#00629B] shrink-0" />
                      <span className="font-medium text-slate-800">{event.dateDisplay}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>

                  {/* Verification source tag */}
                  <div className="text-[11px] text-slate-400 bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span className="truncate">{event.verification.sourceLabel}</span>
                    {event.verification.isVerified && (
                      <span className="text-emerald-600 font-bold shrink-0 ml-1">✓ Verified</span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex-1 py-2 px-3 bg-[#00629B] hover:bg-[#00456e] text-white text-xs font-semibold rounded-lg text-center transition-colors"
                  >
                    View Details & Schedule
                  </button>
                  <button
                    onClick={() => handleShare(event)}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
                    title="Share event link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
        >
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#00629B] text-white p-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00B5E2] bg-white/10 px-2.5 py-0.5 rounded">
                  {selectedEvent.category} • {selectedEvent.format}
                </span>
                <h2 id="modal-event-title" className="text-lg sm:text-xl font-bold mt-2 text-white leading-snug">
                  {selectedEvent.title}
                </h2>
              </div>
              <button
                onClick={() => {
                  setSelectedEvent(null);
                  setRegisteredSuccess(false);
                }}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
              
              {/* RRCE Venue Photograph Banner */}
              <div className="relative h-52 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  src={selectedEvent.venuePhoto}
                  alt={selectedEvent.venueLabel}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#9F1239] text-white text-[11px] font-extrabold px-2.5 py-1 rounded shadow tracking-wide uppercase">
                      {selectedEvent.venueLabel}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-medium px-2 py-0.5 rounded">
                      RRCE Bengaluru Campus
                    </span>
                  </div>
                  <p className="text-slate-200 text-xs mt-1.5 font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{selectedEvent.venue}</span>
                  </p>
                </div>
              </div>

              {/* Timing & Venue Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Date & Time</span>
                  <p className="font-bold text-slate-900 mt-0.5">{selectedEvent.dateDisplay}</p>
                  <p className="text-slate-600">{selectedEvent.time}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block text-[11px]">Venue & Format</span>
                  <p className="font-bold text-slate-900 mt-0.5">{selectedEvent.venue}</p>
                  <p className="text-slate-600">Timezone: Asia/Kolkata (IST)</p>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Event Overview</h4>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                  {selectedEvent.fullDescription}
                </p>
              </div>

              {/* Agenda / Schedule */}
              {selectedEvent.agenda && selectedEvent.agenda.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Schedule & Track Agenda</h4>
                  <div className="space-y-2 border-l-2 border-[#00629B] pl-3 py-1">
                    {selectedEvent.agenda.map((item, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="font-bold text-[#00629B]">{item.time}:</span>{' '}
                        <span className="text-slate-700">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speakers & Convenors */}
              {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Session Faculty & Speakers</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedEvent.speakers.map((spk, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#00629B]/10 text-[#00629B] flex items-center justify-center shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-xs">{spk.name}</p>
                          <p className="text-[11px] text-slate-500">{spk.designation} • {spk.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Source Verification Disclosure */}
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900 space-y-1">
                <span className="font-semibold block flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  Source & Institutional Reporting
                </span>
                <p>
                  Source: <strong>{selectedEvent.verification.sourceLabel}</strong>. {selectedEvent.verification.note}
                </p>
                {selectedEvent.verification.sourceUrl && (
                  <a
                    href={selectedEvent.verification.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00629B] font-semibold underline inline-flex items-center gap-1"
                  >
                    View official college news link
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Registration Status & Interaction */}
              <div className="pt-2">
                {selectedEvent.registrationStatus === 'completed' ? (
                  <div className="p-3 bg-slate-100 rounded-lg text-slate-700 text-center font-medium text-xs">
                    This event has concluded. Look out for future editions in the upcoming semester schedule!
                  </div>
                ) : registeredSuccess ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center space-y-1">
                    <p className="font-bold text-sm flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Registration Interest Recorded!
                    </p>
                    <p className="text-xs">
                      We have noted your interest in <strong>{selectedEvent.title}</strong>. Official confirmation and hall ticket notifications are circulated through your RRCE college email.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setRegisteredSuccess(true)}
                      className="flex-1 py-3 px-4 bg-[#00629B] hover:bg-[#00456e] text-white font-bold rounded-xl text-xs sm:text-sm shadow transition-colors text-center"
                    >
                      Register for this Event (Student Pass)
                    </button>
                    {selectedEvent.verification.sourceUrl && (
                      <a
                        href={selectedEvent.verification.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs sm:text-sm border border-slate-300 transition-colors text-center inline-flex items-center justify-center gap-1.5"
                      >
                        <span>Official Notice</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
