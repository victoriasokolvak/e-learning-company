export const Phone = ({ borderColor }: { borderColor: string }) => {
  return (
    <svg
      width="39"
      height="57"
      viewBox="0 0 39 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.27411"
        y="1.77386"
        width="35.6792"
        height="53.1547"
        rx="6.18925"
        stroke={borderColor}
        strokeWidth="2.18444"
      />
      <line
        x1="13.6525"
        y1="6.14313"
        x2="24.5747"
        y2="6.14313"
        stroke={borderColor}
        strokeWidth="2.18444"
        strokeLinecap="round"
      />
      <line
        x1="0.910156"
        y1="10.5113"
        x2="38.0456"
        y2="10.5113"
        stroke={borderColor}
        strokeWidth="2.18444"
      />
      <line
        x1="0.182129"
        y1="44.7349"
        x2="37.3176"
        y2="44.7349"
        stroke={borderColor}
        strokeWidth="2.18444"
      />
      <circle
        cx="19.114"
        cy="50.1958"
        r="2.91259"
        fill={borderColor}
      />
    </svg>
  );
};
