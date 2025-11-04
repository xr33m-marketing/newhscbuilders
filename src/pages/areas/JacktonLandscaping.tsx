import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, MapPin, Award, Shield, CheckCircle, Clock, TreePine, Hammer, Scissors } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';

const JacktonLandscaping: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('jacktonFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('jacktonFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Jackton');
      formData.append('service', 'Landscaping');
      
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('jacktonFormSubmitted', 'true');
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
      title: "Complete Garden Transformation",
      before: "/Full-Landscaping-HSC-Gallery.webp",
      after: "/landscaping-hero-hsc.webp",
      alt: "Complete landscaping transformation"
    },
    {
      title: "Fencing Installation",
      before: "/fencing-BEFORE-HSC-Gallery.webp",
      after: "/Compostite-fencing-HSC-home.webp",
      alt: "Modern composite fencing installation"
    },
    {
      title: "Artificial Turf Installation",
      before: "/Art-tirf-Before-HSC-Gallery.webp",
      after: "/art-turf-home-projects-HSC.webp",
      alt: "Professional artificial turf installation"
    },
    {
      title: "Garden Design & Planting",
      after: "/garden-bed-planting-HSC.webp",
      alt: "Professional garden bed design and planting"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-primary-accent" />,
      title: "Trusted by Jackton Families",
      description: "Over 16 years serving Jackton residents with reliable, professional landscaping services that enhance property value and outdoor living."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Local Knowledge & Expertise",
      description: "Deep understanding of Jackton's soil conditions, climate, and property styles. We know what works best in your neighborhood."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Quality Guaranteed",
      description: "12-month workmanship warranty on all landscaping projects. We stand behind our work with comprehensive guarantees."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Prompt Local Service",
      description: "Quick response times for Jackton residents. Free quotes within 24 hours and flexible scheduling to suit your needs."
    }
  ];

  const faqs = [
    {
      question: "Do you offer free landscaping quotes in Jackton?",
      answer: "Yes! We provide completely free, no-obligation landscaping quotes for all Jackton residents. Our team will visit your property, assess your needs, and provide a detailed written estimate within 24-48 hours."
    },
    {
      question: "How soon can you start a landscaping project in Jackton?",
      answer: "For Jackton residents, we typically can start landscaping projects within 1-2 weeks for smaller jobs, and 2-4 weeks for larger landscape design projects. During peak season (spring/summer), we recommend booking 3-4 weeks in advance."
    },
    {
      question: "What's the most popular landscaping service in Jackton?",
      answer: "In Jackton, our most popular services are complete garden transformations, composite decking installations, and artificial turf. Many residents choose these for low-maintenance, family-friendly outdoor spaces that suit the area's modern homes."
    },
    {
      question: "Do you understand Jackton's soil and climate conditions?",
      answer: "Absolutely. We've worked extensively in Jackton and understand the local soil composition, drainage requirements, and plant varieties that thrive in your area. Our designs are specifically tailored for South Lanarkshire conditions."
    },
    {
      question: "Can you work around Jackton's residential areas respectfully?",
      answer: "Yes, we pride ourselves on being considerate neighbors. We work quietly, keep sites clean, park responsibly, and maintain clear communication with both you and your neighbors throughout the project."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/hero-home-HSC copy.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Local area overlay */}
          <div className="absolute top-4 left-4 bg-primary-accent/90 text-white px-4 py-2 rounded-lg font-semibold">
            Serving Jackton
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              <h1 className="font-body text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-white" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Looking for Landscaping Services in Jackton?
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
                From patios to artificial turf, driveways to garden walls — covering Jackton & surrounding areas.
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
                Tell us about your Jackton landscaping project
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
                    placeholder="Tell us about your Jackton landscaping project..."
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
              Tell us about your Jackton landscaping project
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
                  placeholder="Tell us about your Jackton landscaping project..."
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

      {/* About Landscaping in Jackton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Landscaping Services in Jackton, South Lanarkshire
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              Jackton's growing community of modern family homes deserves landscaping that matches the area's contemporary style and family-focused lifestyle. At HSC Builders, we've been transforming Jackton gardens for over 17 years, creating outdoor spaces that complement the neighborhood's character while providing practical, low-maintenance solutions for busy families.
            </p>
            <p>
              From composite decking perfect for entertaining to artificial turf that stays green year-round, we understand what Jackton homeowners value most: quality, durability, and designs that enhance both property value and family life. Our local expertise means we know exactly which materials and plants work best in your South Lanarkshire location.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Jackton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Jackton Residents Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Local expertise, proven results, and a commitment to excellence that Jackton families have trusted for over 17 years.
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

      {/* Showcase Relevant Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Recent Landscaping Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              See how we've transformed outdoor spaces with professional landscaping, composite materials, and modern garden design.
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

      {/* Jackton-Specific Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
              Popular Landscaping Services in Jackton
            </h2>
            <p className="text-lg text-text-secondary">
              Services that Jackton homeowners love for their modern family properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-bg border border-border-color rounded-xl p-6 hover:border-primary-accent/50 transition-all duration-300">
              <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-primary-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3 text-center">
                Complete Garden Makeovers
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed text-center">
                Transform your entire Jackton garden with modern design, composite materials, and family-friendly features that suit contemporary homes.
              </p>
            </div>

            <div className="bg-secondary-bg border border-border-color rounded-xl p-6 hover:border-primary-accent/50 transition-all duration-300">
              <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-primary-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3 text-center">
                Composite Decking & Fencing
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed text-center">
                Low-maintenance composite solutions perfect for Jackton's family homes. Durable, attractive, and ideal for Scottish weather.
              </p>
            </div>

            <div className="bg-secondary-bg border border-border-color rounded-xl p-6 hover:border-primary-accent/50 transition-all duration-300">
              <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-primary-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-primary mb-3 text-center">
                Artificial Turf Installation
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed text-center">
                Perfect for busy Jackton families wanting beautiful, green lawns without the maintenance. Child and pet-friendly options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Landscaping FAQs for Jackton Residents
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our landscaping services specifically for Jackton homeowners.
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

      {/* CTA / Contact Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Transform Your Jackton Garden Today
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Ready to create the perfect outdoor space for your Jackton home? Get your free consultation and detailed landscaping quote today.
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
                <strong className="text-primary-accent">Serving Jackton:</strong> Professional landscaping services for South Lanarkshire families
              </p>
              <p className="text-text-secondary text-sm mt-2">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
              Proudly Serving Jackton & Surrounding Areas
            </h2>
            <p className="text-lg text-text-secondary">
              Located nearby in Blantyre, we provide quick, reliable service to Jackton residents
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.123!2d-4.123!3d55.759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJackton%2C+UK!5e0!3m2!1sen!2suk!4v1234567890!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HSC Builders serving Jackton area"
            ></iframe>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HSC Builders - Landscaping Services Jackton",
            "description": "Professional landscaping services in Jackton, South Lanarkshire. Garden design, composite decking, artificial turf, and complete outdoor transformations.",
            "url": "https://hscbuilders.co.uk/areas/jackton-landscaping",
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
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "55.7589",
              "longitude": "-4.1234"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Jackton, South Lanarkshire"
            },
            "serviceType": "Landscaping Services",
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

export default JacktonLandscaping;