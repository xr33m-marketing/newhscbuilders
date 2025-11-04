import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Areas from './pages/Areas';
import Landscaping from './pages/services/Landscaping';
import Hardscaping from './pages/services/Hardscaping';
import Groundskeeping from './pages/services/Groundskeeping';
import MasonryBrickwork from './pages/services/MasonryBrickwork';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import JacktonLandscaping from './pages/areas/JacktonLandscaping';
import BothwellLandscaping from './pages/areas/BothwellLandscaping';
import HamiltonLandscaping from './pages/areas/HamiltonLandscaping';
import NewtonFarmLandscaping from './pages/areas/NewtonFarmLandscaping';
import JacktonDriveways from './pages/areas/JacktonDriveways';
import BothwellHardscaping from './pages/areas/BothwellHardscaping';
import HamiltonHardscaping from './pages/areas/HamiltonHardscaping';
import NewtonFarmHardscaping from './pages/areas/NewtonFarmHardscaping';
import JacktonGroundskeeping from './pages/areas/JacktonGroundskeeping';
import BothwellGroundskeeping from './pages/areas/BothwellGroundskeeping';
import HamiltonGroundskeeping from './pages/areas/HamiltonGroundskeeping';
import { NewtonFarmGroundskeeping } from './pages/areas/NewtonFarmGroundskeeping';
import JacktonMasonry from './pages/areas/JacktonMasonry';
import BothwellMasonry from './pages/areas/BothwellMasonry';
import HamiltonMasonry from './pages/areas/HamiltonMasonry';
import NewtonFarmMasonry from './pages/areas/NewtonFarmMasonry';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || '/');

  // Update meta description based on current path
  React.useEffect(() => {
    const metaDescriptions = {
      '/': "HSC Builders – Expert landscaping, hardscaping & groundskeeping in Glasgow. Over 17 years' experience delivering beautiful, lasting outdoor spaces. Get a free quote today.",
      '/about': "Learn more about HSC Builders – trusted landscaping & building experts in Glasgow with 17+ years of experience. Quality, reliability & customer-first service.",
      '/services/landscaping': "Transform your garden with HSC Builders' landscaping in Glasgow. From turf & artificial grass to fencing, decking & planting, we create stunning outdoor spaces.",
      '/services/hardscaping': "HSC Builders – Glasgow's hardscaping specialists. Driveways, patios, brickwork & paving built to last with expert craftsmanship. Free consultations available.",
      '/services/groundskeeping': "Reliable groundskeeping services in Glasgow from HSC Builders. Lawn care, hedge trimming & year-round garden maintenance to keep your outdoor space pristine.",
      '/services/masonry-brickwork': "Expert masonry & brickwork services in Glasgow from HSC Builders. Walls, steps, restoration & structural work with traditional craftsmanship. Free quotes available.",
      '/gallery': "View HSC Builders' landscaping, hardscaping & groundskeeping projects across Glasgow. Real transformations with expert design & craftsmanship.",
      '/contact': "Contact HSC Builders in Glasgow today. Get a free consultation & quote for expert landscaping, hardscaping & groundskeeping services tailored to your needs.",
      '/reviews': "Read customer reviews for HSC Builders Glasgow. See why we're the trusted choice for landscaping, hardscaping & groundskeeping with 17+ years experience.",
      '/areas': "HSC Builders serves Greater Glasgow including Newton Farm, Jackton, Hamilton & East Kilbride. Professional landscaping & building services across Lanarkshire.",
      '/faq': "HSC Builders FAQ – Get answers about our landscaping, hardscaping & groundskeeping services in Glasgow. Pricing, timelines & service information."
    };

    const description = metaDescriptions[currentPath] || metaDescriptions['/'];
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [currentPath]);
  React.useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      setCurrentPath(newPath);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Also scroll to top on initial page load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/areas':
        return <Areas />;
      case '/services/landscaping':
        return <Landscaping />;
      case '/services/hardscaping':
        return <Hardscaping />;
      case '/services/groundskeeping':
        return <Groundskeeping />;
      case '/services/masonry-brickwork':
        return <MasonryBrickwork />;
      case '/contact':
        return <Contact />;
      case '/reviews':
        return <Reviews />;
      case '/faq':
        return <FAQ />;
      case '/gallery':
        return <Gallery />;
      case '/areas/jackton-landscaping':
        return <JacktonLandscaping />;
      case '/areas/bothwell-landscaping':
        return <BothwellLandscaping />;
      case '/areas/hamilton-landscaping':
        return <HamiltonLandscaping />;
      case '/areas/newton-farm-landscaping':
        return <NewtonFarmLandscaping />;
      case '/areas/jackton-driveways':
        return <JacktonDriveways />;
      case '/areas/bothwell-hardscaping':
        return <BothwellHardscaping />;
      case '/areas/hamilton-hardscaping':
        return <HamiltonHardscaping />;
      case '/areas/newton-farm-hardscaping':
        return <NewtonFarmHardscaping />;
      case '/areas/jackton-groundskeeping':
        return <JacktonGroundskeeping />;
      case '/areas/bothwell-groundskeeping':
        return <BothwellGroundskeeping />;
      case '/areas/hamilton-groundskeeping':
        return <HamiltonGroundskeeping />;
      case '/areas/newton-farm-groundskeeping':
        return <NewtonFarmGroundskeeping />;
      case '/areas/jackton-masonry':
        return <JacktonMasonry />;
      case '/areas/bothwell-masonry':
        return <BothwellMasonry />;
      case '/areas/hamilton-masonry':
        return <HamiltonMasonry />;
      case '/areas/newton-farm-masonry':
        return <NewtonFarmMasonry />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;