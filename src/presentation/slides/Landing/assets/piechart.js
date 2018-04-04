import React from 'react';

const SvgComponent = props => (
  <svg
    viewBox="0 0 252 267"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient x1="92.048%" y1="91.739%" x2="0%" y2="0%" id="a2">
        <stop stopColor="#1EADFF" offset="0%" />
        <stop stopColor="#5DFFDC" offset="100%" />
      </linearGradient>
      <filter
        x="-23.1%"
        y="-21.2%"
        width="146.2%"
        height="142.4%"
        filterUnits="objectBoundingBox"
        id="b2"
      >
        <feGaussianBlur stdDeviation={13.996} in="SourceGraphic" />
      </filter>
      <path
        d="M87 6.666v86.68a4 4 0 0 0 4.6 3.955c28.798-4.372 54.44-8.177 76.926-11.415 8.295 17.308 13.07 35.454 13.07 52.639 0 50.146-40.652 73.118-90.798 51.31C40.65 168.027 0 109.696 0 59.55 0 10.676 38.615-12.385 87 6.666z"
        id="c2"
      />
      <linearGradient x1="1.938%" y1="2.7%" x2="48.486%" y2="96.934%" id="e2">
        <stop stopColor="#FFF" stopOpacity={0.712} offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0.947} offset="100%" />
      </linearGradient>
      <path
        d="M0 .666c1.26.496 2.525 1.02 3.798 1.574 32.96 14.335 61.82 44.448 77.728 77.646-22.785 3.281-48.81 7.144-78.076 11.59A3 3 0 0 1 0 88.51V.666z"
        id="d2"
      />
    </defs>
    <g fill="none" fillRule="evenodd" className="hover-translate">
      <g transform="translate(35 35)" fill="url(#a2)">
        <path
          d="M87 6.666v86.68a4 4 0 0 0 4.6 3.955c28.798-4.372 54.44-8.177 76.926-11.415 8.295 17.308 13.07 35.454 13.07 52.639 0 50.146-40.652 73.118-90.798 51.31C40.65 168.027 0 109.696 0 59.55 0 10.676 38.615-12.385 87 6.666z"
          opacity={0.703}
          filter="url(#b2)"
        />
        <use xlinkHref="#c2" />
      </g>
      <use fill="url(#e2)" xlinkHref="#d2" transform="translate(131 34)" />
    </g>
  </svg>
);

export default SvgComponent;
