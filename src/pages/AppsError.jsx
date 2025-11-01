import React from 'react';
import errorImg from '../assets/App-Error.png';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <img
        src={errorImg}
        alt="404 Error"
        className="w-64 sm:w-72 md:w-80 lg:w-96 mb-6"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800">
        OPPS!! APP NOT FOUND
      </h1>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-md">
        The App you are requesting is not found on our system.  please try another apps
      </p>

      <Link
        to="apps"
        className="px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default Error;
