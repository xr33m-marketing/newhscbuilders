import React, { useState } from 'react';
import { Hammer, TreePine, Droplets, Star, Phone, MessageCircle, ChevronDown, ChevronUp, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import OurProcessSection from '../../components/OurProcessSection';
import RecentProjectsSection from '../../components/RecentProjectsSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import { SEO, getServiceSchema, getBreadcrumbSchema } from '../../components/SEO';

const landscapingServices = [
  {
    icon: <TreePine className="w-12 h-12 text-primary-accent" />,
    title: "Garden Design & Planting",
    description: "Custom garden design with plant selection, soil preparation, and seasonal planting for beautiful, thriving outdoor spaces.",
    detailedInfo: {
      expertise: "Our garden design specialists create bespoke planting schemes using plants suited to Scottish climate and soil conditions. We understand seasonal interest, plant combinations, and maintenance requirements for long-lasting garden beauty.",
      services: [
        "Custom garden design and layout",
        "Plant selection for Scottish climate",
        "Soil preparation and improvement",
        "Seasonal planting and maintenance",
        "Garden bed preparation and edging",
        "Ongoing plant care guidance"
      ],
      benefits: "Professional garden design creates year-round interest and increases property value. Our plant selections are chosen for Scottish conditions, ensuring healthy growth and reduced maintenance while providing seasonal color and texture."
    },
    image: "/garden-bed-planting-HSC.webp",
    link: "#/services/landscaping"
  },
  {
    icon: <TreePine className="w-12 h-12 text-primary-accent" />,
    title: "Artificial Turf Installation",
    description: "High-quality artificial grass installation providing low-maintenance, year-round green lawns with professional drainage and finishing.",
    detailedInfo: {
      expertise: "We specialize in premium artificial turf installation with proper sub-base preparation, drainage systems, and professional finishing. Our installations provide realistic-looking lawns that require minimal maintenance.",
      services: [
        "Premium artificial grass installation",
        "Proper sub-base preparation",
        "Drainage system installation",
        "Professional edging and finishing",
        "Pet-friendly turf options",
        "Maintenance guidance and support"
      ],
      benefits: "Artificial turf provides year-round green lawns with minimal maintenance, no watering requirements, and excellent durability. Perfect for busy households, pet owners, and areas with poor growing conditions."
    },
    images: [
      "/art-turf-home-projects-HSC.webp",
      "/artificial-turf-HSC-Service.webp"
    ],
    image: "/art-turf-home-projects-HSC.webp",
    link: "#/services/landscaping"
  },
  {
    icon: <TreePine className="w-12 h-12 text-primary-accent" />,
    title: "Composite Decking",
    description: "Premium composite decking installation providing durable, low-maintenance outdoor living spaces with professional construction and finishing.",
    detailedInfo: {
      expertise: "Our decking specialists install premium composite decking systems with proper structural support, drainage, and professional finishing. We understand load requirements, ventilation needs, and long-term durability.",
      services: [
        "Premium composite decking installation",
        "Structural framework construction",
        "Proper ventilation and drainage",
        "Professional railings and balustrades",
        "Integrated lighting options",
        "Maintenance guidance and warranties"
      ],
      benefits: "Composite decking provides long-lasting outdoor living spaces with minimal maintenance requirements. Our installations resist weathering, fading, and require no annual staining or sealing."
    },
    image: "/landscaping-hero-hsc.webp",
    link: "#/services/landscaping"
  },
  {
    icon: <TreePine className="w-12 h-12 text-primary-accent" />,
    title: "Fencing",
    description: "Composite and timber fencing solutions providing privacy, security, and aesthetic appeal with professional installation and long-lasting materials.",
    detailedInfo: {
      expertise: "Our fencing specialists install a wide range of fencing types including composite, timber, and decorative options. We ensure proper post installation, drainage, and finishing for maximum durability.",
      services: [
        "Site survey and planning",
        "Composite fencing installation",
        "Timber fencing and gates",
        "Decorative and privacy fencing",
        "Post installation and concrete work",
        "Gate automation and hardware"
      ],
      benefits: "Quality fencing provides privacy, security, and property definition while enhancing curb appeal. Our installations use premium materials designed for Scottish weather conditions with minimal maintenance requirements."
    },
    images: [
      "/Compostite-fencing-HSC-home.webp",
      "/fencing-home-projects-HSC.webp",
      "/HSC-fencing-SERVICES.webp",
      "/SERVICES-fencing-HSC.webp",
      "/fencing-HSC-SERVICES-Landscaping.webp"
    ],
    image: "/Compostite-fencing-HSC-home.webp",
    link: "#/services/landscaping"
  }
];

const Landscaping: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [artificialTurfImageIndex, setArtificialTurfImageIndex] = useState(0);
  const [currentMonoblockImageIndex, setCurrentMonoblockImageIndex] = React.useState(0);
  const [turfLayingImageIndex, setTurfLayingImageIndex] = useState(0);
  const [fencingImageIndex, setFencingImageIndex] = useState(0);
  const [monoblockImageIndex, setMonoblockImageIndex] = useState(0);
  const [patiosImageIndex, setPatiosImageIndex] = useState(0);
  const [gardenWallsIndex, setGardenWallsIndex] = useState(0);
  const [currentFencingImageIndex, setCurrentFencingImageIndex] = useState(0);
  const [currentFullTransformationImageIndex, setCurrentFullTransformationImageIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Auto-rotate artificial turf images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setArtificialTurfImageIndex(prev => (prev + 1) % 3); // Cycle through 3 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate fencing images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFencingImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate full transformation images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFullTransformationImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate turf laying images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTurfLayingImageIndex(prev => (prev + 1) % 2); // Cycle through 2 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate monoblock images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMonoblockImageIndex(prev => (prev + 1) % 5); // Cycle through 5 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate patios images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPatiosImageIndex(prev => (prev + 1) % 5); // Cycle through 5 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate garden walls images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setGardenWallsIndex(prev => (prev + 1) % 3); // Cycle through 3 images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate monoblock images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMonoblockImageIndex(prev => prev === 3 ? 0 : prev + 1); // 4 images (0-3)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [expandedService, setExpandedService] = React.useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const landscapingServices = [
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Artificial Turf",
      description: "Low-maintenance artificial grass installation for year-round green lawns without the upkeep of natural grass.",
      detailedInfo: {
        expertise: "Our artificial turf specialists install premium synthetic grass systems with proper drainage and base preparation. We use high-quality materials designed to withstand Scottish weather conditions and heavy foot traffic.",
        services: [
          "Site preparation and excavation",
          "Drainage system installation",
          "Base layer preparation and compaction",
          "Premium artificial turf installation",
          "Infill application and brushing",
          "Edge finishing and landscaping integration"
        ],
        benefits: "Artificial turf provides a consistently green, low-maintenance lawn that saves water, eliminates mowing, and stays beautiful year-round. Perfect for busy families, pet owners, and areas with poor growing conditions."
      },
      images: [
        "/art-turf-home-projects-HSC.webp",
        "/artificial-turf-HSC-Service.webp",
        "/turf-artificial-HSC-Service.webp"
      ],
      image: "/art-turf-home-projects-HSC.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Turf Laying",
      description: "Professional natural turf installation creating instant, lush green lawns with proper ground preparation and aftercare guidance.",
      detailedInfo: {
        expertise: "We source premium quality turf and prepare your ground to the highest standards for optimal root establishment. Our team understands soil conditions and drainage requirements for successful turf installation.",
        services: [
          "Soil analysis and preparation",
          "Ground leveling and grading",
          "Soil improvement and fertilization",
          "Premium turf supply and installation",
          "Initial watering and establishment",
          "Aftercare guidance and support"
        ],
        benefits: "Professional turf laying creates an instant, beautiful lawn that establishes quickly with proper care. We ensure optimal growing conditions for long-term lawn health and appearance."
      },
      beforeAfterImages: {
        before: "/groundskeepiing-home-before-HSC.webp",
        after: "/groundskeeping-home-HSC.webp"
      },
      image: "/groundskeeping-home-HSC.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Fencing",
      description: "Composite and timber fencing solutions providing privacy, security, and aesthetic appeal with professional installation and long-lasting materials.",
      detailedInfo: {
        expertise: "Our fencing specialists install a wide range of fencing types including composite, timber, and decorative options. We ensure proper post installation, drainage, and finishing for maximum durability.",
        services: [
          "Site survey and planning",
          "Composite fencing installation",
          "Timber fencing and gates",
          "Post installation and concrete work",
          "Panel fitting and alignment",
          "Gate hardware and finishing"
        ],
        benefits: "Quality fencing enhances privacy, security, and property value while defining outdoor spaces. Our installations use premium materials designed to withstand Scottish weather with minimal maintenance."
      },
      images: [
        "/Compostite-fencing-HSC-home.webp",
        "/fencing-home-projects-HSC.webp",
        "/HSC-fencing-SERVICES.webp",
        "/SERVICES-fencing-HSC.webp",
        "/fencing-HSC-SERVICES-Landscaping.webp"
      ],
      image: "/fencing-home-projects-HSC.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Decking",
      description: "Composite and timber decking installation creating beautiful outdoor living spaces with proper drainage and structural support.",
      detailedInfo: {
        expertise: "We specialize in both composite and timber decking systems with proper subframe construction, drainage, and finishing. Our installations are built to last with attention to structural integrity and aesthetics.",
        services: [
          "Design and planning consultation",
          "Ground preparation and leveling",
          "Structural framework installation",
          "Composite or timber deck installation",
          "Balustrade and safety features",
          "Finishing and maintenance guidance"
        ],
        benefits: "Professional decking creates valuable outdoor living space that extends your home's usable area. Our installations provide a durable, attractive platform for outdoor entertaining and relaxation."
      },
      image: "/landscaping-hero-hsc.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Full Garden Transformation",
      description: "Complete garden makeovers from concept to completion, combining all our landscaping services for stunning outdoor transformations.",
      detailedInfo: {
        expertise: "Our complete transformation service combines all aspects of landscaping - from initial design consultation through to final planting and finishing touches. We manage every element of your garden renovation with a cohesive approach that ensures all components work together harmoniously.",
        services: [
          "Complete garden design and planning",
          "Site clearance and preparation",
          "Hardscaping integration (patios, paths, walls)",
          "Soil improvement and preparation",
          "Plant selection and installation",
          "Lawn installation (natural or artificial)",
          "Irrigation system installation",
          "Garden lighting and features",
          "Final styling and finishing touches"
        ],
        benefits: "A full garden transformation provides the ultimate outdoor living experience, maximizing your property's potential and value. Our comprehensive approach ensures every element works together perfectly, creating cohesive outdoor spaces that enhance your lifestyle and provide years of enjoyment."
      },
      images: [
        "/HSC-Landscaping-Full-Renovation.webp",
        "/Landscaping-Full-Renovation-HS.webp",
        "/Full-Renovation-LAndscaping-HSC.webp",
        "/Full-Renovation-HSC-Landscaping.webp",
        "/Landscaping-HSC-Full-Transformation.webp"
      ],
      image: "/HSC-Landscaping-Full-Renovation.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Monoblock Pathways / Garden Paths",
      description: "Durable monoblock and paved pathway installation with proper base preparation and drainage for long-lasting garden access routes.",
      detailedInfo: {
        expertise: "Our pathway specialists create functional and attractive garden routes using quality monoblock, natural stone, and paving materials. We ensure proper drainage and base preparation for durability.",
        services: [
          "Pathway design and planning",
          "Excavation and base preparation",
          "Drainage system installation",
          "Monoblock and paving installation",
          "Edge restraints and finishing",
          "Joint filling and sealing"
        ],
        benefits: "Well-designed pathways improve garden accessibility, prevent lawn damage, and add structure to outdoor spaces. Our installations provide safe, attractive routes that complement your landscape design."
      },
      images: [
        "/Pathway-monoblock-HSC-Landscaping.webp",
        "/Monoblock-Pathway-HSC-Landscaping.webp",
        "/pathway-HSC-Monoblock.webp",
        "/monoblock-stairs-landscaping-HSC.webp"
      ],
      image: "/Pathway-monoblock-HSC-Landscaping.webp",
      link: "#/services/landscaping"
    }
  ];

  const faqs = [
    {
      question: "What is included in landscaping services?",
      answer: "Landscaping services typically include lawn installation, turf laying, planting trees and shrubs, garden design, fencing, decking, and pathway creation. At HSC Builders, we tailor these services to enhance both the beauty and functionality of your garden."
    },
    {
      question: "How much does landscaping cost in Glasgow?",
      answer: "The cost of landscaping in Glasgow depends on the project size, materials, and design. Simple turf installation may start from a few hundred pounds, while full garden transformations with patios, decking, and planting can range into the thousands. We provide free quotes tailored to your needs."
    },
    {
      question: "How long does a landscaping project take?",
      answer: "Smaller projects like laying turf or building a fence can take 1–3 days. Larger landscaping projects involving patios, decking, and planting may take 1–2 weeks depending on scope and weather conditions."
    },
    {
      question: "Is artificial grass better than real turf?",
      answer: "Artificial turf offers low maintenance, durability, and year-round greenery, while natural turf provides a more organic look and feel. The choice depends on your lifestyle, budget, and maintenance preferences. We install both options to suit your needs."
    },
    {
      question: "Do you provide 3D landscape designs?",
      answer: "Yes. On request, HSC Builders can provide a 3D garden design, allowing you to preview the layout, planting schemes, and hardscape features before work begins."
    },
    {
      question: "Do you handle planning permission for landscaping projects?",
      answer: "Most landscaping projects, like lawns, fences, and patios, do not require planning permission. However, larger changes such as raised structures or boundary alterations may. We guide you through the process if approvals are needed."
    },
    {
      question: "Why choose HSC Builders for landscaping in Glasgow?",
      answer: "With 17+ years of experience, our team combines skilled craftsmanship, high-quality materials, and a client-first approach. We deliver tailored solutions, clear communication, and results that improve both kerb appeal and long-term value."
    }
  ];

  const serviceAreas = [
    "Newton Farm", "Jackton", "Hamilton", "Bothwell", "East Kilbride", 
    "Cambuslang", "Rutherglen", "Blantyre", "Glasgow"
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Landscaping', url: '/services/landscaping' }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <SEO
        title="Professional Landscaping Services Hamilton & Lanarkshire"
        description="Expert landscaping services in Hamilton, Bothwell & South Lanarkshire. Garden design, patios, driveways, artificial turf, fencing & monoblock. Free quotes & quality craftsmanship."
        keywords="landscaping Hamilton, garden design Bothwell, patios South Lanarkshire, driveways Hamilton, artificial turf installation, fencing services, monoblock patios, garden transformation"
        ogImage="/landscaping-hero-hsc.webp"
        structuredData={{
          ...getServiceSchema(
            'Landscaping Services',
            'Professional landscaping and garden transformation services including patios, driveways, artificial turf, fencing, and monoblock installation in Hamilton and South Lanarkshire.'
          ),
          ...getBreadcrumbSchema(breadcrumbs)
        }}
      />
      {/* Hero Section - Same layout as Home */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mobile Hero Image */}
        <div 
          className="absolute inset-0 w-full h-full md:hidden"
          style={{
            backgroundImage: `url('/hero-image-mobile-home.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Desktop Hero Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/hero-home-mobile copy.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              {/* Main Headline */}
             <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,1)' }}>
               Looking for Landscaping Services in Hamilton?
             </h1>

             <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.4)' }}>
               With 17+ years of experience, we specialise in patios, driveways, artificial turf, fencing, monoblock, garden walls, and complete garden transformations across Hamilton, Bothwell, East Kilbride, Newton Farm, Cambuslang, and all of South Lanarkshire.
             </p>

              {/* Trust Indicators */}
             <div className="flex items-center space-x-3 mb-8 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 w-fit border border-white/20">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-6 h-6"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-accent text-primary-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">22 Google Reviews</span>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="hidden lg:block bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
              <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
                Get Your Free Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your landscaping project and we'll respond within 24 hours
              </p>
              
              <form action="https://formspree.io/f/xvgqzbeo" method="POST" className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="postcode"
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                    placeholder="Postcode"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your landscaping project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Banner - Same as Home */}
      <LogoSlider />

      {/* Mobile Quote Form - Same as Home */}
      <section className="lg:hidden bg-secondary-bg py-16 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
            <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
              Get Your Free Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your landscaping project and we'll respond within 24 hours
            </p>
            
            <form action="https://formspree.io/f/xvgqzbeo" method="POST" className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                  placeholder="Address"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="postcode"
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                  placeholder="Postcode"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your landscaping project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg"
              >
                Get My Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            <strong className="text-primary-accent">HSC Builders</strong> are local landscaping specialists serving domestic and small commercial clients across <strong className="text-text-primary">Greater Glasgow</strong>. 
            We create stunning outdoor spaces using premium materials including <strong className="text-text-primary">composite fencing, decking, patios, monoblock</strong>, 
            with expert <strong className="text-text-primary">bricklaying, masonry, water features, and garden lighting</strong> to transform your property.
          </p>
        </div>
      </section>

      {/* Landscaping Services Section */}
      <section className="section-padding bg-secondary-bg -mt-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 pt-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Landscaping Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From artificial turf to garden walls, we provide comprehensive landscaping solutions 
              to transform your outdoor space with expert craftsmanship and premium materials.
            </p>
          </div>

          {/* Services Grid - Checkered Layout */}
          <div className="space-y-16">
            {landscapingServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* More Info Dropdown */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleService(index)}
                        className="flex items-center text-primary-accent hover:text-hover-accent font-semibold transition-colors duration-200"
                      >
                        More Information
                        {expandedService === index ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </button>
                      
                      {expandedService === index && (
                        <div className="mt-6 space-y-6">
                          {/* Expertise Section */}
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                              Our Expertise
                            </h4>
                            <p className="text-text-secondary leading-relaxed">
                              {service.detailedInfo.expertise}
                            </p>
                          </div>
                          
                          {/* Services List */}
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                              What's Included
                            </h4>
                            <ul className="space-y-2">
                              {service.detailedInfo.services.map((item, idx) => (
                                <li key={idx} className="flex items-start text-text-secondary">
                                  <div className="w-2 h-2 bg-primary-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                              Benefits & Value
                            </h4>
                            <p className="text-text-secondary leading-relaxed">
                              {service.detailedInfo.benefits}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {service.title === "Fencing" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentFencingImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentFencingImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Artificial Turf" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === artificialTurfImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === artificialTurfImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Turf Laying" && service.beforeAfterImages ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card">
                      {/* Before Image */}
                      <img
                        src={service.beforeAfterImages.before}
                        alt={`Before - ${service.title} transformation`}
                        className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                          turfLayingImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* After Image */}
                      <img
                        src={service.beforeAfterImages.after}
                        alt={`After - ${service.title} transformation`}
                        className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 ${
                          turfLayingImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* Before/After Labels */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 ${
                          turfLayingImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          Before
                        </span>
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 absolute ${
                          turfLayingImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          After
                        </span>
                      </div>
                      {/* Indicator Dots */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          turfLayingImageIndex === 0 ? 'bg-white' : 'bg-white/50'
                        }`}></div>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          turfLayingImageIndex === 1 ? 'bg-white' : 'bg-white/50'
                        }`}></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                    </div>
                  ) : service.title === "Artificial Turf Installation" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === artificialTurfImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === artificialTurfImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Full Garden Transformation" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentFullTransformationImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentFullTransformationImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Monoblock Pathways / Garden Paths" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentMonoblockImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentMonoblockImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-xl shadow-card">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              as="a"
              href="tel:07490738974"
              containerClassName="w-auto h-12"
              className="px-6 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits / Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Recent Projects Section */}
      <RecentProjectsSection />

      {/* Landscaping FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Landscaping FAQs
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our landscaping services and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-secondary-bg rounded-xl border border-border-color overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-bg/50 transition-colors duration-200 focus:outline-none focus:bg-primary-bg/50"
                >
                  <h3 className="text-lg font-heading font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-primary-accent transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-border-color pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Chips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">
            Areas We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-primary-bg border border-primary-accent/30 rounded-full px-6 py-3 hover:border-primary-accent/60 transition-colors duration-200">
                <span className="text-text-primary font-medium">{area}</span>
              </div>
            ))}
          </div>
          <Button
            as="a"
            href="#/areas"
            containerClassName="w-auto h-12"
            className="px-6 py-3 font-semibold"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              View All Areas
            </span>
          </Button>
        </div>
      </section>

      {/* Internal Links Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
            Explore Our Other Services
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="#/services/groundskeeping"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                Groundskeeping <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            <Button
              as="a"
              href="#/services/hardscaping"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                Hardscaping <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Let's Build Your Dream Garden
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Ready to transform your outdoor space with professional landscaping? Get your free consultation and detailed quote today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Request a Quote Today
              </Button>
              <Button
                as="a"
                href="tel:+447490738974"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Call Now <Phone className="w-5 h-5" />
                </span>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landscaping;