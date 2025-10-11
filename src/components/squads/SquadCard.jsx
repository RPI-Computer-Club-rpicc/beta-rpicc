import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiUsers, FiFolder } from "react-icons/fi";

const SquadCard = ({ squad }) => {
  return (
    // <motion.div
    //   key={squad.id}
    //   initial={{ opacity: 0, y: 20 }}
    //   whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    //   viewport={{ once: true, margin: "-50px" }}
    //   whileHover={{
    //     y: -4,
    //     boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
    //     transition: { duration: 0.2 }
    //   }}
    //   className="group relative overflow-hidden rounded-2xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
    // >
    //   {/* Header */}
    //   <div className="p-6 pb-4">
    //     <div className="flex items-center justify-center mb-5">
    //       <div className={`p-3 rounded-xl ${squad.bgColor} bg-opacity-10`}>
    //         {React.cloneElement(squad.icon, {
    //           className: `text-2xl ${squad.textColor}`
    //         })}
    //       </div>
    //       {/* <span className={`text-xs font-medium px-3 py-1 rounded-full ${squad.textColor} ${squad.bgColor} bg-opacity-10`}>
    //         Active
    //       </span> */}
    //     </div>

    //     <h3 className="text-2xl font-bold text-base-900 mb-2">
    //       {squad.name}
    //     </h3>
    //     <p className="text-gray-400 text-sm mb-4 line-clamp-2">
    //       {squad.description}
    //     </p>
    //   </div>

    //   {/* Activities */}
    //   <div className="px-6 mb-4">
    //     <h4 className="text-sm font-semibold text-base-500 mb-3">Key Activities</h4>
    //     <ul className="space-y-2">
    //       {squad.activities.slice(0, 3).map((activity, i) => (
    //         <li key={i} className="flex items-center text-sm text-gray-500">
    //           <div className={`w-1.5 h-1.5 rounded-full ${squad.bgColor} mr-2`} />
    //           <span className="line-clamp-1">{activity}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   {/* Footer */}
    //   <div className="mt-auto p-6 pt-0">
    //     <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
    //       <span className="flex items-center">
    //         <FiUsers className="mr-1.5" size={14} /> {squad.members} Members
    //       </span>
    //       <span className="flex items-center">
    //         <FiFolder className="mr-1.5" size={14} /> {squad.projects} Projects
    //       </span>
    //     </div>
    //     <Link
    //       to={`/squads/${squad.slug}`}
    //       className={`
    //         block w-full text-center py-2.5 px-4 rounded-lg text-sm font-medium
    //         ${squad.textColor}
    //         hover:bg-[${squad.bgColor}]
    //         transition-colors
    //         border border-gray-200
    //         hover:border-transparent
    //         hover:shadow-sm
    //       `}
    //     >
    //       Explore Squad
    //     </Link>
    //   </div>
    // </motion.div>
    <motion.div
      key={squad.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: squad.id * 0.05,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="group relative bg-base-100/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-base-300/20"
    >
      <div
        className={`h-1.5 ${
          squad.color || "bg-gradient-to-r from-primary to-secondary"
        }`}
      ></div>
      <div className="p-6">
        {/* Squad Header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              squad.bgColor || "bg-primary/10"
            }`}
          >
            {React.cloneElement(squad.icon, {
              className: `text-2xl ${squad.textColor || "text-primary"}`,
            })}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-base-200 text-base-content/70 flex items-center gap-1.5">
              <FiUsers className="text-xs" />
              {squad.members}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-base-200 text-base-content/70 flex items-center gap-1.5">
              <FiFolder className="text-xs" />
              {squad.projects}
            </span>
          </div>
        </div>

        {/* Squad Content */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
            {squad.name}
          </h3>
          <p className="text-base-content/70 mb-4 line-clamp-2 text-sm">
            {squad.description}
          </p>

          {/* Activities */}
          {squad.activities && squad.activities.length > 0 && (
            <div className="mt-4 pt-4 border-t border-base-300/20">
              <h4 className="text-xs font-semibold text-base-content/60 mb-2">
                KEY ACTIVITIES
              </h4>
              <ul className="space-y-2">
                {squad.activities.slice(0, 3).map((activity, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-base-content/70"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        squad.bgColor || "bg-primary"
                      }`}
                    />
                    <span className="line-clamp-1">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-base-300/20">
          <Link
            to={`/squads/${squad.slug || squad.id}`}
            className="btn btn-sm btn-ghost group/button text-sm px-3"
          >
            Explore Squad
            <FiArrowRight className="ml-1.5 group-hover/button:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SquadCard;
