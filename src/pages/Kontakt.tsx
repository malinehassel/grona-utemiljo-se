import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "070-123 45 67",
    href: "tel:+46701234567",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "info@gronutemiljo.se",
    href: "mailto:info@gronutemiljo.se",
  },
  {
    icon: MapPin,
    label: "Område",
    value: "Västerås med omnejd",
    href: null,
  },
  {
    icon: Clock,
    label: "Öppettider",
    value: "Mån-Fre 07:00-16:00",
    href: null,
  },
];

export default function Kontakt() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

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
              Kontakt
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Hör av dig till oss
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi hjälper dig gärna med frågor, offertförfrågningar eller bara 
              ett trevligt trädgårdssnack. Ring, maila eller fyll i formuläret nedan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Skicka ett meddelande
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Namn *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Ditt namn"
                      className="bg-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="070-XXX XX XX"
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-post *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="din@epost.se"
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Ämne</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Vad gäller det?"
                    className="bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Meddelande *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Berätta vad du behöver hjälp med..."
                    rows={5}
                    className="bg-card resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Kontaktuppgifter
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="bg-card rounded-xl p-5 shadow-soft">
                    <div className="w-10 h-10 rounded-lg bg-sage/50 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-sage/30 rounded-2xl p-6 md:p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Kostnadsfri konsultation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi erbjuder kostnadsfri konsultation för alla nya projekt. 
                  Vi kommer gärna ut och tittar på din trädgård för att kunna 
                  ge dig ett skräddarsytt förslag och en rättvis offert.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ring oss på{" "}
                  <a href="tel:+46701234567" className="text-primary font-medium hover:underline">
                    070-123 45 67
                  </a>{" "}
                  eller fyll i formuläret så återkommer vi inom 24 timmar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
