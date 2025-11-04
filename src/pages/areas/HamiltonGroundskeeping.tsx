import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, MapPin, Award, Shield, CheckCircle, Clock, Scissors, Leaf, Home } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';

const HamiltonGroundskeeping: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('hamiltonGroundskeepingFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('hamiltonGroundskeepingFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Hamilton');
      formData.append('service', 'Groundskeeping');
      
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('hamiltonGroundskeepingFormSubmitted', 'true');
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

  const hamiltonProjects: Project[] = [
    {
      title: "Garden Maintenance",
      before: "/HSC-Maintenance-before copy.webp",
      after: "/HSC-Maintenance-AFTER copy.webp",
      alt: "Professional garden maintenance transformation"
    },
    {
      title: "Hedge Trimming Services",
      after: "/hedge-trimming-HSC.webp",
      alt: "Expert hedge trimming and shaping"
    },
    {
      title: "Seasonal Cleanup",
      before: "/groundskeepning-cleanup-HSC-BEFORE.webp",
      after: "/Groundskeeping-HSC-cleanup-AFTER.webp",
      alt: "Comprehensive seasonal cleanup service"
    },
    {
      title: "Garden Bed Care",
      after: "/garden-bed-planting-HSC.webp",
      alt: "Professional garden bed maintenance"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-primary-accent" />,
      title: "Hamilton's Reliable Team",
      description: "Over 16 years providing consistent, dependable groundskeeping services that Hamilton families trust for their busy lifestyles."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Practical Care",
      description: "Garden maintenance designed around family life, with flexible scheduling and services that keep your outdoor space looking great year-round."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Honest Value",
      description: "Transparent pricing and practical maintenance plans that deliver consistent results without breaking the budget."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Consistent Service",
      description: "Regular, reliable visits that keep your Hamilton garden healthy and attractive with minimal disruption to your routine."
    }
  ];

  const faqs = [
    {
      question: "What groundskeeping services work best for Hamilton families?",
      answer: "For Hamilton's busy families, we recommend regular lawn care, seasonal cleanup, and hedge maintenance. These core services keep your garden looking great while fitting around family schedules and budgets."
    },
    {
      question: "How often should Hamilton gardens be maintained?",
      answer: "Most Hamilton properties benefit from fortnightly visits during growing season (April-October) and monthly maintenance in winter. We adjust frequency based on your garden's needs and your family's preferences."
    },
    {
      question: "Do you work around Hamilton's varied property types?",
      answer: "Absolutely. From Victorian terraces with small gardens to modern estates with larger grounds, we tailor our groundskeeping approach to suit each property type and the family's lifestyle."
    },
    {
      question: "What's included in your Hamilton groundskeeping service?",
      answer: "Our standard service includes lawn mowing, edge trimming, basic weeding, and seasonal cleanup. We can add hedge trimming, pruning, and garden bed maintenance based on your specific needs."
    },
    {
      question: "How do you handle scheduling for busy Hamilton families?",
      answer: "We offer flexible scheduling including early morning and weekend slots. Our team works efficiently and can often complete maintenance while you're at work or busy with family activities."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/groundskeeping-hero-HSC (1).webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-4 left-4 bg-primary-accent/90 text-white px-4 py-2 rounded-lg font-semibold">
            Serving Hamilton
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              <h1 className="font-body text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-white" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Looking for Groundskeepers in Hamilton?
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
                From lawn care to hedge trimming, weed control to garden cleanup — covering Hamilton & surrounding areas.
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
              {showThankYouMessage && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
                  <p className="font-semibold">Thank you! Your form has been submitted.</p>
                  <p className="text-sm mt-1">We'll respond within 24 hours.</p>
                </div>
              )}
              
              <h3 className="text-3xl font-heading font-bold text-white mb-4 text-center">
                Get Your Free Hamilton Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your Hamilton garden maintenance needs
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
                    placeholder="Your Hamilton Address"
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
                    placeholder="Tell us about your Hamilton garden maintenance needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Hamilton Quote'}
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
              Get Your Free Hamilton Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your Hamilton garden maintenance needs
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
                  placeholder="Your Hamilton Address"
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
                  placeholder="Tell us about your Hamilton garden maintenance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Hamilton Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Groundskeeping in Hamilton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Professional Groundskeeping in Hamilton
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              Hamilton families need garden maintenance that works around busy schedules. We provide reliable, consistent groundskeeping services that keep your outdoor space healthy and attractive year-round, with flexible scheduling that fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Hamilton */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Hamilton Families Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Dependable groundskeeping services that Hamilton homeowners have trusted for over 17 years.
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
              Recent Groundskeeping Projects
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              See how we maintain Hamilton gardens with consistent care, professional service, and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hamiltonProjects.map((project, index) => (
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
              Groundskeeping FAQs for Hamilton Residents
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our reliable garden maintenance services for Hamilton families.
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
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-secondary-bg transition-colors duration-200"
                >
                  <span className="font-heading font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-accent transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Ready for Reliable Hamilton Groundskeeping?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join Hamilton families who trust HSC Builders for consistent, professional garden maintenance that fits their busy lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as="a"
              href="tel:01698372999"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 01698 372 999</span>
            </Button>
            <Button
              as="a"
              href="#/contact"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center space-x-2 bg-secondary-accent hover:bg-secondary-accent/80"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HamiltonGroundskeeping;