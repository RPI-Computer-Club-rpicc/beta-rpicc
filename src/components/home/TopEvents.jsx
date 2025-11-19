import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import EventCard from "../events/EventCard";
import SectionTitle from "../common/SectionTitle";
import { FaArrowRight } from "react-icons/fa";
import EVENTS from "../../utils/data/EVENTS"

const TopEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const sortedEvents = EVENTS.sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
    setUpcomingEvents(sortedEvents.slice(0, 3));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-12 px-4 my-5">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 my-5">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Upcoming Events"
          subtitle={"Explore our upcoming events"}
        />
        {upcomingEvents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-cyber-gray/20 rounded-xl">
            <p className="text-cyber-light/70">
              No upcoming events scheduled. Check back soon!
            </p>
          </div>
        )}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/events"
          className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 rounded-lg"
        >
          <span className="relative z-10">View All Events</span>
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default TopEvents;
