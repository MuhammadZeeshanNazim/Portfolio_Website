import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SparkleNavbar from "./SparkleNavbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? "bg-background backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-background/95 backdrop-blur-lg border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-foreground/20 overflow-hidden bg-gray-100 flex-shrink-0">
              <img 
                src="/profile.jpeg" 
                alt="Muhammad Zeeshan Nazim" 
                className="w-full h-full object-cover scale-150"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider">
                M. Zeeshan Nazim
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">Full Stack Developer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <SparkleNavbar
              items={["Home", "About", "Projects", "Contact"]}
              color="#a855f7"
              onItemClick={(item) => scrollToSection(item.toLowerCase())}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-foreground/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-1 mt-4 pb-2 bg-card/50 backdrop-blur-md rounded-xl p-3 shadow-xl border border-border/50">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-left px-3 py-2.5 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-left px-3 py-2.5 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-left px-3 py-2.5 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-left px-3 py-2.5 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
