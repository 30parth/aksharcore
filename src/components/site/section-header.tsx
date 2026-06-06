import LotusDivider from "./lotus-divider";

export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    center = true,
}: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    center?: boolean;
}) {
    return (
        <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
            {eyebrow && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-saffron mb-3">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-maroon text-balance">
                {title}
            </h2>
            {center && <LotusDivider />}
            {subtitle && (
                <p className="text-base md:text-lg text-brown leading-relaxed text-balance">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
