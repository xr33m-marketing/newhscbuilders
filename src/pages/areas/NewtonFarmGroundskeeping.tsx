import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, MapPin, Award, Shield, CheckCircle, Clock, Scissors, Leaf, Sprout } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';

const NewtonFarmGroundskeeping: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('newtonFarmGroundskeepingFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('newtonFarmGroundskeepingFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Newton Farm');
      formData.append('service', 'Groundskeeping');
      
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('newtonFarmGroundskeepingFormSubmitted', 'true');
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

  const newtonFarmProjects: Project[] = [
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
      title: "Newton Farm's Garden Experts",
      description: "Over 16 years of experience maintaining gardens with modern techniques and sustainable practices perfect for Newton Farm's contemporary homes."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Smart Maintenance Solutions",
      description: "Innovative groundskeeping approaches using the latest techniques and eco-friendly methods to keep your Newton Farm garden looking pristine year-round."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Reliable Service",
      description: "Consistent, professional maintenance schedules that work around your busy lifestyle, ensuring your garden always looks its best."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Flexible Scheduling",
      description: "Convenient maintenance visits that fit your schedule, with efficient service that minimizes disruption to your Newton Farm routine."
    }
  ];

  const faqs = [
    {
      question: "What groundskeeping services do you offer in Newton Farm?",
      answer: "We provide comprehensive garden maintenance including lawn care, hedge trimming, pruning, weeding, seasonal cleanups, and ongoing garden health monitoring using modern, sustainable techniques."
    },
    {
      question: "How often should Newton Farm gardens be maintained?",
      answer: "Most Newton Farm properties benefit from fortnightly visits during growing season (April-October) and monthly maintenance in winter. We customize schedules based on your garden's specific needs and your preferences."
    },
    {
      question: "Do you use eco-friendly practices in Newton Farm?",
      answer: "Absolutely. We use sustainable methods, organic treatments where possible, and water-efficient techniques that align with Newton Farm's modern, environmentally conscious community values."
    },
    {
      question: "Can you maintain contemporary garden designs?",
      answer: "Yes, we specialize in maintaining modern garden styles popular in Newton Farm, including minimalist designs, architectural plantings, and contemporary outdoor living spaces."
    },
    {
      question: "What's included in your Newton Farm maintenance packages?",
      answer: "Our packages include lawn mowing, edge trimming, hedge maintenance, seasonal pruning, weed control, leaf clearance, and regular garden health assessments with recommendations for improvements."
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
            Serving Newton Farm
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              <h1 className="font-body text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-white" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Looking for Groundskeepers in Newton Farm?
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
                From lawn care to hedge trimming, weed control to garden cleanup — covering Newton Farm & surrounding areas.
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
                Get Your Free Newton Farm Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your Newton Farm garden maintenance needs
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
                    placeholder="Your Newton Farm Address"
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
                    placeholder="Tell us about your Newton Farm garden maintenance needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Newton Farm Quote'}
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
              Get Your Free Newton Farm Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your Newton Farm garden maintenance needs
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
                  placeholder="Your Newton Farm Address"
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
                  placeholder="Tell us about your Newton Farm garden maintenance needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Newton Farm Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Groundskeeping in Newton Farm */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Professional Groundskeeping in Newton Farm
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              Newton Farm's contemporary homes deserve garden maintenance that matches their modern standards. We provide smart, sustainable groundskeeping solutions that keep your outdoor space looking pristine year-round with innovative techniques and eco-friendly practices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Newton Farm */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Newton Farm Residents Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Modern groundskeeping solutions and reliable service that Newton Farm homeowners have trusted for over 17 years.
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
              See how we maintain gardens with professional care, modern techniques, and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newtonFarmProjects.map((project, index) => (
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
              Groundskeeping FAQs for Newton Farm Residents
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our professional garden maintenance services for Newton Farm properties.
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
            Ready to Transform Your Newton Farm Garden?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            Get professional groundskeeping that keeps your garden looking pristine year-round with smart, sustainable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as="a"
              href="tel:01698372222"
              containerClassName="w-full sm:w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 01698 372 222
            </Button>
            
            <Button
              as="a"
              href="#/contact"
              containerClassName="w-full sm:w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center justify-center gap-2 bg-secondary-bg border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { NewtonFarmGroundskeeping };