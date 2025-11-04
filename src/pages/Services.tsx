import React from 'react';
import { Scissors, TreePine, Droplets, Hammer, Flower, Wrench, Phone } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';

const Services: React.FC = () => {
  const services = [
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Landscaping Services",
      description: "Complete landscaping solutions including patios, artificial turf, driveways, fencing, and garden walls across Greater Glasgow.",
      features: [
        "Patio installation & design",
        "Artificial turf installation",
        "Driveway construction",
        "Fencing & garden walls",
        "Monoblock installation",
        "Complete garden transformations"
      ],
      link: "#/services/landscaping",
      image: "/landscaping-hero-hsc.webp"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Hardscaping Services",
      description: "Expert hardscaping for driveways, patios, pathways, retaining walls, and outdoor structures throughout South Lanarkshire.",
      features: [
        "Block paving driveways",
        "Natural stone patios",
        "Retaining walls & terracing",
        "Pathways & steps",
        "Drainage solutions",
        "House extensions"
      ],
      link: "#/services/hardscaping",
      image: "/hardscaping-hero-HSC.webp"
    },
    {
      icon: <Scissors className="w-12 h-12 text-primary-accent" />,
      title: "Groundskeeping Services",
      description: "Professional garden maintenance, lawn care, hedge trimming, and cleanup services to keep your outdoor space pristine.",
      features: [
        "Regular lawn maintenance",
        "Hedge trimming & pruning",
        "Weed control & removal",
        "Garden cleanup services",
        "Seasonal maintenance",
        "Garden bed care"
      ],
      link: "#/services/groundskeeping",
      image: "/groundskeeping-hero-HSC (1).webp"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Masonry & Brickwork",
      description: "Quality masonry services including garden walls, stonework restoration, retaining walls, and brickwork repairs.",
      features: [
        "Garden wall construction",
        "Stonework restoration",
        "Retaining walls",
        "Brickwork & repairs",
        "Stone features",
        "Wall rendering"
      ],
      link: "#/services/masonry-brickwork",
      image: "/Brickwork-hero.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive landscaping and building solutions for residential and commercial properties across Greater Glasgow
            </p>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            <strong className="text-primary-accent">HSC Builders</strong> offers a complete range of professional <a href="#/services/landscaping" className="text-primary-accent hover:underline">landscaping</a>, <a href="#/services/hardscaping" className="text-primary-accent hover:underline">hardscaping</a>, <a href="#/services/groundskeeping" className="text-primary-accent hover:underline">groundskeeping</a>, and <a href="#/services/masonry-brickwork" className="text-primary-accent hover:underline">masonry services</a> throughout <strong className="text-text-primary">Greater Glasgow</strong> and <strong className="text-text-primary">South Lanarkshire</strong>. We proudly serve <a href="#/areas/hamilton-landscaping" className="text-primary-accent hover:underline">Hamilton</a>, <a href="#/areas/bothwell-landscaping" className="text-primary-accent hover:underline">Bothwell</a>, <a href="#/areas/jackton-landscaping" className="text-primary-accent hover:underline">Jackton</a>, <a href="#/areas/newton-farm-landscaping" className="text-primary-accent hover:underline">Newton Farm</a>, and surrounding areas. With over <strong className="text-text-primary">16 years of experience</strong>, our team delivers exceptional results that enhance your property's beauty and value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              From landscaping to hardscaping, groundskeeping to masonry - explore our comprehensive range of services available across Hamilton, Bothwell, Jackton, and Newton Farm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary-bg border border-border-color rounded-xl overflow-hidden hover:border-primary-accent/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary-accent/90 rounded-full p-3">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-text-secondary text-sm">
                        <div className="w-2 h-2 bg-primary-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-primary-accent text-sm font-medium">
                        + {service.features.length - 4} more services
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    as="a"
                    href={service.link}
                    containerClassName="w-full h-12"
                    className="px-4 py-3 text-sm font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Choose HSC Builders?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              With over 17 years of experience serving Greater Glasgow, we bring expertise, reliability, and exceptional results to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "17+ Years Experience",
                description: "Proven track record of successful projects across Greater Glasgow"
              },
              {
                title: "Fully Insured",
                description: "Complete insurance coverage for your peace of mind"
              },
              {
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive warranties"
              },
              {
                title: "Local Experts",
                description: "Deep knowledge of Scottish climate and soil conditions"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-accent rounded-full"></div>
                </div>
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Providing professional landscaping, hardscaping, groundskeeping, and masonry services across South Lanarkshire and Greater Glasgow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Hamilton",
                services: [
                  { title: "Landscaping", link: "#/areas/hamilton-landscaping" },
                  { title: "Hardscaping", link: "#/areas/hamilton-hardscaping" },
                  { title: "Groundskeeping", link: "#/areas/hamilton-groundskeeping" },
                  { title: "Masonry", link: "#/areas/hamilton-masonry" },
                  { title: "Driveways", link: "#/areas/hamilton-driveways" }
                ]
              },
              {
                name: "Bothwell",
                services: [
                  { title: "Landscaping", link: "#/areas/bothwell-landscaping" },
                  { title: "Hardscaping", link: "#/areas/bothwell-hardscaping" },
                  { title: "Groundskeeping", link: "#/areas/bothwell-groundskeeping" },
                  { title: "Masonry", link: "#/areas/bothwell-masonry" },
                  { title: "Driveways", link: "#/areas/bothwell-driveways" }
                ]
              },
              {
                name: "Jackton",
                services: [
                  { title: "Landscaping", link: "#/areas/jackton-landscaping" },
                  { title: "Groundskeeping", link: "#/areas/jackton-groundskeeping" },
                  { title: "Masonry", link: "#/areas/jackton-masonry" },
                  { title: "Driveways", link: "#/areas/jackton-driveways" }
                ]
              },
              {
                name: "Newton Farm",
                services: [
                  { title: "Landscaping", link: "#/areas/newton-farm-landscaping" },
                  { title: "Hardscaping", link: "#/areas/newton-farm-hardscaping" },
                  { title: "Groundskeeping", link: "#/areas/newton-farm-groundskeeping" },
                  { title: "Masonry", link: "#/areas/newton-farm-masonry" }
                ]
              }
            ].map((area, index) => (
              <div key={index} className="bg-secondary-bg border border-border-color rounded-xl p-6 hover:border-primary-accent/50 transition-colors">
                <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                  {area.name}
                </h3>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx}>
                      <a
                        href={service.link}
                        className="text-text-secondary hover:text-primary-accent transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-accent rounded-full group-hover:scale-125 transition-transform"></div>
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary text-lg">
              Also serving surrounding areas including East Kilbride, Cambuslang, Rutherglen, and throughout South Lanarkshire
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We'll help you choose the perfect services for your property and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Get Your Free Quote
              </Button>
              <Button
                as="a"
                href="tel:07490738974"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Call Now
                  <Phone className="w-5 h-5" />
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

export default Services;