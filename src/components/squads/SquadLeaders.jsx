import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaUserTie,
  FaGraduationCap,
  FaCalendarAlt,
  FaQuoteLeft,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { executives } from "../../utils/data/executives";

const LeaderCard = ({ leader, role }) => {
  if (!leader) return null;

  return (
    <motion.div
      className="bg-base-100 rounded-xl shadow-lg overflow-hidden border border-base-300/20"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-base-200 overflow-hidden border-2 border-sky-500/20">
            {leader.image ? (
              <img
                src={"/" + leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-sky-500/10 text-sky-500">
                <FaUserTie size={24} />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-base-content">
                  {leader.name}
                </h3>
                <p className="text-sm text-sky-500 font-medium">{role}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500/10 text-sky-500">
                {leader.department}
              </span>
            </div>

            <div className="mt-2 space-y-1 text-sm">
              <div className="flex items-center text-base-content/70">
                <FaGraduationCap className="mr-2 text-sky-500" size={12} />
                <span>Batch: {leader.batch}</span>
              </div>
              <div className="flex items-center text-base-content/70">
                <FaCalendarAlt className="mr-2 text-sky-500" size={12} />
                <span>Session: {leader.session}</span>
              </div>
            </div>
          </div>
        </div>

        {leader.quote && (
          <div className="mt-4 p-3 bg-base-200/50 rounded-lg">
            <FaQuoteLeft className="inline text-sky-500/50 mr-1" size={12} />
            <p className="inline text-sm italic text-base-content/80">
              {leader.quote}
            </p>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-base-300/20 space-y-3">
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${leader.phone}`}
              className="inline-flex items-center px-3 py-1.5 text-sm rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
              title="Call"
            >
              <FaPhone className="text-sky-500" size={14} />
              <span className="mx-1.5 text-base-content/40">/</span>
              <FaWhatsapp className="text-sky-500" size={14} />
              <span className="text-base-content ml-2">{leader.phone}</span>
            </a>
            <a
              href={`mailto:${leader.email}`}
              className="inline-flex items-center px-3 py-1.5 text-sm rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
              title="Email"
            >
              <FaEnvelope className="mr-1.5 text-sky-500" size={12} />
              <span className="text-base-content ml-2">{leader.email}</span>
            </a>
          </div>

          <Link
            to={`/executives/${leader.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-sky-500/20 text-sky-500 hover:bg-sky-500/5 transition-colors"
          >
            <FaUser size={12} />
            <span>View Full Profile</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const SquadLeaders = ({ leader_phone, co_leader_phone }) => {
  const leader = executives.find(
    (executive) => executive.phone === leader_phone
  );
  const coLeader = executives.find(
    (executive) => executive.phone === co_leader_phone
  );

  if (!leader && !coLeader) return null;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-base-content">Squad Leaders</h2>
        <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto"></div>
        <p className="text-sm text-base-content/70 max-w-2xl mx-auto mt-2">
          For more information, please contact the squad leader.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LeaderCard leader={leader} role="Squad Leader" />
        <LeaderCard leader={coLeader} role="Co-Leader" />
      </div>
    </div>
  );
};

export default SquadLeaders;
