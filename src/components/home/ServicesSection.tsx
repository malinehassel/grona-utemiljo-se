import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, TreeDeciduous, Flower2, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Trädgårdsskötsel",
    description: "Löpande skötsel av din trädgård - gräsklippning, ogräsrensning, och allmän tillsyn.",
  },
  {
    icon: Flower2,
    title: "Plantering & anläggning",
    description: "Nya planteringar, rabatter och trädgårdsanläggningar efter dina önskemål.",
  },
  {
    icon: TreeDeciduous,
    title: "Beskärning",
    description: "Professionell beskärning av träd, buskar och häckar för en frisk och fin trädgård.",
  },
  {
    icon: Sun,
    title: "Säsongsarbeten",
    description: "Vårfix, höststädning, lövräfsning och vinterförberedelser.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-sand/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Våra tjänster
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av trädgårdstjänster för privatpersoner, 
            företag och bostadsrättsföreningar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage/50 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/tjanster">
              Se alla tjänster
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
