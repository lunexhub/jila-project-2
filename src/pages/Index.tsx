import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, FileText, Users, Building2, Briefcase, ArrowRight, CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Calculator, title: "Accounting", desc: "Bookkeeping, management accounts, annual financial statements, budgeting & cashflow forecasting." },
  { icon: FileText, title: "Taxation", desc: "Company income & provisional tax returns, VAT 201s, compliance management & SARS liaison." },
  { icon: Users, title: "Payroll", desc: "Monthly payslips, EMP201s, bi-annual EMP501s and IRP5s." },
  { icon: Building2, title: "CIPC", desc: "Company registrations, deregistrations, CIPC maintenance & annual return filing." },
  { icon: Briefcase, title: "Human Resources", desc: "Onboarding & exit management, industrial relations, employment equity & leave management." },
];

const whyUs = [
  "Registered CA(SA) led firm",
  "Tailored business solutions",
  "End-to-end compliance management",
  "Affordable & transparent pricing",
  "Dedicated support team",
  "SARS & CIPC specialists",
];

const stats = [
  { icon: TrendingUp, value: "500+", label: "Clients Served" },
  { icon: Shield, value: "100%", label: "Compliance Rate" },
  { icon: Clock, value: "10+", label: "Years Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section relative overflow-hidden min-h-[100vh] flex items-center -mt-16 md:-mt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="Professional business office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/90 to-hero/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero via-transparent to-hero/50" />
        </div>

        {/* Animated glow accents */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 py-32 md:py-40 lg:py-48">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                JILA Business Services
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-hero-foreground leading-[1.1] mb-6">
                Your Business,{" "}
                <span className="text-gradient">Our Expertise</span>
              </h1>

              <p className="text-lg md:text-xl text-section-dark-foreground/70 mb-10 max-w-xl leading-relaxed">
                Professional accounting, tax, payroll and business advisory services — tailored to drive your success forward.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                >
                  Our Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-section-dark-foreground/20 text-hero-foreground px-8 py-4 rounded-lg font-semibold hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-6 md:gap-8"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-hero-foreground">{stat.value}</div>
                      <div className="text-xs text-section-dark-foreground/50">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:flex flex-col gap-4 items-end"
            >
              {[
                { icon: Calculator, title: "Accounting & Tax", text: "Stay compliant and optimized" },
                { icon: Users, title: "Payroll & HR", text: "Streamlined people management" },
                { icon: Building2, title: "CIPC & Compliance", text: "All registrations handled" },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                  whileHover={{ x: -8, scale: 1.02 }}
                  className="w-72 p-5 rounded-xl bg-card/5 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-semibold text-hero-foreground">{card.title}</h3>
                      <p className="text-xs text-section-dark-foreground/50">{card.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Business Services"
            description="From accounting to HR, we handle the complexities so you can focus on growing your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to="/services"
                  className="group block p-8 rounded-xl bg-card border border-border hover:glow-border hover:border-primary/30 transition-all duration-300"
                >
                  <s.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <SectionHeading
            label="Why Choose Us"
            title="Built on Trust & Expertise"
            description="JILA Business Services delivers professional, reliable solutions built on deep accounting and advisory expertise."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-primary/10"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-section-dark-foreground text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="bg-gradient-to-br from-secondary to-hero rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-hero-foreground mb-4">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-section-dark-foreground/70 mb-8 max-w-lg mx-auto">
              Get in touch for a free consultation and discover how we can help your business grow.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
