import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";
export function Footer() {
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold">
                  Grön Utemiljö
                </span>
                <span className="block text-xs text-background/70 -mt-0.5">
                  Västerås AB
                </span>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">Din lokala trädgårdsmästare i Västerås. Vi skapar och sköter gröna utemiljöer med omtanke – året runt.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Snabblänkar</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/80 hover:text-background transition-colors">
                Startsida
              </Link>
              <Link to="/om-oss" className="text-sm text-background/80 hover:text-background transition-colors">
                Om oss
              </Link>
              <Link to="/tjanster" className="text-sm text-background/80 hover:text-background transition-colors">
                Tjänster
              </Link>
              <Link to="/kontakt" className="text-sm text-background/80 hover:text-background transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors" href="tel:+46722508100">
0722-50 81 00<Phone className="w-4 h-4" />
                0722-50 81 00     
              </a>
              <a href="mailto:info@gronutemiljo.se" className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                info@gronutemiljo.se
              </a>
              <div className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Västerås med omnejd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Grön Utemiljö i Västerås AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>;
}