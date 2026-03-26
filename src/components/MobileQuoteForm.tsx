import React, { useState } from 'react';

const MobileQuoteForm: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                type="email"
                name="email"
                required
                className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-accent focus:bg-opacity-20 transition-all duration-200"
                placeholder="Email Address"
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
    </section>
  );
};

export default MobileQuoteForm;
