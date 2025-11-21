import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projectsData = [
  {
    image: project1,
    title: 'Tech Plaza Corporate Headquarters',
    category: 'Corporate Campus',
    description: '500,000 sq ft state-of-the-art office complex with sustainable design features',
    stats: { value: '$250M', label: 'Project Value' },
    fullDescription: 'A landmark 500,000 square foot corporate campus featuring cutting-edge sustainable design, smart building technology, and world-class amenities. The project achieved LEED Platinum certification and serves as the global headquarters for a Fortune 100 technology company.',
    location: 'Silicon Valley, California',
    completion: 'December 2023',
    client: 'Tech Industry Leader',
    highlights: [
      'LEED Platinum certified sustainable design',
      'Advanced BIM implementation for precision construction',
      'Smart building automation systems',
      'On-site renewable energy generation',
      'Wellness-focused employee spaces',
    ],
  },
  {
    image: project2,
    title: 'Metropolitan Business Center',
    category: 'High-Rise Office',
    description: '45-story premium office tower in downtown financial district',
    stats: { value: '1.2M sq ft', label: 'Total Area' },
    fullDescription: 'An iconic 45-story premium office tower that redefines the downtown skyline. Featuring class-A office spaces, advanced structural engineering, and premium finishes throughout. The building houses multiple Fortune 500 companies and serves as a beacon of modern commercial architecture.',
    location: 'Downtown Financial District, New York',
    completion: 'March 2024',
    client: 'Global Financial Institution',
    highlights: [
      'Seismic-resistant structural design',
      'Floor-to-ceiling glass facade',
      'Executive conference facilities',
      'Underground parking for 800+ vehicles',
      'Sky lobbies with panoramic city views',
    ],
  },
  {
    image: project3,
    title: 'Innovation Hub',
    category: 'Mixed-Use Development',
    description: 'Modern commercial complex integrating office, retail, and innovation spaces',
    stats: { value: 'LEED Platinum', label: 'Certification' },
    fullDescription: 'A groundbreaking mixed-use development that seamlessly integrates office, retail, and innovation spaces. The project creates a vibrant urban ecosystem fostering collaboration and creativity. Features include co-working spaces, retail venues, dining options, and public gathering areas.',
    location: 'Tech Corridor, Austin',
    completion: 'June 2024',
    client: 'Innovation District Partnership',
    highlights: [
      'LEED Platinum environmental certification',
      'Integrated retail and office spaces',
      'Innovation labs and co-working areas',
      'Public art installations',
      'Green roofs and outdoor terraces',
    ],
  },
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

  return (
    <div className="min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
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
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{project.stats.label}</h3>
                </div>
                <p className="text-3xl font-bold text-accent">{project.stats.value}</p>
              </div>
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
