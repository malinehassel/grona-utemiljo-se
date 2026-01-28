import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  TreeDeciduous, 
  Flower2, 
  Sun, 
  Leaf, 
  Shovel,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Trädgårdsskötsel",
    description: "Löpande och regelbunden skötsel av din trädgård så att du kan njuta utan att behöva arbeta.",
    features: [
      "Gräsklippning",
      "Ogräsrensning",
      "Häckklippning",
      "Kantskärning",
      "Allmän tillsyn",
    ],
  },
  {
    icon: Flower2,
    title: "Plantering & anläggning",
    description: "Vi hjälper dig skapa nya planteringar och trädgårdsanläggningar efter dina önskemål.",
    features: [
      "Rabattplantering",
      "Buskplantering",
      "Gräsmatteanläggning",
      "Planteringsdesign",
      "Jordförbättring",
    ],
  },
  {
    icon: TreeDeciduous,
    title: "Beskärning",
    description: "Professionell beskärning för friska och välmående träd, buskar och häckar.",
    features: [
      "Fruktträdsbeskärning",
      "Buskbeskärning",
      "Häckformning",
      "Rosbeskärning",
      "Kronreducering",
    ],
  },
  {
    icon: Sun,
    title: "Säsongsarbeten",
    description: "Vi förbereder din trädgård inför varje säsong och ser till att den mår bra året runt.",
    features: [
      "Vårfix & uppstart",
      "Sommarskötsel",
      "Höststädning",
      "Lövräfsning",
      "Vinterförberedelser",
    ],
  },
  {
    icon: Shovel,
    title: "Anläggning & renovering",
    description: "Större projekt som markarbeten, stenläggning och trädgårdsrenovering.",
    features: [
      "Stenläggning",
      "Terrassbygge",
      "Murar & kanter",
      "Dränering",
      "Trädgårdsrenovering",
    ],
  },
  {
    icon: Leaf,
    title: "Företag & BRF",
    description: "Skräddarsydda lösningar för företag och bostadsrättsföreningar.",
    features: [
      "Skötselsavtal",
      "Regelbunden tillsyn",
      "Säsongsplanering",
      "Snöröjning",
      "Kontaktperson",
    ],
  },
];

export default function Tjanster() {
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
              Våra tjänster
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Allt för din utemiljö
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi erbjuder ett komplett utbud av trädgårdstjänster för privatpersoner, 
              företag och bostadsrättsföreningar i Västerås med omnejd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-sage/50 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Behöver du hjälp med trädgården?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Kontakta oss för en kostnadsfri konsultation. Vi skräddarsyr våra 
              tjänster efter dina behov och önskemål.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/kontakt">
                Begär offert
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
