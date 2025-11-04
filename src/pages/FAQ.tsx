import React from 'react';
import { useState } from 'react';
import { Star, Shield, FileCheck, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = {
    general: [
      {
        question: "What services do you offer?",
        answer: "We provide comprehensive landscaping and building services including lawn care, landscape design, hardscaping, irrigation systems, tree services, and general building work. Our team has over 17 years of experience serving Greater Glasgow and surrounding areas.",
        details: [
          "Weekly/bi-weekly lawn maintenance",
          "Custom landscape design and installation", 
          "Patios, driveways, and hardscaping",
          "Tree pruning and removal",
          "House extensions and renovations"
        ]
      },
      {
        question: "What areas do you serve?",
        answer: "We serve Greater Glasgow and surrounding areas within a 30-mile radius, including Newton Farm, Jackton, Hamilton, Bothwell, East Kilbride, Bearsden, Cambuslang, Rutherglen, and nearby communities."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed, bonded, and insured for your protection. We carry comprehensive liability insurance and workers' compensation coverage for all team members. We're also registered waste carriers for proper disposal of materials."
      }
    ],
    pricing: [
      {
        question: "Do you provide free estimates?",
        answer: "Absolutely! We offer completely free, no-obligation estimates for all our services. Our team will visit your property, assess your needs, and provide a detailed written quote within 24-48 hours."
      },
      {
        question: "How much does landscaping cost?",
        answer: "Costs vary depending on project scope, property size, and materials chosen. Basic lawn maintenance typically starts at £50-100 per visit, while complete landscape installations range from £3,000 to £15,000+ depending on complexity.",
        details: [
          "Lawn care: £50-100 per visit",
          "Small garden design: £2,000-5,000",
          "Complete landscape renovation: £5,000-15,000+",
          "Patio installation: £3,000-8,000",
          "Irrigation systems: £1,500-4,000"
        ]
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, cheque, and all major credit cards. For larger projects, we offer flexible payment plans and can work with you to find a payment schedule that fits your budget."
      }
    ],
    scheduling: [
      {
        question: "How far in advance should I book?",
        answer: "For regular maintenance, we recommend booking 1-2 weeks in advance. For larger projects like landscape design or hardscaping, we suggest scheduling 2-4 weeks ahead, especially during peak season (spring/summer)."
      },
      {
        question: "Do you work year-round?",
        answer: "Yes, we provide services throughout the year. While some services like planting are seasonal, we offer winter services including tree pruning, hardscaping, and planning for spring projects."
      },
      {
        question: "What happens if it rains on my scheduled day?",
        answer: "We monitor weather conditions closely and will reschedule if conditions aren't suitable for quality work. We'll contact you as soon as possible to arrange an alternative date that works for both parties."
      }
    ],
    guarantees: [
      {
        question: "Do you guarantee your work?",
        answer: "Yes, we stand behind all our work with comprehensive warranties. Workmanship is guaranteed for 12 months, and we use quality materials with manufacturer warranties. If you're not satisfied, we'll make it right at no additional cost."
      },
      {
        question: "What if I'm not happy with the results?",
        answer: "Customer satisfaction is our top priority. If you're not completely satisfied, we'll work with you to address any concerns at no additional cost. Our goal is always 100% customer satisfaction."
      },
      {
        question: "Do you clean up after completing work?",
        answer: "Absolutely! We take pride in leaving your property cleaner than we found it. All debris is removed, tools are cleaned up, and we do a final walkthrough to ensure everything meets our high standards."
      }
    ],
    materials: [
      {
        question: "What quality of materials do you use?",
        answer: "We use only high-quality, professional-grade materials suitable for the Scottish climate. We source from trusted suppliers and can provide material specifications and warranties for all products used."
      },
      {
        question: "Can I choose my own materials?",
        answer: "Yes, we're happy to work with materials you've selected. We can also provide guidance on the best options for your specific project, climate conditions, and budget requirements."
      },
      {
        question: "How do you maintain equipment and tools?",
        answer: "All our equipment is professionally maintained and regularly serviced to ensure optimal performance. We use commercial-grade tools and replace them as needed to maintain the highest quality standards."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Straight answers about our services, quotes, and guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-secondary">
              Everything you need to know about our landscaping and building services, from quotes to guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {[...faqData.general, ...faqData.pricing, ...faqData.scheduling, ...faqData.guarantees, ...faqData.materials].map((faq, index) => (
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
                      {faq.details && (
                        <ul className="list-outside list-disc space-y-2 pl-4 mt-4">
                          {faq.details.map((detail, idx) => (
                            <li key={idx} className="text-text-secondary">{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Didn't Find What You Need CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Didn't Find What You Need?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Get in touch with us directly for personalized answers to your questions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              as="a"
              href="https://wa.me/447490738974"
              target="_blank"
              rel="noopener noreferrer"
              containerClassName="w-full h-14"
              className="px-4 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </span>
            </Button>
            
            <Button
              as="a"
              href="tel:07490738974"
              containerClassName="w-full h-14"
              className="px-4 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </span>
            </Button>
            
            <Button
              as="a"
              href="mailto:hscbuildersglasgow@gmail.com"
              containerClassName="w-full h-14"
              className="px-4 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </span>
            </Button>
            
            <Button
              as="a"
              href="#/contact"
              containerClassName="w-full h-14"
              className="px-4 py-3 font-semibold"
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Service Area Reassurance */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-primary-bg border-t border-border-color">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-secondary">
            <strong className="text-primary-accent">Serving Greater Glasgow:</strong> Newton Farm, Jackton, Hamilton, Bothwell, East Kilbride, Bearsden, and nearby areas.
          </p>
        </div>
      </section>

      {/* SEO Footer Copy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto">
          <p className="text-text-secondary leading-relaxed text-center">
            At HSC Builders, we understand that choosing the right landscaping and building contractor involves many considerations. Our FAQ section addresses the most common questions about our services, but we know every project is unique. Whether you're wondering about specific plant varieties for Scottish weather, the best time for hardscaping projects, or how we handle unexpected site conditions, our experienced team is here to help. We've been serving Greater Glasgow for over 17 years, and we've learned that clear communication and transparency are just as important as quality workmanship. If you have questions not covered here, don't hesitate to reach out – we're always happy to discuss your specific needs and provide detailed information about how we can help transform your outdoor space.
          </p>
        </div>
      </section>

      {/* JSON-LD Schema for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...faqData.general,
              ...faqData.pricing,
              ...faqData.scheduling,
              ...faqData.guarantees,
              ...faqData.materials
            ].map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQ;