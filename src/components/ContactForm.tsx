import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get In Touch",
  subtitle = "Ready to transform your outdoor space? Send us a message and we'll get back to you within 24 hours.",
  className = ''
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/xnjglyav', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setShowThankYouMessage(true);
        setIsSubmitting(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json().catch(() => null);
        console.error('Formspree error - Status:', response.status);
        console.error('Formspree error - Response:', errorData);
        alert('There was an error submitting your form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`card ${className}`}>
      {showThankYouMessage && (
        <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
          <p className="font-semibold">Thank you! Your form has been submitted.</p>
          <p className="text-sm mt-1">We'll respond within 24 hours.</p>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
          {title}
        </h3>
        <p className="text-text-secondary">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="form-input"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="form-input"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="form-input"
          >
            <option value="">Select a service</option>
            <option value="lawn-care">Lawn Care & Maintenance</option>
            <option value="landscape-design">Landscape Design</option>
            <option value="hardscaping">Hardscaping</option>
            <option value="tree-services">Tree Services</option>
            <option value="irrigation">Irrigation Systems</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="form-input resize-none"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </button>

        <p className="text-sm text-text-secondary text-center">
          We'll respond within 24 hours with your personalized quote.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
