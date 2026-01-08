import { Linkedin, Github, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const SocialSidebar = () => {
  const [position, setPosition] = useState<'absolute' | 'fixed'>('absolute');

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/zeeshan-nazim", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/zee_shan0101/", label: "Instagram" },
    { icon: Github, href: "https://github.com/MuhammadZeeshanNazim", label: "GitHub" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // If we've scrolled past the hero section, make it absolute (stays with hero)
        // Otherwise keep it fixed
        if (scrollPosition + window.innerHeight > heroBottom) {
          setPosition('absolute');
        } else {
          setPosition('fixed');
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`left-8 bottom-0 z-40 hidden lg:block ${position === 'fixed' ? 'fixed' : 'absolute'}`}
      style={position === 'absolute' ? { bottom: '2rem' } : {}}
    >
      <div className="flex flex-col items-center gap-4 pb-8">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-11 h-11 flex items-center justify-center bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
        <div className="w-[1px] h-20 bg-foreground/80"></div>
      </div>
    </div>
  );
};

export default SocialSidebar;
