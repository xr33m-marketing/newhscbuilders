import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award, Star, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('contactFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('contactFormSubmitted');
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
        sessionStorage.setItem('contactFormSubmitted', 'true');
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

  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6 text-primary-accent" />,
      label: "Phone",
      value: "07490 738 974",
      link: "tel:07490738974",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-accent" />,
      label: "Email",
      value: "hscbuildersglasgow@gmail.com",
      link: "mailto:hscbuildersglasgow@gmail.com",
      description: "Send us your project details"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-accent" />,
      label: "Address",
      value: "10 Balmoral Gardens, Blantyre, South Lanarkshire. G72 9NP",
      link: "https://maps.google.com/?q=10+Balmoral+Gardens,+Blantyre,+South+Lanarkshire+G72+9NP",
      description: "Visit our office"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      label: "Business Hours",
      value: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM\nSun: Emergency calls only",
      link: null,
      description: "When we're available"
    }
  ];

  const trustBadges = [
    { icon: <Shield className="w-5 h-5" />, text: "Fully Insured" },
    { icon: <Star className="w-5 h-5" />, text: "17+ Years Experience" },
    { icon: <Star className="w-5 h-5" />, text: "Google Verified" }
  ];

  const services = [
    "Lawn Care & Maintenance",
    "Landscape Design & Installation", 
    "Hardscaping & Patios",
    "Irrigation Systems",
    "Tree Services",
    "House Extensions",
    "General Building Work",
    "Other"
  ];

  const testimonials = [
    {
      text: "Outstanding work on our extension. Professional team, quality finish, and excellent communication throughout.",
      author: "Sarah Mitchell",
      location: "Glasgow"
    },
    {
      text: "Transformed our garden completely. The team was reliable, clean, and delivered exactly what they promised.",
      author: "James Robertson", 
      location: "Hamilton"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact HSC Builders for a Free Quote in Glasgow
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              We aim to respond to all enquiries within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Details & Trust */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">
                  Contact Details
                </h2>
                
                <div className="space-y-6">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-secondary-bg border border-border-color rounded-xl hover:border-primary-accent/50 transition-all duration-300">
                      <div className="flex-shrink-0 bg-primary-accent/10 rounded-full p-3">
                        {detail.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-text-primary mb-1">
                          {detail.label}
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">
                          {detail.description}
                        </p>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target={detail.label === "Address" ? "_blank" : undefined}
                            rel={detail.label === "Address" ? "noopener noreferrer" : undefined}
                            className="text-text-primary hover:text-primary-accent transition-colors duration-200 font-medium whitespace-pre-line"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-text-primary font-medium whitespace-pre-line">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-secondary-bg border border-border-color rounded-lg">
                      <div className="text-primary-accent">
                        {badge.icon}
                      </div>
                      <span className="text-text-primary font-medium text-sm">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <Button
                    as="a"
                    href="https://wa.me/447490738974"
                    target="_blank"
                    rel="noopener noreferrer"
                    containerClassName="w-auto h-12"
                    className="px-4 py-3 font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </span>
                  </Button>
                  <Button
                    as="a"
                    href="https://www.facebook.com/people/HSC-Builders-Glasgow/61559233820647/"
                    target="_blank"
                    rel="noopener noreferrer"
                    containerClassName="w-auto h-12"
                    className="px-4 py-3 font-semibold"
                  >
                    Facebook
                  </Button>
                  <Button
                    as="a"
                    href="https://www.instagram.com/hsc_builders_scotland/"
                    target="_blank"
                    rel="noopener noreferrer"
                    containerClassName="w-auto h-12"
                    className="px-4 py-3 font-semibold"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-secondary-bg border border-border-color rounded-xl p-8">
                {showThankYouMessage && (
                  <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
                    <p className="font-semibold">Thank you! Your form has been submitted.</p>
                    <p className="text-sm mt-1">We'll respond within 24 hours.</p>
                  </div>
                )}
                
                <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                      placeholder="07XXX XXX XXX"
                    />
                  </div>

                  {/* Address & Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-text-primary mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                        placeholder="Your address"
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-text-primary mb-2">
                        Postcode
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200"
                        placeholder="G72 9NP"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-primary-bg border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary-accent focus:ring-1 focus:ring-primary-accent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    as="button"
                    type="submit"
                    disabled={isSubmitting}
                    containerClassName="w-full h-14"
                    className="px-6 py-4 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </Button>

                  <p className="text-sm text-text-secondary text-center">
                    We respect your privacy and will never share your details.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
              Find Us
            </h2>
            <p className="text-lg text-text-secondary">
              Located in Blantyre, serving Greater Glasgow and surrounding areas
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8234567890123!2d-4.0987654321!3d55.7890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ3JzIwLjQiTiA0wrAwNScxOS42Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HSC Builders Location"
            ></iframe>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Get in touch today for your free consultation and detailed quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
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
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
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

export default Contact;