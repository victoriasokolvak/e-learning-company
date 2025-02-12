export const Design = ({ borderColor }: { borderColor: string }) => {
  return (
    <svg
      width="59"
      height="46"
      viewBox="0 0 59 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-inside-1_0_1"
        fill={borderColor}
      >
        <rect
          x="16.6165"
          y="0.0908203"
          width="41.4052"
          height="26.9638"
          rx="0.728751"
          stroke={borderColor}
        />
      </mask>
      <rect
        x="16.6165"
        y="0.0908203"
        width="41.4052"
        height="26.9638"
        rx="0.728751"
        stroke={borderColor}
        strokeWidth="4.37251"
        mask="url(#path-1-inside-1_0_1)"
      />
      <path
        d="M13.6589 10.293H10.321C9.91856 10.293 9.59229 10.6192 9.59229 11.0217V35.4349C9.59229 35.8374 9.91856 36.1636 10.321 36.1636H49.5293C49.9318 36.1636 50.2581 35.8374 50.2581 35.4349V30.3336"
        stroke={borderColor}
        strokeWidth="2.18625"
      />
      <path
        d="M5.89544 19.0381H2.55761C2.15513 19.0381 1.82886 19.3644 1.82886 19.7668V44.18C1.82886 44.5825 2.15513 44.9087 2.55761 44.9087H41.7659C42.1684 44.9087 42.4946 44.5825 42.4946 44.18V39.0787"
        stroke={borderColor}
        strokeWidth="2.18625"
      />
    </svg>
  );
};
