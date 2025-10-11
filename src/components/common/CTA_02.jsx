import React from 'react'
import { Link } from 'react-router'
import SocialMediaLinks from './SocialMediaLinks'

const CTA_02 = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 text-white py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-sky-500 to-indigo-700 animate-gradient-xy">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFucm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to be part of our story?
          </h2>
          <p className="mt-4 text-xl text-sky-100 max-w-2xl mx-auto">
            Whether you're a beginner or an expert, there's a place for you in our community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/join"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-sky-700 bg-white hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Join Now
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-base font-medium rounded-lg shadow-sm text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Upcoming Events
            </Link>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
             <SocialMediaLinks/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA_02