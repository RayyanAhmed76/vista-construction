import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '200+', label: 'Expert Team Members' },
  { icon: Clock, value: '18+', label: 'Years of Excellence' },
  { icon: Shield, value: '100%', label: 'Safety Record' },
];

const features = [
  {
    title: 'Industry Leadership',
    description: 'Recognized among the top commercial contractors serving Fortune 500 clients globally.',
  },
  {
    title: 'Innovation-Driven',
    description: 'Leveraging cutting-edge technology and sustainable building practices for future-ready structures.',
  },
  {
    title: 'Proven Track Record',
    description: 'Consistent on-time, on-budget delivery with zero compromise on quality or safety standards.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'Dedicated project teams ensuring seamless communication and collaborative partnership.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose ApexBuild
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in creating commercial landmarks that stand the test of time
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-center cursor-pointer"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4"
                whileHover={{ backgroundColor: "hsl(22 85% 55% / 0.2)" }}
              >
                <stat.icon className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={isStatsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-3"
                whileHover={{ color: "hsl(22 85% 55%)" }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
