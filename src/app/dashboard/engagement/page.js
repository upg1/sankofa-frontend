'use client'

import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import '../../globals.css'; // Adjust the path based on your file structure

export default function EngagementPage() {
  const [eventLog, setEventLog] = useState([]);

  const handleEvent = (eventType) => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLog([...eventLog, { type: eventType, time: timestamp }]);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Student Engagement Tracking
        </h1>
      </header>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Track Engagement Events
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => handleEvent('Raised Hand')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Raised Hand
          </button>
          <button
            onClick={() => handleEvent('Note Taking')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded dark:bg-green-700 dark:hover:bg-green-600"
          >
            Note Taking
          </button>
          <button
            onClick={() => handleEvent('Restless')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded dark:bg-yellow-700 dark:hover:bg-yellow-600"
          >
            Restless
          </button>
          <button
            onClick={() => handleEvent('Focused')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            Focused
          </button>
          <button
            onClick={() => handleEvent('Distracted')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded dark:bg-red-700 dark:hover:bg-red-600"
          >
            Distracted
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Event Log
          </h3>
          <ul className="mt-4">
            {eventLog.map((event, index) => (
              <li key={index} className="border-b border-gray-200 dark:border-gray-700 py-2">
                <span className="font-bold">{event.type}:</span> {event.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
