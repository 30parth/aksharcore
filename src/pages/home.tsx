import { Sparkles, ShieldCheck, Rocket, Code2, Cloud, Palette, ArrowRight, Lightbulb, HandHeart, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/site/section-header";
import LotusDivider from "../components/site/lotus-divider";

const highlights = [
    { icon: Lightbulb, title: "Innovation", desc: "Forward-thinking solutions crafted with curiosity, care, and a quiet sense of wonder." },
    { icon: ShieldCheck, title: "Integrity", desc: "Every commitment honored. Every line of code held to the highest ethical standard." },
    { icon: Rocket, title: "Impact", desc: "Technology that meaningfully serves people, businesses, and a higher purpose." },
];

const features = [
    { icon: Code2, title: "Engineering Excellence", desc: "Clean architecture, rigorous testing, and modern stacks — built to scale gracefully." },
    { icon: Palette, title: "Design that Breathes", desc: "Interfaces that feel calm, intentional, and a joy to use, on every device." },
    { icon: Cloud, title: "Cloud-Native by Default", desc: "Reliable infrastructure with security, observability, and cost-efficiency baked in." },
    { icon: HandHeart, title: "Partnership Mindset", desc: "We don't deliver projects — we walk alongside you through the entire journey." },
];

const work = [
    { name: "Sankalp ERP", tag: "Web · SaaS", desc: "Modern ERP suite for mid-market manufacturers." },
    { name: "Yatra Mobile", tag: "iOS · Android", desc: "Pilgrimage planner with offline maps and bookings." },
    { name: "Pragati Studio", tag: "UI/UX · Branding", desc: "Design system for a fast-growing fintech." },
];

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden lotus-bg">
                <DecorativeLotus />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36 text-center">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-saffron mb-6 fade-up">
                        <Sparkles size={14} /> Aksharcore Technologies
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-maroon leading-[1.05] text-balance fade-up">
                        Where Sacred Values <br className="hidden md:block" />
                        Meet <span className="text-saffron italic">Modern Technology</span>
                    </h1>
                    <LotusDivider />
                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-brown leading-relaxed text-balance fade-up">
                        Aksharcore Technologies builds software rooted in purpose, precision, and principle.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 fade-up">
                        <Link to="/services" className="btn-primary">
                            Explore Our Services <ArrowRight size={16} />
                        </Link>
                        <Link to="/contact" className="btn-secondary">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((h) => (
                        <article key={h.title} className="card-warm p-8 text-center">
                            <div className="mx-auto w-14 h-14 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-5">
                                <h.icon size={26} />
                            </div>
                            <h3 className="text-xl font-display mb-2">{h.title}</h3>
                            <p className="text-sm text-brown leading-relaxed">{h.desc}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* MARQUEE */}
            <section className="bg-saffron text-white py-5 overflow-hidden border-y border-gold">
                <div className="marquee">
                    {[0, 1].map((k) => (
                        <div className="marquee-track font-display text-xl md:text-2xl whitespace-nowrap" key={k}>
                            {["Software Development", "Web Solutions", "Mobile Apps", "UI/UX Design", "Cloud Services", "IT Consulting"].map((t) => (
                                <span key={t} className="flex items-center gap-12">
                                    {t}
                                    <span className="text-gold-pale">·</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <SectionHeader eyebrow="Why choose us" title="Crafted with care. Engineered to last." subtitle="A small, principled team that treats your product like our own dharma." />
                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((f) => (
                        <article key={f.title} className="card-warm p-8 flex gap-5">
                            <div className="shrink-0 w-12 h-12 rounded-lg bg-gold-pale/20 text-saffron flex items-center justify-center">
                                <f.icon size={22} />
                            </div>
                            <div>
                                <h3 className="text-lg font-display mb-1.5">{f.title}</h3>
                                <p className="text-sm text-brown leading-relaxed">{f.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* OUR WORK */}
            <section className="bg-cream-card border-y border-divider-gold/20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                    <SectionHeader eyebrow="Our work speaks" title="Built with purpose" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {work.map((p) => (
                            <article key={p.name} className="card-warm bg-cream-inner overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-saffron/20 via-gold-pale/30 to-gold/20 relative flex items-center justify-center">
                                    <Layers size={48} className="text-saffron/60" />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{p.tag}</p>
                                    <h3 className="text-xl font-display mb-2">{p.name}</h3>
                                    <p className="text-sm text-brown mb-4">{p.desc}</p>
                                    <Link to="/portfolio" className="text-saffron font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                                        View Project <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUSTED BY */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brown mb-8">Trusted by teams across India</p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
                    {["Sankalp Group", "Yatra Co.", "Pragati Labs", "Vidya Foundation", "Sevā Health", "Dharma Studios"].map((b) => (
                        <span key={b} className="font-display text-xl text-brown/70">{b}</span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.355_0.106_45)] text-cream p-12 md:p-16 text-center shadow-warm-lg">
                    <DecorativeLotus subtle />
                    <h2 className="relative text-3xl md:text-5xl font-display text-gold-pale text-balance">
                        Let's Build Something Meaningful Together
                    </h2>
                    <p className="relative mt-4 text-cream/80 max-w-xl mx-auto">
                        Tell us about your vision. We'll bring craft, care, and clarity.
                    </p>
                    <div className="relative mt-8">
                        <Link to="/contact" className="btn-primary">
                            Start a Conversation <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}


function DecorativeLotus({ subtle = false }: { subtle?: boolean }) {
    return (
        <svg
            className={`pointer-events-none absolute ${subtle ? "right-0 -bottom-24 w-96 opacity-10" : "left-1/2 -translate-x-1/2 top-0 w-[700px] opacity-[0.07]"}`}
            viewBox="0 0 200 200"
            aria-hidden
        >
            {Array.from({ length: 12 }).map((_, i) => (
                <ellipse key={i} cx="100" cy="50" rx="10" ry="40" fill="#E8901A" transform={`rotate(${i * 30} 100 100)`} />
            ))}
        </svg>
    );
}
