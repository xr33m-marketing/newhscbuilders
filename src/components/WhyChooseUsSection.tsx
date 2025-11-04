import React from 'react';
import { cn } from '../lib/utils';
import { 
  Award, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Phone, 
  MapPin 
} from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      title: "17+ Years Experience",
      description: "Proven expertise in landscaping and building across Greater Glasgow with a track record of successful projects.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Fully Insured & Licensed",
      description: "Complete insurance coverage and waste carrier licensing for your peace of mind and legal compliance.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Quality Workmanship",
      description: "Premium materials, proper drainage, and expert craftsmanship with 12-month workmanship guarantees.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Punctual & Professional",
      description: "On-time project delivery with clear communication and respectful, clean working practices throughout.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Customer Focused",
      description: "Transparent pricing, detailed quotes, and dedicated aftercare support to ensure complete satisfaction.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "5★ Google Reviews",
      description: "Consistently rated 5 stars by satisfied customers across Glasgow and surrounding areas.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Local Expertise",
      description: "Deep knowledge of Scottish climate, soil conditions, and local building regulations and requirements.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Comprehensive Service",
      description: "From initial consultation to project completion and aftercare - we handle every aspect professionally.",
      icon: <Phone className="w-6 h-6" />,
    },
  ];

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border-color",
        (index === 0 || index === 4) && "lg:border-l border-border-color",
        index < 4 && "lg:border-b border-border-color"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-bg to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary-bg to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary-accent">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border-color group-hover/feature:bg-primary-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-text-primary">
          {title}
        </span>
      </div>
      <p className="text-sm text-text-secondary max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUsSection;