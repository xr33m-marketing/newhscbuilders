import React, { useState } from 'react';
import { Scissors, TreePine, Droplets, Hammer, Flower } from 'lucide-react';
import { Button } from './MovingBorderButton';

const RecentProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: "Fencing Installation",
      description: "Premium composite fencing solution",
      image: "/Compostite-fencing-HSC-home.webp",
      icon: <Hammer size={24} className="text-white" />,
      link: "#/services/landscaping",
      location: "Greater Glasgow"
    },
    {
      title: "Patio Installation",
      description: "Professional patio construction",
      image: "/Patios-hoe-projects-HSC.webp",
      icon: <Hammer size={24} className="text-white" />,
      link: "#/services/hardscaping",
      location: "Greater Glasgow"
    },
    {
      title: "Artificial Turf Installation",
      description: "Low-maintenance artificial grass",
      image: "/art-turf-home-projects-HSC.webp",
      icon: <TreePine size={24} className="text-white" />,
      link: "#/services/landscaping",
      location: "Greater Glasgow"
    },
    {
      title: "Garden Maintenance",
      description: "Professional groundskeeping services",
      image: "/groundskeeping-home-HSC.webp",
      icon: <Scissors size={24} className="text-white" />,
      link: "#/services/groundskeeping",
      location: "Greater Glasgow"
    },
    {
      title: "Complete Landscaping",
      description: "Full outdoor transformation",
      image: "/landscaping-hero-hsc.webp",
      icon: <TreePine size={24} className="text-white" />,
      link: "#/services/landscaping",
      location: "Greater Glasgow"
    }
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative bg-primary-bg text-text-primary py-16 sm:py-24 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our latest landscaping transformations across Scotland. Click on each project to learn more about our services.
          </p>
        </div>

        {/* Desktop Version - Expandable Cards */}
        <div className="hidden md:flex w-full max-w-[1000px] mx-auto h-[400px] items-stretch overflow-hidden rounded-xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer
                ${activeIndex === index ? 'flex-[7]' : 'flex-1'}
              `}
              style={{
                backgroundImage: `url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: activeIndex === index ? '#ff6b00' : '#333',
                boxShadow: activeIndex === index 
                  ? '0 20px 60px rgba(255, 107, 0, 0.3)' 
                  : '0 10px 30px rgba(0,0,0,0.30)',
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Shadow overlay */}
              <div 
                className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                style={{
                  bottom: activeIndex === index ? '0' : '-40px',
                  height: '120px',
                  background: activeIndex === index 
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' 
                    : 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
                }}
              />
              
              {/* Project info */}
              <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-auto z-10 pointer-events-none px-4 gap-3 w-full">
                <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-primary-accent/90 backdrop-blur-sm shadow-lg border-2 border-primary-accent/50 flex-shrink-0">
                  {project.icon}
                </div>
                <div className="text-white whitespace-pre relative flex-1">
                  <div 
                    className="font-heading font-bold text-lg transition-all duration-700 ease-in-out"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {project.title}
                  </div>
                  <div 
                    className="text-base text-gray-300 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {project.description}
                  </div>
                  <div 
                    className="text-sm text-primary-accent font-medium mt-1 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                    }}
                  >
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Click to view service link */}
              {activeIndex === index && (
                <a
                  href={project.link}
                  className="absolute inset-0 z-20 pointer-events-auto"
                  aria-label={`View ${project.title} service`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Version - Full Screen Cards with Navigation */}
        <div className="md:hidden">
          <div className="relative">
            {/* Main Project Card */}
            <div 
              className="w-full h-[70vh] min-h-[500px] rounded-xl overflow-hidden relative"
              style={{
                backgroundImage: `url('${projects[activeIndex].image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Navigation arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 z-10"
                aria-label="Previous project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-200 z-10"
                aria-label="Next project"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Project info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-accent/90 backdrop-blur-sm shadow-lg border-2 border-primary-accent/50">
                    {projects[activeIndex].icon}
                  </div>
                  <div className="text-white flex-1">
                    <h3 className="font-heading font-bold text-xl mb-1">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-gray-300 text-base mb-1">
                      {projects[activeIndex].description}
                    </p>
                    <p className="text-primary-accent text-sm font-medium">
                      {projects[activeIndex].location}
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a
                  href={projects[activeIndex].link}
                  className="inline-block bg-primary-accent hover:bg-hover-accent text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center"
                >
                  View This Service
                </a>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeIndex 
                      ? 'bg-primary-accent scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Click on any project above to explore that service in detail
          </p>
          <p className="text-text-secondary mb-6">
            Ready to start your own transformation?
          </p>
          <Button
            as="a"
            href="#/contact"
            containerClassName="w-auto h-16"
            className="px-8 py-4 text-lg font-semibold"
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;