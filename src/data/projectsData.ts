export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: {
    description: string[];
    highlights?: string[];
  };
  tools: string[];
  projectLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "voxa-ai",
    title: "Voxa AI",
    description:
      "VoxaAI is an AI-powered tool designed to enhance spoken English while preserving the speaker's natural tone and emotions. It processes speech exactly as it is spoken and improves pronunciation, sentence flow, and overall clarity, without making the voice sound artificial.",
    image: "/voxa.png",
    overview: {
      description: [
        "VoxaAI is an AI-powered tool designed to enhance spoken English while preserving the speaker's natural tone and emotions. It processes speech exactly as it is spoken and improves pronunciation, sentence flow, and overall clarity, without making the voice sound artificial.",
        "Users can record audio directly within the application or upload existing audio clips. VoxaAI then generates a refined, easy-to-understand version of the original speech, helping users communicate more confidently and effectively.",
        "Since the launch of this project, it has gained significant traction in the education and content creation space. VoxaAI is now being used by educators, podcasters, and business professionals globally, helping many people build confidence and opportunities in their professional communication.",
      ],
      highlights: [
        "Tone & Emotion Preservation",
        "Pronunciation Enhancement",
        "Improved Sentence Flow",
        "Audio Recording & Upload Support",
        "AI-Driven Speech Processing",
        "Clear & Natural Output",
      ],
    },
    tools: ["React", "TypeScript", "Python", "Speech Processing", "Audio Processing", "Model Integration"],
    projectLink: "https://github.com/MuhammadZeeshanNazim/Voxa-AI",
  },
  {
    id: "SecureComm",
    title: "SecureComm",
    description:
      "Can the server read my messages? In most apps, the honest answer is yes, even if they say they won't. I built a messaging and file-sharing system where the answer is cryptographically no.",
    image: "/SecureComm.jpg",
    overview: {
      description: [
        "Can the server read my messages? In most apps, the honest answer is yes, even if they say they won't. I built a messaging and file-sharing system where the answer is cryptographically no.",
        "I implemented a system where private keys never leave the user's device, and all encryption happens client-side using the Web Crypto API. The system features a custom authenticated key-exchange to prevent impersonation, and uses AES-256-GCM with a fresh IV for every message. The server only ever sees encrypted data with zero plaintext storage.",
        "I actively simulated attacks like MITM during key exchange and replay attacks using old messages. To counter them, I added digital signatures, nonces, timestamps, and sequence numbers. Real security starts when you assume nothing is safe, and design anyway.",
      ],
      highlights: [
        "Private keys never leave the user's device",
        "Client-side encryption using Web Crypto API",
        "Custom authenticated key-exchange to prevent impersonation",
        "AES-256-GCM with a fresh IV for every message",
        "Zero plaintext storage on server",
        "Protection against MITM and replay attacks",
        "Digital signatures, nonces, timestamps, and sequence numbers",
      ],
    },
    tools: ["React", "TypeScript", "Web Crypto API", "Node.js", "Cryptography", "Security"],
    projectLink: "https://github.com/MuhammadZeeshanNazim/SecureComm",
  },
  {
    id: "hostel-scout",
    title: "Hostel Scout",
    description:
      "A comprehensive UI/UX design for a hostel finder mobile app that connects hostel owners with students, featuring intuitive interfaces for tenant management and facility discovery.",
    image: "/figma.png",
    overview: {
      description: [
        "Hostel Scout is a complete UI/UX design for a mobile application aimed at bridging the gap between hostel owners and students seeking accommodation. The design focuses on creating an intuitive user experience that improves online visibility for hostel owners while providing students with a convenient way to find and explore suitable hostels.",
        "The design includes detailed screens for browsing hostel amenities, direct communication interfaces, personalized search flows with advanced filters, and location-based discovery features. I designed user journeys for both students and hostel owners, ensuring each persona has tailored experiences for their specific needs.",
        "The complete design system includes screens for real-time room availability management, review and rating interfaces, map integration, community features for batch connections, and in-app customer support chat. Every screen was carefully crafted with attention to accessibility, modern design principles, and user-centric interactions.",
      ],
      highlights: [
        "Detailed Facility Information & Amenities Screens",
        "Location-Based Search with Map Integration",
        "Customized Search Filters & Preferences Interface",
        "Real-Time Room Availability Management Dashboard",
        "Direct Communication Chat Interface",
        "Community Features & Batch Connection Screens",
        "Reviews, Ratings & Wishlist Management UI",
        "In-App Customer Support Chat Design",
        "Promotions & Special Offers Layouts",
        "Analytics Dashboard for Hostel Owners",
      ],
    },
    tools: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Design Systems", "Mobile Design"],
    projectLink: "https://www.figma.com/proto/cgFfsOpG7skQ4g5pEVhLPT/Untitled--Copy-?node-id=24-106&t=tHpyT8e5leJxpiwQ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A106&show-proto-sidebar=1",
  },

  
];
