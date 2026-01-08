import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projectsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import DiamondGridBackground from "@/components/DiamondGridBackground";
import ParticlesBackground from "@/components/ParticlesBackground";
import HexagonBackground from "@/components/HexagonBackground";

const ProjectCaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (toolsRef.current) observer.observe(toolsRef.current);

    setTimeout(() => setIsVisible(true), 100);

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        {/* Background Effects */}
        <DiamondGridBackground />
        <HexagonBackground />
        <ParticlesBackground
          colors={["#22d3ee", "#06b6d4", "#0891b2"]}
          size={3}
          countDesktop={60}
          countTablet={50}
          countMobile={40}
          zIndex={1}
        />

        <div
          ref={heroRef}
          className={`container mx-auto px-6 max-w-4xl text-center relative z-10 fade-in ${
            isVisible ? "fade-in-visible" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
            {project.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            {project.overview.description[0]}
          </p>

          {project.projectLink && (
            <div className="animate-fade-in-up animation-delay-400">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md transition-all hover:-translate-y-1"
                asChild
              >
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Project Link
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Image Section */}
      <section className="py-20 relative" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className={`relative group fade-in animation-delay-200 ${
              isVisible ? "fade-in-visible" : ""
            }`}
          >
            {/* Laptop Frame */}
            <div className="relative mx-auto max-w-2xl">
              {/* Screen */}
              <div className="relative bg-[#2c2c2c] rounded-t-xl p-2 md:p-3 shadow-2xl">
                {/* Top bar with dots */}
                <div className="flex items-center gap-1.5 mb-2 px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                {/* Screen content */}
                <div className="relative bg-white rounded overflow-hidden shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Laptop Base/Keyboard */}
              <div className="relative h-8 md:h-10 bg-gradient-to-b from-[#d4d4d8] via-[#c9c9cd] to-[#b8b8bd] rounded-b-xl overflow-hidden">
                {/* Keyboard area with subtle grid pattern */}
                <div className="absolute inset-0 opacity-40">
                  <div className="grid grid-cols-16 gap-[2px] p-2">
                    {[...Array(48)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 bg-[#a8a8ad] rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>
                {/* Trackpad */}
                <div className="absolute bottom-1 md:bottom-1.5 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-[#c0c0c5] rounded border border-[#a0a0a5]"></div>
                
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section
        ref={overviewRef}
        className="py-20 relative fade-in"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Project Overview */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-8">
              Project Overview
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {project.overview.description.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}

              {project.overview.highlights && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Key Features:
                  </h3>
                  <ul className="space-y-3">
                    {project.overview.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start text-base md:text-lg"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-16" ref={toolsRef}>
            <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-8">
              Tools-Skills Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <div
                  key={index}
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
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* See Live */}
          <div>
            <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-8">
              See Live
            </h2>

            <div className="flex flex-wrap gap-4">
              {project.projectLink && (
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md transition-all hover:-translate-y-1"
                  asChild
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Project Link
                  </a>
                </Button>
              )}

              {project.githubLink && (
                <Button
                  className="bg-foreground hover:bg-foreground/90 text-background font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md transition-all hover:-translate-y-1"
                  asChild
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}

              <Button
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold px-12 py-6 text-sm uppercase tracking-wider rounded-md transition-all hover:-translate-y-1"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ProjectCaseStudy;
