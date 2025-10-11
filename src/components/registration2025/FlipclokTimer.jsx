import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import FlipCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const FlipClockTimer = ({ targetDate, eventName }) => {
  // Calculate responsive styles
  const getResponsiveStyles = () => {
    if (typeof window === 'undefined') return {};
    
    const width = window.innerWidth;
    if (width < 640) { // Mobile
      return {
        digitBlock: { width: 25, height: 40, fontSize: 25 },
        separator: { size: 1 },
        label: { fontSize: 10 }
      };
    } else if (width < 768) { // Tablet
      return {
        digitBlock: { width: 48, height: 72, fontSize: 30 },
        separator: { size: 5 },
        label: { fontSize: 11 }
      };
    } else { // Desktop
      return {
        digitBlock: { width: 60, height: 90, fontSize: 50 },
        separator: { size: 6 },
        label: { fontSize: 12 }
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-3xl mx-auto">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center justify-center">
          <FaCalendarAlt className="mr-2 text-sky-600" />
          {eventName}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center justify-center">
          <FaClock className="mr-1.5" />
          {new Date(targetDate).toLocaleString()}
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex justify-center min-w-max mx-auto">
          <FlipCountdown
            to={new Date(targetDate).getTime()}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            duration={0.7}
            showLabels={true}
            showSeparators={true}
            renderMap={[true, true, true, true]}
            onComplete={() => {
              console.log('Countdown completed!');
            }}
            className="flip-clock"
            digitBlockStyle={{
              ...styles.digitBlock,
              fontFamily: 'inherit',
            }}
            separatorStyle={{
              ...styles.separator,
              color: '#6b7280', // text-gray-500
              padding: '0 4px',
            }}
            separatorRender={(index) => (
              <span className="text-2xl sm:text-4xl font-bold text-gray-500">:</span>
            )}
            labelStyle={{
              ...styles.label,
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#6b7280', // text-gray-500
              paddingTop: '4px',
            }}
          />
        </div>
      </div>

      <div className="mt-4 sm:mt-6 text-center">
        {new Date() > new Date(targetDate) ? (
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
            Event in Progress
          </span>
        ) : (
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800">
            Countdown Active
          </span>
        )}
      </div>
    </div>
  );
};

export default FlipClockTimer;