import React from 'react';
import { Star, Shield, Award, Users, Calendar, CheckCircle, Phone, MessageCircle, MapPin, ArrowRight, Hammer, TreePine, Home } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';
import { Testimonial } from '../components/Testimonial';
import OurProcessSection from '../components/OurProcessSection';

const About: React.FC = () => {
  const stats = [
    { icon: <Calendar className="w-6 h-6" />, value: "17+", label: "Years Experience" },
    { icon: <Home className="w-6 h-6" />, value: "150+", label: "Projects Completed" },
    { icon: <Star className="w-6 h-6" />, value: "5.0★", label: "Average Rating" }
  ];

  const pillars = [
    {
      title: "Quality Craftsmanship",
      description: "We build to last with proper sub-bases, drainage and finishing.",
      icon: <Hammer className="w-8 h-8 text-primary-accent" />
    },
    {
      title: "Transparent Pricing",
      description: "Itemised quotes, no surprises.",
      icon: <CheckCircle className="w-8 h-8 text-primary-accent" />
    },
    {
      title: "Clear Communication",
      description: "Daily updates, clean site, respectful team.",
      icon: <Users className="w-8 h-8 text-primary-accent" />
    },
    {
      title: "Aftercare",
      description: "Care guides and prompt support.",
      icon: <Shield className="w-8 h-8 text-primary-accent" />
    }
  ];

  const featuredProjects = [
    {
      image: "/landscaping-hero-hsc.webp",
      title: "Complete Landscaping",
      result: "Full outdoor transformation with composite decking and garden design",
      link: "#/services/landscaping"
    },
    {
      image: "/hardscaping-hero-HSC.webp",
      title: "Hardscaping & Patios",
      result: "Professional patio and driveway installations",
      link: "#/services/hardscaping"
    },
    {
      image: "/groundskeeping-home-HSC.webp",
      title: "Groundskeeping Services",
      result: "Regular maintenance and garden care services",
      link: "#/services/groundskeeping"
    }
  ];

  const reviews = [
    {
      text: "Outstanding work on our extension. Professional team, quality finish.",
      author: "Sarah Mitchell",
      location: "Glasgow"
    },
    {
      text: "Transformed our garden completely. Couldn't be happier with the results.",
      author: "James Robertson",
      location: "Hamilton"
    },
    {
      text: "Reliable, clean, and excellent communication throughout the project.",
      author: "Emma Thompson",
      location: "East Kilbride"
    }
  ];


  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* About Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-[70vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About HSC Builders – Landscaping & Building Experts in Glasgow
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              House extension & landscaping specialists serving Greater Glasgow.
            </p>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 fill-primary-accent text-primary-accent" />
                <span className="text-white text-sm font-medium">5.0/5</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">Fully Insured</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">17+ Years</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href="/contact"
                containerClassName="w-auto h-14"
                className="px-8 py-3 text-lg font-bold"
              >
                Get Quote
              </Button>
              <Button
                as="a"
                href="tel:+447490738974"
                containerClassName="w-auto h-14"
                className="px-8 py-3 text-lg font-bold"
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
                containerClassName="w-auto h-14"
                className="px-8 py-3 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  HSC Builders is a small, specialist team based in Blantyre, delivering house extensions, patios, driveways, and garden makeovers across Greater Glasgow. Since day one, we've kept it simple: proper groundwork, quality materials, and workmanship we're proud to put our name to.
                </p>
                <p>
                  From the first site visit to hand-over, you'll get clear communication, clean working practices, and a finish that looks great for years—not just weeks. Whether it's a new extension, a low-maintenance garden or a complete outdoor transformation, we combine practical design with solid construction so you get maximum value from your space.
                </p>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-accent">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/About-at-work-HSC.webp"
                alt="HSC Builders team at work on site"
                className="w-full h-96 object-cover rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Choose HSC Builders
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our commitment to excellence is built on four core principles that guide every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-secondary-bg border border-border-color rounded-xl p-6 text-center hover:border-primary-accent/50 transition-all duration-300">
                <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcessSection />

      {/* Service Area Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">
                Serving Greater Glasgow
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                <strong className="text-text-primary">Based in Blantyre</strong>—serving Greater Glasgow: Newton Farm, Jackton, Hamilton, Bothwell, East Kilbride, Cambuslang, Rutherglen, Bearsden, and surrounding areas.
              </p>
              <Button
                as="a"
                href="#/areas"
                containerClassName="w-auto h-12"
                className="px-6 py-3 font-semibold"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  View All Areas
                </span>
              </Button>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8234567890123!2d-4.0987654321!3d55.7890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ3JzIwLjQiTiA0wrAwNScxOS42Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HSC Builders Service Area - Greater Glasgow"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text-secondary">
              Recent work showcasing our expertise in extensions and landscaping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-secondary-bg border border-border-color rounded-xl overflow-hidden hover:border-primary-accent/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {project.result}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-accent hover:text-hover-accent font-semibold text-sm"
                  >
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
              Customer Testimonials
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real feedback from satisfied customers who have experienced our professional landscaping and building services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Testimonial
              name="Sarah Mitchell"
              role="Homeowner"
              company="Glasgow"
              testimonial="Outstanding work on our extension. Professional team, quality finish, and excellent communication throughout. They transformed our space beyond our expectations and delivered exactly on time."
              rating={5}
            />
            <Testimonial
              name="James Robertson"
              role="Property Owner"
              company="Hamilton"
              testimonial="Transformed our garden completely. The team was reliable, clean, and delivered exactly what they promised. The attention to detail and quality of materials used was exceptional."
              rating={5}
            />
            <Testimonial
              name="Emma Thompson"
              role="Homeowner"
              company="East Kilbride"
              testimonial="Reliable, clean, and excellent communication throughout the project. From initial consultation to final completion, HSC Builders exceeded our expectations at every step."
              rating={5}
            />
            <Testimonial
              name="David Wilson"
              role="Business Owner"
              company="Paisley"
              testimonial="Professional service from start to finish. The quality of workmanship is outstanding and they completed the project within budget and on schedule. Highly recommended."
              rating={5}
            />
            <Testimonial
              name="Lisa Campbell"
              role="Homeowner"
              company="Bothwell"
              testimonial="Exceptional attention to detail and professional service. HSC Builders transformed our outdoor space with beautiful landscaping that has enhanced our property value significantly."
              rating={5}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;