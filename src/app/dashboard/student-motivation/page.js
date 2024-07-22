'use client'

import BarChart from '../../../components/BarChart';

export default function StudentMotivationPage() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-4">
        Student Motivation
      </h2>
      <p className="mb-6">
        Here you can track and analyze student motivation levels.
      </p>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
        <BarChart />
      </div>
    </div>
  );
}
