import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const links = {
  services: [
    { label: 'AI Solutions', sectionId: 'services' },
    { label: 'Web Development', sectionId: 'services' },
    { label: 'Mobile Apps', sectionId: 'services' },
    { label: 'Cloud Services', sectionId: 'services' },
  ],
  company: [
    { label: 'About Us', sectionId: 'about' },
    { label: 'Careers', sectionId: 'careers' },
    { label: 'Blog', sectionId: 'blog' },
    { label: 'Contact', sectionId: 'cta' },
  ],
  regions: ['UAE', 'Saudi Arabia', 'Egypt'],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hennutechnology@gmail.com', label: 'Email' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hennutechnology@gmail.com',
    href: 'mailto:hennutechnology@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 102 156 5623',
    href: 'tel:+201021565623',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: null,
  },
];

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    const navHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Hennu Tech
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Engineering intelligent software solutions for businesses across the Middle East.
                Specializing in AI, machine learning, and custom software development.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.sectionId)}
                    whileHover={{ x: 5 }}
                    className="hover:text-blue-400 transition-colors duration-300 text-left focus:outline-none"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.sectionId)}
                    whileHover={{ x: 5 }}
                    className="hover:text-blue-400 transition-colors duration-300 text-left focus:outline-none"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Regions</h4>
            <ul className="space-y-3">
              {links.regions.map((region, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{region}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-3 group">
                      <span className="mt-0.5 w-8 h-8 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        <item.icon className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors duration-300" />
                      </span>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 w-8 h-8 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-blue-400" />
                      </span>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                        <p className="text-sm text-gray-300 leading-snug">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Hennu Tech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {[
                { label: 'Privacy Policy', sectionId: 'privacy' },
                { label: 'Terms of Service', sectionId: 'terms' },
                { label: 'Cookie Policy', sectionId: 'cookies' },
              ].map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  whileHover={{ y: -2 }}
                  className="hover:text-blue-400 transition-colors duration-300 focus:outline-none"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}