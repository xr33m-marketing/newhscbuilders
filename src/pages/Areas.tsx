import React from 'react';
import { MapPin, Home, Hammer, TreePine, Phone } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';

const Areas: React.FC = () => {
  const serviceAreas = [
    {
      name: "Newton Farm",
      description: "Complete landscaping services including garden design, lawn care, and hardscaping for this growing residential area.",
      icon: <Home className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.7648, -4.1426],
      tagline: "Premium landscaping for Newton Farm residents"
    },
    {
      name: "Jackton",
      description: "Professional building and landscaping services for homes and businesses in the Jackton community.",
      icon: <Hammer className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.7589, -4.1234],
      tagline: "Expert building services in Jackton"
    },
    {
      name: "Hamilton",
      description: "Comprehensive outdoor solutions including tree services, irrigation systems, and landscape maintenance.",
      icon: <TreePine className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.7781, -4.0427],
      tagline: "Full-service landscaping in Hamilton"
    },
    {
      name: "Glasgow City Centre",
      description: "Urban landscaping and building services for residential and commercial properties in the heart of Glasgow.",
      icon: <Home className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.8642, -4.2518],
      tagline: "Urban landscaping solutions in Glasgow"
    },
    {
      name: "East Kilbride",
      description: "Garden transformations, patio installations, and ongoing maintenance for East Kilbride properties.",
      icon: <Hammer className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.7647, -4.1770],
      tagline: "Garden transformations in East Kilbride"
    },
    {
      name: "Cambuslang",
      description: "Professional landscaping and building services including extensions, driveways, and garden design.",
      icon: <TreePine className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.8197, -4.1614],
      tagline: "Professional services in Cambuslang"
    },
    {
      name: "Rutherglen",
      description: "Quality building work and landscape design for residential properties throughout Rutherglen.",
      icon: <Home className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.8267, -4.2117],
      tagline: "Quality building work in Rutherglen"
    },
    {
      name: "Blantyre",
      description: "Complete outdoor solutions from lawn care to major landscaping projects in the Blantyre area.",
      icon: <Hammer className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.7947, -4.0986],
      tagline: "Complete outdoor solutions in Blantyre"
    },
    {
      name: "Bothwell",
      description: "Premium landscaping and building services for upscale properties in Bothwell and surrounding areas.",
      icon: <TreePine className="w-6 h-6 text-primary-accent" />,
      coordinates: [55.8014, -4.0689],
      tagline: "Premium services in Bothwell"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Areas We Serve
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Professional landscaping and building services across Greater Glasgow and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* SEO Optimized Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            At <strong className="text-primary-accent">HSC Builders</strong>, we provide professional landscaping, groundskeeping, and hardscaping services across <strong className="text-text-primary">Newton Farm, Jackton, Hamilton</strong>, and surrounding areas in <strong className="text-text-primary">Greater Glasgow</strong>. Whether you're looking for a complete garden transformation, patio installation, or regular maintenance, our experienced team delivers quality results you can trust. With over 17 years of experience serving communities throughout <strong className="text-text-primary">South Lanarkshire</strong> and beyond, we're your local experts for all outdoor projects.
          </p>
        </div>
      </section>

      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From urban Glasgow to surrounding communities, we bring professional landscaping and building services to your doorstep.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-primary-bg border border-border-color rounded-xl p-6 hover:border-primary-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-accent/10 rounded-full p-3 mr-4">
                    {area.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {area.name}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center text-primary-accent text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Active Service Area</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Service Map
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Click on any marker to learn more about our services in that area. We're continuously expanding our reach across Greater Glasgow.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg relative" style={{ zIndex: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.22873315205!2d-4.318049089062501!3d55.86415004999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HSC Builders Service Areas - Greater Glasgow"
              className="w-full h-96 sm:h-[500px] lg:h-[600px]"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary mb-4">
              Don't see your area listed? We may still be able to help!
            </p>
            <Button
              as="a"
              href="tel:+447490738974"
              containerClassName="w-auto h-14"
              className="px-6 py-3 font-semibold"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Recent Projects in Your Area
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Take a look at some of our recent landscaping and building projects across Greater Glasgow and surrounding areas.
            </p>
          </div>

          {/* Scrolling images container */}
          <div className="relative w-full flex items-center justify-center py-8">
            <div 
              className="w-full max-w-6xl overflow-hidden"
              style={{
                mask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMask: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            >
              <div 
                className="flex gap-6 w-max"
                style={{
                  animation: 'scroll-right 60s linear infinite'
                }}
              >
                {[
                  "/landscaping-hero-hsc.webp",
                  "/hardscaping-hero-HSC.webp",
                  "/groundskeeping-home-HSC.webp",
                  "/HSC-patio-landscaping.webp",
                  "/Patio-HSC-Landscaping-services.webp",
                  "/patio-HSC_landscaping.webp",
                  "/patio-landscaping-HSC.webp",
                  "/landscaping-HSC-patio.webp",
                  "/landscaping-hero-hsc.webp",
                  "/hardscaping-hero-HSC.webp",
                  "/groundskeeping-home-HSC.webp",
                  "/HSC-patio-landscaping.webp",
                  "/Patio-HSC-Landscaping-services.webp",
                  "/patio-HSC_landscaping.webp",
                  "/patio-landscaping-HSC.webp",
                  "/landscaping-HSC-patio.webp",
                  "/HSC-Block-Paving-Hardscaping.webp",
                  "/Hardscaping-HSC-Block-Paving.webp",
                  "/Block-paving-HSC-Hardscaping.webp",
                  "/HSC-Hardscaping-Block-Paving.webp",
                  "/Block-paving-Hardscaping-HSC.webp",
                  "/HSC-wall-Glasgow-landscaping.webp",
                  "/wall-HSC-Landscaping-Glasgow.webp",
                  "/Glasgow-walls-HSC-landscaping.webp",
                  "/HSC-STEPS-Services-Hardscaping.webp",
                  "/HSC-path-Hardscaping-Services.webp",
                  "/HSC-Hardscaping-Steps-Services.webp",
                  "/Steps-Services-HArdscaping-HSC.webp",
                  "/Steps-Hardscaping-Services-HSC.webp",
                  "/Compostite-fencing-HSC-home.webp",
                  "/fencing-home-projects-HSC.webp",
                  "/HSC-fencing-SERVICES.webp",
                  "/SERVICES-fencing-HSC.webp",
                  "/fencing-HSC-SERVICES-Landscaping.webp",
                  "/art-turf-home-projects-HSC.webp",
                  "/artificial-turf-HSC-Service.webp",
                  "/turf-artificial-HSC-Service.webp",
                  "/Patios-hoe-projects-HSC.webp",
                  "/garden-bed-planting-HSC.webp",
                  "/hedge-trimming-HSC.webp",
                  "/weed-removal-HSC-GroundsKEEPING.webp",
                  "/HSC-Maintenance-AFTER.webp",
                  "/Groundskeeping-HSC-cleanup-AFTER.webp",
                  "/monoblock-stairs-landscaping-HSC.webp",
                  "/Monoblock-Pathway-HSC-Landscaping.webp",
                  "/Pathway-monoblock-HSC-Landscaping.webp",
                  "/pathway-HSC-Monoblock.webp",
                  "/Landscaping-Full-Renovation-HS.webp",
                  "/HSC-Landscaping-Full-Renovation.webp",
                  "/Full-Renovation-LAndscaping-HSC.webp",
                  "/Full-Renovation-HSC-Landscaping.webp",
                  "/Landscaping-HSC-Full-Transformation.webp",
                  "/HSC-drainage-Hardscaping.webp",
                  "/drainage-HSC-HArdscaping.webp",
                  "/Hardscaping-HSC-house-extension.webp",
                  "/house-extension-HSC-Hardscaping.webp",
                  "/HSC-House-Extension-Hardscaping.webp",
                  // Duplicate for seamless loop
                  "/landscaping-hero-hsc.webp",
                  "/hardscaping-hero-HSC.webp",
                  "/groundskeeping-home-HSC.webp",
                  "/HSC-patio-landscaping.webp",
                  "/Patio-HSC-Landscaping-services.webp",
                  "/patio-HSC_landscaping.webp",
                  "/patio-landscaping-HSC.webp",
                  "/landscaping-HSC-patio.webp",
                  "/landscaping-hero-hsc.webp",
                  "/hardscaping-hero-HSC.webp",
                  "/groundskeeping-home-HSC.webp",
                  "/HSC-patio-landscaping.webp",
                  "/Patio-HSC-Landscaping-services.webp",
                  "/patio-HSC_landscaping.webp",
                  "/patio-landscaping-HSC.webp",
                  "/landscaping-HSC-patio.webp",
                  "/HSC-Block-Paving-Hardscaping.webp",
                  "/Hardscaping-HSC-Block-Paving.webp",
                  "/Block-paving-HSC-Hardscaping.webp",
                  "/HSC-Hardscaping-Block-Paving.webp",
                  "/Block-paving-Hardscaping-HSC.webp",
                  "/HSC-wall-Glasgow-landscaping.webp",
                  "/wall-HSC-Landscaping-Glasgow.webp",
                  "/Glasgow-walls-HSC-landscaping.webp",
                  "/HSC-STEPS-Services-Hardscaping.webp",
                  "/HSC-path-Hardscaping-Services.webp",
                  "/HSC-Hardscaping-Steps-Services.webp",
                  "/Steps-Services-HArdscaping-HSC.webp",
                  "/Steps-Hardscaping-Services-HSC.webp",
                  "/Compostite-fencing-HSC-home.webp",
                  "/fencing-home-projects-HSC.webp",
                  "/HSC-fencing-SERVICES.webp",
                  "/SERVICES-fencing-HSC.webp",
                  "/fencing-HSC-SERVICES-Landscaping.webp",
                  "/art-turf-home-projects-HSC.webp",
                  "/artificial-turf-HSC-Service.webp",
                  "/turf-artificial-HSC-Service.webp",
                  "/Patios-hoe-projects-HSC.webp",
                  "/garden-bed-planting-HSC.webp",
                  "/hedge-trimming-HSC.webp",
                  "/weed-removal-HSC-GroundsKEEPING.webp",
                  "/HSC-Maintenance-AFTER.webp",
                  "/Groundskeeping-HSC-cleanup-AFTER.webp",
                  "/monoblock-stairs-landscaping-HSC.webp",
                  "/Monoblock-Pathway-HSC-Landscaping.webp",
                  "/Pathway-monoblock-HSC-Landscaping.webp",
                  "/pathway-HSC-Monoblock.webp",
                  "/Landscaping-Full-Renovation-HS.webp",
                  "/HSC-Landscaping-Full-Renovation.webp",
                  "/Full-Renovation-LAndscaping-HSC.webp",
                  "/Full-Renovation-HSC-Landscaping.webp",
                  "/Landscaping-HSC-Full-Transformation.webp",
                  "/HSC-drainage-Hardscaping.webp",
                  "/drainage-HSC-HArdscaping.webp",
                  "/Hardscaping-HSC-house-extension.webp",
                  "/house-extension-HSC-Hardscaping.webp",
                  "/HSC-House-Extension-Hardscaping.webp"
                ].map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  >
                    <img
                      src={image}
                      alt={`Recent project ${(index % 8) + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-bg to-transparent pointer-events-none" />
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                Explore Our Professional Services
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                From lawn care to complete landscape transformations, discover all the ways we can enhance your outdoor space across Greater Glasgow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as="a"
                  href="#/services"
                  containerClassName="w-auto h-16"
                  className="px-8 py-4 text-lg font-bold"
                >
                  View All Services
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  containerClassName="w-auto h-16"
                  className="px-8 py-4 text-lg font-bold"
                >
                  Get Your Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Areas;