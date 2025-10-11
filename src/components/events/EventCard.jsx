import React from "react";
import { useNavigate } from "react-router";
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiTag, FiExternalLink } from "react-icons/fi";

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    
    const handleOnClick = () => {
        navigate(`/events/${event.id}`, { state: { event } });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTime = (dateString) => {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div
            className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={handleOnClick}
        >
            {/* Event Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={event.coverImageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            {event.eventType}
                        </span>
                        <span className="text-white/90 text-sm font-medium">
                            {event.attendees?.length || 0}/{event.capacity} spots
                        </span>
                    </div>
                </div>
            </div>

            {/* Event Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold line-clamp-2">
                        {event.title}
                    </h2>
                    {event.isOnline && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full whitespace-nowrap">
                            Online
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                </p>

                <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-start">
                        <FiCalendar className="mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
                        <div>
                            <p className="font-medium">{formatDate(event.startAt)}</p>
                            <p className="text-xs text-gray-500">
                                {formatTime(event.startAt)} - {formatTime(event.endAt)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FiMapPin className="mr-2 text-blue-500" />
                        <span className="line-clamp-1">
                            {event.isOnline ? 'Online Event' : event.location}
                        </span>
                    </div>

                    {event.tags && event.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                            {event.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                        onClick={handleOnClick}
                        className="w-full py-2 px-4 cursor-pointer bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
                    >
                        View Details
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default EventCard;