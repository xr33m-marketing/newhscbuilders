import React, { useState } from 'react';
import { Scissors, TreePine, Droplets, Star, Phone, MessageCircle, ChevronDown, ChevronUp, MapPin, ArrowRight, Award, Shield, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import OurProcessSection from '../../components/OurProcessSection';
import RecentProjectsSection from '../../components/RecentProjectsSection';
import { cn } from '../../lib/utils';

const Groundskeeping: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Auto-rotate images for seasonal cleanup section
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev === 0 ? 1 : 0);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [expandedService, setExpandedService] = React.useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const groundskeepingServices = [
    {
      icon: <Scissors className="w-12 h-12 text-primary-accent" />,
      title: "Lawn Care & Maintenance",
      description: "Professional lawn mowing, edging, and seasonal care to keep your grass healthy and pristine throughout the year.",
      detailedInfo: {
        expertise: "Our groundskeeping specialists understand Scottish grass types, seasonal requirements, and proper care techniques. We provide reliable lawn maintenance services using professional equipment and proven methods for optimal grass health.",
        services: [
          "Regular lawn mowing and edging",
          "Seasonal fertilization programs",
          "Weed control and moss treatment",
          "Aeration and overseeding",
          "Leaf removal and cleanup",
          "Grass cutting schedule management"
        ],
        benefits: "Regular professional lawn care maintains healthy grass growth, prevents weed infestations, and keeps your property looking pristine year-round. Our systematic approach ensures consistent results and long-term lawn health."
      },
      image: "/groundskeeping-home-HSC.webp",
      link: "#/services/groundskeeping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Hedge Trimming & Pruning",
      description: "Expert hedge trimming and shrub pruning to maintain shape, promote healthy growth, and enhance your property's appearance.",
      detailedInfo: {
        expertise: "We specialize in hedge maintenance and shrub pruning with knowledge of proper timing, techniques, and plant-specific requirements. Our team understands growth patterns and pruning methods for various hedge types common in Scotland.",
        services: [
          "Regular hedge trimming and shaping",
          "Shrub pruning and maintenance",
          "Seasonal pruning schedules",
          "Height reduction and reshaping",
          "Dead-heading and cleanup",
          "Plant health assessments"
        ],
        benefits: "Professional hedge trimming promotes healthy growth, maintains property boundaries, and enhances curb appeal. Regular pruning prevents overgrowth issues and keeps hedges dense and attractive throughout the growing season."
      },
      image: "/hedge-trimming-HSC.webp",
      link: "#/services/groundskeeping"
    },
    {
      icon: <Droplets className="w-12 h-12 text-primary-accent" />,
      title: "Garden Bed Maintenance",
      description: "Comprehensive garden bed care including weeding, mulching, planting, and seasonal maintenance for beautiful flower beds.",
      detailedInfo: {
        expertise: "Our garden maintenance specialists provide complete care for flower beds, borders, and planted areas. We understand soil conditions, plant requirements, and seasonal care needs for Scottish gardens.",
        services: [
          "Weeding and bed preparation",
          "Mulching and soil improvement",
          "Seasonal planting and replanting",
          "Deadheading and plant care",
          "Border maintenance and edging",
          "Pest and disease management"
        ],
        benefits: "Professional garden bed maintenance ensures healthy plant growth, reduces weed problems, and maintains attractive displays throughout the growing season. Regular care prevents costly plant replacement and soil degradation."
      },
      image: "/garden-bed-planting-HSC.webp",
      link: "#/services/groundskeeping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Seasonal Cleanup Services",
      description: "Comprehensive spring and autumn cleanup services including leaf removal, debris clearing, and garden preparation.",
      detailedInfo: {
        expertise: "We provide thorough seasonal cleanup services to prepare gardens for changing seasons. Our team handles leaf removal, debris clearing, and garden preparation with proper disposal and composting methods.",
        services: [
          "Autumn leaf removal and disposal",
          "Spring garden cleanup and preparation",
          "Debris removal and site clearing",
          "Gutter cleaning and maintenance",
          "Pathway and patio cleaning",
          "Garden waste disposal and recycling"
        ],
        benefits: "Seasonal cleanup services prevent plant disease, improve garden health, and prepare outdoor spaces for optimal growing conditions. Professional cleanup saves time and ensures proper waste disposal."
      },
      image: "/HSC-Maintenance-before copy.webp",
      beforeAfterImages: {
        before: "/HSC-Maintenance-before copy.webp",
        after: "/HSC-Maintenance-AFTER copy.webp"
      },
      link: "#/services/groundskeeping"
    },
    {
      icon: <Scissors className="w-12 h-12 text-primary-accent" />,
      title: "Weed Control & Treatment",
      description: "Professional weed control and treatment services using safe, effective methods to maintain weed-free lawns and gardens.",
      detailedInfo: {
        expertise: "Our weed control specialists use integrated pest management approaches combining mechanical, cultural, and chemical methods. We understand weed identification, treatment timing, and safe application methods.",
        services: [
          "Selective herbicide applications",
          "Manual weed removal",
          "Pre-emergent weed prevention",
          "Moss control and treatment",
          "Organic weed management options",
          "Follow-up treatments and monitoring"
        ],
        benefits: "Professional weed control maintains healthy lawns and gardens while preventing weed competition for nutrients and water. Our targeted approach minimizes environmental impact while maximizing effectiveness."
      },
      image: "/weed-removal-HSC-GroundsKEEPING.webp",
      link: "#/services/groundskeeping"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Property Maintenance",
      description: "Comprehensive property upkeep including pathway maintenance, fence care, and general outdoor tidying services.",
      detailedInfo: {
        expertise: "We provide complete property maintenance services to keep outdoor areas safe, functional, and attractive. Our team handles various maintenance tasks with attention to detail and property preservation.",
        services: [
          "Pathway and driveway maintenance",
          "Fence repairs and treatments",
          "Outdoor furniture care",
          "General property tidying",
          "Pressure washing services",
          "Minor repairs and touch-ups"
        ],
        benefits: "Regular property maintenance prevents costly repairs, maintains safety standards, and preserves property value. Our comprehensive approach addresses multiple maintenance needs efficiently and professionally."
      },
      image: "/groundskeeping-home-HSC.webp",
      beforeAfterImages: {
        before: "/groundskeepning-cleanup-HSC-BEFORE.webp",
        after: "/Groundskeeping-HSC-cleanup-AFTER.webp"
      },
      link: "#/services/groundskeeping"
    }
  ];

  const faqs = [
    {
      question: "What does groundskeeping include?",
      answer: "Groundskeeping services include lawn mowing, hedge trimming, weeding, seasonal planting, leaf clearance, and general garden upkeep. For commercial properties, it also covers pathways, shrub maintenance, and ensuring outdoor spaces remain tidy and presentable year-round."
    },
    {
      question: "How often should groundskeeping be done?",
      answer: "Groundskeeping is typically carried out weekly or bi-weekly during growing seasons and monthly in colder months. The frequency depends on your property size, plant types, and desired appearance."
    },
    {
      question: "Do you offer commercial grounds maintenance?",
      answer: "Yes. HSC Builders provides tailored grounds maintenance for commercial properties, ensuring professional and welcoming outdoor spaces. This includes regular lawn care, shrub maintenance, and site clearance."
    },
    {
      question: "How much does groundskeeping cost in Glasgow?",
      answer: "Costs vary based on property size, frequency of visits, and services required. Small gardens may start at affordable monthly rates, while larger or commercial sites are quoted individually. We provide clear, no-obligation quotes."
    },
    {
      question: "Can groundskeeping improve property value?",
      answer: "Yes. Regular groundskeeping keeps outdoor spaces neat, safe, and attractive, which improves kerb appeal for residential homes and creates a professional impression for businesses."
    },
    {
      question: "Do you handle seasonal grounds maintenance?",
      answer: "Absolutely. We offer seasonal services such as spring planting, autumn leaf clearance, and winter preparation, ensuring your garden or property is cared for all year round."
    },
    {
      question: "Why choose HSC Builders for groundskeeping in Glasgow?",
      answer: "Our team combines 17+ years of experience with reliable, scheduled services tailored to each client. We focus on consistency, attention to detail, and keeping your outdoor spaces looking their best throughout the year."
    }
  ];

  const serviceAreas = [
    "Newton Farm", "Jackton", "Hamilton", "Bothwell", "East Kilbride", 
    "Cambuslang", "Rutherglen", "Blantyre", "Glasgow"
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Mobile Hero Image */}
        <div 
          className="absolute inset-0 w-full h-full md:hidden"
          style={{
            backgroundImage: `url('/groundskeeping-hero-HSC (1).webp')`,
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
            backgroundImage: `url('/groundskeeping-hero-HSC (1).webp')`,
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
              <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide">
                Professional groundskeeping in Glasgow
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-accent">
                  For people who care about the details
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl leading-relaxed font-light">
                We handle every hedge, lawn and border like it's our own. Discreet service. Immaculate results.
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
                Tell us about your groundskeeping needs and we'll respond within 24 hours
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
                    placeholder="Tell us about your groundskeeping needs"
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
              Tell us about your groundskeeping needs and we'll respond within 24 hours
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
                  placeholder="Tell us about your groundskeeping needs"
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
            <strong className="text-primary-accent">HSC Builders</strong> provides professional groundskeeping and garden maintenance services across <strong className="text-text-primary">Greater Glasgow</strong>. 
            From regular lawn care to seasonal cleanup, we keep your outdoor spaces looking their best year-round with reliable, 
            professional service you can trust.
          </p>
        </div>
      </section>

      {/* Groundskeeping Services Section */}
      <section className="section-padding bg-secondary-bg -mt-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 pt-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Groundskeeping Services
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From regular lawn maintenance to seasonal cleanup, we provide comprehensive groundskeeping solutions 
              to keep your property looking pristine throughout the year.
            </p>
          </div>

          {/* Services Grid - Checkered Layout */}
          <div className="space-y-16">
            {groundskeepingServices.map((service, index) => (
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
                  {(service.title === "Seasonal Cleanup Services" || service.title === "Property Maintenance") && service.beforeAfterImages ? (
                    <div className="relative overflow-hidden rounded-xl shadow-card">
                      {/* Before Image */}
                      <img
                        src={service.beforeAfterImages.before}
                        alt={`Before - ${service.title} transformation`}
                        className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                          currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* After Image */}
                      <img
                        src={service.beforeAfterImages.after}
                        alt={`After - ${service.title} transformation`}
                        className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 ${
                          currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      {/* Before/After Labels */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 ${
                          currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          Before
                        </span>
                        <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 absolute ${
                          currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                        }`}>
                          After
                        </span>
                      </div>
                      {/* Indicator Dots */}
                      <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === 0 ? 'bg-white' : 'bg-white/50'
                        }`}></div>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === 1 ? 'bg-white' : 'bg-white/50'
                        }`}></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
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
                <Phone className="w-4 h-4" />
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
              Why Choose HSC Builders for Groundskeeping?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              With over 17 years of experience serving Greater Glasgow, we bring expertise, reliability, and exceptional results to every groundskeeping project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {[
              {
                title: "17+ Years Experience",
                description: "Proven expertise in groundskeeping and garden maintenance across Greater Glasgow with a track record of successful projects.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "Fully Insured & Licensed",
                description: "Complete insurance coverage and waste carrier licensing for your peace of mind and legal compliance.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                title: "Quality Workmanship",
                description: "Professional equipment and proven techniques for optimal lawn health and garden maintenance results.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Punctual & Professional",
                description: "On-time service delivery with clear communication and respectful, clean working practices throughout.",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                title: "Customer Focused",
                description: "Transparent pricing, detailed service plans, and dedicated aftercare support to ensure complete satisfaction.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "5★ Google Reviews",
                description: "Consistently rated 5 stars by satisfied customers across Glasgow and surrounding areas.",
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: "Local Expertise",
                description: "Deep knowledge of Scottish climate, grass types, and seasonal maintenance requirements.",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                title: "Comprehensive Service",
                description: "From regular maintenance to seasonal cleanup - we handle every aspect of groundskeeping professionally.",
                icon: <Phone className="w-6 h-6" />,
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
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
                  {feature.icon}
                </div>
                <div className="text-lg font-bold mb-2 relative z-10 px-10">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border-color group-hover/feature:bg-primary-accent transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-text-primary">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm text-text-secondary max-w-xs relative z-10 px-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Recent Projects Section */}
      <RecentProjectsSection />

      {/* Groundskeeping FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Groundskeeping FAQs
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our groundskeeping and garden maintenance services.
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
              Ready for Professional Groundskeeping?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Keep your outdoor spaces looking their best year-round with our reliable groundskeeping services. Get your free consultation today.
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

export default Groundskeeping;