import React from "react";

interface CameraMockupProps {
  image: string;
  alt: string;
  className?: string;
}

const CameraMockup: React.FC<CameraMockupProps> = ({ image, alt, className = "" }) => {
  return (
    <div className={`relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto group ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-3xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Camera Body Shadow */}
        <defs>
          <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          
          <filter id="innerShadow">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feFlood floodColor="#000000" floodOpacity="0.3"/>
            <feComposite in2="offset-blur" operator="in"/>
          </filter>
          
          <clipPath id="screenClip">
            <rect x="60" y="40" width="280" height="180" rx="8" ry="8"/>
          </clipPath>
        </defs>

        {/* Camera Body */}
        <rect
          x="20"
          y="20"
          width="360"
          height="240"
          rx="20"
          ry="20"
          fill="url(#cameraGradient)"
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* Camera Body Highlight */}
        <rect
          x="22"
          y="22"
          width="356"
          height="4"
          rx="2"
          ry="2"
          fill="#444"
          opacity="0.8"
        />

        {/* Screen Bezel */}
        <rect
          x="55"
          y="35"
          width="290"
          height="190"
          rx="12"
          ry="12"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Screen */}
        <rect
          x="60"
          y="40"
          width="280"
          height="180"
          rx="8"
          ry="8"
          fill="url(#screenGradient)"
        />

        {/* Image Container */}
        <foreignObject x="60" y="40" width="280" height="180" clipPath="url(#screenClip)">
          <div className="w-full h-full overflow-hidden rounded-lg relative">
            <img
                key={image}
                src={image}
                alt={alt}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                style={{ 
                  imageRendering: 'crisp-edges',
                  animation: 'pictureTransition 0.8s ease-in-out'
                }}
              />
            {/* Camera Focus Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300 rounded-lg"></div>
            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
          </div>
        </foreignObject>

        {/* Screen Reflection */}
        <rect
          x="60"
          y="40"
          width="280"
          height="90"
          rx="8"
          ry="8"
          fill="url(#screenReflection)"
          opacity="0.1"
        />

        {/* Camera Controls */}
        {/* Power Button */}
        <circle cx="50" cy="50" r="6" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        <circle cx="50" cy="50" r="3" fill="#ff4444" className="transition-all duration-300 group-hover:fill-red-300">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </circle>
        
        {/* Menu Button */}
        <rect x="42" y="70" width="16" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        <text x="50" y="76" textAnchor="middle" fontSize="6" fill="#ccc" className="transition-all duration-300 group-hover:fill-white">MENU</text>
        
        {/* Navigation Buttons */}
        <circle cx="50" cy="90" r="4" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        <circle cx="50" cy="105" r="4" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        <circle cx="50" cy="120" r="4" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        <circle cx="50" cy="135" r="4" fill="#333" stroke="#555" strokeWidth="1" className="transition-all duration-300 group-hover:fill-gray-600"/>
        
        {/* Recording Indicator */}
        <circle cx="350" cy="50" r="4" fill="#ff0000" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <text x="360" y="54" fontSize="6" fill="#ccc">REC</text>

        {/* Brand Logo Area */}
        <rect x="300" y="240" width="60" height="15" rx="3" fill="#222"/>
        <text x="330" y="250" textAnchor="middle" fontSize="8" fill="#888" fontFamily="Arial, sans-serif">NextWave</text>

        {/* Lens Mount (decorative) */}
        <circle cx="200" cy="280" r="25" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
        <circle cx="200" cy="280" r="20" fill="#2a2a2a"/>
        <circle cx="200" cy="280" r="15" fill="#1a1a1a"/>
        
        {/* Lens Mount Details */}
        <circle cx="200" cy="280" r="12" fill="none" stroke="#444" strokeWidth="1"/>
        <circle cx="200" cy="280" r="8" fill="none" stroke="#444" strokeWidth="1"/>
        <circle cx="200" cy="280" r="4" fill="#333"/>

        {/* Screen Reflection Gradient */}
        <defs>
          <linearGradient id="screenReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CameraMockup;