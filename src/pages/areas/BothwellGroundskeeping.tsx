import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, MapPin, Award, Shield, CheckCircle, Clock, Scissors, Leaf, TreePine } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';

const BothwellGroundskeeping: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('bothwellGroundskeepingFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('bothwellGroundskeepingFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Bothwell');
      formData.append('service', 'Groundskeeping & Maintenance');
      
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('bothwellGroundskeepingFormSubmitted', 'true');
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

  const bothwellProjects: Project[] = [
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
      title: "Bothwell's Premier Service",
      description: "Over 16 years maintaining Bothwell's most distinguished properties with meticulous attention to detail and premium care standards."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Executive Standards",
      description: "White-glove service that maintains your property's prestige with discretion, reliability, and the highest quality standards."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Tailored Excellence",
      description: "Bespoke maintenance programs designed for discerning homeowners who expect nothing less than perfection from their grounds."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Seamless Service",
      description: "Scheduled maintenance that works around your lifestyle, ensuring your grounds are always immaculate without disruption."
    }
  ];

  const faqs = [
    {
      question: "What makes your Bothwell groundskeeping service premium?",
      answer: "Our Bothwell service includes meticulous attention to detail, premium equipment, and highly trained staff who understand the standards expected in this prestigious area. We provide comprehensive care that maintains your property's distinguished appearance year-round."
    },
    {
      question: "How do you maintain discretion while working on Bothwell properties?",
      answer: "We schedule services at convenient times, use professional-grade quiet equipment where possible, and our uniformed team works efficiently and respectfully. We understand the importance of maintaining your property's tranquil environment."
    },
    {
      question: "What's included in a comprehensive Bothwell maintenance program?",
      answer: "Our premium programs include regular lawn care, hedge trimming, seasonal planting, leaf clearance, garden bed maintenance, and property inspections. We customize each program to your specific property needs and aesthetic preferences."
    },
    {
      question: "Do you provide emergency groundskeeping services in Bothwell?",
      answer: "Yes, we offer priority response for storm damage, urgent repairs, or last-minute preparation for special events. Our Bothwell clients receive preferential scheduling for emergency situations."
    },
    {
      question: "How do you ensure consistent quality across all visits?",
      answer: "We use detailed property profiles, photographic records, and quality checklists for every visit. Our team leaders conduct regular inspections to ensure our Bothwell standards are consistently maintained."
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
            Serving Bothwell
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 sm:pt-8 lg:pt-0">
            {/* Left Column - Content */}
            <div className="text-left mt-20 sm:mt-12 lg:mt-0">
              <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Groundskeeping in Bothwell
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-accent">
                  Meticulous Care. Distinguished Results.
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 text-white leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Premium groundskeeping services that maintain Bothwell's most prestigious properties.
              </h2>
              
              <p className="text-lg sm:text-xl text-white mb-8 max-w-xl leading-relaxed font-light" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Serving discerning Bothwell homeowners for 17+ years with white-glove service and exceptional attention to detail.
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
                Get Your Free Bothwell Quote
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Tell us about your Bothwell groundskeeping needs
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
                    placeholder="Your Bothwell Address"
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
                    placeholder="Tell us about your Bothwell groundskeeping needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Bothwell Quote'}
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
              Get Your Free Bothwell Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your Bothwell groundskeeping needs
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
                  placeholder="Your Bothwell Address"
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
                  placeholder="Tell us about your Bothwell groundskeeping needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Bothwell Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About Groundskeeping in Bothwell */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Premium Groundskeeping Services in Bothwell
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              Bothwell's most distinguished properties deserve exceptional care. We provide meticulous groundskeeping services that maintain your estate's prestige with the discretion and quality standards you expect.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us in Bothwell */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Bothwell's Elite Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Premium groundskeeping services and white-glove care that Bothwell's most discerning homeowners have trusted for over 17 years.
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
              See how we maintain Bothwell's most prestigious properties with meticulous care and professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bothwellProjects.map((project, index) => (
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
              Groundskeeping FAQs for Bothwell Residents
            </h2>
            <p className="text-lg text-text-secondary">
              Common questions about our premium groundskeeping services for Bothwell's distinguished properties.
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
            Ready to Experience Premium Groundskeeping?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
            Join Bothwell's most discerning homeowners who trust HSC Builders for exceptional groundskeeping services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              as="a"
              href="tel:01698123456"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: 01698 123456
            </Button>
            <Button
              as="a"
              href="#quote-form"
              containerClassName="w-auto h-14"
              className="px-8 py-3 font-semibold flex items-center gap-2 bg-transparent border-2 border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-white"
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

export default BothwellGroundskeeping;