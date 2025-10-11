import React from "react";
import { FaLaptop, FaArrowRight } from "react-icons/fa";

const OnlineReg = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-sky-100">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 text-sky-600 mb-4">
            <FaLaptop className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Online Registration
          </h3>
        </div>

        <ol className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mr-3">
              1
            </span>
            <span>Fill up the Google Form with required information</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mr-3">
              2
            </span>
            <span>Pay 35 BDT to 01717171717 (Bkash/Nagad/Rocket)</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mr-3">
              3
            </span>
            <span>Use your phone number as reference</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-sky-100 text-sky-600 font-medium text-sm mr-3">
              4
            </span>
            <span>Submit the transaction ID in the form</span>
          </li>
        </ol>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-8"
          >
            Register Now (Google Form)
            <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnlineReg;
