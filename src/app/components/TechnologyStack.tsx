import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const technologies = [
  { name: 'Python', logo: '🐍', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'TensorFlow', logo: '🧠', color: 'bg-orange-50 hover:bg-orange-100' },
  { name: 'PyTorch', logo: '🔥', color: 'bg-red-50 hover:bg-red-100' },
  { name: 'React', logo: '⚛️', color: 'bg-cyan-50 hover:bg-cyan-100' },
  { name: 'Node.js', logo: '🟢', color: 'bg-green-50 hover:bg-green-100' },
  { name: 'Docker', logo: '🐳', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Kubernetes', logo: '☸️', color: 'bg-indigo-50 hover:bg-indigo-100' },
  { name: 'AWS', logo: '☁️', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { name: 'Azure', logo: '🌐', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Google Cloud', logo: '☁️', color: 'bg-red-50 hover:bg-red-100' }
];

export function TechnologyStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build world-class solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${tech.color} rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center justify-center`}
            >
              <div className="text-4xl mb-3">{tech.logo}</div>
              <h3 className="text-sm font-semibold text-gray-900 text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">And many more technologies tailored to your project needs</p>
        </motion.div>
      </div>
    </section>
  );
}
