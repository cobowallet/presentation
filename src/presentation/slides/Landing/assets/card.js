import React from 'react';

const SvgComponent = props => (
  <svg
    viewBox="0 0 320 348"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>银行卡</title>
    <defs>
      <linearGradient
        x1="13.186%"
        y1="34.679%"
        x2="38.763%"
        y2="85.531%"
        id="b7"
      >
        <stop stopColor="#2091D2" offset="0%" />
        <stop stopColor="#48FDD6" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="14.275%"
        y1="35.222%"
        x2="79.63%"
        y2="71.476%"
        id="d7"
      >
        <stop stopColor="#65FFD6" offset="0%" />
        <stop stopColor="#40E8D5" offset="97.266%" />
      </linearGradient>
      <path
        d="M10 108.464L240 1.04c5.523-2.58 10-.194 10 5.329v154c0 5.523-4.477 12.091-10 14.67L10 282.465c-5.523 2.58-10 .193-10-5.33v-154c0-5.522 4.477-12.09 10-14.67z"
        id="c7"
      />
      <filter
        x="-16.7%"
        y="-14.7%"
        width="133.4%"
        height="129.4%"
        filterUnits="objectBoundingBox"
        id="a7"
      >
        <feGaussianBlur stdDeviation={13.912} in="SourceGraphic" />
      </filter>
      <path
        d="M10 108.464L240 1.04c5.523-2.58 10-.194 10 5.329v154c0 5.523-4.477 12.091-10 14.67L10 282.465c-5.523 2.58-10 .193-10-5.33v-154c0-5.522 4.477-12.09 10-14.67z"
        id="e7"
      />
      <linearGradient x1="10.598%" y1="41.9%" x2="50%" y2="89.629%" id="f7">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0.468} offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(35 33)" fill="none" fillRule="evenodd">
      <g opacity={0.505} filter="url(#a7)">
        <use fill="url(#b7)" xlinkHref="#c7" />
        <path
          stroke="url(#d7)"
          strokeWidth={2}
          d="M10.423 109.37C5.242 111.79 1 118.013 1 123.135v154c0 4.747 3.682 6.71 8.577 4.423l230-107.424c5.181-2.42 9.423-8.643 9.423-13.765v-154c0-4.747-3.682-6.71-8.577-4.423l-230 107.424z"
        />
      </g>
      <mask id="g7" fill="#fff">
        <use xlinkHref="#e7" />
      </mask>
      <use fill="url(#b7)" xlinkHref="#e7" />
      <path
        stroke="url(#d7)"
        strokeWidth={2}
        d="M10.423 109.37C5.242 111.79 1 118.013 1 123.135v154c0 4.747 3.682 6.71 8.577 4.423l230-107.424c5.181-2.42 9.423-8.643 9.423-13.765v-154c0-4.747-3.682-6.71-8.577-4.423l-230 107.424z"
      />
      <path
        fill="url(#f7)"
        opacity={0.5}
        mask="url(#g7)"
        d="M-8 156L257 27v38L-8 194z"
      />
      <path
        d="M25.639 228.166l49-24.946A3 3 0 0 1 79 205.894v11.267a3 3 0 0 1-1.639 2.673l-49 24.946A3 3 0 0 1 24 242.106V230.84a3 3 0 0 1 1.639-2.673z"
        fill="#FFF"
        opacity={0.5}
        mask="url(#g7)"
      />
    </g>
  </svg>
);

export default SvgComponent;
