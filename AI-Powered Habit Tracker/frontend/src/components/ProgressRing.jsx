export default function ProgressRing({ value = 0, size = 52 }) {
  const clampedValue = Math.max(0, Math.min(100, Number(value) || 0));
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <svg
      className="block -rotate-90"
      width={size}
      height={size}
      viewBox="0 0 52 52"
      role="img"
      aria-label={`${clampedValue}% complete`}
    >
      <circle cx="26" cy="26" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="5" />
      <circle
        cx="26"
        cy="26"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="text-brand-500 transition-all"
      />
    </svg>
  );
}
