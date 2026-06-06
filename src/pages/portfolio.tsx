
import { ExternalLink, Layers } from "lucide-react";
import { useState } from "react";
import { FaGithub as Github } from "react-icons/fa6";
type Category = "All" | "Web" | "Mobile" | "Design";

const projects: { name: string; cat: Exclude<Category, "All">; tech: string[]; desc: string }[] = [
    { name: "Sankalp ERP", cat: "Web", tech: ["React", "Node", "Postgres"], desc: "Modern ERP suite for mid-market manufacturers." },
    { name: "Yatra Mobile", cat: "Mobile", tech: ["React Native", "Maps"], desc: "Pilgrimage planner with offline maps and bookings." },
    { name: "Pragati Studio", cat: "Design", tech: ["Figma", "Tokens"], desc: "Design system for a fast-growing fintech." },
    { name: "Vidya LMS", cat: "Web", tech: ["Next.js", "Supabase"], desc: "Learning management for regional language education." },
    { name: "Seva Care", cat: "Mobile", tech: ["Flutter", "Firebase"], desc: "Companion app for community healthcare workers." },
    { name: "Dharma Brand", cat: "Design", tech: ["Identity", "Web"], desc: "Brand and site for a values-led consultancy." },
];


const filters: Category[] = ["All", "Web", "Mobile", "Design"];


export default function Portfolio() {

    const [filter, setFilter] = useState<Category>("All");
    const list = filter === "All" ? projects : projects.filter((p) => p.cat === filter);


    return (
        <>
            <section className="lotus-bg py-20 md:py-28 text-center">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-display text-maroon text-balance">Selected Work</h1>
                    <div className="mx-auto mt-5 w-24 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full" />
                    <p className="mt-6 text-lg text-brown leading-relaxed text-balance">
                        A small portfolio. Every project built with intention.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${filter === f
                                ? "bg-saffron text-white border-saffron shadow-warm"
                                : "bg-cream-inner text-brown border-divider-gold/40 hover:border-saffron hover:text-saffron"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {list.map((p) => (
                        <article key={p.name} className="card-warm overflow-hidden bg-cream-inner">
                            <div className="h-48 bg-gradient-to-br from-saffron/20 via-gold-pale/30 to-gold/20 flex items-center justify-center">
                                <Layers size={48} className="text-saffron/60" />
                            </div>
                            <div className="p-6">
                                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{p.cat}</p>
                                <h3 className="text-xl font-display mb-2">{p.name}</h3>
                                <p className="text-sm text-brown mb-4">{p.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tech.map((t) => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gold-pale/20 text-maroon">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3 text-sm">
                                    <a href="#" className="inline-flex items-center gap-1 text-saffron font-semibold hover:text-gold">
                                        <ExternalLink size={14} /> Live
                                    </a>
                                    <a href="#" className="inline-flex items-center gap-1 text-brown font-semibold hover:text-saffron">
                                        <Github size={14} /> Code
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
