import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'About', sectionId: 'about', hasDropdown: false },

  {
    label: 'Services',
    sectionId: 'services',
    hasDropdown: true,
    dropdown: [
      { label: 'AI Solutions', sectionId: 'services' },
      { label: 'Web Development', sectionId: 'services' },
      { label: 'Mobile Apps', sectionId: 'services' },
      { label: 'Cloud & DevOps', sectionId: 'services' },
      { label: 'Data Engineering', sectionId: 'services' },
      { label: 'Process Automation', sectionId: 'services' },
    ],
  },
  { label: 'Industries', sectionId: 'industries', hasDropdown: false },
  { label: 'Process', sectionId: 'process', hasDropdown: false },
  { label: 'Technology', sectionId: 'technology', hasDropdown: false },
];

function scrollToSection(sectionId: string, closeMobile?: () => void) {
  const el = document.getElementById(sectionId);
  if (el) {
    const navHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  closeMobile?.();
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active section while scrolling
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setIsMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-lg shadow-gray-100/50 border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">

            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 focus:outline-none"
            >
              <img
                src="/Hennu_Tech_Logo.png"
                alt="Hennu Tech"
                className="h-14 w-auto"
              />
            </motion.button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection(link.sectionId)}
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none ${
                        isActive
                          ? 'text-blue-700'
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <motion.span
                          animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    {/* Dropdown */}
                    {link.hasDropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 py-2 overflow-hidden"
                          >
                            {link.dropdown?.map((item, i) => (
                              <motion.button
                                key={item.label}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                onClick={() => { scrollToSection(item.sectionId); setActiveDropdown(null); }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-150 group text-left focus:outline-none"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:scale-125 transition-transform duration-150 flex-shrink-0" />
                                {item.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('cta')}
                className="text-sm font-medium px-4 py-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200 focus:outline-none"
              >
                Contact
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(30,64,175,0.30)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('cta')}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-200 transition-all duration-300 focus:outline-none"
              >
                Start a Project
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5 text-gray-700" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    {link.hasDropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-800 font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 list-none select-none">
                          {link.label}
                          <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-200" />
                        </summary>
                        <div className="mt-1 ml-4 space-y-0.5">
                          {link.dropdown?.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => scrollToSection(item.sectionId, closeMobile)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-150 text-left focus:outline-none"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex-shrink-0" />
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.sectionId, closeMobile)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-150 focus:outline-none ${
                          activeSection === link.sectionId
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        {link.label}
                      </button>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-4 pb-2 flex flex-col gap-3 border-t border-gray-100 mt-2"
                >
                  <button
                    onClick={() => scrollToSection('cta', closeMobile)}
                    className="w-full text-center px-5 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => scrollToSection('cta', closeMobile)}
                    className="w-full text-center px-5 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-xl shadow-md shadow-blue-200 focus:outline-none"
                  >
                    Start a Project
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-[80px]" />
    </>
  );
}