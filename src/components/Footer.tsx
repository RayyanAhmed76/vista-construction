import { Building2, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-accent" size={28} />
              <span className="text-2xl font-bold">
                <span className="text-accent">Bunyad</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Building commercial excellence for tomorrow's leaders.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Commercial Construction</li>
              <li>Project Management</li>
              <li>Design-Build</li>
              <li>Value Engineering</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bunyad-construction/"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Bunyad Construction. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
