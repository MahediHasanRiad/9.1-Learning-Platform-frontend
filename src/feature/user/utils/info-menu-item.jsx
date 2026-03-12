import React from "react";

function InfoMenuItem({ Icon, text, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 
                 hover:bg-gray-50 hover:text-secondary-0 transition-all duration-200 
                 cursor-pointer group"
    >
      {/* Icon Wrapper for better alignment and hover effect */}
      <div className="flex-shrink-0 text-gray-400 group-hover:text-secondary-0 transition-colors">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* Text with clean typography */}
      <span className="text-sm font-medium tracking-tight">
        {text}
      </span>
    </div>
  );
}

export default InfoMenuItem;