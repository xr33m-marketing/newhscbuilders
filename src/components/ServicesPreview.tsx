import React from 'react';
import { Scissors, TreePine, Droplets, Hammer, ChevronDown, ChevronUp, Home } from 'lucide-react';
import { Button } from './MovingBorderButton';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const [expandedService, setExpandedService] = React.useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Auto-rotate images for groundskeeping section
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev === 0 ? 1 : 0);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      icon: <TreePine className="w-12 h-12 text-primary-accent" />,
      title: "Landscaping",
      path: "/services/landscaping",
      description: "Complete landscape transformations including garden design, plant installation, composite decking, fencing, and outdoor living spaces.",
      detailedInfo: {
        expertise: "Our landscape architects and designers create bespoke outdoor spaces tailored to your property's unique characteristics. We specialize in composite materials, natural stone, and plants suited to the Scottish climate.",
        services: [
          "Custom landscape design and 3D visualization",
          "Composite decking and fencing installation",
          "Garden bed preparation and planting",
          "Tree and shrub installation",
          "Water features and garden lighting",
          "Complete garden makeovers"
        ],
        benefits: "Professional landscape design can increase property value by 20-30% while creating outdoor spaces that enhance your quality of life. Our designs focus on year-round interest and low-maintenance solutions using premium materials."
      },
      image: "/landscaping-hero-hsc.webp",
      link: "#/services/landscaping"
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary-accent" />,
      title: "Hardscaping",
      path: "/services/hardscaping",
      description: "Professional installation of patios, driveways, retaining walls, and outdoor structures using premium materials and expert craftsmanship.",
      detailedInfo: {
        expertise: "Our hardscaping specialists have extensive experience with natural stone, concrete, block paving, and masonry work. We ensure all installations have proper drainage and foundations for long-lasting results.",
        services: [
          "Natural stone and concrete patios",
          "Block paving driveways and paths",
          "Retaining walls and terracing",
          "Garden walls and boundaries",
          "Steps and outdoor staircases",
          "Decorative stonework and features"
        ],
        benefits: "Quality hardscaping provides immediate curb appeal and creates functional outdoor living spaces. Our installations come with workmanship guarantees and use materials specifically chosen for Scottish weather conditions."
      },
      image: "/hardscaping-hero-HSC.webp",
      link: "#/services/hardscaping"
    },
    {
      icon: <Scissors className="w-12 h-12 text-primary-accent" />,
      title: "Groundskeeping",
      path: "/services/groundskeeping",
      description: "Comprehensive grounds maintenance including lawn care, hedge trimming, seasonal cleanup, and ongoing property maintenance services.",
      detailedInfo: {
        expertise: "Our groundskeeping team provides reliable, professional maintenance services for residential and commercial properties. We understand local grass types, seasonal requirements, and proper care techniques for Scottish conditions.",
        services: [
          "Regular lawn mowing and edging",
          "Hedge trimming and pruning",
          "Seasonal cleanup and leaf removal",
          "Weed control and fertilization",
          "Garden bed maintenance",
          "Property upkeep and tidying"
        ],
        benefits: "Regular professional groundskeeping maintains your property's appearance year-round and prevents costly issues. Our systematic approach ensures healthy lawns, well-maintained gardens, and pristine outdoor spaces."
      },
      image: "/groundskeeping-home-HSC.webp",
      link: "#/services/groundskeeping",
    },
    {
      icon: <Home className="w-12 h-12 text-primary-accent" />,
      title: "Masonry & Brickwork",
      path: "/services/masonry-brickwork",
      description: "Expert masonry and brickwork services including garden walls, stonework restoration, retaining walls, and decorative brickwork.",
      detailedInfo: {
        expertise: "Our skilled masons bring decades of experience in traditional and contemporary brickwork. We work with natural stone, brick, and block materials to create durable, beautiful structures that stand the test of time.",
        services: [
          "Garden walls and boundaries",
          "Retaining walls and terracing",
          "Stone wall restoration and repair",
          "Decorative brickwork and features",
          "Chimney repairs and rebuilding",
          "Property extensions and alterations"
        ],
        benefits: "Professional masonry adds timeless character and structural integrity to your property. Our craftsmen ensure proper construction techniques, appropriate materials, and finishes that complement your property's architectural style."
      },
      image: "/Brickwork-hero.webp",
      link: "#/services/masonry-brickwork"
    }
  ];

  return (
    <section className="section-padding bg-secondary-bg -mt-1 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 pt-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From routine maintenance to complete landscape transformations, 
            we provide comprehensive outdoor solutions for your property.
          </p>
        </div>

        {/* Services Grid - Checkered Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <Link to={service.path} className="hover:text-primary-accent transition-colors">
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-6 hover:text-primary-accent transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  
                  <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* More Info Dropdown */}
                  <div className="mb-6">
                    <button
                      onClick={() => toggleService(index)}
                      className="flex items-center text-primary-accent hover:text-hover-accent font-semibold transition-colors duration-200"
                    >
                      More Information
                      {expandedService === index ? (
                        <ChevronUp className="w-4 h-4 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2" />
                      )}
                    </button>
                    
                    {expandedService === index && (
                      <div className="mt-6 space-y-6">
                        {/* Expertise Section */}
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                            Our Expertise
                          </h4>
                          <p className="text-text-secondary leading-relaxed">
                            {service.detailedInfo.expertise}
                          </p>
                        </div>
                        
                        {/* Services List */}
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {service.detailedInfo.services.map((item, idx) => (
                              <li key={idx} className="flex items-start text-text-secondary">
                                <div className="w-2 h-2 bg-primary-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-heading font-semibold text-text-primary mb-3">
                            Benefits & Value
                          </h4>
                          <p className="text-text-secondary leading-relaxed">
                            {service.detailedInfo.benefits}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    as="a"
                    href={service.link}
                    containerClassName="w-auto h-12"
                    className="px-6 py-3 text-sm font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {service.title === "Groundskeeping" ? (
                  <div className="relative overflow-hidden rounded-xl shadow-card">
                    {/* Before Image */}
                    <img
                      src="/groundskeepiing-home-before-HSC.webp"
                      alt="Before - Groundskeeping transformation"
                      className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 absolute inset-0 ${
                        currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {/* After Image */}
                    <img
                      src="/groundskeeping-home-HSC.webp"
                      alt="After - Groundskeeping transformation"
                      className={`w-full h-80 object-cover hover:scale-105 transition-all duration-1000 ${
                        currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 ${
                        currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}>
                        Before
                      </span>
                      <span className={`bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-1000 absolute ${
                        currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                      }`}>
                        After
                      </span>
                    </div>
                    {/* Indicator Dots */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === 0 ? 'bg-white' : 'bg-white/50'
                      }`}></div>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === 1 ? 'bg-white' : 'bg-white/50'
                      }`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-xl shadow-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            as="a"
            href="tel:07490738974"
            containerClassName="w-auto h-12"
            className="px-6 py-3 font-semibold"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;