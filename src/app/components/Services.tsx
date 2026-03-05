import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Code2, 
  Brain, 
  LineChart, 
  Smartphone, 
  Globe, 
  Cloud, 
  Database, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored enterprise software solutions built to your exact specifications and business needs.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence Solutions',
    description: 'Advanced AI systems including NLP, computer vision, and intelligent automation.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: LineChart,
    title: 'Machine Learning Systems',
    description: 'Predictive analytics, recommendation engines, and custom ML model development.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications using the latest technologies and frameworks.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, migration, and DevOps automation solutions.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Big data solutions, data warehousing, and business intelligence systems.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Intelligent automation to streamline workflows and boost productivity.',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development solutions powered by the latest technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
