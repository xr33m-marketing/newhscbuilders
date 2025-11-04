import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, MapPin, Award, Shield, CheckCircle, Clock, Hammer, Car, Home } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';
import { SEO } from '../../components/SEO';

const HamiltonDriveways: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('jacktonDrivewaysFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('jacktonDrivewaysFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Jackton');
      formData.append('service', 'Driveways & Hardscaping');
      
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('jacktonDrivewaysFormSubmitted', 'true');
        window.location.reload();
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const jacktonProjects: Project[] = [
    {
      title: "Expert Block Paving Project",
      images: [
        "/HSC-Block-Paving-Hardscaping.webp",
        "/Hardscaping-HSC-Block-Paving.webp",
        "/Block-paving-HSC-Hardscaping.webp",
        "/HSC-Hardscaping-Block-Paving.webp",
        "/Block-paving-Hardscaping-HSC.webp"
      ],
      after: "/HSC-Block-Paving-Hardscaping.webp",
      alt: "High-quality block paving driveway"
    },
    {
      title: "Garden Patio Project",
      before: "/HSC-Before-Gallery-Patios.webp",
      after: "/patio-HSC_landscaping.webp",
      alt: "Garden patio with surrounding landscaping"
    },
    {
      title: "Professional Pathways",
      after: "/pathway-HSC-Monoblock.webp",
      alt: "Expert pathway installation"
    },
    {
      title: "Garden Wall Construction",
      after: "/HSC-wall-Glasgow-landscaping.webp",
      alt: "Professional garden wall building"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-primary-accent" />,
      title: "Jackton's Driveway Experts",
      description: "Over 16 years creating durable driveways that enhance Jackton's modern homes and provide reliable vehicle access for busy families."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Built to Last",
      description: "Proper foundations, quality materials, and expert drainage ensure your Jackton driveway withstands heavy use and Scottish weather."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Modern Materials",
      description: "Contemporary block paving and materials that complement Jackton's housing styles while providing long-term durability."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Minimal Disruption",
      description: "Efficient installation with careful planning to minimize impact on your daily routine and neighborhood access."
    }
  ];

  const faqs = [
    {
      question: "What driveway materials work best in Jackton?",
      answer: "For Jackton's modern homes, we recommend block paving or natural stone that complements contemporary architecture. These materials provide durability, excellent drainage, and enhance property value while suiting the area's aesthetic."
    },
    {
      question: "How long does driveway installation take in Jackton?",
      answer: "Most Jackton driveways take 3-7 days depending on size and complexity. We work efficiently to minimize disruption to your routine and provide temporary access arrangements during construction."
    },
    {
      question: "Do you handle drainage for Jackton driveways?",
      answer: "Absolutely. Proper drainage is essential for Scottish weather. We install comprehensive drainage systems including soakaways and permeable materials to prevent water damage and comply with regulations."
    },
    {
      question: "What's the investment for a quality driveway in Jackton?",
      answer: "Driveway costs vary by size and materials. Block paving typically ranges from £3,000-£8,000 for standard Jackton properties. We provide detailed, transparent quotes with no hidden costs."
    },
    {
      question: "Can you work around Jackton's residential parking?",
      answer: "Yes, we coordinate with residents and plan material deliveries to minimize parking disruption. We work efficiently and communicate clearly about any temporary access changes needed."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <SEO
        title="Driveways Hamilton | Block Paving & Tarmac Specialists"
        description="Expert driveway services in Hamilton. Block paving, tarmac, resin-bound driveways, repairs & installations. Quality workmanship in Hamilton & South Lanarkshire. Free quotes."
        keywords="driveways Hamilton, block paving Hamilton, tarmac driveways Hamilton, driveway installation Hamilton, resin driveways Hamilton"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/Hero-hardscaping-HSC-DESKtop.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-4 left-4 bg-primary-accent/90 text-white px-4 py-2 rounded-lg font-semibold">
            Serving Jackton
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Driveways in Jackton
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-accent">
                  Durable Access. Stunning Appeal.
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 text-white leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Professional driveways & hardscaping that enhance Jackton's contemporary homes.
              </h2>
              
              <p className="text-lg sm:text-xl text-white mb-8 max-w-xl leading-relaxed font-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Trusted by Jackton homeowners for 17+ years with expert installation and premium materials.
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
              {showThankYouMessage && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
                  <p className="font-semibold">Thank you! Your form has been submitted.</p>
                  <p className="text-sm mt-1">We'll respond within 24 hours.</p>
                </div>
              )}
              
              <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
                Get Your Free Jackton Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your Jackton driveway project
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Your Jackton Address"
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
                    placeholder="Tell us about your Jackton driveway project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Jackton Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Mobile Quote Form */}
      <section className="lg:hidden bg-secondary-bg py-16 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10">
            {showThankYouMessage && (
              <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
                <p className="font-semibold">Thank you! Your form has been submitted.</p>
                <p className="text-sm mt-1">We'll respond within 24 hours.</p>
              </div>
            )}
            
            <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
              Get Your Free Jackton Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your Jackton driveway project
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your Jackton Address"
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
                  placeholder="Tell us about your Jackton driveway project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Jackton Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Driveways in Jackton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Professional Driveway Installation in Jackton
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              Jackton's modern family homes deserve driveways that combine functionality with contemporary appeal. We specialize in durable installations that enhance curb appeal while providing reliable access for busy households.
            </p>
            <p>
              From block paving to natural stone, our Jackton driveway expertise ensures proper drainage, solid foundations, and finishes that complement your home's modern aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Jackton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Jackton Homeowners Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Expert driveway installation and reliable service that Jackton residents have trusted for over 17 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="bg-secondary-bg border border-border-color rounded-xl p-6 text-center hover:border-primary-accent/50 transition-all duration-300">
                <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Recent Driveway Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              See how we've transformed driveways with professional installation, quality materials, and expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jacktonProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              as="a"
              href="#/gallery"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold"
            >
              View All Our Projects
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Driveway FAQs for Jackton Residents
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our professional driveway installation services for Jackton properties.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-primary-bg rounded-xl border border-border-color overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary-bg/50 transition-colors duration-200 focus:outline-none focus:bg-secondary-bg/50"
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Transform Your Jackton Driveway Today
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Ready to enhance your Jackton property with a professional driveway? Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Get Your Free Jackton Quote
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
              <Button
                as="a"
                href="https://wa.me/447490738974"
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  WhatsApp <MessageCircle className="w-5 h-5" />
                </span>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-accent">Serving Jackton:</strong> Professional driveway services for South Lanarkshire homes
              </p>
              <p className="text-text-secondary text-sm mt-2">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HSC Builders - Driveway Services Jackton",
            "description": "Professional driveway installation in Jackton, South Lanarkshire. Block paving, natural stone, and hardscaping for modern family homes.",
            "url": "https://hscbuilders.co.uk/areas/jackton-driveways",
            "telephone": "07490738974",
            "email": "hscbuildersglasgow@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10 Balmoral Gardens",
              "addressLocality": "Blantyre",
              "addressRegion": "South Lanarkshire",
              "postalCode": "G72 9NP",
              "addressCountry": "GB"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Jackton, South Lanarkshire"
            },
            "serviceType": "Driveway Installation Services",
            "priceRange": "££",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "22"
            }
          })
        }}
      />
    </div>
  );
};

export default HamiltonDriveways;