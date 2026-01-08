import React from "react";

interface RippleButtonProps {
  text?: string;
  bgColor?: string;
  circleColor?: string;
  width?: string;  // e.g., "200px" or "100%"
  height?: string; // e.g., "50px"
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  text = "Click Me",
  bgColor,
  circleColor,
  width,
  height,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`ripple-btn ${className}`}
        style={{
          backgroundColor: bgColor || 'hsl(262, 83%, 58%)',
          color: 'white',
          width: width,
          height: height,
        }}
      >
        <span className="text">{text}</span>
      </button>

      <style jsx>{`
        .ripple-btn {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          padding: 1em 2em;
          border: none;
          border-radius: 0.6rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .ripple-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .ripple-btn:hover::before {
          left: 100%;
        }

        .ripple-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.6rem;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ripple-btn:hover::after {
          opacity: 1;
        }

        .ripple-btn .text {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .ripple-btn:hover .text {
          transform: scale(1.05);
        }

        .ripple-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default RippleButton;
