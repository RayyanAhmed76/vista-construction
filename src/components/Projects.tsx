import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    image: project1,
    title: 'Tech Plaza Corporate Headquarters',
    category: 'Corporate Campus',
    description: '500,000 sq ft state-of-the-art office complex with sustainable design features',
    stats: { value: '$250M', label: 'Project Value' },
  },
  {
    image: project2,
    title: 'Metropolitan Business Center',
    category: 'High-Rise Office',
    description: '45-story premium office tower in downtown financial district',
    stats: { value: '1.2M sq ft', label: 'Total Area' },
  },
  {
    image: project3,
    title: 'Innovation Hub',
    category: 'Mixed-Use Development',
    description: 'Modern commercial complex integrating office, retail, and innovation spaces',
    stats: { value: 'LEED Platinum', label: 'Certification' },
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering iconic commercial structures for industry leaders worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-border hover:shadow-2xl transition-all duration-500 hover:border-accent">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Badge className="bg-accent text-accent-foreground mb-2">
                      {project.category}
                    </Badge>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{project.stats.label}</span>
                    <motion.span 
                      className="text-lg font-bold text-accent"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.stats.value}
                    </motion.span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
