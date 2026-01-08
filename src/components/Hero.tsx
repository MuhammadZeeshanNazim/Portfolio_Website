import FallBeamBackground from "./FallBeamBackground";
import ParticlesBackground from "./ParticlesBackground";
import HexagonBackground from "./HexagonBackground";
import DiamondGridBackground from "./DiamondGridBackground";
import { Button } from "./ui/button";
import { MousePointer2 } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[100vh] sm:min-h-[110vh] flex items-center justify-center relative pt-20 sm:pt-24 pb-16 sm:pb-24 overflow-hidden"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      {/* Diamond Grid Background */}
      <DiamondGridBackground />
      
      {/* Hexagon Background */}
      <HexagonBackground />
      
      {/* Particles Background */}
      <ParticlesBackground 
        colors={['#22d3ee', '#06b6d4', '#0891b2']}
        size={3}
        countDesktop={60}
        countTablet={50}
        countMobile={30}
        zIndex={1}
      />
      
      {/* Falling Beam Background */}
      <FallBeamBackground 
        lineCount={25}
        beamColorClass="cyan-400"
      />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="heading-primary mb-6 sm:mb-8 leading-tight">
          HEY, I'M ZEESHAN NAZIM
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-4">
          A Software Engineer and Full Stack Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1"
          onClick={scrollToProjects}
        >
          PROJECTS
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mouse {
          width: 25px;
          height: 40px;
          border: 2px solid #333;
          border-radius: 60px;
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .mouse-wheel {
          width: 3px;
          height: 4px;
          background: #333;
          border-radius: 10px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: mouseWheel 1.8s ease-in-out infinite;
        }

        @keyframes mouseWheel {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(22px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
