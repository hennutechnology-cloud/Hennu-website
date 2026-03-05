import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  DollarSign, 
  Heart, 
  Truck, 
  ShoppingCart, 
  Building2, 
  Lightbulb 
} from 'lucide-react';

const industries = [
  { icon: DollarSign, name: 'FinTech', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Heart, name: 'Healthcare', color: 'text-red-600', bg: 'bg-red-50' },
  { icon: Truck, name: 'Logistics', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: ShoppingCart, name: 'E-Commerce', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Building2, name: 'Smart Cities', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Lightbulb, name: 'Startups', color: 'text-yellow-600', bg: 'bg-yellow-50' }
];

export function Industries() {
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
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering innovative software solutions across multiple sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 ${industry.bg} rounded-2xl flex items-center justify-center mb-4`}>
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
