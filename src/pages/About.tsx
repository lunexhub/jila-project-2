import { motion } from "framer-motion";
import { Award, Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  { icon: Award, title: "Excellence", desc: "We maintain the highest professional standards in everything we do." },
  { icon: Target, title: "Precision", desc: "Accuracy and attention to detail are at the core of our services." },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest advice you can always count on." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20 md:py-28">
        <div className="container">
          <SectionHeading label="About Us" title="Who We Are" description="JILA Business Services is a professional accounting and advisory firm serving South African businesses." light />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={aboutImg} alt="Team collaboration" className="rounded-xl w-full object-cover aspect-square" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Driving Business Success Through Expert Financial Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                JILA Business Services was founded with a clear mission: to provide small and medium businesses with the same quality of financial and compliance services typically reserved for large corporations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team combines deep technical expertise with a genuine understanding of the challenges South African businesses face. From bookkeeping to CIPC compliance, we handle the back-office complexities so you can focus on what matters most — growing your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building lasting partnerships with our clients, providing proactive advice and reliable support every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Our Values" title="What We Stand For" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-xl border border-primary/10"
              >
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-hero-foreground mb-2">{v.title}</h3>
                <p className="text-section-dark-foreground/70 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
