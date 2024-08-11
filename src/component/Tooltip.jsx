// src/components/Tooltip.js
import React from 'react';

const Tooltip = ({ topic }) => {
  return (
    <div className="tooltip bg-gray-600 text-white text-xs p-2 rounded">
      {topic}
    </div>
  );
};

export default Tooltip;
