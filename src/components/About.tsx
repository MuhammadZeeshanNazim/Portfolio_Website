import { Button } from "./ui/button";
import { Code2, Sparkles, Rocket, Brain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "GraphQL",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Bootstrap",
    "Python",
    "Responsive Design",
    "Agile",
    "CI/CD",
  ];

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
      id="about" 
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header with animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.3em] mb-6">
            About Me
          </h2>
          <div className="relative w-16 h-1 mx-auto bg-primary mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Here you will find more information about me, what I do, and my current
            skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Get to know me */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl md:text-2xl font-semibold mb-8">
              Get to know me!
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group">
                <div className="absolute left-[-5px] top-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="group-hover:text-foreground transition-colors duration-300">
                  I'm a <strong className="text-foreground font-bold">Software Engineer and Full Stack Developer</strong> building
                  and managing Websites and Web Applications that
                  leads to the success of the overall product. Check out some of my
                  work in the <strong className="text-foreground font-bold">Projects</strong> section.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group">
                <div className="absolute left-[-5px] top-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="group-hover:text-foreground transition-colors duration-300">
                  With years of experience in both <strong className="text-foreground font-bold">Frontend and Backend Development</strong>, I specialize in creating scalable, high-performance applications using modern technologies. I have a proven track record of delivering enterprise-level solutions and working with cross-functional teams to achieve project goals.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group">
                <div className="absolute left-[-5px] top-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <p className="group-hover:text-foreground transition-colors duration-300">
                  I'm open to <strong className="text-foreground font-bold">Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity that
                  matches my skills and experience then don't hesitate to{" "}
                  <strong className="text-foreground font-bold">contact</strong> me.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1 hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Rocket className="w-4 h-4 mr-2" />
                CONTACT
              </Button>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl md:text-2xl font-semibold mb-8">
              My Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative bg-white px-6 py-3.5 rounded font-semibold text-sm text-foreground/90 
                    shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(168,85,247,0.15)]
                    transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-primary/0 
                    group-hover:border-primary transition-all duration-300 group-hover:w-3 group-hover:h-3"></div>
                  
                  {/* Text with hover color change */}
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default About;
