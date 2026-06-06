import { Scale, HandHeart, Flame, TrendingUp, } from "lucide-react";
import SectionHeader from "../components/site/section-header";
import LotusDivider from "../components/site/lotus-divider";

const values = [
    { icon: Scale, title: "Dharma", subtitle: "Righteousness", desc: "Doing what is right, even when no one is watching." },
    { icon: HandHeart, title: "Seva", subtitle: "Service", desc: "Building with empathy — our clients' success is ours." },
    { icon: Flame, title: "Nishtha", subtitle: "Dedication", desc: "Relentless devotion to craft, quality, and follow-through." },
    { icon: TrendingUp, title: "Pragati", subtitle: "Progress", desc: "Always learning, always improving — gracefully." },
];

// const team = [
//     { name: "Rishi Patel", role: "Founder & CEO" },
//     { name: "Aanya Shah", role: "Head of Design" },
//     { name: "Devansh Joshi", role: "Lead Engineer" },
//     { name: "Priya Mehta", role: "Cloud Architect" },
// ];

// const milestones = [
//     { year: "2021", text: "Aksharcore Technologies founded in Ahmedabad with three engineers and one principle." },
//     { year: "2022", text: "Shipped our first SaaS platform; began long-term partnerships with three founding clients." },
//     { year: "2023", text: "Grew the team to a tight-knit guild of designers, engineers, and cloud architects." },
//     { year: "2024", text: "Expanded into mobile and DevOps; serving clients across India and the diaspora." },
// ];

export default function About() {
    return (
        <>
            <section className="lotus-bg py-20 md:py-28 text-center">
                <div className="mx-auto max-w-3xl px-6">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-saffron mb-4">Our story</p>
                    <h1 className="text-4xl md:text-6xl font-display text-maroon text-balance">About Aksharcore</h1>
                    <LotusDivider />
                    <p className="text-lg text-brown leading-relaxed text-balance">
                        A technology house founded under Goe Swaminarayan principles — building with the belief
                        that software, at its best, is an act of service.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
                <div className="card-warm p-10">
                    <p className="text-xs uppercase tracking-widest text-saffron font-semibold mb-3">Our Mission</p>
                    <p className="text-xl font-display leading-snug text-maroon">
                        To deliver innovative technology solutions grounded in ethical values and spiritual integrity.
                    </p>
                </div>
                <div className="card-warm p-10">
                    <p className="text-xs uppercase tracking-widest text-saffron font-semibold mb-3">Our Vision</p>
                    <p className="text-xl font-display leading-snug text-maroon">
                        To become India's most trusted tech company, where every line of code reflects purpose.
                    </p>
                </div>
            </section>

            <section className="bg-cream-card border-y border-divider-gold/20 py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader eyebrow="What we stand for" title="Four values, one purpose" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <article key={v.title} className="card-warm bg-cream-inner p-8 text-center">
                                <div className="mx-auto w-14 h-14 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mb-4">
                                    <v.icon size={26} />
                                </div>
                                <h3 className="text-2xl font-display text-maroon">{v.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-gold mb-3">{v.subtitle}</p>
                                <p className="text-sm text-brown">{v.desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <SectionHeader eyebrow="The people" title="A small guild of makers" />
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((m) => (
                        <article key={m.name} className="card-warm p-6 text-center">
                            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-saffron/30 to-gold/20 flex items-center justify-center mb-4">
                                <User size={36} className="text-saffron" />
                            </div>
                            <h3 className="font-display text-lg">{m.name}</h3>
                            <p className="text-sm text-brown">{m.role}</p>
                        </article>
                    ))}
                </div>
            </section> */}

            {/* <section className="bg-cream-card border-t border-divider-gold/20 py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <SectionHeader eyebrow="Milestones" title="Our journey so far" />
                    <ol className="relative border-l-2 border-divider-gold/40 pl-8 space-y-10">
                        {milestones.map((m) => (
                            <li key={m.year} className="relative">
                                <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-saffron border-4 border-cream-card" />
                                <p className="font-display text-2xl text-saffron">{m.year}</p>
                                <p className="text-brown leading-relaxed mt-1">{m.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section> */}
        </>
    )
}
