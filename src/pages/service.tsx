import { Code2, Smartphone, Palette, Cloud, Compass, Boxes, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    { icon: Code2, title: "Web Development", desc: "Fast, accessible, and beautifully engineered web applications using modern frameworks." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences for iOS and Android, built for delight." },
    { icon: Palette, title: "UI/UX Design", desc: "Considered design systems and interfaces that feel calm, clear, and purposeful." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable cloud architecture, CI/CD, observability, and cost-aware infrastructure." },
    { icon: Compass, title: "IT Consulting", desc: "Strategic guidance for product, architecture, and team — honest and grounded." },
    { icon: Boxes, title: "Custom Software Solutions", desc: "Bespoke platforms tailored to the unique shape of your business." },
];


export default function Service() {
    return (
        <>
            <section className="lotus-bg py-20 md:py-28 text-center">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-display text-maroon text-balance">
                        What We Do
                    </h1>
                    <div className="mx-auto mt-5 w-24 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full" />
                    <p className="mt-6 text-lg text-brown leading-relaxed text-balance">
                        Six disciplines. One promise — software made with conscience.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <article key={s.title} className="card-warm p-8 group">
                            <div className="w-14 h-14 rounded-xl bg-saffron/10 text-saffron flex items-center justify-center mb-5 group-hover:bg-saffron group-hover:text-white transition-colors">
                                <s.icon size={26} />
                            </div>
                            <h3 className="text-xl font-display mb-3">{s.title}</h3>
                            <p className="text-sm text-brown leading-relaxed mb-5">{s.desc}</p>
                            <Link to="/contact" className="text-saffron font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                                Learn More <ArrowRight size={14} />
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="bg-cream-card border border-divider-gold/30 rounded-2xl p-10 md:p-14 text-center shadow-warm">
                    <h2 className="text-2xl md:text-4xl font-display text-maroon text-balance">
                        Not sure where to start?
                    </h2>
                    <p className="mt-3 text-brown max-w-xl mx-auto">
                        Tell us where you are. We'll suggest the smallest meaningful next step.
                    </p>
                    <Link to="/contact" className="btn-primary mt-7">Talk to us <ArrowRight size={16} /></Link>
                </div>
            </section>
        </>
    )
}
