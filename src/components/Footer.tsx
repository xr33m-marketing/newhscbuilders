import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Triangle } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Landscaping", href: "#/services/landscaping" },
      { name: "Hardscaping", href: "#/services/hardscaping" },
      { name: "Groundskeeping", href: "#/services/groundskeeping" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#/about" },
      { name: "Service Areas", href: "#/areas" },
      { name: "Project Gallery", href: "#/gallery" },
      { name: "Customer Reviews", href: "#/reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#/contact" },
      { name: "Get a Quote", href: "/" },
      { name: "FAQ", href: "#/faq" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/hsc_builders_scotland/", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/people/HSC-Builders-Glasgow/61559233820647/", label: "Facebook" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "",
    alt: "H&C Builders Logo",
    title: "H&C BUILDERS",
  },
  sections = defaultSections,
  description = "Professional building and construction services in Glasgow and surrounding areas. House extensions, renovations, and general building work with over 17 years of experience.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 HSC Builders. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-secondary-bg text-text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <a href={logo.url} onClick={scrollToTop} className="flex items-center space-x-3">
                <img 
                  src="/hsc-logo.webp" 
                  alt="HSC Builders Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="text-xl font-heading font-bold text-text-primary">HSC BUILDERS</h2>
                </div>
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-text-secondary">
              {description}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-text-primary">Phone:</span>
                <a href="tel:07490738974" className="hover:text-primary-accent transition-colors duration-200">
                  07490 738 974
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-text-primary">Email:</span>
                <a href="mailto:hscbuildersglasgow@gmail.com" className="hover:text-primary-accent transition-colors duration-200">
                  hscbuildersglasgow@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-text-primary">Address:</span>
                <span className="max-w-[200px]">
                  10 Balmoral Gardens, Blantyre, South Lanarkshire. G72 9NP
                </span>
              </div>
            </div>
            
            <ul className="flex items-center space-x-6 text-text-secondary">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary-accent transition-colors duration-200">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-heading font-bold text-text-primary">{section.title}</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary-accent transition-colors duration-200"
                    >
                      <a href={link.href} onClick={scrollToTop}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border-color py-6 text-xs font-medium text-text-secondary md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary-accent transition-colors duration-200">
                <a href={link.href} onClick={scrollToTop}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return <Footer7 />;
};

export default Footer;