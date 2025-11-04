import React from 'react';
import { Scissors, TreePine, Droplets, Hammer, Flower, Wrench, Phone } from 'lucide-react';
import { Button } from '../components/MovingBorderButton';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors className="w-12 h-12 text-primary-accent" />,
      title: "Lawn Care & Maintenance",
      description: "Professional mowing, edging, fertilization, and seasonal cleanup to keep your lawn looking pristine year-round.",
      features: [
        "Weekly/bi-weekly mowing",
        "Professional edging & trimming",
        "Seasonal fertilization programs",
        "Weed control & pest management",
        "Aeration & overseeding",
        "Leaf removal & cleanup"
      ],
      link: "#/services/lawn-care",
      image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Landscape Design & Installation",
      description: "Custom landscape designs that transform your outdoor space with beautiful plants, flowers, and garden features.",
      features: [
        "Custom landscape design",
        "3D visualization",
        "Plant selection for Scottish climate",
        "Garden bed preparation",
        "Tree & shrub planting",
        "Seasonal color planning"
      ],
      link: "#/services/landscape-design",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Hardscaping & Patios",
      description: "Stone patios, walkways, retaining walls, and outdoor living spaces that add value and beauty to your property.",
      features: [
        "Natural stone & concrete patios",
        "Walkways & garden paths",
        "Retaining walls & terracing",
        "Outdoor kitchens & fire features",
        "Driveway installation",
        "Decorative walls & borders"
      ],
      link: "#/services/hardscaping",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Droplets className="w-12 h-12 text-primary-accent" />,
      title: "Irrigation Systems",
      description: "Efficient sprinkler systems and drip irrigation to keep your landscape healthy while conserving water.",
      features: [
        "Smart sprinkler installation",
        "Drip irrigation systems",
        "Rain sensors & controllers",
        "System maintenance",
        "Water pressure optimization",
        "Leak detection & repair"
      ],
      link: "#/services/irrigation",
      image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Flower className="w-12 h-12 text-primary-accent" />,
      title: "Garden Design & Planting",
      description: "Beautiful flower beds, vegetable gardens, and seasonal plantings that bring color and life to your property.",
      features: [
        "Flower bed design",
        "Vegetable garden setup",
        "Seasonal planting",
        "Soil preparation",
        "Plant care & maintenance",
        "Garden renovation"
      ],
      link: "#/services/garden-design",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary-accent" />,
      title: "Tree Services",
      description: "Professional tree care including pruning, removal, stump grinding, and health assessments.",
      features: [
        "Tree pruning & trimming",
        "Safe tree removal",
        "Stump grinding",
        "Tree health assessments",
        "Emergency tree services",
        "Hedge trimming"
      ],
      link: "#/services/tree-services",
      image: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
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
            <strong className="text-primary-accent">HSC Builders</strong> offers a complete range of professional landscaping and building services throughout <strong className="text-text-primary">Greater Glasgow</strong> and surrounding areas. From <strong className="text-text-primary">lawn care and maintenance</strong> to <strong className="text-text-primary">custom landscape design</strong> and <strong className="text-text-primary">hardscaping installations</strong>, our experienced team delivers exceptional results that enhance your property's beauty and value. With over <strong className="text-text-primary">16 years of experience</strong>, we're your trusted local experts for all outdoor projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Complete Landscaping Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Click on any service below to learn more about our specialized offerings and see detailed information about what's included.
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