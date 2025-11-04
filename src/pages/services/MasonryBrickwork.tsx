import React, { useState } from 'react';
import { Hammer, TreePine, Droplets, Star, Phone, MessageCircle, ChevronDown, ChevronUp, MapPin, ArrowRight, Award, Shield, CheckCircle, Clock, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import OurProcessSection from '../../components/OurProcessSection';
import RecentProjectsSection from '../../components/RecentProjectsSection';
import { cn } from '../../lib/utils';
import { SEO, getServiceSchema, getBreadcrumbSchema } from '../../components/SEO';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
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
    </motion.div>
  );
};

const MasonryBrickwork: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentWallImageIndex, setCurrentWallImageIndex] = useState(0);
  const [currentStepsImageIndex, setCurrentStepsImageIndex] = useState(0);
  const [currentRestorationImageIndex, setCurrentRestorationImageIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Auto-rotate wall images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallImageIndex(prev => prev === 2 ? 0 : prev + 1); // 3 images (0-2)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate steps images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepsImageIndex(prev => prev === 4 ? 0 : prev + 1); // 5 images (0-4)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate restoration images every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRestorationImageIndex(prev => prev === 3 ? 0 : prev + 1); // 4 images (0-3: before1, after1, before2, after2)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [expandedService, setExpandedService] = React.useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const masonryServices = [
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Brickwork & Stone Masonry",
      description: "Expert brickwork and stone masonry for residential and commercial properties, including boundary walls, garden features, and structural work.",
      detailedInfo: {
        expertise: "Our skilled masons have extensive experience in traditional and modern brickwork techniques. We work with various materials including engineering bricks, facing bricks, natural stone, and reconstituted stone, ensuring proper mortar selection and weatherproofing.",
        services: [
          "Boundary walls and garden walls",
          "Brick and stone feature walls",
          "Chimney construction and repairs",
          "Structural brickwork and extensions",
          "Pointing and repointing services",
          "Stone restoration and conservation"
        ],
        benefits: "Professional masonry work provides lasting structural integrity and enhances property value. Our craftsmen understand Scottish building standards and use appropriate materials for local weather conditions, ensuring durability and aesthetic appeal."
      },
      images: [
        "/HSC-wall-Glasgow-landscaping.webp",
        "/wall-HSC-Landscaping-Glasgow.webp",
        "/Glasgow-walls-HSC-landscaping.webp"
      ],
      image: "/HSC-wall-Glasgow-landscaping.webp",
      link: "#/services/masonry-brickwork"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Garden Steps & Staircases",
      description: "Professional construction of garden steps, outdoor staircases, and stepped access solutions using brick, stone, and concrete materials.",
      detailedInfo: {
        expertise: "We specialize in designing and building safe, attractive garden steps and outdoor staircases. Our team understands building regulations, proper foundations, and drainage requirements for stepped construction in Scottish conditions.",
        services: [
          "Natural stone garden steps",
          "Brick and block step construction",
          "Concrete and rendered steps",
          "Handrail and balustrade installation",
          "Step lighting integration",
          "Accessibility ramp construction"
        ],
        benefits: "Well-constructed steps improve property accessibility and safety while adding architectural interest. Our installations include proper drainage, non-slip surfaces, and compliance with building regulations for long-term durability."
      },
      images: [
        "/HSC-STEPS-Services-Hardscaping.webp",
        "/HSC-path-Hardscaping-Services.webp",
        "/HSC-Hardscaping-Steps-Services.webp",
        "/Steps-Services-HArdscaping-HSC.webp",
        "/Steps-Hardscaping-Services-HSC.webp"
      ],
      image: "/HSC-STEPS-Services-Hardscaping.webp",
      link: "#/services/masonry-brickwork"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Pointing & Restoration",
      description: "Professional pointing, repointing, and masonry restoration services to maintain and restore existing brickwork and stonework.",
      detailedInfo: {
        expertise: "We provide expert pointing and restoration services using traditional techniques and appropriate materials. Our craftsmen understand historic building methods and modern conservation practices for lasting results.",
        services: [
          "Lime mortar pointing and repointing",
          "Stone and brick cleaning",
          "Structural crack repairs",
          "Historic building restoration",
          "Weatherproofing treatments",
          "Masonry conservation work"
        ],
        benefits: "Professional restoration maintains structural integrity and preserves property character. Our conservation approach uses appropriate materials and techniques to ensure compatibility with existing construction while providing long-term protection."
      },
      beforeAfterImages: [
        {
          before: "/restoration-HSC-MASONRY-before.webp",
          after: "/restoration-After-HSC-Masonry.webp"
        },
        {
          before: "/before-restoration-HSC-Masonry.webp", 
          after: "/HSC-before-restoration-MASONRY.webp"
        }
      ],
      image: "/restoration-After-HSC-Masonry.webp",
      link: "#/services/masonry-brickwork"
    }
  ];

  const faqs = [
    {
      question: "What types of masonry work do you specialize in?",
      answer: "We specialize in all aspects of masonry and brickwork including boundary walls, garden features, structural work, pointing and restoration, chimney construction, and custom architectural features using brick, stone, and concrete materials."
    },
    {
      question: "Do you work with both traditional and modern materials?",
      answer: "Yes, we work with a full range of materials including traditional clay bricks, engineering bricks, natural stone, reconstituted stone, concrete blocks, and modern masonry systems. We select appropriate materials based on your project requirements and local conditions."
    },
    {
      question: "How long does masonry work typically take?",
      answer: "Project duration varies depending on scope and complexity. Simple garden walls may take 2-5 days, while larger structural projects or restorations can take several weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you handle building regulations and planning permissions?",
      answer: "Yes, we assist with building regulations compliance and can advise on planning permission requirements. Our team understands local building standards and works with building control officers to ensure all work meets required standards."
    },
    {
      question: "What warranty do you provide on masonry work?",
      answer: "We provide a comprehensive 12-month workmanship warranty on all masonry work. This covers any defects in construction or materials, giving you peace of mind in the quality and durability of our craftsmanship."
    },
    {
      question: "Can you match existing brickwork and stonework?",
      answer: "Absolutely. We specialize in matching existing materials, mortar colors, and construction techniques for seamless repairs and extensions. Our experience includes working with historic buildings and period properties."
    },
    {
      question: "Do you provide structural engineering services?",
      answer: "While we don't provide engineering design services directly, we work closely with structural engineers when required and can recommend qualified professionals. We ensure all structural work complies with engineering specifications and building regulations."
    }
  ];

  const serviceAreas = [
    "Newton Farm", "Jackton", "Hamilton", "Bothwell", "East Kilbride", 
    "Cambuslang", "Rutherglen", "Blantyre", "Glasgow"
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Masonry & Brickwork', url: '/services/masonry-brickwork' }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <SEO
        title="Professional Masonry & Brickwork Services Hamilton & Lanarkshire"
        description="Expert masonry & brickwork in Hamilton, Bothwell & South Lanarkshire. Garden walls, retaining walls, stonework, brickwork repairs. Free quotes & skilled craftsmen."
        keywords="masonry Hamilton, brickwork Bothwell, garden walls, retaining walls South Lanarkshire, stonework restoration, masonry repairs"
        ogImage="/Brickwork-hero.webp"
        structuredData={{
          ...getServiceSchema(
            'Masonry & Brickwork Services',
            'Professional masonry and brickwork services including garden walls, retaining walls, stonework restoration, and masonry repairs in Hamilton and South Lanarkshire.'
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
            backgroundImage: `url('/Brickwork-hero.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Desktop Hero Image */}
        <div 
          className="absolute inset-0 w-full h-full hidden md:block"
          style={{
            backgroundImage: `url('/Brickwork-hero.webp')`,
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
             <h1 className="font-body text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-white" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
               Masonry Experts & Bricklayers in Glasgow
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
                From garden walls to stonework restoration, retaining walls to brickwork — covering Hamilton, Bothwell, East Kilbride & beyond.
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
                <span className="text-white font-medium">24 Google Reviews</span>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="hidden lg:block bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
              <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
                Get Your Free Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your masonry project and we'll respond within 24 hours
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
                    placeholder="Tell us about your masonry project..."
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
              Tell us about your masonry project and we'll respond within 24 hours
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
                  placeholder="Tell us about your masonry project..."
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
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6"
          >
            Professional Masonry & Brickwork Services in Glasgow
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed"
          >
            <motion.p variants={fadeInUp}>
              At HSC Builders, we provide expert masonry and brickwork services across Greater Glasgow and surrounding areas. Our skilled craftsmen combine traditional techniques with modern materials to deliver exceptional results for residential and commercial properties.
            </motion.p>
            <motion.p variants={fadeInUp}>
              From boundary walls and garden features to structural work and restoration projects, we handle all aspects of masonry with precision and care. With over 17 years of experience, we understand Scottish building standards and use appropriate materials for lasting durability in local weather conditions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Masonry Services Section */}
      <section className="section-padding bg-secondary-bg -mt-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16 pt-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            >
              Our Masonry & Brickwork Services
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              From traditional brickwork to modern masonry features, we provide comprehensive services 
              with expert craftsmanship and materials built for Scottish conditions.
            </motion.p>
          </motion.div>

          {/* Services Grid - Checkered Layout */}
          <div className="space-y-16">
            {masonryServices.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <motion.div 
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                >
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
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 space-y-6"
                        >
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
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  {service.title === "Pointing & Restoration" && service.beforeAfterImages ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card h-80">
                      {/* Render all 4 images */}
                      {service.beforeAfterImages.map((pair, pairIndex) => (
                        <React.Fragment key={pairIndex}>
                          {/* Before Image */}
                          <img
                            src={pair.before}
                            alt={`${service.title} before ${pairIndex + 1}`}
                            className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                              currentRestorationImageIndex === pairIndex * 2 ? 'opacity-100' : 'opacity-0'
                            }`}
                          />
                          {/* After Image */}
                          <img
                            src={pair.after}
                            alt={`${service.title} after ${pairIndex + 1}`}
                            className={`w-full h-full object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                              currentRestorationImageIndex === pairIndex * 2 + 1 ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={pairIndex === 1 ? { objectPosition: 'top right' } : {}}
                          />
                        </React.Fragment>
                      ))}
                      
                      {/* Before/After Labels */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 ${
                          currentRestorationImageIndex % 2 === 0 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          Before
                        </span>
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 absolute ${
                          currentRestorationImageIndex % 2 === 1 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          After
                        </span>
                      </div>
                      
                      {/* Indicator Dots */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        {[0, 1, 2, 3].map((dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              dotIndex === currentRestorationImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                    </div>
                  ) : service.title === "Brickwork & Stone Masonry" && service.images ? (
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
                  ) : service.title === "Garden Steps & Staircases" && service.images ? (
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
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="text-center mt-16"
          >
            <Button
              as="a"
              href="tel:07490738974"
              containerClassName="w-auto h-12"
              className="px-6 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            >
              Why Choose HSC Builders for Masonry & Brickwork?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-text-secondary max-w-3xl mx-auto"
            >
              With over 17 years of experience serving Greater Glasgow, we bring expertise, reliability, and exceptional results to every masonry project.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto"
          >
            {[
              {
                title: "17+ Years Experience",
                description: "Proven expertise in masonry and brickwork across Greater Glasgow with traditional and modern techniques.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "Skilled Craftsmen",
                description: "Time-served masons with expertise in brickwork, stonework, and structural masonry applications.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Quality Materials",
                description: "Premium bricks, stone, and masonry materials specifically chosen for Scottish weather conditions.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Building Regulations",
                description: "Full compliance with Scottish building standards and regulations for all structural and masonry work.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Traditional Techniques",
                description: "Expertise in traditional masonry methods combined with modern materials and construction practices.",
                icon: <Hammer className="w-6 h-6" />,
              },
              {
                title: "Structural Integrity",
                description: "Engineering knowledge for load-bearing walls, foundations, and complex structural masonry projects.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Restoration Specialists",
                description: "Conservation expertise for historic buildings and period property restoration projects.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "Comprehensive Warranty",
                description: "12-month workmanship guarantee with ongoing support and maintenance guidance.",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Recent Projects Section */}
      <RecentProjectsSection />

      {/* Masonry FAQs */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            >
              Masonry & Brickwork FAQs
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-text-secondary"
            >
              Common questions about our masonry services and construction process.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
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
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-border-color pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Areas We Serve Chips */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl font-bold text-text-primary mb-8"
          >
            Areas We Serve
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {serviceAreas.map((area, index) => (
              <motion.div 
                key={index} 
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-bg border border-primary-accent/30 rounded-full px-6 py-3 hover:border-primary-accent/60 transition-colors duration-200"
              >
                <span className="text-text-primary font-medium">{area}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scaleIn}>
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
          </motion.div>
        </div>
      </motion.section>

      {/* Internal Links Block */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-2xl font-bold text-text-primary mb-8"
          >
            Explore Our Other Services
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div variants={scaleIn}>
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
            </motion.div>
            <motion.div variants={scaleIn}>
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
            </motion.div>
            <motion.div variants={scaleIn}>
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
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final Call to Action */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={scaleIn}
            className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6"
            >
              Ready for Expert Masonry & Brickwork?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
            >
              Transform your property with professional masonry services. Get your free consultation and detailed quote today.
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={scaleIn}>
                <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Request a Quote Today
              </Button>
              </motion.div>
              <motion.div variants={scaleIn}>
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
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-8 pt-6 border-t border-border-color"
            >
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MasonryBrickwork;