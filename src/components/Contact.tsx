import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next commercial construction project? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-accent/10 rounded-lg"
                  whileHover={{ rotate: 360, backgroundColor: "hsl(22 85% 55% / 0.2)" }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <motion.a 
                    href="mailto:info@apexbuild.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    info@apexbuild.com
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-accent/10 rounded-lg"
                  whileHover={{ rotate: 360, backgroundColor: "hsl(22 85% 55% / 0.2)" }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <motion.a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    +1 (234) 567-890
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-accent/10 rounded-lg"
                  whileHover={{ rotate: 360, backgroundColor: "hsl(22 85% 55% / 0.2)" }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Office</div>
                  <p className="text-muted-foreground">
                    123 Construction Boulevard<br />
                    Business District, NY 10001
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-foreground mb-2">Business Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-background border-border focus:border-accent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="your.email@company.com"
                  className="bg-background border-border focus:border-accent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  placeholder="Your company name"
                  className="bg-background border-border focus:border-accent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-background border-border focus:border-accent resize-none transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
