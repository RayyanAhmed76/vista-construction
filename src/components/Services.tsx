import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Wrench, ClipboardCheck, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Building,
    title: 'Commercial Construction',
    description: 'Full-service construction for office towers, corporate campuses, and mixed-use developments that meet the highest standards.',
  },
  {
    icon: Wrench,
    title: 'Project Management',
    description: 'End-to-end oversight ensuring on-time, on-budget delivery with transparent communication throughout every phase.',
  },
  {
    icon: ClipboardCheck,
    title: 'Design-Build Services',
    description: 'Integrated approach combining architecture and construction expertise for seamless project execution from concept to completion.',
  },
  {
    icon: TrendingUp,
    title: 'Value Engineering',
    description: 'Strategic optimization of project costs without compromising quality, ensuring maximum ROI for your investment.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-[hsl(210,100%,20%)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored for enterprise-scale commercial projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 bg-card border-border group hover:border-accent hover:scale-105">
                <motion.div 
                  className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
