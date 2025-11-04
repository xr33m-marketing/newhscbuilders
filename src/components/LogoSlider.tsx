import React from 'react';
import { InfiniteSlider } from './InfiniteSlider';
import { Trophy, Star, Shield, ShieldCheck, Leaf, Clock, FileText, MapPin } from 'lucide-react';

const LogoSlider: React.FC = () => {
  const trustSignals = [
    {
      icon: <Trophy className="w-6 h-6 text-primary-accent" />,
      text: "17+ Years in Landscaping"
    },
    {
      icon: <Star className="w-6 h-6 text-primary-accent" />,
      text: "5.0★ Google Reviews"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-accent" />,
      text: "Workmanship Guarantee"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      text: "Fully Insured & Accredited"
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary-accent" />,
      text: "Eco-Friendly Materials"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      text: "On-Time Project Delivery"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary-accent" />,
      text: "No-Obligation Free Estimates"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-accent" />,
      text: "Serving Glasgow & Surrounding Areas"
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-r from-primary-bg via-secondary-bg to-primary-bg relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-accent/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <InfiniteSlider
          gap={40}
          duration={25}
          durationOnHover={40}
          className="py-3"
        >
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gradient-to-r from-secondary-bg to-primary-bg/80 rounded-xl px-8 py-5 hover:from-primary-accent/10 hover:to-secondary-bg hover:scale-105 transition-all duration-300 border border-primary-accent/20 hover:border-primary-accent/40 shadow-lg hover:shadow-xl backdrop-blur-sm"
              style={{ minWidth: '280px' }}
            >
              <div className="flex-shrink-0">
                {signal.icon}
              </div>
              <span className="text-text-primary font-semibold whitespace-nowrap text-sm tracking-wide">
                {signal.text}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
      
    </section>
  );
};

export default LogoSlider;