import { Layout } from "@/components/layout/Layout";
import { CheckCircle, AlertCircle, Clock, Globe, Shield } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Öppna domäninställningar i Lovable",
    description:
      'Gå till ditt projekt i Lovable. Klicka på "Settings" (kugghjulet) och sedan "Domains". Klicka på "Connect Domain" och skriv in din domän, t.ex. gronutemiljo.se.',
    icon: Globe,
  },
  {
    number: 2,
    title: "Lägg till A-record för apex-domänen",
    description:
      "Logga in hos din domänleverantör (t.ex. Loopia, One.com, GoDaddy). Skapa ett nytt DNS-record med följande inställningar:",
    icon: Shield,
    table: {
      headers: ["Typ", "Namn/Host", "Data/Värde"],
      rows: [["A", "@", "185.158.133.1"]],
    },
  },
  {
    number: 3,
    title: "Lägg till CNAME för www-subdomänen",
    description:
      "Skapa ytterligare ett DNS-record så att www-versionen av din domän också fungerar:",
    icon: Globe,
    table: {
      headers: ["Typ", "Namn/Host", "Data/Värde"],
      rows: [["CNAME", "www", "grona-utemiljo-se.lovable.app"]],
    },
  },
  {
    number: 4,
    title: "Lägg till TXT-verifieringspost",
    description:
      'Lovable kräver en TXT-post för att verifiera att du äger domänen. Värdet hittar du i Lovable under Settings → Domains → din domän. Det ser ut ungefär så här:',
    icon: CheckCircle,
    table: {
      headers: ["Typ", "Namn/Host", "Data/Värde"],
      rows: [["TXT", "_lovable", "lovable_verify=DITT_UNIKA_VÄRDE"]],
    },
    note: "Ersätt DITT_UNIKA_VÄRDE med det värde som visas i Lovable-gränssnittet. Varje domän har ett unikt verifieringsvärde.",
  },
  {
    number: 5,
    title: "Vänta på DNS-propagering",
    description:
      "Det kan ta upp till 72 timmar för DNS-ändringar att spridas, men oftast går det inom 15–30 minuter. Lovable visar statusen under Settings → Domains.",
    icon: Clock,
  },
];

const statusList = [
  { label: "Verifying", desc: "DNS-posterna kontrolleras. Vänta på propagering.", color: "text-yellow-600" },
  { label: "Setting up", desc: "Verifiering klar, SSL-certifikat skapas.", color: "text-blue-600" },
  { label: "Active", desc: "Domänen är live och fungerar!", color: "text-primary" },
  { label: "Offline", desc: "DNS har ändrats och pekar inte längre rätt. Kontrollera dina records.", color: "text-destructive" },
  { label: "Failed", desc: "SSL kunde inte skapas. Klicka Retry i Lovable efter att du fixat DNS.", color: "text-destructive" },
];

const DnsGuide = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            DNS-verifiering & domänkoppling
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Steg-för-steg-guide för att koppla din egen domän till ditt
            Lovable-projekt.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl mb-2 flex items-center gap-2">
                      <step.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>

                    {step.table && (
                      <div className="overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-muted/50">
                              {step.table.headers.map((h) => (
                                <th
                                  key={h}
                                  className="text-left px-4 py-3 font-semibold text-foreground"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {step.table.rows.map((row, i) => (
                              <tr key={i} className="border-t border-border">
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className="px-4 py-3 font-mono text-sm"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {step.note && (
                      <div className="mt-4 flex items-start gap-2 bg-accent/30 rounded-lg p-4 text-sm">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{step.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status reference */}
          <div className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl mb-4">Domänstatus i Lovable</h2>
            <p className="text-muted-foreground mb-6">
              Under Settings → Domains kan du se statusen för din domän:
            </p>
            <ul className="space-y-3">
              {statusList.map((s) => (
                <li key={s.label} className="flex items-start gap-3">
                  <span className={`font-semibold min-w-[100px] ${s.color}`}>
                    {s.label}
                  </span>
                  <span className="text-muted-foreground">{s.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="mt-12 rounded-xl bg-primary/10 border border-primary/20 p-6 md:p-8">
            <h2 className="text-2xl mb-3">Sammanfattning DNS-records</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-semibold">Typ</th>
                    <th className="text-left px-4 py-3 font-semibold">Namn</th>
                    <th className="text-left px-4 py-3 font-semibold">Värde</th>
                    <th className="text-left px-4 py-3 font-semibold">Syfte</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">A</td>
                    <td className="px-4 py-3">@</td>
                    <td className="px-4 py-3">185.158.133.1</td>
                    <td className="px-4 py-3 font-sans">Apex-domän</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">CNAME</td>
                    <td className="px-4 py-3">www</td>
                    <td className="px-4 py-3">grona-utemiljo-se.lovable.app</td>
                    <td className="px-4 py-3 font-sans">www-subdomän</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">TXT</td>
                    <td className="px-4 py-3">_lovable</td>
                    <td className="px-4 py-3">lovable_verify=...</td>
                    <td className="px-4 py-3 font-sans">Verifiering</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DnsGuide;
