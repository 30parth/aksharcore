import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub as Github, FaInstagram as Instagram, FaTwitter as Twitter, FaLinkedin as Linkedin } from "react-icons/fa6";
import LotusDivider from "../components/site/lotus-divider";

export default function Contact() {
    const [sent, setSent] = useState(false);
    return (
        <>
            <section className="lotus-bg py-20 md:py-24 text-center">
                <div className="mx-auto max-w-3xl px-6">
                    <h1 className="text-4xl md:text-6xl font-display text-maroon text-balance">Let's Talk</h1>
                    <LotusDivider />
                    <p className="text-lg text-brown leading-relaxed text-balance">
                        Whether it's a question, a project, or a quiet hello — we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 grid lg:grid-cols-2 gap-10">
                {/* FORM */}
                <div className="card-warm p-8 md:p-10">
                    <h2 className="text-2xl font-display mb-1">Send us a message</h2>
                    <p className="text-sm text-brown mb-6">We typically reply within one business day.</p>

                    {sent ? (
                        <div className="rounded-lg bg-saffron/10 border border-saffron/30 p-6 text-center">
                            <p className="font-display text-xl text-maroon">Thank you 🙏</p>
                            <p className="text-sm text-brown mt-1">Your message has reached us. We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                            className="space-y-4"
                        >
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field label="Name" name="name" />
                                <Field label="Email" name="email" type="email" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field label="Phone" name="phone" type="tel" required={false} />
                                <Field label="Subject" name="subject" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-widest text-brown mb-1.5">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full rounded-lg border border-divider-gold/40 bg-cream-inner px-4 py-3 text-sm text-maroon focus:outline-none focus:ring-2 focus:ring-saffron focus:border-saffron transition"
                                />
                            </div>
                            <button type="submit" className="btn-primary w-full sm:w-auto">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    )}
                </div>

                {/* DETAILS */}
                <div className="space-y-6">
                    <div className="card-warm p-8">
                        <h2 className="text-2xl font-display mb-5">Reach us directly</h2>
                        <ul className="space-y-4 text-sm text-maroon">
                            <InfoRow icon={MapPin} label="Studio" value="Ahmedabad, Gujarat, India" />
                            <InfoRow icon={Mail} label="Email" value="hello@aksharcore.live" />
                            <InfoRow icon={Phone} label="Phone" value="+91 00000 00000" />
                            <InfoRow icon={Globe} label="Website" value="aksharcore.live" />
                        </ul>
                        <div className="mt-6 pt-6 border-t border-divider-gold/30">
                            <p className="text-xs uppercase tracking-widest text-brown mb-3">Find us elsewhere</p>
                            <div className="flex gap-3">
                                {[Linkedin, Instagram, Github, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="p-2.5 rounded-full border border-divider-gold/40 text-saffron hover:bg-saffron hover:text-white hover:border-saffron transition">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card-warm overflow-hidden">
                        <iframe
                            title="Ahmedabad"
                            src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                            className="w-full h-72 border-0"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
    return (
        <div>
            <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-widest text-brown mb-1.5">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                className="w-full rounded-lg border border-divider-gold/40 bg-cream-inner px-4 py-3 text-sm text-maroon focus:outline-none focus:ring-2 focus:ring-saffron focus:border-saffron transition"
            />
        </div>
    );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <li className="flex items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-lg bg-saffron/10 text-saffron flex items-center justify-center">
                <Icon size={16} />
            </span>
            <div>
                <p className="text-xs uppercase tracking-widest text-brown">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </li>
    );
}
