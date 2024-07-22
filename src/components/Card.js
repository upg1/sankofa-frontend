import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-blue-500 dark:text-blue-300 hover:underline">
        Learn more
      </a>
    </div>
  );
};

export default Card;
