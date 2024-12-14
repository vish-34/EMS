import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="w-1100 text-center mt-18">
      <p className="text-lg mb-2">{label}</p>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
