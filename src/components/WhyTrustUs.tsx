import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '500+', label: 'Projects Delivered', bgColor: 'bg-accent' },
  { value: '50+', label: 'Countries Served', bgColor: 'bg-white' },
  { value: '5B+', label: 'Sq Ft Built', bgColor: 'bg-white' },
  { value: '98%', label: 'Client Satisfaction', bgColor: 'bg-accent' },
];

const features = [
  '25+ years of commercial construction expertise',
  'ISO 9001 & LEED certified construction practices',
  'On-time delivery with 98% project success rate',
  'Dedicated project managers for each build',
  'Advanced BIM technology for precision',
  'Sustainable and eco-friendly building solutions',
];

export const WhyTrustUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#003366]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why Global MNCs </span>
            <span className="text-accent">Trust Us</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl">
            We don't just build structures; we create landmarks that embody corporate vision and drive business success. 
            Our commitment to excellence has made us the preferred construction partner for Fortune 500 companies worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-white/90 text-lg">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${stat.bgColor} rounded-lg p-8 text-center shadow-xl`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.bgColor === 'bg-accent' ? 'text-white' : 'text-[#003366]'
                  }`}
                >
                  {stat.value}
                </motion.div>
                <p className={`text-sm font-medium ${
                  stat.bgColor === 'bg-accent' ? 'text-white/90' : 'text-[#003366]/80'
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
