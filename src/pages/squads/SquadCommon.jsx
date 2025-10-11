import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaProjectDiagram,
  FaPhone,  
  FaCalendarAlt,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router";
import { useParams } from "react-router";
import SQUAD_DATA from "../../components/common/SQUAD_DATA";
import SquadNotFound from "../../components/squads/SquadNotFound";
import SquadLeaders from "../../components/squads/SquadLeaders";

const SquadCommon = () => {
  const { slug } = useParams();
  const squadData = SQUAD_DATA.find((squad) => squad.slug === slug);

  if (!squadData) {
    return <SquadNotFound />;
  }

  const squadColor = squadData.textColor.split("-")[1];
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      {/* <div className={`relative overflow-hidden  bg-gradient-to-br from-blue-200 via-${squadData.textColor.split('-')[1]}-800 to-blue-200`}> */}
      <div className="relative overflow-hidden px-2">
        <div
          className={`max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20 relative z-10 rounded-lg my-5`}
          style={{
            backgroundImage: `linear-gradient(to bottom right, #bae6fd, var(--tw-color-${squadColor}-800), #bae6fd)`,
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl ${squadData.textColor} ${squadData.bgColor}`}
                >
                  {React.cloneElement(squadData.icon, {
                    className: "text-4xl",
                  })}
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${squadData.textColor} backdrop-blur-sm`}
                >
                  {squadData.members} Members
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                {squadData.name}
              </h1>
              <p className="text-xl text-base-content/80 max-w-3xl mb-8">
                {squadData.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`#leaders`}
                  className={` flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-md hover:from-sky-600 hover:to-blue-600  transition-colors hover:-translate-y-0.5`}
                >
                  <FaPhone className="mr-2" /> Contact Leader
                </a>
                <Link
                  to="/squads"
                  className="text-sm font-medium  flex items-center gap-2 bg-transparent hover:text-sky-500"
                >
                  <FaArrowRight className="mr-1" /> Back to Squads
                </Link>
              </div>
            </div>
            {/* <div className="w-full md:w-96 bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300/20">
              <h3 className="text-lg font-semibold mb-4">Squad Leaders</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-base-200/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaUsers className="text-blue-600" /> 
                  </div>
                  <div>
                    <h4 className="font-medium">Leader</h4>
                    <p className="text-sm text-base-content/80">{squadData.leader}</p>
                    <a 
                      href={`tel:${squadData.mobile_number.leader}`}
                      className="text-sm text-blue-600 hover:underline flex items-center mt-1"
                    >
                      <FaPhone className="mr-1" size={12} /> {squadData.mobile_number.leader}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-base-200/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Co-Leader</h4>
                    <p className="text-sm text-base-content/80">{squadData.co_leader}</p>
                    <a 
                      href={`tel:${squadData.mobile_number.co_leader}`}
                      className="text-sm text-blue-600 hover:underline flex items-center mt-1"
                    >
                      <FaPhone className="mr-1" size={12} /> {squadData.mobile_number.co_leader}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300/20"
            >
              <h2 className="text-2xl font-bold mb-4">About This Squad</h2>
              <div className="prose max-w-none">
                <p className="text-base-content/80 mb-4">
                  {squadData.longDescription}
                </p>
                <p className="text-base-content/80">
                  Our squad is dedicated to helping members improve their
                  problem-solving skills and prepare for technical interviews
                  through hands-on practice and collaborative learning.
                </p>
              </div>
            </motion.section>

            {/* Activities Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300/20"
            >
              <h2 className="text-2xl font-bold mb-6">Key Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {squadData.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-base-200/30 rounded-lg hover:bg-base-200/50 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${squadData.bgColor} bg-opacity-20 mt-0.5`}
                    >
                      <FaCode className={`${squadData.textColor}`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{activity}</h3>
                      <p className="text-sm text-base-content/60 mt-1">
                        {activity.includes("challenges")
                          ? "Weekly problem sets to sharpen your skills"
                          : activity.includes("interview")
                          ? "Practice technical interviews with peers"
                          : activity.includes("contest")
                          ? "Compete with fellow programmers"
                          : "Collaborative learning sessions"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">Squad Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-blue-200" />
                    <span>Total Members</span>
                  </div>
                  <span className="font-bold">{squadData.members}+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaProjectDiagram className="text-blue-200" />
                    <span>Active Projects</span>
                  </div>
                  <span className="font-bold">{squadData.projects}+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-blue-200" />
                    <span>Weekly Sessions</span>
                  </div>
                  <span className="font-bold">2+</span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300/20"
            >
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {squadData.upcomingEvents.map(event => (
                  <div key={event.id} className="flex items-start gap-3 p-3 hover:bg-base-200/30 rounded-lg transition-colors">
                    <div className="text-center bg-blue-50 text-blue-600 rounded-lg p-2 min-w-[70px]">
                      <div className="text-xs font-medium">{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</div>
                      <div className="text-xl font-bold">{new Date(event.date).getDate()}</div>
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <FaCalendarAlt size={12} />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                        <span className="px-2 py-0.5 bg-base-200 text-xs rounded-full">{event.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2">
                  View All Events <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div> */}

            {/* Join CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-300/20 text-center"
            >
              <h3 className="text-lg font-semibold mb-3">Ready to Join?</h3>
              <p className="text-base-content/70 mb-4 text-sm">
                Become part of our programming community and take your skills to
                the next level.
              </p>
              <button className={`w-full btn bg-sky-500 text-white`}>
                Join {squadData.name}
              </button>
            </motion.div>
          </div>
        </div>
        <div
          className="max-w-7xl px-4 sm:px-6 lg:px-8 py-3 my-5 mx-auto "
          id="leaders"
        >
          <SquadLeaders
            leader_phone={squadData.mobile_number.leader}
            co_leader_phone={squadData.mobile_number.co_leader}
          />
        </div>
      </div>
    </div>
  );
};

export default SquadCommon;
