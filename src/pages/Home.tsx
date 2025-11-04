import React from 'react';
import HeroSection from '../components/HeroSection';
import LogoSlider from '../components/LogoSlider';
import MobileQuoteForm from '../components/MobileQuoteForm';
import AboutUsSection from '../components/AboutUsSection';
import ServicesPreview from '../components/ServicesPreview';
import OurProcessSection from '../components/OurProcessSection';
import ReviewsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import RecentProjectsSection from '../components/RecentProjectsSection';
import { SEO, getLocalBusinessSchema } from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div>
      <SEO
        title="Professional Landscaping & Building Services in Hamilton"
        description="HSC Builders offers expert landscaping, hardscaping, driveways, patios, fencing, and masonry services in Hamilton, Bothwell, and South Lanarkshire. Quality craftsmanship, free quotes."
        keywords="landscaping Hamilton, hardscaping South Lanarkshire, driveways Bothwell, patios Hamilton, fencing services, masonry Hamilton, garden transformation, landscape design"
        structuredData={getLocalBusinessSchema()}
      />
      <HeroSection />
      <LogoSlider />
      <MobileQuoteForm />
      <AboutUsSection />
      <ServicesPreview />
      <OurProcessSection />
      <ReviewsSection />
      <RecentProjectsSection />
      <FAQSection />
    </div>
  );
};

export default Home;