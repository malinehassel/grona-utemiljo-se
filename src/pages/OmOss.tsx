import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion för det gröna",
    description: "Vi älskar trädgårdar och det syns i vårt arbete.",
  },
  {
    icon: Users,
    title: "Personlig service",
    description: "Vi lyssnar på dina önskemål och skräddarsyr våra tjänster.",
  },
  {
    icon: Award,
    title: "Kvalitet & erfarenhet",
    description: "Gedigen kunskap och noggrant arbete i varje projekt.",
  },
  {
    icon: Leaf,
    title: "Hållbart tänk",
    description: "Vi arbetar med naturen, inte mot den.",
  },
];

export default function OmOss() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sand/50 section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Om oss
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Grön Utemiljö i Västerås AB
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi är ett lokalt familjeföretag med hjärtat i Västerås. Sedan starten 
              har vi hjälpt hundratals kunder att förverkliga sina trädgårdsdrömmar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Vår historia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grön Utemiljö grundades med en enkel vision: att hjälpa människor 
                  i Västerås med omnejd att njuta av sina utemiljöer utan att behöva 
                  oroa sig för allt arbete som krävs.
                </p>
                <p>
                  Med åren har vi vuxit och utvecklats, men våra kärnvärden har alltid 
                  varit desamma – kvalitet, personlig service och en genuin kärlek 
                  till allt som växer och grönskar.
                </p>
                <p>
                  Idag betjänar vi privatpersoner, företag och bostadsrättsföreningar 
                  med allt från löpande trädgårdsskötsel till större anläggningsprojekt. 
                  Vi är stolta över att vara den trädgårdsmästare du kan lita på.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-sage/30 rounded-3xl p-8 md:p-10"
            >
              <blockquote className="font-serif text-2xl text-foreground italic leading-relaxed mb-4">
                "Vi vill vara den trädgårdsmästare du gärna ringer igen – 
                någon du kan lita på och som bryr sig om din trädgård lika 
                mycket som du gör."
              </blockquote>
              <p className="text-muted-foreground">— Grön Utemiljö-teamet</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-sand/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Våra värderingar
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Det här är vad som driver oss framåt varje dag.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-sage/50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Vill du veta mer?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Kontakta oss så berättar vi gärna mer om hur vi kan hjälpa dig 
              med din utemiljö.
            </p>
            <Button asChild size="lg">
              <Link to="/kontakt">Kontakta oss</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
