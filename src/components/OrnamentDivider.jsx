/**
 * OrnamentDivider — Reusable gold ornamental line divider
 * Used between sections for elegant separation
 */
const OrnamentDivider = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-4 py-3 ${className}`}>
    <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z"
        fill="#C9A84C"
        opacity="0.5"
      />
    </svg>
    <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
  </div>
);

export default OrnamentDivider;
