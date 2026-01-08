import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import FallBeamBackground from "./FallBeamBackground";
import ParticlesBackground from "./ParticlesBackground";
import HexagonBackground from "./HexagonBackground";
import DiamondGridBackground from "./DiamondGridBackground";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS configuration
    const serviceId = 'service_02'; // You'll need to replace this
    const templateId = 'template_02'; // You'll need to replace this
    const publicKey = 'HTui9n0Nqc7Sc_nX7'; // You'll need to replace this

    // Send email using EmailJS
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'zeeshannazim115@gmail.com',
      },
      publicKey
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly at zeeshannazim115@gmail.com",
        variant: "destructive",
      });
      setIsSending(false);
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 relative overflow-hidden" 
      style={{ backgroundColor: '#F8F8F8' }}
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

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
            Contact
          </h2>
          <div className="relative w-16 h-1 mx-auto bg-primary mb-6 sm:mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Feel free to Contact me by submitting the form below and I will get back
            to you as soon as possible
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form ref={formRef} onSubmit={handleSubmit} className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50 space-y-6 sm:space-y-8">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-foreground/70 group-focus-within:text-primary transition-colors">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 sm:h-14 px-4 sm:px-5 text-sm sm:text-base bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-0 transition-all hover:border-gray-300 shadow-sm"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-foreground/70 group-focus-within:text-primary transition-colors">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 sm:h-14 px-4 sm:px-5 text-sm sm:text-base bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-0 transition-all hover:border-gray-300 shadow-sm"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-foreground/70 group-focus-within:text-primary transition-colors">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Enter Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[200px] sm:min-h-[250px] resize-none px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base bg-white border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-0 transition-all hover:border-gray-300 shadow-sm"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </div>

              <div className="text-right pt-2 sm:pt-4">
                <Button
                  type="submit"
                  disabled={isSending}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  {isSending ? "SENDING..." : "SUBMIT"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
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

export default Contact;
