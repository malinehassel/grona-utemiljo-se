import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
export function IntroSection() {
  return <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }} className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/50 mb-6">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Välkommen till Grön Utemiljö
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">Grön Utemiljö i Västerås AB är ett lokalt trädgårdsföretag som hjälper dig att få en vacker och trivsam utemiljö – året runt. Med passion för det gröna och gedigen erfarenhet tar vi hand om allt från löpande trädgårdsskötsel till större anläggningsprojekt.</p>
        </motion.div>
      </div>
    </section>;
}