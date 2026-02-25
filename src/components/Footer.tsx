import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-primary/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4">
              JILA<span className="text-primary"> Business</span>
            </h3>
            <p className="text-section-dark-foreground/70 text-sm leading-relaxed">
              Professional accounting, tax, payroll, CIPC and HR services to help your business thrive.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/pricing", label: "Pricing" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-section-dark-foreground/70 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-section-dark-foreground/70">
              <span>Accounting</span>
              <span>Taxation</span>
              <span>Payroll</span>
              <span>CIPC</span>
              <span>Human Resources</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-section-dark-foreground/70">
              <a href="mailto:rufaro@jointhill.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> rufaro@jointhill.co.za
              </a>
              <a href="tel:+27721104601" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +27 72 110 4601
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> South Africa
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-xs text-section-dark-foreground/50 space-y-2">
          <p>© {new Date().getFullYear()} JILA Business Services. All rights reserved.</p>
          <p>
            Built by{" "}
            <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
