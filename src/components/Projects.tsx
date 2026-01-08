import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-28 relative" 
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.3em] mb-6">
            Projects
          </h2>
          <div className="relative w-16 h-1 mx-auto bg-primary mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative group">
                  {/* Laptop Frame */}
                  <div className="relative">
                    {/* Screen */}
                    <div className="relative bg-[#2c2c2c] rounded-t-lg p-2 shadow-2xl">
                      {/* Top bar with dots */}
                      <div className="flex items-center gap-1.5 mb-2 px-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      {/* Screen content */}
                      <div className="relative bg-white rounded overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Laptop Base/Keyboard */}
                    <div className="relative h-8 bg-gradient-to-b from-[#d4d4d8] via-[#c9c9cd] to-[#b8b8bd] rounded-b-xl overflow-hidden">
                      {/* Keyboard area with subtle grid pattern */}
                      <div className="absolute inset-0 opacity-40">
                        <div className="grid grid-cols-12 gap-[2px] p-2">
                          {[...Array(36)].map((_, i) => (
                            <div key={i} className="h-1 bg-[#a8a8ad] rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                      {/* Trackpad */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#c0c0c5] rounded border border-[#a0a0a5]"></div>
                      {/* Lighting effect */}
                      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-[#e8e8ec] to-transparent"></div>
                    </div>
                    
                    {/* Laptop Bottom */}
                    <div className="mx-auto w-[98%] h-1 bg-gradient-to-b from-[#c0c0c5] to-[#b0b0b5] rounded-b-md"></div>
                    
                    {/* Shadow */}
                    <div className="absolute -bottom-6 inset-x-0 h-10 bg-gradient-to-b from-black/20 to-transparent blur-xl group-hover:from-primary/20 transition-colors duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
