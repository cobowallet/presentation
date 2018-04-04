import React from 'react';

const SvgComponent = props => (
  <svg
    viewBox="0 0 262 647"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>手机</title>
    <defs>
      <linearGradient x1="81.728%" y1="91.725%" x2="7.845%" y2="6.07%" id="b1">
        <stop stopColor="#C900F2" offset="0%" />
        <stop stopColor="#0600FF" offset="100%" />
      </linearGradient>
      <linearGradient x1="100%" y1="100%" x2="6.669%" y2="6.669%" id="c1">
        <stop stopColor="#E462FF" offset="2.248%" />
        <stop stopColor="#3CDBF8" offset="100%" />
      </linearGradient>
      <path
        d="M20 2.393l208 87.733c11.046 4.659 20 17.447 20 28.563v500.168c0 11.117-8.954 16.351-20 11.692L20 542.817c-11.046-4.66-20-17.447-20-28.564V14.085C0 2.969 8.954-2.265 20 2.393z"
        id="a"
      />
      <path
        d="M111.5 551.7c9.113 4.047 16.5-.06 16.5-9.172 0-9.113-7.387-19.781-16.5-23.828-9.113-4.047-16.5.06-16.5 9.172 0 9.113 7.387 19.78 16.5 23.828z"
        id="e"
      />
    </defs>
    <g transform="translate(7 7)" fill="none" fillRule="evenodd">
      <mask id="d1" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="url(#b1)" xlinkHref="#a" />
      <path
        stroke="url(#c1)"
        strokeWidth={7}
        d="M21.36-.832l208 87.733c12.312 5.193 22.14 19.229 22.14 31.788v500.168c0 13.73-11.599 20.51-24.86 14.917l-208-87.732C6.328 540.849-3.5 526.812-3.5 514.253V14.085C-3.5.355 8.099-6.425 21.36-.832z"
      />
      <g mask="url(#d1)">
        <use fillOpacity={0.497} fill="#FFF" xlinkHref="#e" />
        <path
          strokeOpacity={0.298}
          stroke="#FFF"
          strokeWidth={3}
          d="M112.109 550.329c8.168 3.628 14.391.168 14.391-7.801 0-8.502-7.023-18.644-15.609-22.457-8.168-3.628-14.391-.168-14.391 7.801 0 8.502 7.023 18.644 15.609 22.457z"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
