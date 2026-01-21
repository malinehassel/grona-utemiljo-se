import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Redo att förverkliga din trädgårdsdröm?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Kontakta oss för en kostnadsfri konsultation. Vi hjälper dig gärna 
            att skapa den utemiljö du alltid önskat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/kontakt">Kontakta oss</Link>
            </Button>
            <Button asChild size="xl" variant="heroOutline">
              <a href="tel:+46701234567">
                <Phone className="w-5 h-5 mr-2" />
                Ring oss
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
