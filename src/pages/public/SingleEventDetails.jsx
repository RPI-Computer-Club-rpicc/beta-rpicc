import React, { useEffect, useState } from "react";
import { 
  FiArrowLeft, 
  FiCalendar, 
  FiMapPin, 
  FiUsers, 
  FiClock, 
  FiTag, 
  FiExternalLink,
  FiMail,
  FiPhone,
  FiGlobe,
  FiDollarSign,
  FiAward,
  FiUser,
  FiUsers as FiTeam,
  FiBookmark,
  FiShare2
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router";

const SingleEventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const eventFromState = useLocation()?.state?.event;
  const [event, setEvent] = useState(eventFromState || null);
  const [loading, setLoading] = useState(!eventFromState);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await fetch("/events.json");
      const events = await response.json();
      const eventData = events.find(e => e.id === id);
      setEvent(eventData || null);
    } catch (error) {
      console.error("Error fetching event:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!event) {
      fetchEvent();
    }
  }, [id, event]);

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: event?.timezone || 'UTC'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: event?.timezone || 'UTC'
    });
  };

  const getTimeRemaining = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;
    
    if (diff <= 0) return { status: 'ended', text: 'Registration Closed' };
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return { status: 'upcoming', text: `Closes in ${days} day${days > 1 ? 's' : ''}` };
    return { status: 'soon', text: `Closes in ${hours} hour${hours !== 1 ? 's' : ''}` };
  };

  const renderEventSpecificSections = () => {
    switch (event.eventType) {
      case 'workshop':
        return (
          <>
            {event.prerequisites && event.prerequisites.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {event.prerequisites.map((item, index) => (
                    <li key={index} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Speakers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center p-4 bg-base-200 rounded-lg">
                      <img
                        src={speaker.avatar}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{speaker.name}</h4>
                        <p className="text-sm text-gray-400">{speaker.title}</p>
                        <p className="text-sm text-gray-500">{speaker.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        );
      
      case 'competition':
        return (
          <>
            {event.rules && event.rules.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Competition Rules</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="text-gray-400">{rule}</li>
                  ))}
                </ul>
              </div>
            )}
            {event.prizes && event.prizes.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Prizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-center">
                      <div className="text-yellow-600 font-medium">{prize}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {event.judges && event.judges.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Judges</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.judges.map((judge, index) => (
                    <div key={index} className="flex items-center p-4 bg-base-200 rounded-lg">
                      <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {judge.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium">{judge.name}</h4>
                        <p className="text-sm text-gray-400">{judge.title}</p>
                        <p className="text-sm text-gray-500">{judge.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        );
      
      case 'meeting':
        return (
          <>
            {event.agenda && event.agenda.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Agenda</h3>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-base-200 rounded-lg">
                      <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item.split(' - ')[0]}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">{item.split(' - ').slice(1).join(' - ')}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {event.documents && event.documents.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Documents</h3>
                <div className="space-y-2">
                  {event.documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <FiExternalLink className="mr-2" /> {doc.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        );
      
      default:
        return null;
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-gray-200 rounded-lg w-64"></div>
            <div className="h-96 bg-gray-200 rounded-2xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 bg-gray-200 rounded-xl"></div>
              <div className="h-64 bg-gray-200 rounded-xl"></div>
              <div className="h-64 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen  py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Not Found</h2>
          <p className="text-gray-600 mb-6">The requested event could not be found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            <FiArrowLeft className="mr-2" /> Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to Events
        </button>

        {/* Event Header */}
        <div className="bg-base-300 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={event.coverImageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {event.eventType}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {event.title}
                  </h1>
                  <div className="flex flex-wrap items-center text-gray-200 text-sm gap-4">
                    <span className="flex items-center">
                      <FiCalendar className="mr-1.5" />
                      {formatDate(event.startAt)}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1.5" />
                      {formatTime(event.startAt)} - {formatTime(event.endAt)}
                    </span>
                    <span className="flex items-center">
                      <FiMapPin className="mr-1.5" />
                      {event.isOnline ? 'Online' : event.location}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full ${isBookmarked ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500'} transition-colors`}
                  >
                    <FiBookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full text-gray-300 hover:text-blue-400 transition-colors">
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-2/3">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">About This Event</h3>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  
                  {event.schedule && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Schedule</h3>
                      <div className="space-y-4">
                        {event.schedule.map((item, index) => (
                          <div key={index} className="flex items-start p-4 bg-base-200 rounded-lg">
                            <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                              {item.time}
                            </div>
                            <div className="ml-4">
                              <h4 className="font-medium ">{item.title}</h4>
                              {item.speaker && (
                                <p className="text-sm text-gray-500 mt-1">{item.speaker}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
{/* 
                  {event.prerequisites && event.prerequisites.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-400">
                        {event.prerequisites.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.requirements && event.requirements.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
                      <div className="flex flex-wrap gap-2">
                        {event.requirements.map((item, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1.5 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.faqs && event.faqs.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {event.faqs.map((faq, index) => (
                          <div key={index} className="border-b border-gray-200 pb-4">
                            <h4 className="font-medium text-gray-900">{faq.question}</h4>
                            <p className="text-gray-600 mt-1">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}
                  {renderEventSpecificSections()}
                </div>
              </div>
              

              {/* Sidebar */}
              <div className="md:w-1/3">
                <div className="bg-base-100 border border-gray-200 rounded-xl p-6 sticky top-6">
                  <div className="space-y-6">
                    {/* Registration Status */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Registration</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className=" ">Price</span>
                          <span className="font-medium">
                            {event.price || 0 === 0 ? 'Free' : `${event.price} ${event.currency}`}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="">Capacity</span>
                          <span className="font-medium">
                            {event.attendees?.length || 0} / {event.capacity}
                          </span>
                        </div>
                        <div className="pt-2">
                          <span className={`text-sm font-medium ${
                            new Date(event.registrationDeadline) > new Date() 
                              ? 'text-green-600' 
                              : 'text-red-600'
                          }`}>
                            {getTimeRemaining(event.registrationDeadline).text}
                          </span>
                        </div>
                      </div>
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        Register Now
                      </a>
                    </div>

                    {/* Event Details */}
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold mb-3">Event Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <FiCalendar className="text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium  ">
                              {formatDate(event.startAt)}
                            </p>
                            <p className="text-sm text-gray-400">
                              {formatTime(event.startAt)} - {formatTime(event.endAt)}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {event.timezone}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <FiMapPin className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium ">
                              {event.isOnline ? 'Online Event' : 'Location'}
                            </p>
                            <p className="text-sm text-gray-500">
                              {event.isOnline ? (
                                <a 
                                  href={event.meetingUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline flex items-center"
                                >
                                  Join Online <FiExternalLink className="ml-1 w-3 h-3" />
                                </a>
                              ) : (
                                event.location
                              )}
                            </p>
                          </div>
                        </div>

                        {event.speakers && event.speakers.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Speakers</h4>
                            <div className="space-y-3">
                              {event.speakers.map((speaker, index) => (
                                <div key={index} className="flex items-center">
                                  <img
                                    src={speaker.avatar}
                                    alt={speaker.name}
                                    className="w-10 h-10 rounded-full object-cover mr-3"
                                  />
                                  <div>
                                    <p className="text-sm font-medium  ">
                                      {speaker.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      {speaker.title} at {speaker.company}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    {event.tags && event.tags.length > 0 && (
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Organizers */}
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Organized by</h3>
                      <div className="space-y-2">
                        {event.organizers.map((organizer, index) => (
                          <div key={index} className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium">
                              {organizer.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-500">{organizer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    {event.socialLinks && (
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Share this event</h3>
                        <div className="flex space-x-4">
                          {event.socialLinks.website && (
                            <a
                              href={event.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Website</span>
                              <FiGlobe className="h-5 w-5" />
                            </a>
                          )}
                          {event.socialLinks.twitter && (
                            <a
                              href={`https://twitter.com/${event.socialLinks.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400"
                            >
                              <span className="sr-only">Twitter</span>
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          )}
                          {event.socialLinks.linkedin && (
                            <a
                              href={`https://linkedin.com/company/${event.socialLinks.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.527-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.338 0H2.662C1.194 0 0 1.194 0 2.662v14.676C0 18.806 1.194 20 2.662 20h14.676C18.806 20 20 18.806 20 17.338V2.662C20 1.194 18.806 0 17.338 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                          {event.socialLinks.facebook && (
                            <a
                              href={`https://facebook.com/${event.socialLinks.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600"
                            >
                              <span className="sr-only">Facebook</span>
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventDetails;