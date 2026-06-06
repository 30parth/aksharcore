import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

console.log(Icons);
import { Mail, Phone, MapPin } from "lucide-react";
import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaXTwitter
} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative mt-24 bg-[oklch(0.245_0.09_40)] text-cream border-t-2 border-divider-gold">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-cream-inner rounded-lg p-2">
                            <img src="/assets/aksharcore_favicon.svg" alt="" className="h-10 w-10" />
                        </div>
                        <div>
                            <div className="font-display text-xl text-cream">Aksharcore</div>
                            <div className="text-xs text-gold-pale tracking-widest uppercase">Technologies</div>
                        </div>
                    </div>
                    <p className="text-sm text-cream/70 max-w-xs leading-relaxed">
                        Rooted in values, driven by innovation.
                    </p>
                </div>

                <div>
                    <h4 className="font-display text-lg text-gold-pale mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-cream/80">
                        <li><Link to="/" className="hover:text-saffron transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-saffron transition">About</Link></li>
                        <li><Link to="/services" className="hover:text-saffron transition">Services</Link></li>
                        {/* <li><Link to="/portfolio" className="hover:text-saffron transition">Portfolio</Link></li> */}
                        <li><Link to="/contact" className="hover:text-saffron transition">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display text-lg text-gold-pale mb-4">Get in Touch</h4>
                    <ul className="space-y-3 text-sm text-cream/80">
                        <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-saffron" /> Ahmedabad, Gujarat, India</li>
                        <li className="flex items-center gap-2"><Mail size={16} className="text-saffron" /> hello@aksharcore.live</li>
                        <li className="flex items-center gap-2"><Phone size={16} className="text-saffron" /> +91 00000 00000</li>
                    </ul>
                    <div className="flex gap-3 mt-5">
                        {[FaLinkedin, FaInstagram, FaGithub, FaXTwitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-2 rounded-full border border-gold-pale/30 hover:border-saffron hover:bg-saffron/10 transition"
                                aria-label="social link"
                            >
                                <Icon size={16} className="text-gold-pale" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-cream/10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 text-xs text-cream/60 flex flex-col md:flex-row items-center justify-between gap-2">
                    <p>© 2026 Aksharcore Technologies · aksharcore.live</p>
                    <p>Ahmedabad, Gujarat, India</p>
                </div>
            </div>
        </footer>
    )
}
