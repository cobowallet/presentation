import React from 'react';

const SvgComponent = props => (
  <svg
    width="240px"
    height="240px"
    viewBox="0 0 64 64"
    style={{ boxSizing: 'border-box', padding: '70px' }}
    id="svg-icon"
  >
    <g strokeWidth="1" stroke="#fff" className="lines">
      <path
        d="M37.764 16H24.197a6 6 0 1 0 0 6h13.567C36.326 31.068 28.473 38 19 38 8.507 38 0 29.493 0 19S8.507 0 19 0c9.473 0 17.326 6.932 18.764 16z"
        id="path-c"
        fillOpacity="0"
        opacity="1"
      />
      <path
        d="M25 44V22h13v3.967A18.98 18.98 0 0 1 44 25c10.493 0 19 8.507 19 19s-8.507 19-19 19-19-8.507-19-19zm19 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        id="path-b"
        fillOpacity="0"
      />
      <path
        d="M19 63C8.507 63 0 54.493 0 44s8.507-19 19-19 19 8.507 19 19-8.507 19-19 19zm0-13a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        opacity="0.4"
        id="path-o1"
        fillOpacity="0"
      />
      <path
        d="M44 38c-10.493 0-19-8.507-19-19S33.507 0 44 0s19 8.507 19 19-8.507 19-19 19zm0-13a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        opacity="0.4"
        id="path-o2"
        fillOpacity="0"
      />
    </g>
  </svg>
);

export default SvgComponent;
