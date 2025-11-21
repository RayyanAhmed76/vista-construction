import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import itel from "../assets/itel.png";

const projects = [
  {
    image: itel,
    title: 'Vista Construct Building Transformation',
    category: 'Interiors & Construction',
    description:
      'A grey 8,000 sq. ft. space was transformed into a modern, fully functional facility featuring a sleek exterior façade, SMD displays, custom interiors, and state-of-the-art installations. The project showcases meticulous attention to detail, seamless collaboration, and timely execution from start to finish.',
    
  },
  
];

export const Projects = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="text-[#003366]">Projects</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering iconic commercial structures for industry leaders worldwide
          </p>
        </motion.div>

        {/* Grid (dynamic: single centered, multiple columns otherwise) */}
        <div
          className={`
            grid gap-8
            ${projects.length === 1
              ? 'grid-cols-1 place-items-center'
              : 'md:grid-cols-2 lg:grid-cols-3'}
          `}
        >
          {projects.map((project, index) => (
            
            <motion.div
              key={project.title}
              className="flex justify-center" // <-- centers card and prevents stretching
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15 }}
            >
              {/* Constrained Card width */}
              <Card className="overflow-hidden group cursor-pointer border-border hover:shadow-2xl transition-all duration-500 hover:border-accent max-w-md w-full">
                {/* Image Section - fixed height + object-cover */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
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

                {/* Text Section */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                 
                  <Button onClick={() => navigate(`/project/${index}`)} className="w-full">
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
