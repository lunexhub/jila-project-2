import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const packages = [
  {
    name: "Compliance",
    price: "R2,999",
    period: "/month",
    description: "Essential compliance and bookkeeping for small businesses.",
    features: ["Monthly bookkeeping", "VAT 201 submissions", "CIPC annual returns", "Basic payroll (up to 5 employees)", "Email support"],
    featured: false,
  },
  {
    name: "Standard",
    price: "R7,000",
    period: "/month",
    description: "Complete accounting and tax services for growing businesses.",
    features: [
      "Everything in Compliance",
      "Management accounts",
      "Company tax returns",
      "Full payroll processing",
      "SARS liaison",
      "Dedicated account manager",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "R15,000",
    period: "/month",
    description: "Full-service solution with HR and strategic advisory.",
    features: [
      "Everything in Standard",
      "Annual financial statements",
      "Budgeting & cashflow forecasting",
      "Full HR services",
      "Industrial relations support",
      "Priority support",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="hero-section py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Pricing" title="Simple, Transparent Pricing" description="All prices exclude VAT. Choose the package that fits your business needs." light />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  pkg.featured
                    ? "bg-secondary border-primary/30 glow-border scale-[1.02]"
                    : "bg-card border-border hover:border-primary/20"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-heading font-bold mb-2 ${pkg.featured ? "text-hero-foreground" : ""}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.featured ? "text-section-dark-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-heading font-bold ${pkg.featured ? "text-primary" : ""}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.featured ? "text-section-dark-foreground/60" : "text-muted-foreground"}`}>
                    {pkg.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${pkg.featured ? "text-section-dark-foreground/80" : "text-muted-foreground"}`}>
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-md font-semibold text-sm transition-colors ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Need a custom solution? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a tailored quote.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
