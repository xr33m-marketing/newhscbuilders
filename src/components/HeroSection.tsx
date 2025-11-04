import React from 'react';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('heroFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('heroFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('heroFormSubmitted', 'true');
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

  return (
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
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          backgroundImage: `url('/hero-home-HSC copy.webp')`,
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
            <h1 className="font-body text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight sm:leading-relaxed mb-6 sm:mb-8 text-white tracking-wide" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
              Outdoor transformations that last — and leave a lasting impression
            </h1>
            
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 leading-tight sm:leading-relaxed" style={{ 
              color: '#ffaa44',
              textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9), 0px 0px 8px rgba(0,0,0,0.8)'
            }}>
              Landscaping, hardscaping & groundskeeping across Greater Glasgow
            </h2>
            
            <p className="text-base sm:text-xl text-white mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-normal sm:leading-relaxed font-medium" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
              With 17+ years of trusted results, we create stunning outdoor spaces — from bespoke patios to pristine lawns and full garden maintenance.
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
              Get Your Free Quote
            </h3>
            
            <p className="text-gray-300 text-center mb-8">
              Tell us about your project and we'll respond within 24 hours
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
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;