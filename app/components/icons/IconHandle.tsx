function IconHandle({ className }: { className?: string }) {
  return (
    <svg
      className={className || ''}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24.000000pt"
      height="24.000000pt"
      viewBox="0 0 24.000000 24.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g
        transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
        fill="#D1D5D8"
        stroke="none"
      >
        <path
          d="M61 216 c-69 -38 -67 -162 4 -194 49 -23 94 -15 131 22 37 37 45 82
22 131 -22 50 -104 71 -157 41z m113 -27 c46 -36 34 -46 -54 -46 -59 0 -80 3
-80 13 0 20 50 54 80 54 15 0 39 -9 54 -21z m-44 -69 c0 -5 -4 -10 -10 -10 -5
0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-25 -30 c9 -14 -4 -50 -17
-50 -16 0 -48 31 -48 47 0 15 56 18 65 3z m95 -2 c0 -16 -30 -48 -46 -48 -15
0 -28 35 -19 50 9 14 65 13 65 -2z"
        />
      </g>
    </svg>
  );
}

export default IconHandle;
