import { Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/zeeshan-nazim", label: "LinkedIn", color: "hover:bg-[#0077B5]" },
    { icon: Instagram, href: "https://www.instagram.com/zee_shan0101/", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]" },
    { icon: Github, href: "https://github.com/MuhammadZeeshanNazim", label: "GitHub", color: "hover:bg-[#333]" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: Mail, text: "zeeshannazim115@gmail.com", href: "mailto:zeeshannazim115@gmail.com" },
    { icon: MapPin, text: "Pakistan", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Muhammad Zeeshan Nazim
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full mb-4"></div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              A passionate Software Engineer and Full Stack Developer crafting exceptional digital experiences. 
              Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/40 ${social.color}`}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all hover:translate-x-2 duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-400 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="group flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4">
            <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} 
            <span className="text-white font-semibold">Muhammad Zeeshan Nazim</span>
            · All rights reserved
          </p>
          
          <a
            href="#hero"
            className="group flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-white font-medium">Back to Top</span>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-purple-500/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl"></div>
    </footer>
  );
};

export default Footer;
