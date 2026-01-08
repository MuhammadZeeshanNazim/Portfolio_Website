import React from 'react';

const HexagonBackground: React.FC = () => {
  return (
    <>
      <div className="hexagon-background">
        <div className="hexagon hex1"></div>
        <div className="hexagon hex2"></div>
        <div className="hexagon hex3"></div>
        <div className="hexagon hex4"></div>
        <div className="hexagon hex5"></div>
        <div className="hexagon hex6"></div>
        <div className="hexagon hex7"></div>
        <div className="hexagon hex8"></div>
        <div className="hexagon hex9"></div>
        <div className="hexagon hex10"></div>
      </div>

      <style jsx>{`
        .hexagon-background {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hexagon {
          position: absolute;
          width: 150px;
          height: 173px;
          background: transparent;
          border: 2px solid rgba(168, 85, 247, 0.15);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
        }

        .hexagon::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), transparent);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          z-index: -1;
        }

        .hex1 {
          top: 5%;
          left: 10%;
          width: 120px;
          height: 138px;
          animation: float 8s ease-in-out infinite;
        }

        .hex2 {
          top: 15%;
          right: 8%;
          width: 100px;
          height: 115px;
          animation: float 10s ease-in-out infinite 1s;
        }

        .hex3 {
          top: 40%;
          left: 5%;
          width: 90px;
          height: 104px;
          animation: float 12s ease-in-out infinite 2s;
        }

        .hex4 {
          top: 60%;
          right: 15%;
          width: 130px;
          height: 150px;
          animation: float 9s ease-in-out infinite 1.5s;
        }

        .hex5 {
          bottom: 10%;
          left: 20%;
          width: 110px;
          height: 127px;
          animation: float 11s ease-in-out infinite 3s;
        }

        .hex6 {
          top: 25%;
          left: 30%;
          width: 80px;
          height: 92px;
          animation: float 13s ease-in-out infinite 2.5s;
        }

        .hex7 {
          top: 35%;
          right: 25%;
          width: 95px;
          height: 109px;
          animation: float 10s ease-in-out infinite 4s;
        }

        .hex8 {
          bottom: 20%;
          right: 10%;
          width: 105px;
          height: 121px;
          animation: float 14s ease-in-out infinite 1s;
        }

        .hex9 {
          top: 50%;
          left: 45%;
          width: 70px;
          height: 81px;
          animation: float 15s ease-in-out infinite 3.5s;
        }

        .hex10 {
          bottom: 30%;
          left: 35%;
          width: 115px;
          height: 132px;
          animation: float 11s ease-in-out infinite 2s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @media (max-width: 768px) {
          .hexagon {
            width: 80px;
            height: 92px;
          }
          .hex1, .hex4, .hex10 {
            width: 70px;
            height: 81px;
          }
          .hex2, .hex5, .hex8 {
            width: 60px;
            height: 69px;
          }
          .hex3, .hex6, .hex9 {
            width: 50px;
            height: 58px;
          }
        }
      `}</style>
    </>
  );
};

export default HexagonBackground;
