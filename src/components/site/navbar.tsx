import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { to: "/" as const, label: "Home" },
    { to: "/about" as const, label: "About" },
    { to: "/services" as const, label: "Services" },
    { to: "/portfolio" as const, label: "Portfolio" },
    { to: "/contact" as const, label: "Contact" },
];

export default function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-cream-inner/95 backdrop-blur-md border-b border-divider-gold/30 shadow-warm"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <img
                        src="/assets/aksharcore_main_logo.svg"
                        alt="Aksharcore Technologies"
                        className="h-14 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {links.map((l) => {
                        const isActive = location.pathname === l.to;
                        return (
                            <Link
                                key={l.to}
                                to={l.to}
                                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 group ${
                                    isActive ? "text-saffron" : "text-maroon hover:text-saffron"
                                }`}
                            >
                                {l.label}
                                <span
                                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-saffron transition-all duration-300 origin-center ${
                                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                    <Link to="/contact" className="btn-primary ml-4 px-5 py-2.5 text-sm">
                        Get in touch
                    </Link>
                </nav>

                <button
                    className="md:hidden p-2 text-maroon"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-divider-gold/30 bg-cream-inner animate-in slide-in-from-top-2">
                    <nav className="px-6 py-4 flex flex-col gap-2">
                        {links.map((l) => {
                            const isActive = location.pathname === l.to;
                            return (
                                <Link
                                    key={l.to}
                                    to={l.to}
                                    onClick={() => setOpen(false)}
                                    className={`relative py-2 pl-3 text-base font-medium transition-colors duration-200 border-l-2 ${
                                        isActive
                                            ? "text-saffron border-saffron bg-saffron/5"
                                            : "text-maroon border-transparent hover:text-saffron hover:border-saffron/50"
                                    }`}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
