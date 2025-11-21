import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useEffect } from "react";

import itelEnergy from "../assets/itelEnergy.mp4"

const projectsData = [
  {
    video: itelEnergy,
    title: 'Vista Construct Building Transformation',
    category: 'Corporate Campus',
    description: '8,000 sq ft full building transformation from a grey structure to a functional modern workspace',
    fullDescription: 'A comprehensive 8,000 square foot transformation project converting an empty grey structure into a vibrant, fully functional space. The project includes a sleek exterior façade, advanced SMD ticker and display walls, complete interior execution, custom furniture, and state-of-the-art installations. Delivered with precision, collaborative planning, strict quality control, and on-time execution.',
    location: 'Lahore, Pakistan',
    completion: 'october 2025',
    client: 'Itel',
    highlights: [
      'Modern and sleek exterior façade design',
    'SMD ticker and SMD display walls installation',
    'Complete interior design and execution',
    'Custom-made furniture for aesthetics and functionality',
    'State-of-the-art installations for seamless operations',
    'Rigorous quality control at every project stage',
    'Timely execution through efficient management',
    'Collaborative planning with client and stakeholders'
    ],
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || '0');
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }
 
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="relative h-[80vh] overflow-hidden">
        <video 
      src={project.video}
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Details Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 flex items-start gap-4">
              <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">{project.location}</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <Calendar className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Completion</h3>
                <p className="text-muted-foreground">{project.completion}</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <Users className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Highlights</h2>
              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-foreground">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
