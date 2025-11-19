import { useState } from "react";
import {
  FaUserFriends,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserCircle,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { contactPersons } from "../../utils/data/data";

const ContactCard = ({ person }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Profile Image - Larger Size */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <FaUserCircle className="h-24 w-24" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8">
          <h3 className="text-xl font-bold text-white">{person.name}</h3>
          <span className="text-blue-200 font-medium">{person.role}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-5 space-y-4">
        <a
          href={`tel:${person.phone}`}
          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
        >
          <div className="bg-blue-50 p-2.5 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
            <FaPhoneAlt className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-medium">{person.phone}</span>
        </a>
        
        <a
          href={`https://wa.me/88${person.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-green-600 transition-colors group"
        >
          <div className="bg-green-50 p-2.5 rounded-lg mr-3 group-hover:bg-green-100 transition-colors">
            <FaWhatsapp className="h-5 w-5 text-green-600" />
          </div>
          <span className="font-medium">{person.whatsapp}</span>
        </a>
        
        <a
          href={`mailto:${person.email}`}
          className="flex items-center text-gray-700 hover:text-red-600 transition-colors group"
        >
          <div className="bg-red-50 p-2.5 rounded-lg mr-3 group-hover:bg-red-100 transition-colors">
            <FaEnvelope className="h-5 w-5 text-red-500" />
          </div>
          <span className="truncate font-medium">{person.email}</span>
        </a>
      </div>
    </div>
  );
};

const OfflineReg = () => {
  const [showAllContacts, setShowAllContacts] = useState(false);
  const visibleContacts = showAllContacts ? contactPersons : contactPersons.slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-blue-100 text-blue-600 mb-4">
          <FaUserFriends className="h-10 w-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Offline Registration
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Visit our office to complete your registration in person. Meet our team members below.
        </p>
      </div>

            {/* Office Info Section */}
            <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mb-10">
        <div className="md:flex">
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 mb-4">
                <FaMapMarkerAlt className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
              <p className="text-gray-600">Room 2301, NON Tech Building</p>
              <p className="text-sm text-gray-500">Building 1, 3rd Floor</p>
              <p className="text-sm text-gray-500 mt-4">9:00 AM - 4:00 PM (Sun-Thu)</p>
            </div>
          </div>
          <div className="p-8 md:w-1/2">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h4>
            <div className="space-y-4">
              <a
                href="tel:01858739475"
                className="flex items-center text-sky-600 hover:text-sky-700 group"
              >
                <div className="bg-sky-50 p-2.5 rounded-lg mr-3 group-hover:bg-sky-100">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <span className="font-medium"> <a href="tel:01858739475">Call: 01858739475</a></span>
              </a>
              <a
                href="tel:01858739475"
                className="flex items-center text-sky-600 hover:text-sky-700 group"
              >
                <div className="bg-sky-50 p-2.5 rounded-lg mr-3 group-hover:bg-sky-100">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <span className="font-medium"> <a href="tel:01328128856">Call: 01328128856</a></span>
              </a>
              <a
                href="mailto:info@rpicc.org"
                className="flex items-center text-sky-600 hover:text-sky-700 group"
              >
                <div className="bg-gray-100 p-2.5 rounded-lg mr-3 group-hover:bg-gray-200">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="font-medium">Email Us : <a href="mailto:computerclubrpi@gmail.com">computerclubrpi@gmail.com</a></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Team Section */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 mx-auto text-center">Contact Our Team For Registration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleContacts.map((person, index) => (
            <ContactCard key={index} person={person} />
          ))}
        </div>

        {contactPersons.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllContacts(!showAllContacts)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {showAllContacts ? (
                <>
                  Show Less
                  <IoMdArrowDropup className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  View All {contactPersons.length} Team Members
                  <IoMdArrowDropdown className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>


    </div>
  );
};

export default OfflineReg;