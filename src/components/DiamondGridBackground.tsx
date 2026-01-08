import React from 'react';

const DiamondGridBackground: React.FC = () => {
  return (
    <>
      <div className="diamond-grid-background"></div>

      <style jsx>{`
        .diamond-grid-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image: 
            linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.02) 75%);
          background-size: 100px 100px;
          background-position: 0 0, 0 50px, 50px -50px, -50px 0;
          opacity: 0.5;
        }

        .diamond-grid-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(45deg, rgba(168, 85, 247, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(168, 85, 247, 0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(168, 85, 247, 0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(168, 85, 247, 0.03) 75%);
          background-size: 200px 200px;
          background-position: 0 0, 0 100px, 100px -100px, -100px 0;
          animation: shimmer 20s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0 0, 0 100px, 100px -100px, -100px 0;
          }
          100% {
            background-position: 200px 200px, 200px 300px, 300px 100px, 100px 200px;
          }
        }

        @media (max-width: 768px) {
          .diamond-grid-background {
            background-size: 60px 60px;
            background-position: 0 0, 0 30px, 30px -30px, -30px 0;
          }
          
          .diamond-grid-background::before {
            background-size: 120px 120px;
            background-position: 0 0, 0 60px, 60px -60px, -60px 0;
          }

          @keyframes shimmer {
            0% {
              background-position: 0 0, 0 60px, 60px -60px, -60px 0;
            }
            100% {
              background-position: 120px 120px, 120px 180px, 180px 60px, 60px 120px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default DiamondGridBackground;
