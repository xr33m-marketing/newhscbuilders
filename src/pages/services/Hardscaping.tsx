import React, { useState } from 'react';
import { Hammer, TreePine, Droplets, Star, Phone, MessageCircle, ChevronDown, ChevronUp, MapPin, ArrowRight, Award, Shield, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import OurProcessSection from '../../components/OurProcessSection';
import RecentProjectsSection from '../../components/RecentProjectsSection';
import { cn } from '../../lib/utils';
import { SEO, getServiceSchema, getBreadcrumbSchema } from '../../components/SEO';

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border-color",
        (index === 0 || index === 4) && "lg:border-l border-border-color",
        index < 4 && "lg:border-b border-border-color"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-bg to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary-bg to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary-accent">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border-color group-hover/feature:bg-primary-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-text-primary">
          {title}
        </span>
      </div>
      <p className="text-sm text-text-secondary max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const Hardscaping: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentPatioImageIndex, setCurrentPatioImageIndex] = useState(0);
  const [currentDrivewayImageIndex, setCurrentDrivewayImageIndex] = useState(0);
  const [currentWallImageIndex, setCurrentWallImageIndex] = useState(0);
  const [currentStepsImageIndex, setCurrentStepsImageIndex] = useState(0);
  const [currentHouseExtensionImageIndex, setCurrentHouseExtensionImageIndex] = useState(0);
  const [currentDrainageImageIndex, setCurrentDrainageImageIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Auto-rotate patio images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPatioImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate driveway images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDrivewayImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate wall images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallImageIndex(prev => prev === 2 ? 0 : prev + 1); // 3 images (0-2)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate steps images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepsImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate house extension images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHouseExtensionImageIndex(prev => prev === 2 ? 0 : prev + 1); // 3 images (0-2)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate drainage images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDrainageImageIndex(prev => prev === 1 ? 0 : prev + 1); // 2 images (0-1)
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [expandedService, setExpandedService] = React.useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const hardscapingServices = [
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Patios & Outdoor Living",
      description: "Professional patio installation using natural stone, porcelain, and concrete with expert drainage and finishing for lasting outdoor entertainment spaces.",
      detailedInfo: {
        expertise: "Our hardscaping specialists have extensive experience with natural stone, porcelain, and concrete patio installations. We ensure proper sub-base preparation, drainage systems, and professional finishing for patios that withstand Scottish weather conditions.",
        services: [
          "Natural stone patio installation",
          "Porcelain and ceramic paving",
          "Concrete and block paving patios",
          "Proper drainage and sub-base preparation",
          "Professional pointing and finishing",
          "Outdoor kitchen and seating integration"
        ],
        benefits: "A professionally installed patio creates valuable outdoor living space that increases property value by 15-20%. Our installations provide durable, low-maintenance surfaces perfect for Scottish weather with proper drainage to prevent water damage."
      },
      images: [
        "/HSC-patio-landscaping.webp",
        "/Patio-HSC-Landscaping-services.webp",
        "/patio-HSC_landscaping.webp"
      ],
      images: [
        "/HSC-patio-landscaping.webp",
        "/Patio-HSC-Landscaping-services.webp", 
        "/patio-HSC_landscaping.webp",
        "/patio-landscaping-HSC.webp",
        "/landscaping-HSC-patio.webp"
      ],
      image: "/HSC-patio-landscaping.webp",
      link: "#/services/hardscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Driveways & Block Paving",
      description: "Durable driveway construction using monoblock, natural stone, and concrete with proper foundations and drainage for long-lasting vehicle access.",
      detailedInfo: {
        expertise: "We specialize in driveway construction with over 17 years of experience in monoblock, natural stone, and concrete installations. Our team understands load-bearing requirements, drainage needs, and proper edge restraints for durable driveways.",
        services: [
          "Monoblock driveway installation",
          "Natural stone driveway construction",
          "Concrete and tarmac driveways",
          "Proper excavation and foundation work",
          "Drainage systems and soakaways",
          "Edge restraints and finishing details"
        ],
        benefits: "Professional driveway installation enhances curb appeal and provides reliable vehicle access. Our installations include proper drainage to prevent water damage and use quality materials designed for heavy vehicle loads and Scottish weather conditions."
      },
      images: [
        "/HSC-Block-Paving-Hardscaping.webp",
        "/Hardscaping-HSC-Block-Paving.webp",
        "/Block-paving-HSC-Hardscaping.webp",
        "/HSC-Hardscaping-Block-Paving.webp",
        "/Block-paving-Hardscaping-HSC.webp"
      ],
      image: "/hardscaping-hero-HSC.webp",
      link: "#/services/hardscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Retaining Walls & Garden Walls",
      description: "Structural retaining walls and decorative garden walls using natural stone, brick, and block construction with proper drainage and engineering.",
      detailedInfo: {
        expertise: "Our masonry specialists construct retaining walls and garden boundaries using traditional techniques with modern engineering principles. We understand soil pressure, drainage requirements, and foundation needs for stable, long-lasting walls.",
        services: [
          "Natural stone retaining walls",
          "Brick and block wall construction",
          "Decorative garden boundary walls",
          "Proper foundation and drainage systems",
          "Engineering for structural integrity",
          "Decorative capping and finishing"
        ],
        benefits: "Quality wall construction provides essential structural support for sloped gardens while creating attractive boundaries. Our walls include proper drainage systems to prevent water damage and are built to withstand soil pressure and weather conditions."
      },
      images: [
        "/HSC-wall-Glasgow-landscaping.webp",
        "/wall-HSC-Landscaping-Glasgow.webp",
        "/Glasgow-walls-HSC-landscaping.webp"
      ],
      image: "/hardscaping-hero-HSC.webp",
      link: "#/services/hardscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "House Extensions & Luxury Home Renovations",
      description: "Complete house extensions and luxury home renovations including single and double-storey extensions, kitchen extensions, and full property refurbishments with expert project management.",
      detailedInfo: {
        expertise: "Our building specialists have extensive experience in house extensions and luxury renovations across Greater Glasgow. We handle all aspects from planning applications to final completion, ensuring compliance with building regulations and delivering exceptional results.",
        services: [
          "Single and double-storey extensions",
          "Kitchen and dining room extensions",
          "Luxury bathroom renovations",
          "Full property refurbishments",
          "Planning permission assistance",
          "Building regulations compliance"
        ],
        benefits: "Professional house extensions can increase property value by 15-25% while providing additional living space tailored to your needs. Our renovations use premium materials and expert craftsmanship to create luxury living spaces that enhance your lifestyle and property investment."
      },
      images: [
        "/HSC-STEPS-Services-Hardscaping.webp",
        "/HSC-path-Hardscaping-Services.webp",
        "/HSC-Hardscaping-Steps-Services.webp",
        "/Steps-Services-HArdscaping-HSC.webp",
        "/Steps-Hardscaping-Services-HSC.webp"
      ],
      images: [
        "/Hardscaping-HSC-house-extension.webp",
        "/house-extension-HSC-Hardscaping.webp",
        "/HSC-House-Extension-Hardscaping.webp"
      ],
      image: "/hardscaping-hero-HSC.webp",
      link: "#/services/hardscaping"
    },
    {
      icon: <Droplets className="w-12 h-12 text-primary-accent" />,
      title: "Drainage Solutions",
      description: "Comprehensive drainage systems including French drains, soakaways, and surface water management to protect hardscaping investments.",
      detailedInfo: {
        expertise: "Proper drainage is essential for all hardscaping projects. Our team designs and installs comprehensive drainage solutions including French drains, soakaways, and surface water management systems to protect your investment and prevent water damage.",
        services: [
          "French drain installation",
          "Soakaway construction",
          "Surface water drainage systems",
          "Gutter and downpipe connections",
          "Permeable paving solutions",
          "Waterproofing and damp prevention"
        ],
        benefits: "Effective drainage systems protect hardscaping investments by preventing water damage, frost damage, and structural issues. Our solutions ensure long-term durability and prevent costly repairs while managing Scottish rainfall effectively."
      },
      images: [
        "/HSC-drainage-Hardscaping.webp",
        "/drainage-HSC-HArdscaping.webp"
      ],
      image: "/hardscaping-hero-HSC.webp",
      link: "#/services/hardscaping"
    }
  ];

  const faqs = [
    {
      question: "What is hardscaping?",
      answer: "Hardscaping is the use of solid, man-made features in outdoor spaces—like patios, paths, walls, and driveways—that add structure, durability, and function to your garden."
    },
    {
      question: "How does hardscaping complement landscaping?",
      answer: "Hardscaping provides the framework for landscaping. It creates usable areas such as patios or walkways, while soft landscaping (plants and lawns) brings the greenery and softness, giving balance and beauty to your outdoor space."
    },
    {
      question: "What should I consider before installing a new driveway?",
      answer: "The most important factors are a strong base, proper drainage, and the right paving materials. These ensure your driveway stays durable, resists water damage, and looks great long-term."
    },
    {
      question: "How long does a concrete driveway last?",
      answer: "A professionally installed concrete driveway can last 25–50 years with proper care, making it one of the most durable and cost-effective paving options."
    },
    {
      question: "Can I turn my front garden into a driveway?",
      answer: "Yes, with the right planning. You'll need suitable paving materials, good drainage, and permission for a dropped kerb. Done well, it adds both practicality and curb appeal to your property."
    }
  ];

  const serviceAreas = [
    "Newton Farm", "Jackton", "Hamilton", "Bothwell", "East Kilbride", 
    "Cambuslang", "Rutherglen", "Blantyre", "Glasgow"
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Hardscaping', url: '/services/hardscaping' }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <SEO
        title="Professional Hardscaping Services Hamilton & Lanarkshire"
        description="Expert hardscaping in Hamilton, Bothwell & South Lanarkshire. Driveways, patios, block paving, retaining walls, drainage & pathways. Free quotes & quality workmanship."
        keywords="hardscaping Hamilton, driveways Bothwell, patios South Lanarkshire, block paving Hamilton, retaining walls, drainage systems, pathways"
        ogImage="/hardscaping-hero-HSC.webp"
        structuredData={{
          ...getServiceSchema(
            'Hardscaping Services',
            'Professional hardscaping services including driveways, patios, block paving, retaining walls, drainage systems, and pathways in Hamilton and South Lanarkshire.'
          ),
          ...getBreadcrumbSchema(breadcrumbs)
        }}
      />
      {/* Hero Section */}
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
            backgroundImage: `url('/Hero-hardscaping-HSC-DESKtop.webp')`,
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
              <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Looking for Hardscaping Services in Hamilton?
              </h1>

              <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                With 17+ years of experience, we specialise in driveways, patios, block paving, retaining walls, drainage systems, and pathways across Hamilton, Bothwell, East Kilbride, Cambuslang, and throughout South Lanarkshire.
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
                Tell us about your hardscaping project and we'll respond within 24 hours
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
                    placeholder="Tell us about your hardscaping project..."
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

      {/* Logo Slider Banner */}
      <LogoSlider />

      {/* Mobile Quote Form */}
      <section className="lg:hidden bg-secondary-bg py-16 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
            <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
              Get Your Free Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your hardscaping project and we'll respond within 24 hours
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
                  placeholder="Tell us about your hardscaping project..."
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Hardscaping Services in Glasgow & Lanarkshire – Driveways, Patios & Masonry
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              At HSC Builders, we provide expert hardscaping solutions designed to transform your outdoor space with durability and style. From driveways and patios to brickwork, pathways, steps, and garden walls, our team delivers craftsmanship that lasts.
            </p>
            <p>
              With over 17 years of experience, we combine quality materials, skilled trades, and tailored designs to create hardscapes that boost kerb appeal and add real value to your property. Whether you want a practical driveway, a modern patio, or custom masonry, HSC Builders ensures a professional, stress-free experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Hardscaping Services Section */}
      <section className="section-padding bg-secondary-bg -mt-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 pt-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Hardscaping Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From patios and driveways to retaining walls and outdoor structures, we provide comprehensive hardscaping solutions 
              with expert craftsmanship and materials built for Scottish conditions.
            </p>
          </div>

          {/* Services Grid - Checkered Layout */}
          <div className="space-y-16">
            {hardscapingServices.map((service, index) => (
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
                  {service.title === "Patios & Outdoor Living" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentPatioImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentPatioImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Driveways & Block Paving" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentDrivewayImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentDrivewayImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Retaining Walls & Garden Walls" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentWallImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentWallImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Retaining Walls & Garden Walls" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentWallImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentWallImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Steps & Pathways" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentStepsImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentStepsImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "House Extensions & Luxury Home Renovations" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentHouseExtensionImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentHouseExtensionImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}></div>
                        ))}
                      </div>
                    </div>
                  ) : service.title === "Drainage Solutions" && service.images ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {service.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                            imgIndex === currentDrainageImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                      {/* Image indicators */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {service.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`w-2 h-2 rounded-full ${
                            imgIndex === currentDrainageImageIndex ? 'bg-white' : 'bg-white/50'
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Choose HSC Builders for Hardscaping?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              With over 17 years of experience serving Greater Glasgow, we bring expertise, reliability, and exceptional results to every hardscaping project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {[
              {
                title: "17+ Years Experience",
                description: "Proven expertise in hardscaping and masonry across Greater Glasgow with a track record of successful projects.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "Fully Insured & Licensed",
                description: "Complete insurance coverage and waste carrier licensing for your peace of mind and legal compliance.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Quality Materials",
                description: "Premium natural stone, concrete, and block materials specifically chosen for Scottish weather conditions.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Expert Drainage",
                description: "Proper drainage systems and sub-base preparation ensuring long-lasting hardscaping installations.",
                icon: <Droplets className="w-6 h-6" />,
              },
              {
                title: "Structural Integrity",
                description: "Engineering expertise for retaining walls, foundations, and load-bearing hardscaping structures.",
                icon: <Hammer className="w-6 h-6" />,
              },
              {
                title: "5★ Google Reviews",
                description: "Consistently rated 5 stars by satisfied customers across Glasgow and surrounding areas.",
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: "Scottish Climate Expertise",
                description: "Deep knowledge of materials and techniques that withstand freeze-thaw cycles and heavy rainfall.",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                title: "Comprehensive Warranty",
                description: "12-month workmanship guarantee with ongoing support and maintenance guidance.",
                icon: <Phone className="w-6 h-6" />,
              },
            ].map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Recent Projects Section */}
      <RecentProjectsSection />

      {/* Hardscaping FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Hardscaping FAQs
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our hardscaping services and construction process.
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
              href="#/services/landscaping"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                Landscaping <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
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
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready for Professional Hardscaping?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Transform your outdoor space with expert hardscaping. Get your free consultation and detailed quote today.
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

export default Hardscaping;