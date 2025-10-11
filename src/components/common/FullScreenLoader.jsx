import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const FullScreenLoader = ({ loadingText = 'Loading...' }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-base-100/90 backdrop-blur-sm">
      <div className="text-center">
        {/* <FaSpinner className="text-6xl animate-spin text-sky-500" />
        <p className="mt-4 text-sm text-slate-500">{loadingText}</p> */}
        <AiOutlineLoading3Quarters className="text-6xl animate-spin text-sky-500" />
            <p className="mt-4 text-sm text-slate-500">{loadingText}</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;