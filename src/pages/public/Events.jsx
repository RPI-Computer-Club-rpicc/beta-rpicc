import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Event from "../../components/events/EventCard";
import EVENTS  from "../../utils/data/EVENTS";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setEvents(EVENTS);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter events by title
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-16 bg-cyber-gray/30 rounded-xl max-w-2xl mx-auto"></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-cyber-gray/20 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-sky-500">
            Upcoming Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-900 mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Join us for exciting tech events, workshops, and hackathons
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 relative"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg bg-cyber-gray/20 border border-cyber-gray/50 text-cyber-light rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-blue/50 focus:border-cyber-blue/30 transition-all duration-300 backdrop-blur-sm"
            />
            <FiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-cyber-blue w-6 h-6" />
          </div>
        </motion.div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Event event={event}/>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-sky-500 text-xl">
              No events found matching "{searchTerm}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;