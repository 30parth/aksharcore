export default function LotusDivider() {
  return (
    <div className="lotus-divider" aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c2 3 2 5 0 8-2-3-2-5 0-8z" fill="currentColor" opacity="0.7" />
        <path d="M12 3c-2 3-2 5 0 8" />
        <circle cx="12" cy="18" r="1.5" fill="#CC2020" />
        <path d="M9 18q3-3 6 0" stroke="#D4892A" />
      </svg>
    </div>
  );
}
