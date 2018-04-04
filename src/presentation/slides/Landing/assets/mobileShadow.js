import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 246 487" {...props} opacity="0">
    <defs>
      <filter
        x="-6.1%"
        y="-8.8%"
        width="112.2%"
        height="117.6%"
        filterUnits="objectBoundingBox"
        id="a5"
      >
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
      <filter
        x="-6.1%"
        y="-8.8%"
        width="112.2%"
        height="117.6%"
        filterUnits="objectBoundingBox"
        id="b5"
      >
        <feGaussianBlur stdDeviation={5} in="SourceGraphic" />
      </filter>
      <path
        d="M87 6.666v86.68a4 4 0 0 0 4.6 3.955c28.798-4.372 54.44-8.177 76.926-11.415 8.295 17.308 13.07 35.454 13.07 52.639 0 50.146-40.652 73.118-90.798 51.31C40.65 168.027 0 109.696 0 59.55 0 10.676 38.615-12.385 87 6.666z"
        id="c5"
      />
      <filter
        x="-11%"
        y="-10.1%"
        width="122%"
        height="120.2%"
        filterUnits="objectBoundingBox"
        id="d5"
      >
        <feGaussianBlur in="SourceGraphic" />
      </filter>
      <filter
        x="-16.5%"
        y="-15.1%"
        width="133%"
        height="130.3%"
        filterUnits="objectBoundingBox"
        id="e5"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={10}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.176470588 0 0 0 0 0.0980392157 0 0 0 0 0.674509804 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M94 .666c1.26.496 2.525 1.02 3.798 1.574 32.96 14.335 61.82 44.448 77.728 77.646-22.785 3.281-48.81 7.144-78.076 11.59A3 3 0 0 1 94 88.51V.666z"
        id="f5"
      />
      <filter
        x="-24.5%"
        y="-22%"
        width="149.1%"
        height="144%"
        filterUnits="objectBoundingBox"
        id="g5"
      >
        <feGaussianBlur in="SourceGraphic" />
      </filter>
      <filter
        x="-36.8%"
        y="-33%"
        width="173.6%"
        height="166%"
        filterUnits="objectBoundingBox"
        id="h5"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={10}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.176470588 0 0 0 0 0.0980392157 0 0 0 0 0.674509804 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M-7 353.61l234 101.765c3.314 1.441 6 5.296 6 8.61v56c0 3.313-2.686 4.831-6 3.39L-7 421.609c-3.314-1.44-6-5.295-6-8.609v-56c0-3.314 2.686-4.832 6-3.39z"
        fill="#3719AC"
        opacity={0.3}
        filter="url(#a5)"
        transform="translate(0 -49)"
      />
      <path
        d="M-7 246.61l234 101.765c3.314 1.441 6 5.296 6 8.61v56c0 3.313-2.686 4.831-6 3.39L-7 314.609c-3.314-1.44-6-5.295-6-8.609v-56c0-3.314 2.686-4.832 6-3.39z"
        fill="#3719AC"
        opacity={0.3}
        filter="url(#b5)"
        transform="translate(0 -49)"
      />
      <g fill="#000">
        <g filter="url(#d5)">
          <use
            filter="url(#e5)"
            xlinkHref="#c5"
            opacity={0.5}
            transform="translate(22 20)"
          />
        </g>
        <g filter="url(#g5)">
          <use
            filter="url(#h5)"
            xlinkHref="#f5"
            opacity={0.5}
            transform="translate(22 20)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgComponent;
