import { motion } from "framer-motion";
import { Calculator, FileText, Users, Building2, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Calculator,
    title: "Accounting",
    items: ["Bookkeeping", "Management Accounts", "Annual Financial Statements", "Budgeting", "Cashflow Forecasting"],
  },
  {
    icon: FileText,
    title: "Taxation",
    items: ["Company Income Tax Returns", "Company Provisional Tax Returns", "VAT 201s", "Compliance Management", "SARS Liaison"],
  },
  {
    icon: Users,
    title: "Payroll",
    items: ["Monthly Payslips", "Monthly EMP201s", "Bi-annual EMP501s", "IRP5s"],
  },
  {
    icon: Building2,
    title: "CIPC",
    items: ["Company Registrations", "Company Deregistrations", "CIPC Maintenance (changes, updates, resignations)", "Annual Return Filing"],
  },
  {
    icon: Briefcase,
    title: "Human Resources",
    items: ["Onboarding & Exit Management", "Industrial Relations", "Employee Equity Reporting", "Leave Management"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="hero-section py-20 md:py-28">
        <div className="container">
          <SectionHeading label="Our Services" title="What We Offer" description="End-to-end business services to keep your company compliant and profitable." light />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-xl bg-card border border-border hover:glow-border hover:border-primary/30 transition-all duration-300 ${
                  i === services.length - 1 && services.length % 2 !== 0 ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{s.title}</h3>
                </div>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
