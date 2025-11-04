import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import BothwellDriveways from './pages/areas/BothwellDriveways';
import HamiltonDriveways from './pages/areas/HamiltonDriveways';
import Services from './pages/Services';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    const metaDescriptions: { [key: string]: string } = {
      '/': "HSC Builders – Expert landscaping, hardscaping & groundskeeping in Glasgow. Over 17 years' experience delivering beautiful, lasting outdoor spaces. Get a free quote today.",
      '/about': "Learn more about HSC Builders – trusted landscaping & building experts in Glasgow with 17+ years of experience. Quality, reliability & customer-first service.",
      '/services': "Professional landscaping, hardscaping, groundskeeping & masonry services in Glasgow from HSC Builders. Expert outdoor solutions with 17+ years experience.",
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

    const description = metaDescriptions[location.pathname] || metaDescriptions['/'];

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/landscaping" element={<Landscaping />} />
        <Route path="/services/hardscaping" element={<Hardscaping />} />
        <Route path="/services/groundskeeping" element={<Groundskeeping />} />
        <Route path="/services/masonry-brickwork" element={<MasonryBrickwork />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/areas/jackton-landscaping" element={<JacktonLandscaping />} />
        <Route path="/areas/bothwell-landscaping" element={<BothwellLandscaping />} />
        <Route path="/areas/hamilton-landscaping" element={<HamiltonLandscaping />} />
        <Route path="/areas/newton-farm-landscaping" element={<NewtonFarmLandscaping />} />
        <Route path="/areas/jackton-driveways" element={<JacktonDriveways />} />
        <Route path="/areas/bothwell-driveways" element={<BothwellDriveways />} />
        <Route path="/areas/hamilton-driveways" element={<HamiltonDriveways />} />
        <Route path="/areas/bothwell-hardscaping" element={<BothwellHardscaping />} />
        <Route path="/areas/hamilton-hardscaping" element={<HamiltonHardscaping />} />
        <Route path="/areas/newton-farm-hardscaping" element={<NewtonFarmHardscaping />} />
        <Route path="/areas/jackton-groundskeeping" element={<JacktonGroundskeeping />} />
        <Route path="/areas/bothwell-groundskeeping" element={<BothwellGroundskeeping />} />
        <Route path="/areas/hamilton-groundskeeping" element={<HamiltonGroundskeeping />} />
        <Route path="/areas/newton-farm-groundskeeping" element={<NewtonFarmGroundskeeping />} />
        <Route path="/areas/jackton-masonry" element={<JacktonMasonry />} />
        <Route path="/areas/bothwell-masonry" element={<BothwellMasonry />} />
        <Route path="/areas/hamilton-masonry" element={<HamiltonMasonry />} />
        <Route path="/areas/newton-farm-masonry" element={<NewtonFarmMasonry />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
