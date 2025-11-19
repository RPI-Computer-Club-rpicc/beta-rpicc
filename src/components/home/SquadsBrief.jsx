import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { 
  FaCode, 
  FaBrain, 
  FaNetworkWired, 
  FaPalette, 
  FaSearchDollar, 
  FaShieldAlt, 
  FaLaptopCode,
  FaMicrochip,
  FaRobot
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import SquadCard from '../squads/SquadCard';
import  SQUAD_DATA  from '../../utils/data/SQUAD_DATA';


const SQUADS = SQUAD_DATA


const SquadsBrief = () => {
  const squads=SQUADS

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 bg-base-300" id="squads">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle 
          title="Our Squads" 
          subtitle="Specialized Teams" 
          description="Join a squad that matches your interests and collaborate on exciting projects"
        />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6"
        >
          {squads.map((squad) => (
            <SquadCard key={squad.id} squad={squad} />
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/squads" 
            className="inline-block group relative overflow-hidden px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center justify-center">
              Explore All Squads
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SquadsBrief;