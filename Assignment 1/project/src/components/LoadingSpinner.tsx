import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <div className="ml-4">
        <p className="text-xl font-semibold text-gray-700">Loading users...</p>
        <p className="text-sm text-gray-500">Fetching profile data</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;