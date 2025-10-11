import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({title, subtitle}) => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center my-8"
        >
          <span className="inline-block text-sky-600 font-semibold text-sm uppercase tracking-widest mb-3">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <div className="w-24 h-1 bg-rpi-red mx-auto rounded-full"></div>
        </motion.div>
  )
}

export default SectionTitle