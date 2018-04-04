import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 296 219" {...props}>
    <title>交易记录2</title>
    <defs>
      <filter
        x="-12.5%"
        y="-18%"
        width="125%"
        height="136%"
        filterUnits="objectBoundingBox"
        id="a4"
      >
        <feGaussianBlur stdDeviation={10.246} in="SourceGraphic" />
      </filter>
      <linearGradient x1="0%" y1="0%" x2="82.179%" y2="96.151%" id="b4">
        <stop stopColor="#FFF" stopOpacity={0.718} offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0.898} offset="100%" />
      </linearGradient>
      <linearGradient x1="18.945%" y1="0%" x2="73.77%" y2="100%" id="c4">
        <stop stopColor="#FF71B8" offset="0%" />
        <stop stopColor="#F10049" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd" className="hover-translate">
      <path
        d="M6 .61l234 101.765c3.314 1.441 6 5.296 6 8.61v56c0 3.313-2.686 4.831-6 3.39L6 68.609C2.686 67.17 0 63.314 0 60V4C0 .686 2.686-.832 6 .61z"
        fill="#FFF"
        opacity={0.6}
        filter="url(#a4)"
        transform="translate(25 24)"
      />
      <path
        d="M6 .61l234 101.765c3.314 1.441 6 5.296 6 8.61v56c0 3.313-2.686 4.831-6 3.39L6 68.609C2.686 67.17 0 63.314 0 60V4C0 .686 2.686-.832 6 .61z"
        fill="url(#b4)"
        transform="translate(25 24)"
      />
      <path
        d="M34 66.786c11.046 4.804 20-.256 20-11.302 0-11.045-8.954-23.894-20-28.698-11.046-4.803-20 .257-20 11.303 0 11.045 8.954 23.894 20 28.697z"
        fill="url(#c4)"
        transform="translate(25 24)"
      />
      <path
        d="M95 70.443l85 36.966c1.105.48 2 1.765 2 2.87v6c0 1.104-.895 1.61-2 1.13L95 80.443c-1.105-.48-2-1.766-2-2.87v-6c0-1.105.895-1.61 2-1.13zM95 92.443l135 58.71c1.105.481 2 1.766 2 2.87v6c0 1.105-.895 1.611-2 1.13l-135-58.71c-1.105-.48-2-1.766-2-2.87v-6c0-1.105.895-1.61 2-1.13z"
        fill="#C093FF"
      />
    </g>
  </svg>
);

export default SvgComponent;
