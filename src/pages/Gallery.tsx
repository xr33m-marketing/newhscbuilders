import React from 'react';
import { Star, Phone } from 'lucide-react';
import ServiceProjectsSection from '../components/ServiceProjectsSection';
import { Project } from '../components/ProjectCard';
import { Button } from '../components/MovingBorderButton';
import ReviewsSection from '../components/TestimonialsSection';

const Gallery: React.FC = () => {
  // Fencing Projects
  const fencing: Project[] = [
    { 
      title: "Composite Fencing Installation", 
     before: "/fencing-BEFORE-HSC-Gallery.webp",
     after: "/Compostite-fencing-HSC-home.webp",
     alt: "Modern composite fencing installation transformation"
    },
    { 
      title: "Traditional Fencing Project", 
      before: "/Gallery-Before-HSC-fencing.webp",
      after: "/fencing-home-projects-HSC.webp",
      alt: "Traditional timber fencing installation transformation"
    },
    { 
      title: "Landscaping Fencing Services", 
      before: "/BEfore-HSC-Fencing-Gallery.webp",
      after: "/HSC-fencing-SERVICES.webp",
      alt: "Professional fencing as part of landscaping project transformation"
    },
    { 
      title: "Complete Fencing Solution", 
      before: "/HSC-fencing-BEFORE-GALLERY.webp",
      after: "/SERVICES-fencing-HSC.webp",
      alt: "Complete fencing installation with gates"
    },
    { 
      title: "Fencing Installation", 
      before: "/fencing-before-HSC-GAllery.webp",
      after: "/fencing-HSC-SERVICES-Landscaping.webp",
      alt: "Professional fencing installation transformation"
    }
  ];

  // Patio & Hardscaping Projects
  const patios: Project[] = [
    { 
      title: "Natural Stone Patio", 
      after: "/HSC-patio-landscaping.webp",
      alt: "Beautiful natural stone patio installation"
    },
    { 
      title: "Modern Patio Design", 
     before: "/HSC-Patio-Before-Gallery.webp",
      after: "/Patio-HSC-Landscaping-services.webp",
      alt: "Contemporary patio with professional finishing"
    },
    { 
      title: "Garden Patio Project", 
     before: "/HSC-Before-Gallery-Patios.webp",
      after: "/patio-HSC_landscaping.webp",
      alt: "Garden patio with surrounding landscaping"
    },
    { 
      title: "Outdoor Living Patio", 
      after: "/patio-landscaping-HSC.webp",
      alt: "Patio designed for outdoor entertaining"
    },
    { 
      title: "Integrated Patio & Landscaping", 
      images: [
        "/Before-PAtio-HSC-Gallery.webp",
        "/PAtio-Before-Gallery-HSC.webp",
        "/Gallery-Before-HSC-patio.webp",
        "/After-Patios-HSC-Gallery.webp",
        "/Gallery-HSC-Patios-After.webp",
        "/HSC-After-Patios-Gallery.webp"
      ],
      after: "/After-Patios-HSC-Gallery.webp",
      alt: "Patio seamlessly integrated with landscape design"
    },
    { 
      title: "Family Patio Space", 
     before: "/Before-patios-HSC-Gallery.webp",
      after: "/Patios-hoe-projects-HSC.webp",
      alt: "Family-friendly patio installation"
    },
    { 
      title: "Complete Patio Transformation", 
      images: [
        "/Before-Patio-HSC-Gallery.webp",
        "/During-HSC-Patios-GAllery.webp",
        "/After-HSC-Gallery-Patios.webp",
        "/after2-HSC-patios-Gallery.webp",
        "/after3-Patios-HSC-GAllery.webp"
      ],
      after: "/After-HSC-Gallery-Patios.webp",
      alt: "Complete patio transformation showing before, during construction, and multiple after views"
    }
  ];

  // Block Paving & Driveways
  const driveways: Project[] = [
    {
      title: "Full Driveway Installation",
      images: [
        "/Gallery-HSC-Before-d-way.webp",
        "/d-way-HSC-before-Gallery.webp",
        "/d-way-before-HSC-Gallery.webp",
        "/Gallery-d-way-after-HSC.webp",
        "/d-way-after-HSC-Gallery.webp",
        "/d-way-HSC-gallery-after.webp",
        "/d-way-Gallery-After-HSC.webp",
        "/d-way-HSC-after-Galllery.webp",
        "/Gallery-d-way-HSC-after.webp",
        "/HSC-d-way-GAllery-after.webp"
      ],
      before: "/Gallery-HSC-Before-d-way.webp",
      after: "/Gallery-d-way-after-HSC.webp",
      alt: "Complete driveway installation transformation from start to finish"
    },
    {
      title: "Expert Block Paving Project",
      images: [
        "/HSC-Block-Paving-Hardscaping.webp",
        "/Block-paving-Hardscaping-HSC.webp",
        "/garden-bed-planting-HSC.webp"
      ],
      after: "/HSC-Block-Paving-Hardscaping.webp",
      alt: "High-quality block paving driveway"
    },
    {
      title: "Professional Block Paving",
      images: [
        "/Pathway-monoblock-HSC-Landscaping.webp",
        "/HSC-Hardscaping-Block-Paving.webp",
        "/Hardscaping-HSC-Block-Paving.webp"
      ],
      after: "/Hardscaping-HSC-Block-Paving.webp",
      alt: "Professional block paving installation"
    },
    {
      title: "Driveway Block Paving",
      after: "/Block-paving-HSC-Hardscaping.webp",
      alt: "Durable block paving driveway"
    },
  ];

  // Walls & Masonry
  const walls: Project[] = [
    { 
      title: "Garden Wall Construction", 
      after: "/HSC-wall-Glasgow-landscaping.webp",
      alt: "Professional garden wall construction"
    },
    { 
      title: "Landscaping Wall Project", 
      after: "/wall-HSC-Landscaping-Glasgow.webp",
      alt: "Retaining wall as part of landscaping project"
    },
    { 
      title: "Boundary Wall Installation", 
      after: "/Glasgow-walls-HSC-landscaping.webp",
      alt: "Boundary wall with integrated landscaping"
    }
  ];

  // Steps & Pathways
  const steps: Project[] = [
    { 
      title: "Garden Steps Installation", 
      after: "/HSC-STEPS-Services-Hardscaping.webp",
      alt: "Professional garden steps construction"
    },
    { 
      title: "Pathway & Steps", 
      after: "/HSC-path-Hardscaping-Services.webp",
      alt: "Pathway with integrated steps"
    },
    { 
      title: "Hardscaping Steps", 
     before: "/Steps-Before-HSC-Gallery.webp",
      after: "/HSC-Hardscaping-Steps-Services.webp",
      alt: "Hardscaping steps with professional finish"
    },
    { 
      title: "Quality Steps Installation", 
      after: "/Steps-Services-HArdscaping-HSC.webp",
      alt: "Quality steps installation service"
    },
    { 
      title: "Professional Steps", 
      after: "/Steps-Hardscaping-Services-HSC.webp",
      alt: "Professional steps and hardscaping"
    }
  ];

  // Artificial Turf & Landscaping
  const turf: Project[] = [
    { 
      title: "Artificial Turf Installation", 
     before: "/artificial-turf-HSC-Before-Gallery.webp",
      after: "/art-turf-home-projects-HSC.webp",
      alt: "Professional artificial turf installation"
    },
    { 
      title: "Quality Artificial Turf", 
      before: "/Art-tirf-Before-HSC-Gallery.webp",
      after: "/artificial-turf-HSC-Service.webp",
      alt: "High-quality artificial turf installation transformation"
    },
    { 
      title: "Turf Installation Service", 
     before: "/HSC-Art-turf-Before-Gallery.webp",
      after: "/turf-artificial-HSC-Service.webp",
      alt: "Professional turf installation service"
    }
  ];

  // Groundskeeping & Maintenance
  const maintenance: Project[] = [
    { 
      title: "Garden Maintenance", 
      before: "/HSC-Maintenance-before copy.webp",
      after: "/HSC-Maintenance-AFTER copy.webp",
      alt: "Professional garden maintenance transformation"
    },
    { 
      title: "Groundskeeping Cleanup", 
      before: "/groundskeepning-cleanup-HSC-BEFORE.webp",
      after: "/Groundskeeping-HSC-cleanup-AFTER.webp",
      alt: "Complete groundskeeping cleanup service"
    },
    { 
      title: "Garden Bed Maintenance", 
      after: "/garden-bed-planting-HSC.webp",
      alt: "Professional garden bed planting and maintenance"
    },
  ];

  // Complete Transformations
  const transformations: Project[] = [
    { 
      title: "Complete Landscape Renovation", 
      after: "/Landscaping-Full-Renovation-HS.webp",
      alt: "Complete landscape renovation project"
    },
    { 
      title: "Full Garden Transformation", 
      after: "/HSC-Landscaping-Full-Renovation.webp",
      alt: "Full garden transformation by HSC Builders"
    },
    { 
      title: "Complete Garden Renovation", 
      images: [
        "/Gallery-HSC-After-Landscaping.webp",
        "/After-HSC-full-landscapiing-GAllery.webp",
        "/HSC-After-Landscaping-Gallery.webp"
      ],
      after: "/Gallery-HSC-After-Landscaping.webp",
      alt: "Complete landscape renovation project"
    },
    { 
      title: "Complete Transformation", 
     before: "/full-transformation-HSC-Before.webp",
      after: "/Landscaping-HSC-Full-Transformation.webp",
     alt: "Complete landscape transformation project transformation"
    },
    { 
      title: "Full Garden Transformation", 
     before: "/HSC-full-transformation-Before.webp",
      after: "/After-HSC-Full-transformation-Gallery.webp",
      images: [
        "/Full-Transformation-HSC-After-Gallery.webp",
        "/HSC-Gallery-Full-TRansformation.webp"
      ],
     alt: "Full garden transformation project showing dramatic before and after results"
    },
    { 
      title: "Complete Landscaping Project", 
      before: "/Full-Landscaping-HSC-Gallery.webp",
      after: "/landscaping-hero-hsc.webp",
      alt: "Complete landscaping transformation with modern outdoor design"
    }
  ];

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
            <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-light leading-relaxed mb-8 text-white tracking-wide" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
              Project Gallery
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-accent" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
                Our recent work in Glasgow
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed font-light" style={{ textShadow: '4px 4px 12px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,0.9)' }}>
              Explore our landscaping, hardscaping & groundskeeping transformations
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-3 mb-8 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 w-fit border border-white/20 mx-auto">
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
        </div>
      </section>

      {/* Service-Based Project Sections */}
      <div className="bg-secondary-bg">
        <ServiceProjectsSection 
          heading="Recent Fencing Projects" 
          intro="Professional fencing installations across Greater Glasgow with quality materials and expert craftsmanship."
          projects={fencing} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Patio & Hardscaping Projects" 
          intro="Beautiful patios and hardscaping installations that create stunning outdoor living spaces."
          projects={patios} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Driveway & Block Paving Projects" 
          intro="Durable driveways with proper foundations, drainage, and professional finishing."
          projects={driveways} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Wall & Masonry Projects" 
          intro="Professional wall construction and masonry work for boundaries and landscaping features."
          projects={walls} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Steps & Pathway Projects" 
          intro="Safe, attractive steps and pathways that enhance accessibility and garden flow."
          projects={steps} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Artificial Turf Projects" 
          intro="Low-maintenance artificial turf installations perfect for Scottish weather conditions."
          projects={turf} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Groundskeeping & Maintenance" 
          intro="Professional garden maintenance and groundskeeping services with dramatic before & after results."
          projects={maintenance} 
        />
        
        <ServiceProjectsSection 
          heading="Complete Landscape Transformations" 
          intro="Full garden renovations and landscape transformations that completely reimagine outdoor spaces."
          projects={transformations} 
        />
      </div>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Transform your outdoor space with professional landscaping and building services. Get your free consultation today.
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
                href="tel:+447490738974"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Call Now <Phone className="w-5 h-5" />
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

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Gallery;