import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type FooterLink = {
  title: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

const productLinks: FooterLink[] = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Templates", href: "/templates" },
  { title: "Integrations", href: "/integrations" },
  { title: "API", href: "/api" },
];

const companyLinks: FooterLink[] = [
  { title: "About Us", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Press", href: "/press" },
  { title: "Partners", href: "/partners" },
];

const resourceLinks: FooterLink[] = [
  { title: "Documentation", href: "/docs" },
  { title: "Tutorials", href: "/tutorials" },
  { title: "Support", href: "/support" },
  { title: "Community", href: "/community" },
  { title: "Status", href: "/status" },
];

const legalLinks: FooterLink[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "GDPR", href: "/gdpr" },
  { title: "Security", href: "/security" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/social/facebook.svg",
  },
  { name: "Twitter", href: "https://twitter.com", icon: "/social/twitter.svg" },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/social/instagram.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/social/linkedin.svg",
  },
  { name: "GitHub", href: "https://github.com", icon: "/social/github.svg" },
];

const footerSections: FooterSection[] = [
  { title: "Product", links: productLinks },
  { title: "Company", links: companyLinks },
  { title: "Resources", links: resourceLinks },
  { title: "Legal", links: legalLinks },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bottom-0 border-t pt-16 pb-8 mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and company info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center">
              <div className="w-32">
                <Logo />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Formly helps you create beautiful forms with AI assistance, making
              data collection easier and more efficient.
            </p>
            <div className="mt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-300 transition-colors"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-300 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Get the latest news, updates, and special offers sent directly
                to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="text" placeholder="Enter your email" />

              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Formly. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
